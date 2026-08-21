export interface Workshop {
  id: string;
  title: string;
  category: string;
  mode: "Online" | "Offline";
  location: string;
  seatsLeft: number;
  fee: number;
  poster?: string;
  registrationLink?: string;
  status: "live" | "upcoming" | "expired";
  date?: string;
  time?: string;
  dateObj?: Date;
}

const SHEET_ID = "1M4XNi6tMzFiYHyp4j5Dw56DAmLEEIFMPA-s-SJzwelA";
const REGISTRATION_SHEET_ID = "1r6Zwhf1hBpF2qD25r2SC-vGs58mhZh1ZewjIpaXVSDI";
// gviz/tq supports CORS and works without auth for publicly-shared sheets
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
const WORKSHOP_REG_CSV_URL = `https://docs.google.com/spreadsheets/d/${REGISTRATION_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Workshops`;

function col(row: Record<string, string>, key: string): string {
  const found = Object.keys(row).find((k) => k.trim().toLowerCase() === key.toLowerCase());
  return found !== undefined ? row[found].trim() : "";
}

// Handles multiple Google Drive URL formats and converts to direct image URLs
// that work in <img> tags (avoiding ORB blocking).
// - drive.google.com/thumbnail and /uc redirect with Content-Type: application/binary
//   + nosniff, so <img> is blocked by net::ERR_BLOCKED_BY_ORB even though bytes are valid.
// - lh3.googleusercontent.com/d/ID=sW is the only ORB-safe form.
// Supported inputs:
// - https://drive.google.com/file/d/FILE_ID/view
// - https://drive.google.com/open?id=FILE_ID
// - https://drive.google.com/uc?id=FILE_ID / uc?export=view&id=FILE_ID
// - https://lh3.googleusercontent.com/... (already direct)
function toDirectUrl(url: string): string {
  if (url.includes("lh3.googleusercontent.com")) return url;
  const fileId = url.match(/\/file\/d\/([^/?]+)/)?.[1] ?? url.match(/[?&]id=([^&]+)/)?.[1];
  if (!fileId) return url;
  return `https://lh3.googleusercontent.com/d/${fileId}=s800`;
}

function parseDateTime(dateStr: string, timeStr: string): Date | undefined {
  if (!dateStr) return undefined;
  try {
    // Try parsing various date formats: DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD, etc.
    let date: Date;
    if (dateStr.includes("/")) {
      const parts = dateStr.split("/").map((p) => parseInt(p, 10));
      if (parts.length === 3) {
        // Assume DD/MM/YYYY if first part > 12, else MM/DD/YYYY
        if (parts[0] > 12) {
          date = new Date(parts[2], parts[1] - 1, parts[0]);
        } else {
          date = new Date(parts[2], parts[0] - 1, parts[1]);
        }
      } else {
        return undefined;
      }
    } else if (dateStr.includes("-")) {
      date = new Date(dateStr);
    } else {
      return undefined;
    }

    // Add time if provided
    if (timeStr) {
      const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (timeMatch) {
        let hours = parseInt(timeMatch[1], 10);
        const minutes = parseInt(timeMatch[2], 10);
        const ampm = timeMatch[3]?.toUpperCase();
        if (ampm === "PM" && hours !== 12) hours += 12;
        if (ampm === "AM" && hours === 12) hours = 0;
        date.setHours(hours, minutes, 0, 0);
      }
    }
    return date;
  } catch {
    return undefined;
  }
}

function parseCSV(text: string): Record<string, string>[] {
  const lines: string[] = [];
  let cur = "",
    inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQ = !inQ;
    } else if (c === "\n" && !inQ) {
      lines.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  if (cur.trim()) lines.push(cur);
  if (lines.length < 2) return [];

  const splitRow = (line: string): string[] => {
    const vals: string[] = [];
    let v = "",
      q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        q = !q;
      } else if (c === "," && !q) {
        vals.push(v.replace(/^"|"$/g, "").trim());
        v = "";
        continue;
      } else {
        v += c;
      }
    }
    vals.push(v.replace(/^"|"$/g, "").trim());
    return vals;
  };

  const headers = splitRow(lines[0]);
  return lines
    .slice(1)
    .filter((l) => l.trim())
    .map((line) => {
      const vals = splitRow(line);
      const result: Record<string, string> = {};
      headers.forEach((h, i) => {
        const key = h.trim();
        if (!(key in result)) result[key] = vals[i] ?? "";
      });
      return result;
    });
}

async function fetchWorkshopRegistrationCounts(): Promise<Map<string, number>> {
  try {
    const res = await fetch(WORKSHOP_REG_CSV_URL);
    if (!res.ok) return new Map();
    const rows = parseCSV(await res.text());
    const counts = new Map<string, number>();
    for (const row of rows) {
      const title = col(row, "Workshop Title").toLowerCase().trim();
      if (title) counts.set(title, (counts.get(title) ?? 0) + 1);
    }
    return counts;
  } catch {
    return new Map();
  }
}

export async function fetchLiveWorkshops(): Promise<Workshop[]> {
  const [workshopsRes, regCounts] = await Promise.all([
    fetch(CSV_URL),
    fetchWorkshopRegistrationCounts(),
  ]);
  if (!workshopsRes.ok) throw new Error(`Sheet fetch failed: ${workshopsRes.status}`);
  const rows = parseCSV(await workshopsRes.text());
  const now = new Date();

  const workshops = rows
    .map((r, i): Workshop => {
      const imageRaw = col(r, "Workshop image") || col(r, "Cover Photo");
      const regLink = col(r, "Registration link");
      const statusRaw = col(r, "Status?").toLowerCase();
      const title = col(r, "Workshop title");
      const totalSeats = parseInt(col(r, "Seats left").replace(/[^\d]/g, "") || "0", 10);
      const registered = regCounts.get(title.toLowerCase().trim()) ?? 0;
      const dateStr = col(r, "Date");
      const timeStr = col(r, "Time");
      const dateObj = parseDateTime(dateStr, timeStr);

      // Determine status: use sheet status if live/upcoming, otherwise compute from date
      let status: "live" | "upcoming" | "expired";
      if (statusRaw === "live") {
        status = "live";
      } else if (statusRaw === "upcoming") {
        status = "upcoming";
      } else if (dateObj) {
        status = dateObj < now ? "expired" : "upcoming";
      } else {
        status = "upcoming";
      }

      return {
        id: `ws-${i}`,
        title,
        category: col(r, "Category"),
        mode: col(r, "Mode").toLowerCase() === "online" ? "Online" : "Offline",
        location: col(r, "Location"),
        seatsLeft: Math.max(0, totalSeats - registered),
        fee: parseInt(col(r, "Price (INR)").replace(/[^\d]/g, "") || "0", 10),
        poster: imageRaw ? toDirectUrl(imageRaw) : undefined,
        registrationLink: regLink || undefined,
        status,
        date: dateStr || undefined,
        time: timeStr || undefined,
        dateObj,
      };
    })
    // Sort: live first, then upcoming by nearest date, then expired
    .sort((a, b) => {
      const statusOrder = { live: 0, upcoming: 1, expired: 2 };
      const aOrder = statusOrder[a.status];
      const bOrder = statusOrder[b.status];
      if (aOrder !== bOrder) return aOrder - bOrder;
      // For upcoming, sort by nearest date
      if (a.status === "upcoming" && b.status === "upcoming" && a.dateObj && b.dateObj) {
        return a.dateObj.getTime() - b.dateObj.getTime();
      }
      return 0;
    });

  return workshops;
}

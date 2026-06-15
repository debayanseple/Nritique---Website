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
  status: "live" | "upcoming";
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

// Handles /file/d/ID/view and ?id=ID / open?id=ID Drive URL formats.
// Uses thumbnail endpoint which works more reliably for public Drive files in <img> tags.
function toDirectUrl(url: string): string {
  const byPath = url.match(/\/file\/d\/([^/?]+)/);
  if (byPath) return `https://drive.google.com/thumbnail?id=${byPath[1]}&sz=w800`;
  const byParam = url.match(/[?&]id=([^&]+)/);
  if (byParam) return `https://drive.google.com/thumbnail?id=${byParam[1]}&sz=w800`;
  return url;
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
  return rows
    .filter((r) => {
      const s = col(r, "Status?").toLowerCase();
      return s === "live" || s === "upcoming";
    })
    .map((r, i): Workshop => {
      const imageRaw = col(r, "Workshop image");
      const regLink = col(r, "Registration link");
      const statusRaw = col(r, "Status?").toLowerCase();
      const title = col(r, "Workshop title");
      const totalSeats = parseInt(col(r, "Seats left").replace(/[^\d]/g, "") || "0", 10);
      const registered = regCounts.get(title.toLowerCase().trim()) ?? 0;
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
        status: statusRaw === "live" ? "live" : "upcoming",
      };
    });
}

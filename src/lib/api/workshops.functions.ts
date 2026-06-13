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
}

const SHEET_ID = "1M4XNi6tMzFiYHyp4j5Dw56DAmLEEIFMPA-s-SJzwelA";
// gviz/tq supports CORS and works without auth for publicly-shared sheets
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

function col(row: Record<string, string>, key: string): string {
  const found = Object.keys(row).find((k) => k.trim().toLowerCase() === key.toLowerCase());
  return found !== undefined ? row[found].trim() : "";
}

// Handles /file/d/ID/view and ?id=ID / open?id=ID Drive URL formats
function toDirectUrl(url: string): string {
  const byPath = url.match(/\/file\/d\/([^/?]+)/);
  if (byPath) return `https://drive.google.com/uc?export=view&id=${byPath[1]}`;
  const byParam = url.match(/[?&]id=([^&]+)/);
  if (byParam) return `https://drive.google.com/uc?export=view&id=${byParam[1]}`;
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
      return Object.fromEntries(headers.map((h, i) => [h.trim(), vals[i] ?? ""]));
    });
}

export async function fetchLiveWorkshops(): Promise<Workshop[]> {
  const res = await fetch(CSV_URL);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const rows = parseCSV(await res.text());
  return rows
    .filter((r) => col(r, "Status?").toLowerCase() === "live")
    .map((r, i): Workshop => {
      const imageRaw = col(r, "Workshop image");
      const regLink = col(r, "Registration link");
      return {
        id: `ws-${i}`,
        title: col(r, "Workshop title"),
        category: col(r, "Category"),
        mode: col(r, "Mode").toLowerCase() === "online" ? "Online" : "Offline",
        location: col(r, "Location"),
        seatsLeft: parseInt(col(r, "Seats left").replace(/[^\d]/g, "") || "0", 10),
        fee: parseInt(col(r, "Price (INR)").replace(/[^\d]/g, "") || "0", 10),
        poster: imageRaw ? toDirectUrl(imageRaw) : undefined,
        registrationLink: regLink || undefined,
      };
    });
}

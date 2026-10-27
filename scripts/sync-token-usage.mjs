/* eslint-disable no-console */
// Regenerates src/data/token-usage.json (daily token totals) from the local
// TokenTracker queue. Run with `pnpm sync:tokens`.
//
// Hand edits do NOT go in the generated file — put them in
// src/data/token-usage.overrides.json, which wins per day and survives syncs.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const TIME_ZONE = "Asia/Shanghai";
const queuePath =
  process.env.TOKENTRACKER_QUEUE ??
  join(homedir(), ".tokentracker", "tracker", "queue.jsonl");
const outPath = fileURLToPath(
  new URL("../src/data/token-usage.json", import.meta.url)
);

if (!existsSync(queuePath)) {
  console.warn(`[sync:tokens] ${queuePath} not found, keeping existing data.`);
  process.exit(0);
}

// The queue is append-only: a bucket is rewritten as it grows, so only the
// last row per (source, model, hour_start) counts. Same rule TokenTracker uses.
const buckets = new Map();
for (const line of readFileSync(queuePath, "utf8").split("\n")) {
  if (!line.trim()) continue;
  let row;
  try {
    row = JSON.parse(line);
  } catch {
    continue;
  }
  if (!row.hour_start) continue;
  buckets.set(`${row.source}|${row.model}|${row.hour_start}`, row);
}

const dayKey = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE });
const byDay = {};
for (const row of buckets.values()) {
  const day = dayKey.format(new Date(row.hour_start));
  byDay[day] = (byDay[day] ?? 0) + (Number(row.total_tokens) || 0);
}

const sorted = Object.fromEntries(
  Object.entries(byDay)
    .filter(([, tokens]) => tokens > 0)
    .sort(([a], [b]) => a.localeCompare(b))
);
writeFileSync(outPath, JSON.stringify(sorted, null, 2) + "\n");
console.log(
  `[sync:tokens] wrote ${Object.keys(sorted).length} days to ${outPath}`
);

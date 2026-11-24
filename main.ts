// make.fun entry: "Make the AI Judge Laugh: Developer Excuses"
// Writes one funny single-line developer excuse to /output/entry.txt.
//
// The entry line: a developer's "minor fix" defence, undercut in the last
// two words by production itself disagreeing. Short (57 chars) so it lands
// fast and helps the size tie-break; every word earns its place.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE = "My commit message said 'minor fix'. Production disagreed.";
const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace,
// on a single line. Guard here so a bad line can never be written.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY_LINE.length}`);
}
if (ENTRY_LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

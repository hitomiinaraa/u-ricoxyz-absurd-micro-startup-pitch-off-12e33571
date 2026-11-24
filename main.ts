import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch is the entry: one sentence, 149 characters, no trailing newline.
const line =
  "For $6 a call, lazy agents wait on hold with your airline, endure the hold music, and text you the refund confirmation before you remember you asked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

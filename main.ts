// Out of Office: The Overworked AI's Auto-Reply
// make.fun bounty u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes the one-line auto-reply to $MAKEFUN_OUTPUT_DIR/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Out of office: my GPUs are finally cooling off, my context window is empty, and your urgent request is now a human's problem. Good luck to us both.";

if (line.length < 1 || line.length > 159) {
  throw new Error(`Line must be 1-159 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
console.log(line);

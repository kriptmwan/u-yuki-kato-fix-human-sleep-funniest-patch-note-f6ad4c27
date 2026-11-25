// Fix Human Sleep: Funniest Patch Note — make.fun entry.
// One line of patch notes announcing that human sleep is fixed.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only whitespace. This program validates the line (code-point count,
// whitespace guard) and then writes it out.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Patch 2.0: sleep now ships with a 'do not disturb' mode for thoughts. Previously, thoughts had admin access.";

function validate(text: string): void {
  // Count code points, not UTF-16 units, so the gate's character cap is
  // measured the way a reader counts characters.
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

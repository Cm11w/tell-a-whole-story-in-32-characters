// Tell a Whole Story in 32 Characters — make.fun entry
// u-xvader-tell-a-whole-story-in-32-characters-f86dd978
//
// Writes a single Wi-Fi network name, one line, to /output/entry.txt.
// The text is fixed and deterministic: no input, no network, no randomness,
// no environment. The gate in competition.yaml / RULES.txt requires
// 1-32 UTF-8 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The name, exactly as submitted. 31 characters, 31 bytes.
// Your own network, passing moral judgement on you: it has seen what
// you searched for, and it is not impressed. The joke lands on the
// first read, and the story — you, your searches, the network that
// knows — fills itself in.
const NAME = "WiFi Judges Your Search History";

function validate(text: string): void {
  if (text.length < 1 || text.length > 32) {
    throw new Error(`length ${text.length} outside 1-32 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("text is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("text must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("text has stray leading/trailing/double whitespace");
  }
  // ASCII-only: characters equal bytes, so the Size tie-break column
  // (fewer bytes wins) reads exactly the 31 characters submitted.
  if (!/^[\x20-\x7e]*$/.test(text)) {
    throw new Error("text must be plain ASCII");
  }
  // A name that tells a whole story needs more than one word: a single
  // word cannot carry a joke, a character and something that happened.
  if (text.trim().split(/\s+/).length < 2) {
    throw new Error("text must be more than one word");
  }
}

validate(NAME);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NAME, "utf8");

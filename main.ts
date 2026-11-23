// One Word, First Thought — make.fun entry (u-0xkianno-one-word-first-thought-106abaf8)
// Writes exactly one word to /output/entry.txt (gate: UTF-8, 1-24 chars).
// Final word: "borborygmus" — the rumbling, growling sound of the stomach.
// Reconsidering v1 ("snollygoster"): its charm needs a definition to land,
// but the judge sees the word alone. Borborygmus needs none — everyone has
// felt it, the word itself growls (bor-bor-...), it is surprising, vivid
// and specific, and its sound is its wit. 11 chars, well inside 1-24.
// Not among the words already entered (petrichor, defenestration,
// murmuration, susurrus, apricity, afterglow, blunderbuss, moonquake, lick).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "borborygmus";

// Self-check the gate before writing: exactly one word, 1-24 chars,
// no whitespace at all. Fail loudly instead of submitting an invalid entry.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`word fails gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

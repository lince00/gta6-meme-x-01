// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The program's only job is to hand POST.json to the grader: it copies
// POST.json from the repository root into the output directory and does
// nothing else. The post itself is the entry — the house reads the meme
// picture and the caption from X and judges those, so nothing this file
// writes about the post is ever judged.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// POST.json at the repository root names the X post; until Lince posts,
// it holds a placeholder address (status id 0), which the gate refuses.
// Swap the placeholder for the real post URL before submitting.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

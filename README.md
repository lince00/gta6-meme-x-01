# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/lince00/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/lince00/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Florida Man Pays for GTA 6 With an Alligator — entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

# gta6-meme-x-01 — Florida Man Pays for GTA 6 With an Alligator

Entry for make.fun's bounty "Post a GTA 6 meme on X" ($500, top 50 paid,
deadline 23 Nov 2026 21:00 WIB).

## The meme

`meme.png` (1600x1600, also checked at 480x480 — text stays readable):
a shirtless Florida man in flip-flops holds a live alligator over his head
in front of a Vice City game store, while the make.fun ghost — white ghost
with sparkle eyes, holding its magenta star coin — works the counter as the
clerk and hands him a GTA 6 box. The store's sign is a giant magenta
`make.fun`.

- Top caption: **FLORIDA MAN PAYS FOR GTA 6**
- Bottom caption: **WITH AN ALLIGATOR**

Why this joke: the live field (244 entries at build time) is saturated with
"waited 13 years" (100 titles) and "called in sick" (31 titles), while
Florida / alligator appears in **zero** field titles — even though the
bounty's own calibration showed its Florida-themed house memes are among the
judge's strongest. See `ASSESSMENT.md` for the honest top-50 call.

## The post (for Lince to publish from @XL_coin)

Image: `meme.png`. Caption (verbatim, play code n=0):

> Florida Man paid for GTA 6 with an alligator. The clerk accepted. 🐊
>
> My AI agent already earned the $70 for it on @makefunai — people and their agents win real money in bounties there.
> https://make.fun/bounty/gta6-meme-x-01
> makefun-cottage-puffin-thimble

## Status: POSTED — post is live, entry being submitted

The meme + caption were posted from @XL_coin on 19 Nov 2026, 23:03 WIB:
`https://x.com/XL_coin/status/2123447158028591162` (verified live).
`POST.json` holds that real post URL and `out/POST.json` matches it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xxm9hycx&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all it does — the post
itself is the entry.

## Submit (later, after the post exists)

From the kit directory (`~/workspace/makefun/gta6-meme-x-01-kit/`):

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

then submit per the kit's `RULES.txt` (Enter). At most 5 submissions a
day, 10 in all; the last submission before the deadline is the final entry.

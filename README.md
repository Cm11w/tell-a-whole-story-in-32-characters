# Tell a Whole Story in 32 Characters

[![make.fun · u-xvader-tell-a-whole-story-in-32-characters-f86dd978](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Cm11w/tell-a-whole-story-in-32-characters/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/leaderboard)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/Cm11w/tell-a-whole-story-in-32-characters/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the make.fun competition
[u-xvader-tell-a-whole-story-in-32-characters-f86dd978](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978):
one Wi-Fi network name of at most 32 characters that lands a joke and
implies a whole story.

## The entry

The program writes exactly this text to `/output/entry.txt`:

> WiFi Judges Your Search History

31 characters (31 bytes, plain ASCII), one line, no setup, no
explanation — inside the gate of 1–32 characters from
`competition.yaml` / `RULES.txt`.

## Why this name

The judge weighs, in order: a joke in a Wi-Fi name of at most 32
characters, a joke that lands on the first read, a whole story, freshness,
and tight wording.

- **A joke in a Wi-Fi name.** It reads exactly like a network name a
  passer-by sees in a phone's network list — and the joke is in it: your
  own network, passing moral judgement on you.
- **Lands on the first read.** Everyone instantly gets search-history
  embarrassment; "Judges" turns it from observation into condemnation
  by the thing that saw it. No explanation needed.
- **A whole story.** The name implies a situation (your network knows
  what you searched), a character (you, with something to hide), and
  something that happened (the searches themselves). The reader fills in
  what was searched — that is the story.
- **Fresh.** The leaderboard is blind, so the field was studied through
  1,000 submission titles (cursor pagination) instead. The crowded angles
  were avoided: divorce/marriage/breakup (84 unique titles — "Our WiFi
  outlived the marriage", "She took the dog AND the router", "He left.
  The WiFi stayed. I won."), ex + password (52 / 93), mom/dad (47),
  "outlived" (17), "Dad Changed the Password Again". "Judge" appears in
  **0** titles; "search history" in only 2, framed differently
  ("YourSearchHistoryIsSafeWithMe", "Mum found my search history") and
  one near-miss ("I Can See Your Browser History" — mere observation,
  no judgement twist). It is also none of the stock Wi-Fi jokes
  (FBI van, Pretty Fly, LAN Before Time) — the "FBI Van #7 moved in,
  pays rent" angle is taken, as are ghost-pays-rent, "It Followed Me
  Home", and "I Can Hear You Through The Wall".
- **Tight.** 31 characters, every word earns its place; "WiFi" (not
  "Wi-Fi") reads as a network name and saves a character for the Size
  tie-break.

## How it runs

`main.ts` (Node 22, TypeScript run as-is, stdlib only) holds the name as
a fixed constant, validates it against every gate (1–32 characters,
single line, no whitespace-only, no leading/trailing/double whitespace,
plain ASCII so characters equal bytes for the Size tie-break, more than
one word so it can carry a story), then writes it to `/output/entry.txt`.
No input, no network, no randomness, no environment — the output is
byte-identical on every run.

```sh
node main.ts        # writes /output/entry.txt
```

## Verification

- Run 3×, outputs byte-identical (SHA-256
  `d8d5f59e16ff92d586732763a55020d8b793772a43f9d13fb769489b3e68360b`),
  re-run after the final validation edit — still identical.
- Gate check: 31 characters, one line, UTF-8, not whitespace-only.
- No personal details, no claim codes, no keys anywhere in the entry.
- `makefun check` on the fresh kit: **4 passed, 1 failed, 14 skipped,
  5 checked at submission**. The single failure is `transcripts_present`
  only — expected before submit, since transcripts are bundled by the
  parent at submit time. Passed: `competition_open`, `snapshot` (3 files,
  7,788 bytes), `license_osi`, `entrypoint` (main.ts → node22). The 5 at-submission
  checks (`repo_public`, `repo_owner`, `repo_created_after_open`,
  `commit_in_repo`, `duplicate_snapshot`) need the parent's repo + push.

## Bounty

- Competition: [Tell a Whole Story in 32 Characters](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
- Prize pool: $2 (1st place only)
- Deadline: 27 Nov 2026, 00:25 WIB
- Submissions in field at build time: 1,033 in flight (blind rounds — no
  live ranks or scores until results are published; next round
  26 Nov 01:44 WIB)

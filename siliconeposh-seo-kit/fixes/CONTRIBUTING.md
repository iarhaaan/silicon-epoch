# Contributing to Silicon Epoch

Thanks for considering a contribution. Silicon Epoch is a fast-moving field guide — keeping it accurate matters more than anything else.

## What we welcome

- ✅ **New model releases** — add the card to `/companies` and the entry to `/timeline`.
- ✅ **Newly announced data-center / energy deals** — `/infrastructure`.
- ✅ **Better primary-source citations** — replace secondary sources with developer announcements, model cards, papers, or SEC filings.
- ✅ **Benchmark updates** — when SWE-bench, AIME, MMLU, etc. get new state-of-the-art numbers.
- ✅ **Typo / clarity fixes** — always welcome.

## What we don't merge

- ❌ Speculation without a primary source.
- ❌ Marketing copy or hyperbolic language.
- ❌ Hot takes on AGI timelines from non-lab figures.
- ❌ Visual redesigns without prior discussion in an Issue or Discussion.

## How to contribute

1. **Open an Issue first** for anything beyond a typo. Describe the change and link the primary source.
2. Fork → branch → PR. One topic per PR.
3. Run `bun run lint && bun run build` before pushing.
4. Citation format: include the source URL inline using the existing `<Citation />` component.

## Voice

Silicon Epoch is restrained, quantified, present-tense, and citation-driven. No exclamation marks, no marketing language. Match the existing tone.

## Code style

- TypeScript strict, no `any` without a comment explaining why.
- Tailwind for styling — use the existing color tokens (`ink`, `paper`, `ember`, `cobalt`, `moss`).
- New routes live in `src/routes/` and get full `head()` metadata (title, description, OG, canonical, Twitter card) — see `_meta-snippets.md` patterns.

## Reporting issues

Use the templates under `.github/ISSUE_TEMPLATE/`. Include a primary-source link if you're reporting outdated data.

## License

By contributing you agree your work is released under the MIT License.

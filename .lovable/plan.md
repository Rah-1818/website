Repaint the site with your palette. This is a pure styling change in `src/styles.css` — no component logic touched.

## Palette mapping

| Token | Hex | Role |
|---|---|---|
| `--foreground` (ink) | `#0A0A0A` | Body/heading text on light |
| `--background` (paper) | `#FAF7F1` | Page background, cards |
| `--dark-foreground` | `#F5F1EA` | Text used on dark sections/footer |
| `--primary` (accent) | `#F6B640` | Brand color, badges, highlights, hero gradient |
| `--action` | `#D8623A` | CTA buttons ("Get Started", form submit), links on hover |
| `--urgent` | `#DC143C` | Urgency headline accents, destructive/alert |

## Changes in `src/styles.css`

1. Replace the WhatsApp-green `--primary` / `--primary-glow` with `#F6B640` and a lighter warm tint for the glow (so gradients stay smooth).
2. Set `--background` → paper, `--foreground` → ink, and update `--card`, `--popover`, `--muted`, `--secondary`, `--accent`, `--border`, `--input` to warm off-white/beige derivatives so they harmonize with paper.
3. Add new tokens: `--action`, `--action-foreground`, `--urgent`, `--urgent-foreground`, `--dark-surface` (near-ink for footer/dark section bg), `--dark-foreground` (`#F5F1EA`).
4. Update `--gradient-hero` to paper → soft amber wash, and `--gradient-primary` to `#F6B640 → #D8623A` so the primary button reads as the action color.
5. Update `--ring` and `--destructive` to `--urgent`.
6. Rework chat-preview tokens: `--chat-bg` warm cream, `--chat-bubble-out` soft amber tint (keeps the hero mock on-brand).
7. Add utility `btn-action` (solid `#D8623A`) and `text-urgent` for optional urgency headline styling, in case we want to use the crimson selectively later. `btn-primary` keeps working via the updated gradient.

## What stays the same
- Layout, typography (Plus Jakarta Sans), section order, copy, animations, form logic, Supabase wiring — all untouched.
- Component files under `src/routes/` and `src/components/` are not edited; they already consume semantic tokens.

## Open question
Dark sections: the current site doesn't have a dedicated dark section — only the footer is subtly tinted. Do you want me to (a) convert the footer to an ink `#0A0A0A` background with `#F5F1EA` text, or (b) leave the footer light and just register the dark tokens for future use? Default if you don't answer: **(a)** — ink footer.

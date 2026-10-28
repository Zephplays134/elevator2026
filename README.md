# elevator2026

A Carnival Cruise Line-style website with the Elevator AI assistant built in, and an auto-update monitor that tells visitors when a new version of the site is live.

## Elevator AI

The built-in AI assistant on the site, answering questions about ships, destinations, deals, dining, entertainment, kids' programs, and booking.

**Real-time. Keyless. Fully free. Unlimited. Reliable.** Instant answers with no API key, no sign-up, no usage limits, and no downtime to worry about.

The agent's full spec lives in [Elevator.md](Elevator.md).

## What's on the site

- Glass-effect sticky header, full-screen hero with slide dots and gradient headline
- Cruise search bar (destination, departure date, duration)
- Popular destinations and current deals cards with hover effects
- Life onboard section: dining, entertainment, pools, spa and fitness
- Elevator AI updates section with feature badges and a dated update log
- Guest testimonials slider
- Elevator AI assistant chat in the corner of every page, with quick replies
- Auto-update banner when a new version goes live
- Scroll-reveal animations throughout

## Updates

- **Oct 28, 2026** — Full redesign: new modern theme, glass header, hero slide dots, quick replies in chat, and scroll-reveal animations. All features kept.
- **Oct 28, 2026** — Added `Elevator.md`, the Elevator agent's spec file.
- **Oct 28, 2026** — Elevator AI confirmed real-time, keyless, fully free, unlimited, and reliable. Added the Elevator AI updates section with feature badges and the update log.
- **Oct 28, 2026** — Added this README.
- **July 2026** — Launched the Elevator AI assistant and the full site.

## Files

| File | What it does |
| --- | --- |
| `Elevator.md` | The Elevator agent AI model's spec file |
| `index.html` | The whole page, including the Elevator AI updates section and chat window |
| `style.css` | Styling: the modern theme, badges, update log, chat, and animations |
| `script.js` | Site behavior: sliders, search, chatbot, auto-update monitor, scroll reveal |

## Running it

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Viewing it live

GitHub Pages serves it here:

https://zephplays134.github.io/elevator2026/

---

Independent fan-made page. Not affiliated with Carnival Corporation or any cruise line.

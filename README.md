# 🎯 Soc Ops

> **Break the ice. Make connections. Win Bingo.**

A social bingo game built for in-person mixers and team events. Players roam the room finding people who match the squares — first to get **5 in a row** wins!

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deploys_to-GitHub_Pages-222?logo=github)](https://pages.github.com/)

<!-- You can remove this message when updating the readme as part of the workshop -->
👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for instructions on how to set up and customize the game.

---

## How It Works

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│  bikes   │ lived in │  has a   │ prefers  │  plays   │
│ to work  │ another  │   pet    │   tea    │   an     │
│          │ country  │          │          │instrument│
├──────────┼──────────┼──────────┼──────────┼──────────┤
│ speaks   │  has run │  was     │   has    │  can     │
│ 2+ langs │    a     │  born    │   met a  │ juggle   │
│          │ marathon │elsewhere │ celebrity│          │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│  has     │  loves   │  FREE    │ traveled │  is      │
│  been    │ cooking  │  SPACE   │  to Asia │  left-   │
│skydiving │          │    ⭐    │          │  handed  │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│  has a   │  plays   │  does    │  has a   │  loves   │
│  twin    │  video   │  yoga    │ hidden   │  spicy   │
│          │  games   │          │  talent  │  food    │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│  has     │ collects │  read a  │  knows   │  has a   │
│ been     │something │  book    │  sign    │ garden   │
│  on TV   │ unique   │this month│ language │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘
```

1. **Open the game** on your phone or device
2. **Roam the room** — talk to people and find who matches each square
3. **Tap to mark** a square when you find a match
4. **Get 5 in a row** (any row, column, or diagonal) to win 🎉

Each game is **randomized** — no two boards are the same!

---

## ✨ Features

- 🎲 **Randomized boards** — shuffled fresh each game with Fisher-Yates
- 💾 **Auto-saves** — resume mid-game after closing the tab
- 📱 **Mobile-friendly** — designed for phones at events
- ⚡ **Instant deploy** — push to `main` and it's live on GitHub Pages
- 🎨 **Fully customizable** — swap questions to match any event theme

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run locally

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

Deploys automatically to GitHub Pages on push to `main`.

---

## 🛠 Customize for Your Event

**Change the questions** — edit [`src/data/questions.ts`](src/data/questions.ts) with 24 prompts that fit your crowd:

```ts
export const questions: string[] = [
  "has shipped a feature this week",
  "uses a mechanical keyboard",
  "has attended a hackathon",
  // ... 21 more
];
```

Ideas: team facts, conference themes, hobbies, local trivia — anything that sparks conversation!

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Build | Vite 7 |
| Testing | Vitest + React Testing Library |
| Deploy | GitHub Pages (Actions) |

---

## License

[MIT](LICENSE) — fork it, remix it, run it at your next event.

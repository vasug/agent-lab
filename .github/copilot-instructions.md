# Copilot Instructions for Soc Ops

**React 19 + TypeScript social bingo game** (5×5 grid, 24 questions + 1 FREE SPACE at center). Deploy to GitHub Pages.

## Pre-Commit Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds (TypeScript + Vite)
- [ ] `npm run test` passes

## Architecture

**Hook Pattern**: `useBingoGame` → Props to components → Pure utility functions in `bingoLogic.ts`

- **App.tsx**: Routes based on `gameState` ('start' | 'playing' | 'bingo')
- **useBingoGame.tsx**: State + localStorage (key: `'bingo-game-state'`, version: 1, validates strictly)
- **bingoLogic.ts**: Pure functions—`generateBoard()`, `toggleSquare()`, `checkBingo()` (returns `BingoLine | null`)
- **Components**: No Context API, explicit props only
- **Styling**: Tailwind v4 + CSS custom theme (`--color-accent`, `--color-marked`, `--color-bingo`)


## Game Rules

- **Board**: Index 12 is FREE SPACE (center, auto-marked, unclickable). 24 random non-free questions per game.
- **Win**: 5 in a row (row/col/diagonal). Free space counts.
- **Shuffle**: Fisher-Yates on questions. `checkBingo()` returns single winning line or null.
- **Types**: `BingoSquareData`, `BingoLine`, `GameState` — all in `src/types/index.ts`

## State Management

- **localStorage**: Persists game state; survives reload. Validates version, board length, square properties.
- **SSR Safe**: Guard with `typeof window === 'undefined'` before localStorage access.
- **Validation**: Strict type checking prevents corrupted data.

## Key Constraints

- **Props only**: No Context API. All components receive explicit props.
- **Single win**: `checkBingo()` returns first match, not array.
- **Free space**: Always marked at index 12, cannot toggle.
- **Modal**: Imperative (boolean flag `showBingoModal`).
- **Styling**: Tailwind only. Global CSS in `src/index.css` for theme vars.

## Design Guide (Eco Leafy Green)

- **Theme Intent**: Calm, natural, and leafy. Keep visuals warm, organic, and readable.
- **Color System**: Use theme tokens from `src/index.css` (`--color-accent`, `--color-accent-light`, `--color-marked`, `--color-marked-border`, `--color-bingo`). Prefer token-based classes over hard-coded colors.
- **Typography**: Brand headings use `Fraunces` (display serif). Body/UI text uses `Manrope`.
- **Surfaces**: Use soft card surfaces (`bg-white/85+`), rounded corners, gentle green borders, and restrained shadows.
- **Backgrounds**: Prefer subtle layered gradients/radial texture over flat gray backgrounds.
- **Buttons**: High-contrast filled green primary actions; subtle hover/active feedback only.
- **Board Squares**:
	- Default: light surface, clear border, high legibility.
	- Marked: use marked token colors.
	- Winning: distinct celebratory green-yellow tone (`--color-bingo` family).
	- Free space: visually distinct and always non-interactive.
- **Motion**: Minimal and purposeful (`150–250ms` transitions, simple fade/slide for modal). Avoid flashy or continuous animation.
- **Layout**: Mobile-first, centered board, stable spacing rhythm, sticky lightweight header on game screen.
- **Accessibility**: Maintain strong text contrast, visible state differences, and tap-target comfort. Never rely on color alone for critical state communication.
- **Content**: Keep current product copy (`Soc Ops`, `Social Bingo`) unless a task explicitly requests copy updates.
- **Scope Discipline**: Redesign visually without changing gameplay behavior or state architecture.

## Common Tasks

**Add Questions**: Edit `src/data/questions.ts` (24 strings, non-free only).  
**Change Board Size**: Update `BOARD_SIZE` and `CENTER_INDEX` in `bingoLogic.ts`.  
**Test Logic First**: `generateBoard()` for fixtures. Test pure in `bingoLogic.test.ts`, components in component tests (Vitest + React Testing Library).

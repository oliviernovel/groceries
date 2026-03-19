# Grocery List App — Project State

## Current phase: Phase 2 complete (Frequency utils)

## Stack
- React 19 + TypeScript + Vite
- @dnd-kit/core + @dnd-kit/sortable (drag-and-drop with touch support)
- Vitest + @testing-library/react + jsdom (unit/component tests)
- Google Fonts: Caveat (handwritten) + Nunito (UI)

## Key decisions (from PLAN.md)
- Purchase history: timestamp array, exponential decay frequency scoring
- Purchase interval displayed as `c/Nd` (median gap, shown when ≥2 purchases)
- Add button is a FAB, not inline add-bar
- Reordering on dedicated Order screen (not inline)
- UI language: English

## File structure so far
```
src/
  main.tsx          -- Entry point
  App.tsx           -- Placeholder (header only); will become screen router
  App.css           -- Global styles: CSS vars, reset, .app container, notebook effect
  index.css         -- Minimal body reset
  types.ts          -- GroceryItem interface, PurchasedSortMode type
  test-setup.ts     -- @testing-library/jest-dom import for Vitest
  utils/
    frequency.ts                -- frequencyScore(), purchaseInterval(), pruneHistory()
    __tests__/
      frequency.test.ts         -- 16 tests (all passing)
```

## What's next: Phase 3
- State management: reducer (CHECK_ITEM, UNCHECK_ITEM), context, localStorage persistence
- Components: Header, SectionHeader, BuyItem, BuyList, MainScreen
- Seed data for visual verification

## Running
- `pnpm dev` — dev server (shows orange "Grocery List" header + notebook background)
- `pnpm test` — run all tests with Vitest
- `pnpm build` — production build

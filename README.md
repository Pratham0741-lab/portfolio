# Personal Portfolio — React & Framer Motion

A bespoke, responsive personal portfolio built with React (functional components + hooks), Framer Motion, and custom Vanilla CSS.

## Design Highlights & System

- **Warm Off-White Base:** `#F7F3EC` base background with `#1A1A1A` near-black typography and hairline 1px dividers.
- **Strict Jewel-Tone Consistency:** Each project is assigned exactly ONE jewel-tone accent color used for its border, row tint, "View project →" link, and hover highlight:
  - **Project A:** Deep Burgundy (`#7A1E2B`)
  - **Project B:** Dark Forest Green (`#1D3B32`)
  - **Project C:** Ink Navy (`#1B2A41`)
  - **Project D:** Dark Plum (`#521C42`)
- **Typography:** Modern grotesk sans (`Plus Jakarta Sans`) paired with an editorial italic serif (`Newsreader`) for the pull-quote.
- **Hero Entrance Animation:** Orchestrated entrance sequence with custom cubic-bezier easing `[0.22, 1, 0.36, 1]` on initial page load (respects `prefers-reduced-motion`).
- **Signature Hover-Glimpse Interaction:** On desktop hover, project thumbnails cross-fade via Framer Motion `AnimatePresence` into interactive simulated frames or looping `<video>` with custom easing and subtle scale (1 to 1.02).
- **Mobile-First Responsiveness:** Alternating side-by-side desktop rows collapse to clean stacked single columns on mobile (< 768px). Touch devices feature tap-to-inspect modals via `window.matchMedia('(hover: hover)')`.
- **Zero AI Cliches:** Sharp or barely-rounded corners (≤ 4px), no generic pill badges, no numbered 01/02 markers, no stock photography, and no scattered scroll fade-ins.

## Configuration Guide

All project definitions are configured in a single array in `src/App.jsx` and `src/data/portfolioData.js`:

```javascript
export const PROJECTS = [
  {
    id: 'artemis',
    title: 'Artemis Observability',
    description: 'Distributed tracing platform written in TypeScript and Rust, visualizing microservice latency spikes across 40M daily RPC requests.',
    accentColor: '#7A1E2B',
    accentBg: 'rgba(122, 30, 43, 0.035)',
    staticMedia: '/projects/artemis-static.svg',
    hoverFrames: [
      '/projects/artemis-frame1.svg',
      '/projects/artemis-frame2.svg',
      '/projects/artemis-frame3.svg',
    ],
    videoSrc: null, // Set to a .mp4 / .webm file to enable looping video on hover
    projectUrl: 'https://github.com/your-username/artemis',
    statsSummary: 'P99 18.4ms · 40M req/day · 100% trace sampling',
  },
  // Add or reorder projects here...
];
```

## Available Scripts

- `npm run dev`: Start local development server (default `http://localhost:5173/`)
- `npm run build`: Build production bundle to `dist/`
- `npm run preview`: Preview the production bundle locally
- `npx oxlint`: Run Oxlint to verify zero linting errors

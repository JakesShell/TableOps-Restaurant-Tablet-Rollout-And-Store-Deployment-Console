# TableOps Restaurant Tablet Rollout & Store Deployment Console

## Live Demo

[Open the live deployed app](https://tableops-restaurant-tablet-rollout-console-qko8f6cg3.vercel.app)

## Overview

TableOps Restaurant Tablet Rollout & Store Deployment Console is a static browser-based operations dashboard for coordinating a tabletop tablet pilot rollout across restaurant locations.

The project turns a rollout charter into a practical command center for reviewing store readiness, pilot KPIs, location blockers, training needs, risk controls, and leadership next steps. It is intentionally implemented with HTML, CSS, and JavaScript only.

## Real-World Business Use Case

This project maps to practical workflows used by:

- Restaurant operations teams
- Pilot rollout coordinators
- Technology enablement teams
- Training and adoption leads
- Frontend developers building internal operations dashboards

A team may need to answer questions such as:

- Which pilot locations are ready for tabletop tablet deployment?
- What KPI targets should leadership monitor?
- What training, support, and POS integration work still needs attention?
- Which risks could affect adoption, integration, cost control, and ROI?
- What should happen before the next pilot review?

## Key Features

- Full-screen app-shell dashboard layout
- Sticky full-width top navigation
- Left viewport sidebar navigation
- Main workspace for rollout operations
- Right status/action panel with readiness score, phase, top risks, and next action
- Executive rollout metrics
- Location readiness comparison
- Rollout timeline/status board
- KPI target cards
- Risk and blocker grid
- Training and support checklist
- Bottom CTA with demo-only actions
- Responsive collapse for tablet and mobile

## Demo Action Note

Export, report, and review buttons are static demo controls. They show local interface feedback only and do not generate files, call APIs, contact external systems, or perform real deployment actions.

## Tech Stack

- HTML
- CSS
- JavaScript

No React, Vite, npm, backend, or external build tooling is required.

## Repository Contents

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `PROJECT.pdf`
- `AGENTS.md`
- `DESIGN_SYSTEM.md`

## How To Run

Open the dashboard in a browser.

```powershell
Start-Process .\index.html
```

## Suggested Manual Testing

- Open the app at desktop width and confirm the sticky top nav, left sidebar, main workspace, and right status panel are visible.
- Zoom the browser to 75%, 50%, and 25% and confirm the dashboard still uses the full viewport.
- Test tablet width and confirm the right panel moves below the main workspace.
- Test mobile width and confirm navigation, cards, and buttons stack cleanly.
- Click Prepare Pilot Review, View Location Plan, and Export Rollout Summary to confirm the demo-only message updates.


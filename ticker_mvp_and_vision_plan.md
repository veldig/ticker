# Ticker — MVP & Product Vision Plan

## Core Concept

Ticker is a daily stock reasoning game.

Players identify a mystery public company using financial metrics and deduction.

Instead of guessing letters like Wordle, players compare:
- Sector
- Market capitalization
- Valuation metrics
- Historical performance

The experience should feel:
- Smart
- Analytical
- Addictive
- Clean
- Fast

Not like a meme game.

---

# Product Identity

## One-Sentence Pitch

> Ticker is a daily financial deduction game where players identify companies using market data and reasoning.

## Emotional Hook

The user should feel:
> “I understand markets better than other people.”

Ticker is not trivia.
Ticker is deduction.

---

# MVP GOAL

The MVP goal is NOT:
- scale
- monetization
- APIs
- multiplayer
- AI

The MVP goal IS:

> Ship a polished, playable daily game with strong UX and clean logic.

The MVP should prove:
- the gameplay loop is fun
- the logic is understandable
- the product feels professional
- users come back daily

---

# MVP FEATURES

## 1. Daily Puzzle System

Every day:
- one mystery stock
- same puzzle for all users
- resets every 24 hours

Puzzle chosen from curated stock dataset.

### Initial Dataset

Start with:
- 100–300 manually curated stocks

Focus on:
- recognizable companies
- distinct financial profiles
- multiple sectors

Avoid:
- random microcaps
- nearly identical companies
- obscure stocks

---

## 2. Guessing System

Player gets:
- 6 attempts maximum

Player submits:
- ticker OR company name

Autocomplete should suggest:
- company name
- ticker
- exchange

Example:
- NVIDIA — NVDA
- Apple — AAPL

---

# Metrics Used in MVP

## Keep MVP Simple

Use only:

### Sector
Example:
- Technology
- Consumer
- Healthcare

### Market Cap
Example:
- $2.4T

### P/E Ratio
Example:
- 34.2

### 5-Year Return
Example:
- +210%

---

# Feedback Logic

Each metric returns:

## Exact Match
Green ✓

## Close Match
Orange 🔥
Within 10% of target value.

## Too High
Red ↑

## Too Low
Red ↓

---

# Example Gameplay

Target:
- NVIDIA

Guess:
- AMD

Results:

| Metric | Result |
|---|---|
| Sector | ✓ |
| Market Cap | 🔥 |
| P/E | ↓ |
| 5Y Return | ↓ |

Player reasons from there.

---

# MVP UX REQUIREMENTS

## Must Feel Production Ready

Requirements:
- smooth transitions
- responsive layout
- loading states
- autocomplete debounce
- polished typography
- mobile-first design
- clean animations

Avoid:
- clutter
- meme styling
- crypto-bro aesthetic
- over-animation

---

# MVP SCREENS

## Main Game Screen
Contains:
- target metrics
- guess input
- attempt history
- top navigation
- streak indicator

## Win Screen
Contains:
- attempts used
- result grid
- share button
- next puzzle timer

## Lose Screen
Contains:
- revealed stock
- explanation
- next puzzle timer

## Stats Modal
Contains:
- streak
- win rate
- average guesses
- recent performance chart

## Settings Modal
Contains:
- dark/light mode
- scoring explanation
- reset stats

---

# MVP TECH STACK

## Frontend
- React
- Vite
- TypeScript
- TailwindCSS

## Persistence
- localStorage

## Dataset
- static JSON file initially

## Hosting
- Vercel

---

# MVP DATA MODEL

## Stock Object

```ts
{
  ticker: string
  name: string
  sector: string
  marketCap: number
  pe: number
  return5y: number
  exchange: string
}
```

---

# MVP STATE MACHINE

## States

- idle
- typing
- submitting
- in_progress
- won
- lost
- locked_until_reset

This prevents messy frontend logic.

---

# MVP ALGORITHM

## Daily Puzzle Generation

```ts
seed = YYYY-MM-DD
```

Seeded RNG selects one stock.

This ensures:
- same puzzle globally
- deterministic daily behavior

---

# MVP PERSISTENCE

Save locally:
- current guesses
- puzzle completion
- streak
- stats
- last played date

---

# MVP SHARE SYSTEM

Generate:
- emoji result grid
- copy-to-clipboard
- social share

Example:

```text
Ticker #242
✓ 🔥 ↓ ↑
✓ ✓ ✓ ✓
```

---

# MVP SUCCESS METRICS

The MVP is successful if:

## Product Metrics
- users replay daily
- users share results
- users understand the game quickly

## Engineering Metrics
- stable frontend
- no broken states
- clean architecture
- good performance

---

# DEVELOPMENT PHASES

# Phase 1 — Foundation

Goal:
Create playable shell.

Tasks:
- setup React/Vite project
- implement routing
- create design system
- build reusable components
- import curated stock dataset

Deliverable:
Static but navigable UI.

---

# Phase 2 — Core Gameplay

Goal:
Make game playable.

Tasks:
- autocomplete search
- guess submission
- comparison algorithm
- attempt rendering
- win/loss logic
- state machine

Deliverable:
Playable local game.

---

# Phase 3 — Persistence & Daily Logic

Goal:
Make it feel real.

Tasks:
- localStorage
- daily seed generation
- streak logic
- reset timer
- puzzle lock after completion

Deliverable:
Functional daily game.

---

# Phase 4 — Polish

Goal:
Professional quality.

Tasks:
- animations
- share grid
- loading states
- empty states
- accessibility
- mobile optimization

Deliverable:
Portfolio-ready MVP.

---

# GLOBAL PRODUCT VISION

Ticker can evolve far beyond a Wordle clone.

Long-term vision:

> Become the most engaging way to build market intuition.

---

# POST-MVP EXPANSION IDEAS

## 1. Difficulty Modes

### Casual
Simple metrics.

### Analyst
Advanced metrics:
- EV/EBITDA
- PEG ratio
- margins
- revenue CAGR

---

## 2. AI Explanations

After solving:

Explain:
- why the company matched
- what makes the company unique
- how valuation compares to peers

This turns the game into learning.

---

## 3. Multiplayer

Daily leaderboard:
- fastest solve
- fewest guesses
- streak rankings

---

## 4. Sector Challenges

Examples:
- AI stocks only
- semiconductor week
- biotech challenge
- meme stock mode

---

## 5. Portfolio Mode

Player creates portfolio.

Ticker generates:
- personalized puzzles
- portfolio-based challenges

---

## 6. Live Market Integration

Move from static JSON:
- Polygon API
- Finnhub
- Alpha Vantage
- Twelve Data

---

## 7. Educational Expansion

Possible future direction:

Ticker becomes:
- market intuition trainer
- finance learning platform
- recruiting signal tool

Potential audience:
- students
- retail investors
- finance clubs
- trading communities

---

# WHAT MAKES TICKER SPECIAL

Not the UI.

Not the stock data.

The differentiation is:

> Deduction through financial reasoning.

That is the identity.

Protect that.

---

# IMPORTANT STRATEGIC WARNING

Do NOT overbuild too early.

Avoid:
- AI features immediately
- real-time APIs immediately
- accounts/auth immediately
- multiplayer immediately
- mobile app immediately

Focus on:
- gameplay quality
- clarity
- polish
- retention

A polished MVP is stronger than 20 unfinished features.

---

# FINAL MVP DEFINITION

The MVP is complete when:

- a user can play a full daily puzzle
- the game feels intuitive
- the game feels polished
- the game saves progress
- the game can be shared
- the product looks professional on a portfolio

That is enough.

Ship before expanding.


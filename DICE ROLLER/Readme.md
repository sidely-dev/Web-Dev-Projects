# 🚀 Dice Roller

> A clean, responsive client-side utility and random probability simulator engineered to execute independent virtual dice rolls across custom geometric face configurations with integrated history tracking and statistical distribution analysis.

<!-- Project badges -->
![Status](https://shields.io)
![Version](https://shields.io)
![Language](https://shields.io)
![License](https://shields.io)

---

## 📌 Table of Contents

- [About The Project](#-about-the-project)
- [Project Objectives](#-project-objectives)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Bugs & Fixes](#-bugs--fixes)
- [Challenges & Struggles](#-challenges--struggles)
- [What I Learned](#-what-i-learned)
- [Development Process](#-development-process)
- [Roadmap](#-roadmap)
- [Known Issues](#-known-issues)
- [Future Improvements](#-future-improvements)
- [Project Reflection](#-project-reflection)
- [License](#-license)
- [Author](#-author)

---

## 📖 About The Project

### What is this project?

> This project is a lightweight, mobile-first web tool built using modern HTML5, CSS3, and JavaScript that enables users to roll multiple standard tabletop gaming dice simultaneously, displaying cumulative totals, single die results, and granular mathematical probability tracking.

### Why did I build it?

This project was created to:
- Learn state array compilation methods by dynamically accumulating random datasets across multiple concurrent objects.
- Master tactile keyframe animations and 3D rotational CSS matrix alterations simulating physics-based tumbling behaviors.
- Bridge the gap between static user inputs and reactive math engines that process running mathematical sums, highest/lowest throws, and average roll values.

### Project Background

This is a functional portfolio widget and visual data handling exercise engineered to practice smooth state machine tracking, client-side randomness filters, and clean mobile-friendly viewport scaling.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [x] Build an instantly responsive dice canvas handling custom element quantities cleanly.
- [x] Write a zero-latency distribution matrix resolving standard random bounds accurately.
- [x] Formulate an auto-updating summary deck showing running tallies, addition modifiers, and separate values.
- [x] Configure a persistent session history feed logging past iterations with an execution reset option.

---

## ✨ Features

### ✅ Implemented Features

- **Multi-Die Workspace Array** — Dynamic layout panels allowing users to roll combinations of items (from a single standard die up to a full deck of 10 concurrently).
- **Tumbling Motion Engine** — Custom 3D CSS keyframe classes that spin, tilt, and toss visual blocks to simulate actual physical gravity states before settling on a numeric layout.
- **Granular Sum Dashboard** — Immediate score tracking summaries that compute individual item contributions, total math sums, and optional modifier calculations (+/- points).
- **Session Audit Ledger** — A dedicated scrolling log tracking all past values rolled during the window lifespan, keeping historical totals organized.

### 🚧 Features Currently Being Developed

- **Advanced Tabletop Polyhedrals Grid** — Expanding past basic 6-sided dice to support a full set of roleplaying shapes (d4, d8, d10, d12, d20, d100) dynamically.

### 🔮 Planned Features

- [ ] **Dice Physics Customizer** — Adding canvas parameters that allow users to change gravity rules, velocities, or select distinct visual skins (colors, materials, custom icons).

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantically coordinates interactive die trigger blocks, numeric adjustments, and forms |
| CSS3 | Implements 3D perspectives, rotation keyframes, custom grids, and fluid mobile centering |
| JavaScript (ES6+) | Drives the internal random calculation algorithm, updates score vectors, and triggers animations |
| Git | Logs development history checkpoints and local workflow branching variations |
| GitHub | Code archival management and active public web delivery via GitHub Pages pipelines |

### Languages

- HTML5
- CSS3
- JavaScript (Vanilla ES6+)

### Frameworks / Libraries

- None (Built strictly using basic web standards to guarantee near-instantaneous load and execution speeds)

### Development Tools

- VS Code (IDE)
- Git & GitHub Actions Workspace
- Browser Layout Reflow Inspector Tools

---

## 📂 Project Structure

```text
dice-roller-utility/
│
├── src/
│   ├── css/
│   │   └── animation.css   # Handles 3D transformation matrices, tumbling keyframes, and skin themes
│   ├── js/
│   │   ├── generator.js    # Random generation matrix engine, modifier math, and array compiling
│   │   └── app.js          # Main view router tracking actions, spawning dice elements, and updates
│   └── index.html          # Core interactive control deck markup scaffold
│
├── docs/
│   └── screenshots/        # Assets representing user dashboard interaction metrics
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🖼️ Screenshots

*(Add your dynamic visual layout previews here once active production sweeps conclude)*  
*Example placeholder:* `![Dashboard View](docs/screenshots/dice-roller-preview.png)`

---

## 🚀 Getting Started

Follow these direct configuration metrics to deploy and audit the simulation locally.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd dice-roller-utility
   ```

2. **Boot the project**
   This utility is a pure static frontend build. No node modules packaging downloads or configuration files are required!

### Usage

1. Open `src/index.html` inside your internet browser workspace window.
2. Adjust your targeted quantity counts and modifier values using the dashboard sliders.
3. Tap **Roll Dice** to watch the visual blocks tumble, calculate fresh value metrics, and track updates on the dynamic history timeline.

---

## 🐛 Bugs & Fixes

- **Bug:** Clicking the trigger button repeatedly before animations concluded caused internal score calculations to stack incorrectly.
- **Fix:** Structured an interactive execution gate that locks control buttons dynamically when animations launch, unlocking them only after the numerical values resolve.

---

## 💡 Challenges & Struggles

The core design difficulty lay in sync-locking the completion of graphic element rotations with the text injection calculations in the DOM nodes. If numeric updates update too quickly, it ruins the suspension of disbelief created by the physics simulation. Resolving this required hooking into the `animationend` browser event listener to coordinate exact update states cleanly.

---

## 🧠 What I Learned

- Learned how to manage 3D perspective frameworks inside standard flat web layouts utilizing advanced style parameters:
  ```css
  transform: rotateX(180deg) rotateY(90deg);
  transform-style: preserve-3d;
  ```
- Mastered flexible programmatic array grouping methods to safely isolate individual value points out of complex multi-element triggers:
  ```javascript
  const rollResults = Array.from({ length: totalDice }, () => Math.floor(Math.random() * 6) + 1);
  ```

---

## 🛠️ Development Process

The system blueprint prioritized internal random math evaluation scripts first: ensuring distribution frequencies were evenly mapped inside tracking tools, building out the semantic HTML panel decks second, and fine-tuning fluid 3D tumbling styles last.

---

## 🗺️ Roadmap

- [x] Phase 1: High-fidelity multi-die numerical array aggregation verified.
- [x] Phase 2: Integrated 3D tumbling rotation style matrix active.
- [ ] Phase 3: Polyhedral shape configuration scaling framework deployment.

---

## ⚠️ Known Issues

- Setting item rolling metrics past 25 elements simultaneously can cause brief layout crowding on minor legacy mobile viewing cards.

---

## 🚀 Future Improvements

- Incorporate an automated audio playback module triggering real-time multi-channel sound loops of rattling plastic components matching your current die choice inputs.

---

## 📝 Project Reflection

Building this application provided great perspective on how concise structural event listeners keep basic layouts feeling immensely dynamic. Separating calculation logic from visual presentation nodes keeps the codebase highly modifiable and direct to scale.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

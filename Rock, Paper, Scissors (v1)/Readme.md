# 🚀 Rock Paper Scissors Game

> A clean, interactive digital adaptation of the classic Rock, Paper, Scissors game featuring player vs. computer logic, live score tracking, and an animated game loop.

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

> This project is a web-based mini-game developed using HTML, CSS, and modern JavaScript that allows users to play rounds of Rock, Paper, Scissors against an automated computer AI with immediate graphical state updates.

### Why did I build it?

This project was created to:

- Practice managing application state (tracking wins, losses, rounds, and active choices).
- Work on UI event handling by capturing tactile button clicks and translating them into conditional game outcomes.
- Master core algorithm basics like using mathematical randomizing functions (`Math.random`) to drive computer behaviors.

### Project Background

This is a personal portfolio and learning exercise built to establish solid habits regarding conditional control structures and clean DOM manipulation techniques.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [x] Design a highly intuitive, responsive interface optimized for mobile and desktop screens.
- [x] Create a pseudo-random determination engine to manage AI decisions fairly.
- [x] Build an instantly updating ledger panel keeping record of scores dynamically.
- [x] Implement smooth CSS state animations simulating a hand-shake countdown before showing results.

---

## ✨ Features

### ✅ Implemented Features

- [x] **Player vs Computer Matchmaking** — Clean action buttons allowing manual choices mapped directly against the game AI.
- [x] **Dynamic Scorekeeping** — Persistent running calculation trackers showing active win/loss/tie outcomes without hard reloading.
- [x] **Visual Highlights** — Color changes and message changes highlighting who won the individual round instantly.

### 🚧 Features Currently Being Developed

- [ ] **Reset Threshold Module** — A dedicated settings window to establish "Best of 5" or "Best of 10" challenge parameters.

### 🔮 Planned Features

- [ ] **Extended Choices Mode** — Incorporating alternative formats such as "Rock, Paper, Scissors, Lizard, Spock".
- [ ] **Sound Effect Arrays** — Audio clips that pop on clicks, wins, and losses to heighten overall engagement.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structuring the main game board elements and dashboard links |
| CSS3 | Custom flex layouts, typography rules, and action state transitions |
| JavaScript (ES6+) | Game loops, match win rules logic, and UI node mutations |
| Git | Version control tracking codebase evolution histories |
| GitHub | Repository management and public portfolio hosting services |

### Languages

- HTML5
- CSS3
- JavaScript

### Frameworks / Libraries

- None (Built using completely pure Vanilla technologies to cement foundational knowledge)

### Development Tools

- VS Code (IDE)
- Git
- GitHub

---

## 📂 Project Structure

```text
rock-paper-scissors/
│
├── src/
│   ├── css/
│   │   └── style.css       # Color palettes, custom fonts, and hand shake animations
│   ├── js/
│   │   └── game.js         # Core round engines and scoring conditions rules
│   └── index.html          # Central game screen layout and controller mapping
│
├── docs/
│   └── screenshots/        # Visual gameplay assets for file reference
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🖼️ Screenshots

*(Add your preview images here once your layouts are captured)*
*Example placeholder:* `![Dashboard View](docs/screenshots/gameplay.png)`

---

## 🚀 Getting Started

To launch and explore the project locally, complete the brief steps listed below.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd rock-paper-scissors
   ```

2. **Run the local workspace**
   No active compilation engines or custom runtime servers are necessary! Simply open the source files to test locally.

### Usage

1. Launch `src/index.html` within any modern web browser wrapper (Chrome, Safari, Firefox, Edge).
2. Tap any of the action icons (**Rock**, **Paper**, or **Scissors**) situated on the main operational deck.
3. Observe the dynamic output window render scores instantly as rounds process infinitely.

---

## 🐛 Bugs & Fixes

- **Bug:** Double clicking options rapidly generated conflicting outcome overlays.
- **Fix:** Added a temporary boolean flag disabling selection inputs while game resolution timers are executing.

---

## 💡 Challenges & Struggles

Managing micro timings between initial choice triggers, running visual element shaking timelines, and updating raw numerical text strings synchronously presented subtle order-of-operation execution hurdles during early drafts.

---

## 🧠 What I Learned

- Learned how to write elegant, object-mapped evaluation matrix objects instead of relying on long, confusing nested `if/else` statement tracks.
- Gained experience using asynchronous timing scripts (`setTimeout`) to smoothly delay text changes until visual animations finish.

---

## 🛠️ Development Process

The system architecture followed a standard sandbox iterative model: beginning with plain text log verifications to guarantee algorithmic accuracy, layering responsive style grid components second, and fine-tuning secondary user-experience tweaks like disabled state locks last.

---

## 🗺️ Roadmap

- [x] Phase 1: Core logical functional evaluations complete.
- [x] Phase 2: Graphic layout component deployment.
- [ ] Phase 3: Audio infrastructure integration settings update.

---

## ⚠️ Known Issues

- Rapid screen resizing can occasionally throw off precise centering constraints on niche tablet layout frames.

---

## 🚀 Future Improvements

- Incorporate local storage options (`localStorage`) so your overall high score history persists safe across browser session logs.

---

## 📝 Project Reflection

Building this application provided great perspective on how concise engineering principles keep frontend structures highly extendable. Isolating core logic cleanly makes modifying alternative game components later simple.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)


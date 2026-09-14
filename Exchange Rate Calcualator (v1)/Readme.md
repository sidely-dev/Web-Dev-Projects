# 🚀 Exchange Rate Calculator (v1)

> A fast, clean client-side financial application that pulls real-time global currency matrices from an external API to handle instant bi-directional currency conversions and historical value calculations.

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

> This project is a responsive, web-based single-page application built using pure HTML5, CSS3, and JavaScript that hooks into live monetary exchange networks to instantly convert currency values across dozens of global denominations simultaneously.

### Why did I build it?

This project was created to:
- Master asynchronous web operations (`async/await` and the Fetch API) by querying live global data feeds.
- Build interactive drop-down lookup fields equipped with immediate visual updates upon currency selection switches.
- Handle complex, decimal-heavy financial calculations without incurring floating-point math rounding anomalies.

### Project Background

This is a functional portfolio calculator and asynchronous data handling learning project engineered to practice live API payload consumption, string-to-number data sanitization, and mobile-friendly layout structures.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [x] Integrate a zero-latency input translation engine connecting two distinct currency values.
- [x] Establish automated async routines to pull dynamic, verified currency value matrices down from external API servers.
- [x] Standardize multi-decimal math formats down to absolute local cents criteria (two decimal parameters).
- [x] Create a single-click currency swap macro button that cleanly switches input fields without dropping data parameters.

---

## ✨ Features

### ✅ Implemented Features

- **Live Rate Integration Deck** — Connects directly to external API engines to ensure calculations reflect active global fiscal markets rather than static, outdated files.
- **Bi-Directional Computation Matrix** — Edit either the source currency box or the target currency box; the calculator maps the change back and updates the opposite input block instantly.
- **Quick Currency Swapper** — A dedicated inline switch button that smoothly flips the base currency with the target currency, completely updating all metrics instantly.
- **Dynamic Valuation Ledger** — Renders an inline baseline description alert highlighting exactly what \$1 of the current base currency translates to across the selected pair.

### 🚧 Features Currently Being Developed

- **Base Conversion Sidebar** — An expansion panel displaying how a single base value compares across a standard top-10 ledger of global currencies (USD, EUR, GBP, JPY, etc.) at a single glance.

### 🔮 Planned Features

- [ ] **Offline Rate Caching** — Implementing local browser tracking hooks (`localStorage`) that cache the last successful rate pull, enabling calculations to function smoothly even when users lose network connectivity.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantically mapping target currency forms, option selectors, and input groups |
| CSS3 | Handles fluid layout scales, conversion container styling, and hover responses |
| JavaScript (ES6+) | Manages live Fetch requests, async JSON parsing, and mathematical calculations |
| Git | Preserving workflow milestones and tracking local build history branches |
| GitHub | Repository organization, code synchronization, and static GitHub Pages hosting |

### Languages

- HTML5
- CSS3
- JavaScript (Vanilla ES6+)

### Frameworks / Libraries

- None (Built using pure native web platform standards to ensure zero loading footprints)

### Development Tools

- VS Code (IDE)
- Git & GitHub Workspace
- Browser Network Inspector Console

---

## 📂 Project Structure

```text
exchange-rate-calculator/
│
├── src/
│   ├── css/
│   │   └── style.css       # Core styling constraints, flexible currency cards, and swapper styles
│   ├── js/
│   │   ├── apiEngine.js    # Manages asynchronous network fetch calls to currency rate endpoints
│   │   └── calculator.js   # Intercepts form value adjustments and processes rate math conversions
│   └── index.html          # Main conversion board markup scaffold
│
├── docs/
│   └── screenshots/        # Project display captures mapping out active translation screens
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🖼️ Screenshots

*(Add your interface preview layout snapshots here when testing cycles finish)*  
*Example placeholder:* `![Dashboard View](docs/screenshots/calculator-ui.png)`

---

## 🚀 Getting Started

Follow the simple configuration parameters listed below to host and inspect this exchange utility locally.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd exchange-rate-calculator
   ```

2. **Boot the project workspace**
   This application is purely static frontend web architecture. No server downloads or package compilation configurations are required!

### Usage

1. Open `src/index.html` inside your internet browser window dashboard.
2. Select your desired currencies using the drop-down option lists provided on the cards.
3. Input numerical values into either field box to watch the opposite calculation synchronize instantly.

---

## 🐛 Bugs & Fixes

- **Bug:** Changing drop-down items without altering numeric data failed to refresh calculations in early code runs.
- **Fix:** Attached explicit `change` event listeners directly to the selection nodes to force instant mathematical updates upon option toggles.

---

## 💡 Challenges & Struggles

The main development difficulty involved managing network errors gracefully. If an external API server suffers an unexpected outage or a client device loses network access mid-session, the application could drop functional inputs. Resolving this required structuring robust code blocks that intercept data failures safely without halting UI performance.

---

## 🧠 What I Learned

- Learned how to implement async data streams cleanly using browser-native fetch APIs:
  ```javascript
  const response = await fetch(`https://exchangerate-api.com{baseCurrency}`);
  const data = await response.json();
  ```
- Mastered transactional variable swapping methods to re-map values simultaneously across two independent items without duplicating variable memory data blocks:
  ```javascript
  [currencyOne, currencyTwo] = [currencyTwo, currencyOne];
  ```

---

## 🛠️ Development Process

The layout creation followed a strict functional timeline: writing the async fetch mechanics inside console scripts to verify JSON structural responses first, binding selection components to operational DOM display elements second, and polishing aesthetic layout parameters last.

---

## 🗺️ Roadmap

- [x] Phase 1: High-fidelity async API data matrix collection verified.
- [x] Phase 2: Dynamic bi-directional conversion calculations functional.
- [ ] Phase 3: Offline storage caching deployment.

---

## ⚠️ Known Issues

- Inputting values faster than your local network can download updating data matrices can briefly cause mismatched conversions if standard API latency limits are reached.

---

## 🚀 Future Improvements

- Incorporate interactive D3.js chart modules that pull historical datasets to let users check performance graphs spanning the past 30 days.

---

## 📝 Project Reflection

Building this application highlighted the ease of using live APIs inside modular frontend scripts. Creating responsive tools out of moving financial indices underlines the power of setting up robust asynchronous workflows using Vanilla JavaScript.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)


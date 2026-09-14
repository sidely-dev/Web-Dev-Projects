# 🚀 Show Text

> A highly performant, accessible client-side text presentation utility built to render, manipulate, format, and visualize raw string inputs in real-time.

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

> This project is a minimalist, responsive frontend text workspace built using pure HTML5, CSS3, and modern JavaScript that takes user text inputs and instantly mirrors, formats, and transforms them onto a dynamic display layout.

### Why did I build it?

This project was created to:
- Master real-time input event tracking (`input` and `change` listeners) inside the browser DOM without lag.
- Learn text manipulation logic pipelines, including capitalization case conversions, character analytics, and sanitization protocols.
- Design an accessibility-focused tool providing variable font resizing overlays, maximum contrast text layouts, and distraction-free viewing modes.

### Project Background

This is a clean frontend utility and portfolio learning exercise engineered to practice fluid typographic scale layouts, reactive input pipelines, and distraction-free responsive workspace interfaces.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [x] Establish a completely zero-latency character input mirroring channel.
- [x] Build out multiple string case manipulation modifiers (Upper, Lower, Title, Sentence).
- [x] Create an accurate live metadata dashboard counting words, letters, and spaces.
- [x] Implement a single-click clean reset framework for instant field clearing.

---

## ✨ Features

### ✅ Implemented Features

- **Instant Echo Canvas** — Reactive layout mapping that copies and presents incoming keyboard characters immediately onto the presentation deck.
- **Granular String Statistics** — Live analytic tickers detailing active **Word Counts**, **Character Densities**, and **Whitespace Ratios**.
- **Case Conversion Deck** — One-tap operation modifiers that immediately rewrite text formats into screaming uppercase, clean lowercase, or structured title layouts.
- **Copy-to-Clipboard Pipeline** — Single-button macro utility allowing quick extraction of transformed strings with tactile UI state changes.

### 🚧 Features Currently Being Developed

- **Sanitization Firewall** — Adding automated text parsing loops to screen out potential malicious HTML script tags (`<script>`) from being unsafely printed onto the canvas.

### 🔮 Planned Features

- [ ] **Rich Markdown Previewer** — Incorporating basic regex converters that dynamically transform headers (`#`) and bullet points (`*`) into clean styled HTML components.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantically mapping the user input textareas and display boards |
| CSS3 | Dynamic typography scales, liquid flex frameworks, and micro-interactions |
| JavaScript (ES6+) | Direct string stream manipulation algorithms and reactive DOM operations |
| Git | Managing codebase branches and incremental snapshot saves |
| GitHub | Version control code deployment and GitHub Pages compilation hosting |

### Languages

- HTML5
- CSS3
- JavaScript (Vanilla)

### Frameworks / Libraries

- None (Built strictly using basic native browser API platforms to keep performance footprint small)

### Development Tools

- VS Code (IDE)
- Git & GitHub Workspace
- Browser Performance Inspection Tools

---

## 📂 Project Structure

```text
show-text-utility/
│
├── src/
│   ├── css/
│   │   └── typography.css  # Layout constraints, input textareas, and display scales
│   ├── js/
│   │   ├── engine.js       # Handles text transforms, counting regex, and sanitizing
│   │   └── app.js          # Main interaction router bridging text field inputs to display
│   └── index.html          # Core presentation display document structure
│
├── docs/
│   └── screenshots/        # Application layout visual walkthrough media items
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🖼️ Screenshots

*(Add your design capture layouts here once project phases conclude)*  
*Example placeholder:* `![Workspace Preview](docs/screenshots/show-text-ui.png)`

---

## 🚀 Getting Started

Follow these minimal operational variables to run the local playground instantly.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd show-text-utility
   ```

2. **Launch the workflow**
   This script relies on static native frontend formats. No backend node packaging installations are necessary.

### Usage

1. Double-click or trigger `src/index.html` inside your favored browser setup.
2. Type or paste your paragraphs directly into the input area field box.
3. Use the toggle configuration board to switch cases, review your structural analytics ledger, or extract the contents using the copy utility button.

---

## 🐛 Bugs & Fixes

- **Bug:** Copying entirely blank inputs broke clipboard interaction callbacks inside strict browser contexts.
- **Fix:** Structured an empty value condition guard that completely blocks copy pipeline actions if string lengths equal zero.

---

## 💡 Challenges & Struggles

The main hurdle was managing rapid keyboard input pipelines when heavy text documents are pasted into the window. Shifting data updates into an efficient, lightweight rendering block prevented browser layout reflow calculations from lagging the user workspace view.

---

## 🧠 What I Learned

- Learned how to write highly optimized Regular Expression models (`regex`) to accurately verify raw word groupings while omitting punctuation anomalies:
  ```javascript
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  ```
- Gained confidence deploying clean `textContent` methods rather than dangerous `innerHTML` tags to safeguard against cross-site scripting vulnerabilities.

---

## 🛠️ Development Process

The system construction followed a performance-first model: coding the internal word counting routines in baseline console containers first, building out the semantic accessibility HTML structures second, and concluding with micro-interaction hover modifications last.

---

## 🗺️ Roadmap

- [x] Phase 1: High-fidelity reactive text mirroring engine completed.
- [x] Phase 2: Integrated text case transformations matrix active.
- [ ] Phase 3: Raw markdown processing module delivery stage.

---

## ⚠️ Known Issues

- Pasting enormous books (exceeding hundreds of thousands of characters) can momentarily stutter rendering speeds if your browser hardware is running battery saving constraints.

---

## 🚀 Future Improvements

- Add a dynamic text-to-speech speaker utility utilizing the native Web Speech API to read aloud whatever content is loaded onto the viewing pane.

---

## 📝 Project Reflection

Building this application reinforced the power of core Vanilla JavaScript development. By omitting bulky UI frameworks, the system delivers instantaneous presentation outputs while remaining incredibly simple to read, write, and maintain.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

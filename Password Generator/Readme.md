# 🚀 Password Generator

> A highly secure, client-side web utility engineered to generate cryptographically secure, customizable random passwords based on user-defined complexity constraints.

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

> This project is a light, responsive web application built using HTML5, CSS3, and Vanilla JavaScript that generates strong random passwords locally in the user's browser, eliminating data privacy risks by never transmitting credentials over the internet.

### Why did I build it?

This project was created to:
- Learn the practical applications of the browser's native Web Crypto API (`crypto.getRandomValues`) over standard, predictable math functions.
- Build an interactive user interface that handles multiple state parameters (length sliders, character set toggles) and instantly reflects the data mutations.
- Design a real-time password entropy and strength meter based on mathematical character pool analysis.

### Project Background

This is a functional portfolio utility and learning exercise built to understand the baseline security mechanics of client-side cryptography and accessible UI layout design.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [x] Write a cryptographically secure random string generation algorithm.
- [x] Create an interactive UI with sliders and checkboxes for tailored password constraints.
- [x] Implement a reliable, single-click "Copy to Clipboard" utility function.
- [x] Build an evaluation module to grade password strength based on entropy values.

---

## ✨ Features

### ✅ Implemented Features

- **Entropy Strength Meter** — Visual gauge that color-codes the strength of the generated key (Weak, Medium, Strong) by calculating the pool size and bits of entropy.
- **Granular Customization Matrix** — Independent configuration toggles for uppercase letters, lowercase letters, numbers, and custom special characters.
- **Tactile Length Slider** — Fluid horizontal range slider allowing users to dial in exact lengths between 8 and 128 characters.
- **Secure Copy Clipboard Protocol** — Single-tap action to quickly copy the string with a temporary "Copied!" notification badge.

### 🚧 Features Currently Being Developed

- **Passphrase Generator Alternative** — An optional workspace toggle that pieces together random, memorable words from an integrated dictionary pool instead of raw character strings.

### 🔮 Planned Features

- [ ] **Password History Ledger** — A temporary session-only ledger allowing users to review previous strings generated during their active window lifespan (stored locally in-memory only).

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Provides the interactive form inputs, sliders, and card panels |
| CSS3 | Handles typography scales, micro-interactions, and color-coded meters |
| JavaScript (ES6+) | Direct Web Crypto execution, string compilation, and DOM binding |
| Git | Local version tracking and workflow snapshot rollbacks |
| GitHub | Code hosting, project organization, and public GitHub Pages deployment |

### Languages

- HTML5
- CSS3
- JavaScript (Vanilla)

### Frameworks / Libraries

- None (Built using pure web technologies to practice standard DOM programming patterns)

### Development Tools

- VS Code (IDE)
- Git & GitHub
- Browser Development Tool Suite

---

## 📂 Project Structure

```text
password-generator/
│
├── src/
│   ├── css/
│   │   └── style.css       # Layout grids, input overrides, and dynamic strength meters
│   ├── js/
│   │   ├── cryptoEngine.js # Handles secure character pool mapping and calculations
│   │   └── app.js          # Directs UI listener tracking and clipboard integrations
│   └── index.html          # Core dashboard display markup shell
│
├── docs/
│   └── screenshots/        # Assets for preview files mapping out the active states
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🖼️ Screenshots

*(Add your preview images here once your layouts are captured)*
*Example placeholder:* `![Dashboard View](docs/screenshots/generator-preview.png)`

---

## 🚀 Getting Started

Follow these brief operational parameters to run the security tool on your local setup.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd password-generator
   ```

2. **Run the utility**
   This application is purely static! No server installs, node downloads, or packaging files are needed.

### Usage

1. Double-click or open `src/index.html` inside your desktop or mobile browser canvas.
2. Select your desired parameters using the checkboxes and slide the length indicator to your preferred size.
3. Click **Generate Password** to watch the cryptography loop compile a secure code, then click the **Copy Icon** to paste it anywhere safely.

---

## 🐛 Bugs & Fixes

- **Bug:** Using basic `Math.random()` resulted in highly predictable character distribution strings across prolonged testing loops.
- **Fix:** Refactored the core logic matrix to implement the `window.crypto.getRandomValues()` method, ensuring full cryptographic randomness.

---

## 💡 Challenges & Struggles

The primary development hurdle involved maintaining at least one character from every active checkbox constraint pool in the final string layout. This was resolved by pre-populating initial array elements with one forced match per active selection before randomizing the remaining string contents.

---

## 🧠 What I Learned

- Learned the severe security differences between pseudo-random number generation (`Math.random`) and Cryptographically Secure Pseudo-Random Number Generation (CSPRNG via the Web Crypto API).
- Mastered the mathematical calculation parameters for tracking informational entropy:
  $$E = L \times \log_2(R)$$
  *(Where $L$ represents string length and $R$ represents the size of the available character pool).*

---

## 🛠️ Development Process

The system construction structure prioritized logical utility first. The CSPRNG algorithm calculations were constructed in terminal shells before styling layout parameters. Responsive design rules were mapped second, followed by subtle transitions for user feedback elements like clipboard notifications.

---

## 🗺️ Roadmap

- [x] Phase 1: Cryptographically secure calculation arrays verified.
- [x] Phase 2: Interface design layout execution complete.
- [ ] Phase 3: Passphrase dictionary matrix construction integration.

---

## ⚠️ Known Issues

- Niche mobile browsers with hardware privacy restrictions could occasionally restrict automatic copy-to-clipboard interactions if security sandbox flags are turned up high.

---

## 🚀 Future Improvements

- Add an interactive visual toggle matching the generated string against common database leaks using public data leak check APIs.

---

## 📝 Project Reflection

Building this application provided a deep dive into secure client-side computing parameters. By ensuring that no remote servers process data strings, the tool builds immense security confidence while keeping performance speeds virtually instantaneous.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

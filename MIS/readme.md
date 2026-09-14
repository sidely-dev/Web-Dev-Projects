# 🚀 MineSphere (Industrial Mining MIS)

> A high-performance Management Information System (MIS) engineered for heavy industry corporate infrastructure, providing executives with automated operations monitoring, fleet logistics telemetry, environmental safety guardrails, and real-time asset data filtering.

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

> MineSphere is an enterprise-grade Management Information System (MIS) designed to centralize and visualize critical operational metrics across distributed, high-risk mining environments. 

The application aggregates real-world external streaming data channels—simulating heavy equipment telematics, geographic structural statuses, supply-line shipping paths, and climate vulnerability matrixes—translating low-level sensor pipelines into actionable corporate intelligence logs.

### Why did I build it?

This project was created to explore deep systemic architectures between:
- Corporate data aggregation pipelines and executive dashboards.
- Multi-source third-party API orchestration (combining structural GIS positioning with climatic tracking).
- Time-series database schemas for high-velocity IoT telemetry tracking.
- Secure, role-based resource access structures (Executives vs. Regional Site Managers).

### Project Background

This is a comprehensive full-stack portfolio exercise designed to explore complex dashboard layout behaviors and test high-frequency data ingestion loops under heavy enterprise business simulation rules.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [ ] Structure a multi-tenant dashboard canvas mapping global mining assets visually.
- [ ] Implement secure API proxies to consume and pipe live external geolocation and geospatial datasets.
- [ ] Build transactional data computation modules to track daily volumetric output against yield goals.
- [ ] Construct automated alert flag rules triggered by volatile atmospheric or telemetry readings.

---

## ✨ Features

### ✅ Implemented Features

- **Global Operations Map Layout** — A spatial layout architecture tracking site coordinates (Latitude/Longitude) relative to dynamic visual viewports.
- **Role Workspace Templates** — Isolated user interface layouts matching target corporate administrative profiles (Operations Director vs Safety Auditor).
- **Metric Normalization Pipeline** — Data parsers designed to cleanly map raw, incoming JSON data elements into matching enterprise standard metrics.

### 🚧 Features Currently Being Developed

- **Live Environmental Proxy Engine** — Backend integration handlers connecting to open geographic and weather API streams to calculate site safety risk indices.
- **Telemetry Simulator Core** — An internal background loop generating realistic heavy machinery metrics (engine load, fuel burn, thermal vectors) for target operations tracking.

### 🔮 Planned Features

- [ ] **Predictive Maintenance Dashboard** — AI-simulated regression models flagging which heavy machinery models risk component failure within upcoming operation blocks.
- [ ] **Automated PDF Report Generator** — A scheduler script compiling active production outputs into formal weekly operational summaries.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantically mapping the core administration tables and grid matrices |
| CSS3 | Structural layout scales, interactive data cards, and warning color toggles |
| JavaScript (ES6+) | Telemetry parsing computation, asynchronous data loops, and view changes |
| Node.js + Express | Enterprise API orchestration layer, route handling, and server proxy tasks |
| MongoDB + Mongoose | Storing persistent site logs, user authorization tokens, and asset configurations |
| Chart.js / D3.js | Transforming telemetry datasets into readable trend graphs |
| Git & GitHub | Codebase snapshot tracking and remote management routines |

### Languages

- JavaScript (Node.js & Frontend DOM)
- HTML5
- CSS3

### Frameworks / Libraries

- Express.js (REST API Routing Layer)
- Mongoose (Database Schema Interface)
- Chart.js (Data Dashboard Visualizations)

### Development Tools

- VS Code (IDE)
- Git & GitHub Workspace
- Postman (API Performance Verification)

---

## 📂 Project Structure

```text
minesphere-mis/
│
├── frontend/
│   ├── index.html          # Executive main dashboard interface window
│   ├── safety.html         # Regional environmental reporting panel
│   ├── css/
│   │   └── dashboard.css   # Layout systems handling asset lists, data grids, and graphs
│   └── js/
│       ├── telemetry.js    # Directs chart initialization and analytics graphing updates
│       └── maps.js         # Handles site markers tracking positions across visual cards
│
├── backend/
│   ├── server.js           # Initial server framework entry point
│   ├── routes/
│   │   ├── operational.js  # Feeds computed machinery and yield metrics (`/api/metrics`)
│   │   └── liveSync.js     # Third-party proxy paths binding external weather/map APIs
│   ├── models/
│   │   ├── MiningSite.js   # Defines asset layout properties, location indexes, and goals
│   │   └── TelemetryLog.js # Stores granular data points detailing temporal machine states
│   └── utils/
│       └── riskEngine.js   # Computes real-time hazard indexes based on environment streams
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🚀 Getting Started

Review the setup requirements listed below to spin up this enterprise industrial dashboard mock environment locally.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd minesphere-mis
   ```

2. **Acquire Local Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Establish Environmental Variable Keys**
   Create a active `.env` parameters file inside the `backend/` folder:
   ```text
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   OPENWEATHER_API_KEY=your_free_weather_api_token
   ```

### Usage

1. **Fire up the backend orchestration engine**
   ```bash
   npm run dev
   ```
2. Open `frontend/index.html` via a live browser server utility to begin interacting with the operations map.
3. Observe the dashboard populate aggregated operational risk tables by pulling live data streams through your localhost server proxy paths.

---

## 🐛 Bugs & Fixes

*(Documentation of database validation overrides or API request timeout bugs resolved during sprints will go here)*

---

## 💡 Challenges & Struggles

The greatest challenge of building an MIS lies in **data orchestration**. Aggregating massive streams of disparate unstructured external telemetry arrays into a clean, unified dashboard layout requires rigorous validation, parsing, and data modeling filters to ensure system performance remains crisp.

---

## 🧠 What I Learned

- Learned how to use backend proxy route setups to mask and protect operational enterprise application keys from client exposure.
- Mastered structural data relational designs, modeling child machine tracking events directly back to parent geographic site documents inside non-relational database constraints.

---

## 🗺️ Roadmap

- [x] Phase 1: High-fidelity layout dashboards and mock layouts complete.
- [ ] Phase 2: Live environmental API integration and telemetry tracking simulator functional.
- [ ] Phase 3: Automated performance report scheduler module deployment.

---

## ⚠️ Known Issues

- Running endless simulator arrays alongside live chart rendering setups can elevate standard browser memory footprints during long inspection instances.

---

## 🚀 Future Improvements

- Incorporate WebSockets protocols (`Socket.io`) to transition standard REST API pulling routes into pure real-time, event-driven data streaming configurations.

---

## 📝 Project Reflection

Building this application provides deep insights into the architecture of modern enterprise information systems. Transitioning raw operational variables into real-time business indicators highlights the immense value of software solutions in driving critical corporate decisions.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)


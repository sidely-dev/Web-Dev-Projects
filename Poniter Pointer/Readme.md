# 🚀 Pointer Pointer

> An experimental, high-precision interactive web application that tracks a user's cursor or touch position to identify the closest matching coordinate in a database and display a corresponding pointing image.

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
- [How It Works](#-how-it-works)
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

> Pointer Pointer is an interactive, full-stack experiment exploring the relationship between real-time client input mechanics and rapid backend coordinate searching algorithms. 

The application dynamically tracks the positioning of a user's mouse cursor or touch gestures on screen, matches that precise grid signature against a ledger of stored directional data arrays, and instantly renders an image targeted directly back at where the user is pointing.

### Why did I build it?

This project was created to explore deep systemic connections between:
- Frontend layout interactions & pointer capture events
- Multi-dimensional coordinate indexing systems
- Liquid responsive design ratios
- High-frequency API request handling
- High-speed spatial database queries
- Dynamic image processing workflows
- Object storage infrastructures
- Spatial backend algorithms
- Headless content management systems

### Project Background

This is a personal architectural learning exploration designed to challenge standard grid-system scaling behaviors and explore geospatial/Euclidean distance matching algorithms under high-frequency client tracking situations.

---

## 🎯 Project Objectives

The main objectives of this project are:

- [ ] Create a completely responsive viewport canvas that accurately translates input positions into standardized metrics.
- [ ] Implement an efficient math engine to handle nearest-neighbor spatial algorithms efficiently.
- [ ] Build an asset management layout system that serves optimized image media files seamlessly.
- [ ] Structure an indexed database layout optimized to search and sort pairs of floating-point coordinate points without locking up.

---

## ✨ Features

### ✅ Implemented Features

- **Fluid Event Listener Engine** — Captures smooth, high-resolution desktop mouse vectors and mobile touch inputs.
- **Coordinate Normalization Matrix** — Translates raw screen layout pixel measurements into universal percentages (\(0\%\) to \(100\%\)) to keep accuracy uniform across varying screen form-factors.

### 🚧 Features Currently Being Developed

- **Nearest Neighbor API Controller** — Developing backend routing layers that accept coordinate parameters and resolve spatial queries swiftly.
- **Dynamic Asset Loader** — A responsive canvas component that gracefully loads and swaps incoming pointed images without shifting layout elements.

### 🔮 Planned Features

- [ ] **Admin Placement Panel** — An integrated grid setup tool allowing administrators to upload new pictures and visually pin their exact pointing focus coordinates.
- [ ] **Debounced Coordinate Cache** — An internal layer storing frequently requested localized grids in memory to bypass redundant database calls.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Provides the foundational interactive window layer canvas |
| CSS3 | Handles fluid layout ratios and full-bleed image adjustments |
| JavaScript (ES6+) | Normalizes pointer matrices and fires vector requests |
| Node.js + Express | Coordinates API middleware routines and executes mathematical queries |
| MongoDB / PostgreSQL | Stores the primary index of image asset paths and target locations |
| AWS S3 / Cloudinary | Secure object storage hosting the asset library safely |
| Git & GitHub | Codebase management and version history control |

### Languages

- JavaScript (Frontend & Backend)
- HTML5
- CSS3

### Frameworks / Libraries

- Express.js (Server routing framework)
- Mongoose (Object Data Modeling)

### Development Tools

- VS Code (IDE)
- Git & GitHub
- Postman (API Testing)

---

## 📂 Project Structure

```text
pointer-pointer/
│
├── frontend/
│   ├── index.html          # Central workspace viewport canvas layout
│   ├── css/
│   │   └── style.css       # Fluid layout dimensions, resets, and asset wrappers
│   └── js/
│       ├── tracker.js      # Intercepts movements and scales values to percentages
│       └── render.js       # Manages image loading, swapping, and visibility states
│
├── backend/
│   ├── server.js           # Boots server pipelines and builds database linkages
│   ├── routes/
│   │   └── coordinate.js   # Exposes matching algorithm access points (`/api/match`)
│   ├── models/
│   │   └── PointImage.js   # Defines asset parameters, file paths, and target coordinates
│   └── utils/
│       └── distanceCalc.js # Runs math operations to locate closest coordinate tags
│
├── README.md
├── DEVELOPMENT_LOG.md
└── .gitignore
```

---

## 🧠 How It Works

The lifecycle of an input tracking sequence follows an absolute structural loop:

```text
User moves cursor / taps screen
              │
              ▼
       Frontend captures
          x / y position
              │
              ▼
      Coordinates normalized
          to percentages
              │
              ▼
         Backend API
              │
              ▼
     Matching algorithm
              │
              ▼
       Search database
              │
              ▼
     Find closest coordinate
              │
              ▼
       Return image data
              │
              ▼
       Display image
```

---

## 🚀 Getting Started

To launch and run this spatial experiment locally, review the setup details below.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com
   cd pointer-pointer
   ```

2. **Configure local server dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Establish environmental configurations**
   Create a `.env` file within your `backend/` directory path:
   ```text
   PORT=5000
   MONGO_URI=your_database_connection_string
   STORAGE_BUCKET_URL=your_asset_bucket_destination
   ```

### Usage

1. **Fire up the backend search engine**
   ```bash
   npm run dev
   ```
2. Open `frontend/index.html` via a live local server extension inside your favorite web editor.
3. Move your mouse or glide across your touch panel screen to observe real-time coordinate transformations tracking.

---

## 🐛 Bugs & Fixes

*(Documentation of bugs resolved during active project sprints will be updated here)*

---

## 💡 Challenges & Struggles

The greatest structural struggle lies in maintaining target point lock parameters when window sizes shift dramatically. Resolving pixel positions into relative percentage grids effectively solves standard layout scaling discrepancies across varying modern hardware interfaces.

---

## 🧠 What I Learned

- Learned how to deploy basic Euclidean distance matching algorithms:
  $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
- Gained experience using input throttling patterns to manage high-frequency coordinate tracking events without flooding the network architecture.

---

## 🗺️ Roadmap

- [x] Phase 1: High-resolution pointer movement capture scripts complete.
- [ ] Phase 2: Dynamic database proximity testing.
- [ ] Phase 3: Edge caching and image loader delivery optimization.

---

## ⚠️ Known Issues

- Rapid screen movement loops on ultra-high refresh rate displays can challenge baseline server traffic boundaries if debouncers are disabled.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

* **Your Name** - [GitHub Profile](https://github.com) | [LinkedIn](https://linkedin.com)

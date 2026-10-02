# Tula's International School — Homepage Redesign

A modern, high-converting, animated, and responsive redesign of the official **Tula's International School (TIS)** homepage built for the Frontend Developer Assessment.

Live Reference Website: [tis.edu.in](https://tis.edu.in/)

---

## 🌟 Executive Overview

This project elevates the digital presence of **Tula's International School (Dehradun)** by transforming its homepage into a premium, interactive storytelling experience. It maintains 100% fidelity to TIS's authentic identity, awards, affiliations (CBSE Class IV to XII), location, and campus facilities while delivering an intuitive user flow from **DISCOVER → UNDERSTAND → TRUST → EXPLORE → ENQUIRE**.

---

## ✨ Standout Features & Highlights

1. **Custom Interactive Desktop Cursor (`CustomCursor.jsx`)**: Magnetic smooth spring tracking cursor that morphs and scales when hovering over buttons, links, and interactive cards. Automatically disabled on touch/mobile devices for optimal UX.
2. **Modular Scroll Reveal System (`ScrollReveal.jsx`)**: Centralized animation component powered by Framer Motion supporting `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`, and `staggerContainer` variants with built-in `prefers-reduced-motion` accessibility support.
3. **Scroll Reading Progress Bar (`ScrollProgress.jsx`)**: Top-anchored reading progress bar showing exact scroll depth across sections.
4. **Scroll-Spy Active Navbar Highlighting (`Navbar.jsx`)**: Dynamic `IntersectionObserver` scroll-spy active section indicators on the sticky header.
5. **Interactive 16+ Sports Gallery (`Sports.jsx`)**: Clickable showcase for TIS's sports infrastructure (Archery, Swimming, Horse Riding, Football, Taekwondo, Rifle Shooting, etc.).
6. **Stateful Admission Enquiry Form (`AdmissionCTA.jsx`)**: Conversational admission form featuring class selection, state selection, consent checkboxes, instant client-side validation, and counselor helpline integration.
7. **100% Verified TIS Data (`schoolData.js`)**: All content (Rishabh Educational Trust, AWaDH IIT Ropar Lab, Education Today #5 ranking, IGBC Green Campus certification) is data-driven and strictly reflects real school facts.

---

## 🛠️ Technology Stack

* **Core Framework**: React.js 19
* **Build Tool**: Vite 8
* **Styling & Design System**: Tailwind CSS v4
* **Animation Engine**: Framer Motion 14
* **Icons**: Lucide React
* **Language**: JavaScript (JSX)

---

## 📁 Project Architecture

```
tis-homepage-redesign/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/          # High-resolution campus & sports assets
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Card.jsx
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── animation/
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── ScrollProgress.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── WhyTIS.jsx
│   │       ├── Academics.jsx
│   │       ├── StudentLife.jsx
│   │       ├── Sports.jsx
│   │       ├── Facilities.jsx
│   │       ├── Statistics.jsx
│   │       ├── Recognition.jsx
│   │       ├── Testimonials.jsx
│   │       └── AdmissionCTA.jsx
│   ├── data/
│   │   └── schoolData.js
│   ├── hooks/
│   │   └── useMousePosition.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

---

## 💡 Technical Review & Interview Cheat-Sheet

When presenting or explaining this codebase during a technical interview, key decisions to highlight include:

1. **Why Vite + React 19 over Next.js?**
   * Eliminates SSR complexity and unnecessary hydration overhead for a client-side marketing homepage assessment. Builds in under 1.5s and delivers 100% static client performance.
2. **Centralized Animation Strategy**:
   * Instead of embedding duplicated Framer Motion config objects inside every section component, animation logic is centralized inside `ScrollReveal.jsx`. It supports OS-level `prefers-reduced-motion` to ensure zero accessibility barriers.
3. **Data-Driven Maintainability**:
   * All institutional facts, house details, rankings, sports list, and contact helplines are stored in `src/data/schoolData.js`. If the school adds a new sport or ranking, it can be updated in one location without editing JSX templates.
4. **Touch Device Fallback for Custom Cursor**:
   * Custom cursors can cause unwanted lag or blocking on mobile/touch screens. The `useMousePosition.js` hook evaluates `ontouchstart` and `navigator.maxTouchPoints` on initialization, conditionally turning off custom cursor rendering on touch devices.

---

## 🚀 Setup & Installation Instructions

### Prerequisites
* Node.js (v18.0.0 or higher)
* npm (v9.0.0 or higher)

### 1. Installation
```bash
# Navigate into project directory
cd tis-homepage-redesign

# Install dependencies
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle inside the `dist/` directory.

---

## 🌐 Vercel Deployment

This project is prepared for single-click Vercel deployment:

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

---

## 🎨 Design System & UX Rationale

* **Color Palette**:
  * **Primary Crimson**: `#B90124` (Authentic TIS Brand Heritage)
  * **Teal Accent**: `#60BAB1` & `#007A83` (Modern Freshness & Trust)
  * **Warm Gold**: `#C09D59` (Excellence & Distinction)
  * **Soft Mint**: `#BEE2E4` (Clean Backgrounds)
* **Typography**: Clean sans-serif hierarchy using Inter with responsive fluid scale (`text-[clamp(...)]`).
* **Accessibility**: Full semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`), keyboard focus indicators, and `prefers-reduced-motion` compliance.

---

# Sustune Care — Dual-Shield NRI Care Ecosystem

> Complete production-grade web application built for **Sustune Care** (Version 1 Original Design), providing asset stewardship (Aegis Property) and geriatric healthcare concierge (Sparsh Healthcare) for the Non-Resident Indian (NRI) diaspora.

---

## 🌟 Key Features

1. **Dual-Shield Hub (`/`)**
   - Anxiety-to-Certainty Interactive Comparison Matrix
   - Service Division breakdown (Aegis Property & Sparsh Healthcare)
   - Real-time Total Cost of Ownership (TCO) Currency Estimator with live conversion (USD, CAD, GBP, EUR, AED, SGD, INR)
   - High-Definition Video Showcase & Diaspora Trust Testimonials across 6 global time zones
   - Coverage Hubs across India (Bengaluru, Hyderabad, Mumbai, Pune, Delhi NCR, Chennai, Kochi, Ahmedabad)

2. **Aegis Property Stewardship (`/aegis`)**
   - 80-Point Physical Inspection checklist viewer (Structural, MEP, Moisture/Seepage, Perimeter)
   - Squatter defense, municipal tax/khata concierge, tenant vetting
   - Emergency water leakage & power outage response protocols (2-hour SLA)
   - Dynamic Currency Tier pricing

3. **Sparsh Healthcare Concierge (`/sparsh`)**
   - 24/7 Geriatric Emergency Response & ICU triage protocol
   - Chronic disease management & bi-weekly vitals dashboard
   - Doctor accompany concierge with bilingual physician advocates
   - Post-op home rehab & dementia companion services

4. **Interactive Dual-Shield Client Portal (`/portal-preview`)**
   - Live Emergency SOS simulation triggers audible protocol response
   - Real-time IoT sensor telemetry (Water leak sensors, Main door contact, Ambient temperature)
   - Recent verified inspection logs with geo-stamped photos & PDF audit reports
   - Elder vitals trends (Blood pressure, Fasting glucose, SpO2)

5. **NRI Intake & Consultation (`/contact`)**
   - Multi-step priority consultation form
   - Real-time timezone detection (PST, EST, GMT, GST, SGT, IST)
   - Instant WhatsApp dispatch direct integration

---

## 🚀 Quick Start (Running Locally)

### Option 1: One-Click Launcher (Windows)
Double-click `start.bat`. It will automatically check for Node.js, install dependencies if missing, launch the server, and open your browser at `http://localhost:5173`.

### Option 2: Mac / Linux
Run in your terminal:
```bash
chmod +x start.sh
./start.sh
```

### Option 3: Manual Terminal Commands
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# Navigate to: http://localhost:5173
```

---

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```
The output files will be in the `dist/` directory, ready to deploy to Vercel, Netlify, AWS S3, or any static web host.

To preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS 4 with custom Sustune Care color tokens:
  - Deep Navy (`#0D3B66`)
  - Imperial Gold (`#C99738`)
  - Cerulean Blue (`#0073B7`)
  - Medical Emerald (`#0A8754`)
  - Slate Dark (`#1E293B`)
- **Icons:** Lucide React
- **Routing:** React Router v7
- **Assets:** Original Sustune Care SVG/PNG vector branding, plus 4 high-definition video assets in `public/videos/`

---

## 📁 Project Structure

```
sustunecare-first-version/
├── dist/                   # Production-ready build artifacts
├── public/
│   ├── brand/              # Sustune Care vector & raster brand assets
│   ├── videos/             # 4 original MP4 video assets
│   └── favicon.png         # Dual-Shield favicon
├── src/
│   ├── components/
│   │   ├── common/         # Navbar, Footer, ConsultationModal, VideoModal, ScrollToTop
│   │   └── home/           # DualHero, AnxietyMatrix, ServiceMatrix, TcoEstimator, VideoShowcase, DiasporaTestimonials, HubsMap
│   ├── context/            # CurrencyContext (global real-time exchange rates)
│   ├── data/               # mockData.ts (tiers, testimonials, hubs, inspection metrics)
│   ├── pages/              # HomePage, AegisPage, SparshPage, PortalPreviewPage, ContactPage
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Main routing configuration
│   ├── index.css           # Tailwind CSS directives & custom styling
│   └── main.tsx            # React application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── start.bat               # 1-click Windows launcher
├── start.sh                # 1-click Mac/Linux launcher
└── README.md
```

© 2026 Sustune Care. All rights reserved.

# TECHNICAL STACK REPORT

**Product:** ezyHR SaaS Web Application  
**Inspection Date:** August 12, 2026  

---

## 1. Core Technology Stack

- **Frontend Framework:** React `v18.3.1` (JSX/TSX Functional Components)
- **Language:** TypeScript `v5.7.3` (Strict Type Checker Enabled)
- **Build Tool & Bundler:** Vite `v5.4.14` (ESBuild transpilation, fast HMR)
- **CSS Framework:** Tailwind CSS `v3.4.17` (Utility-first styling with `@tailwindcss/vite` plugin compatibility)
- **PostCSS & Autoprefixer:** PostCSS `v8.5.2`, Autoprefixer `v10.4.20`
- **Icon Library:** Lucide React `v0.475.0`
- **Animation Engine:** Framer Motion `v11.18.2` & Clean CSS Micro-interactions
- **Utility Libraries:** `clsx` (`v2.1.1`), `tailwind-merge` (`v3.0.1`)

---

## 2. Package Inventory (`package.json`)

```json
{
  "name": "ezyhr-landing-page",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.18.2",
    "lucide-react": "^0.475.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@types/node": "^22.13.4",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3",
    "vite": "^5.4.14"
  }
}
```

---

## 3. Application Architecture

```
Browser Request (http://localhost:5173/)
    ↓
index.html (HTML5, Google Fonts, SEO Meta, JSON-LD Schemas)
    ↓
src/main.tsx (React DOM Root Hydration)
    ↓
src/App.tsx (Main Layout State & Modal Container)
    ↓
├── src/components/navbar/Navbar.tsx
├── src/sections/*.tsx (20 Modular Page Sections)
├── src/components/footer/Footer.tsx
└── src/components/modals/*.tsx (Interactive Demo, Trial, Payslip Modals)
```

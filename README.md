# RV SUPERSPECIALITY EYE CARE
> **RIGHT PLACE FOR YOUR BRIGHT VISION**

A modern, responsive, and high-performance super-speciality eye hospital website built for **RV SUPERSPECIALITY EYE CARE**.

---

## 🌟 Overview

RV Superspeciality Eye Care is dedicated to comprehensive ophthalmic care, precise diagnostic evaluation, and compassionate patient vision preservation. This web platform delivers a hospital-grade digital experience with Telugu & English bilingual scope navigation, symptom guidance, appointment scheduling, and responsive mobile-first design.

---

## 🎨 Brand Identity & Color System

Designed with the hospital's authentic visual identity:

- **Primary Navy Blue**: `#142F80` – Professionalism, authority, clinical excellence
- **Vibrant Orange**: `#F36B16` – Warmth, clarity, energetic call-to-actions
- **Pure White**: `#FFFFFF` – Clean, sterile medical background
- **Soft Blue White**: `#F3F6FC` – Gentle contrast for alternating sections
- **Dark Charcoal Text**: `#202638` – High contrast readability (WCAG AA compliant)
- **Muted Text**: `#667085` – Subtitles, metadata, and timestamps
- **Border**: `#E3E9F4` – Subtle architectural card contours

---

## 🏥 Scope of Services (Available Services)

1. **General Eye Check-up** (*జనరల్ ఐ చెకప్*)
2. **Cataract Services** (*క్యాటరాక్ట్ సర్వీసెస్*)
3. **Cornea Services** (*కార్నియా సర్వీసెస్*)
4. **Glaucoma Services** (*గ్లకోమా సర్వీసెస్*)
5. **Medical Retina Services** (*మెడికల్ రెటినా సేవలు*)
6. **Opticals** (*ఆప్టికల్స్*)

### ⚠️ Non-Scope of Services (Clearly Segregated)
To prevent patient misunderstanding, non-scope treatments are clearly segregated with referral disclaimers and no direct booking buttons:
- Eye Bank (*ఐ బ్యాంక్*)
- Squint Surgery (*స్క్వింట్ సర్జరీ*)
- Vitreoretinal Surgery (*విట్రో రెటినల్ సర్జరీ*)

---

## 🚀 Tech Stack

- **React 18** – Modern functional components and hooks
- **Vite** – Ultra-fast development and optimized production bundling
- **React Router DOM v6** – Client-side multi-page routing
- **Tailwind CSS 3** – Utility-first responsive styling
- **Lucide React** – Clean medical and interface iconography
- **Pure Frontend Architecture** – Zero backend/database dependency, instant Vercel static deployment

---

## 📱 Key Features

- **Left-to-Right Mobile Slide Drawer**: Accessible drawer menu with close ('X') button, auto-closing on route navigation, and background touch lock.
- **Scroll Reveal Animations**: Smooth fade-in scroll animations (`fade-in-up`) powered by lightweight `IntersectionObserver`.
- **Zero Horizontal Scroll**: Strict viewport constraints and safe transforms guaranteeing seamless browsing across all screen sizes.
- **Interactive Symptom Guide**: Patient triage tool matching everyday vision complaints to appropriate consultation departments.
- **Appointment Booking Flow**: Validated frontend booking form with printable confirmation slip generator.
- **High-Definition Authentic Branding**: High-res logo banner integration in header, drawer, and footer.

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mani8979/rveyecare.git

# Navigate into project directory
cd rveyecare

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🛠️ Building for Production

```bash
# Build production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deploying to Vercel

This repository includes a pre-configured `vercel.json` for single-page application (SPA) routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy on Vercel:
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository: `mani8979/rveyecare`.
4. Configure Project settings (auto-detected):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build and assign your production domain within seconds.


# ASIA FASTNERS PVT LTD — Web Architecture & Documentation

This repository contains the official website for **Asia Fastners Pvt Ltd**, an international industrial fasteners manufacturing and supply enterprise.

---

## 1. Project Directory Structure

```
asia-fastners/
├── index.html                   # Primary entry point (redirect / default root)
├── asia-fastners.html           # Main homepage (3D hero, story scroller, catalog, lab, quote modal)
├── industries.html              # Dedicated Industries showcase (9 engineering sectors & tabs)
├── contact.html                 # Dedicated Contact page (verified corporate desk details)
├── server.js                    # Local development preview server (Node.js)
│
├── css/
│   ├── main.css                 # Design tokens (:root), typography, nav, forms, modals & footer
│   ├── animations.css           # Nut & Bolt transition overlay & keyframe animations
│   ├── home.css                 # 3D canvas, story chapters, product grid, lab & mobile rules
│   ├── industries.css           # Panoramic hero banner, industry tabs, dynamic showcase
│   └── contact.css              # Contact hero banner, 5-column info cards & CTA
│
├── js/
│   ├── config.js                # Business data (email, phone, WhatsApp) & DOM helper utilities
│   ├── main.js                  # Sticky navbar scroll listener & mobile hamburger menu
│   ├── transition.js            # Cinematic Nut & Bolt transition between views and pages
│   ├── quote-modal.js           # Quotation modal, enquiry basket state & FormSubmit handler
│   ├── three-scene.js           # Three.js procedural 3D Nut & Bolt scene & scroll choreo
│   ├── products.js              # Products dataset, live search, category filter & basket add
│   ├── industries.js            # 9-Sector data model, tab buttons & crossfade showcase
│   └── contact.js               # Dynamic verified contact cards & direct dial/chat links
│
└── assets/
    ├── precision-fasteners.jpg  # Hero metallic fasteners photography
    ├── industry-automotive.jpg  # Automotive engineering photography
    ├── industry-construction.jpg# Construction & structural steelwork
    ├── industry-electrical.jpg  # Electrical & switchgear equipment
    ├── industry-engineering.jpg # Precision mechanical engineering
    ├── industry-fabrication.jpg # Metal fabrication & welding
    ├── industry-infrastructure.jpg # Infrastructure, bridges & gantries
    ├── industry-machinery.jpg   # Heavy industrial machinery & equipment
    ├── industry-maintenance.jpg # Plant MRO & maintenance turnarounds
    └── industry-manufacturing.jpg # Automated manufacturing & robotics
```

---

## 2. File Responsibilities & Modules

| File | Purpose & Responsibilities |
| :--- | :--- |
| **`css/main.css`** | Central design variables (`--bg`, `--tx`, `--or`, `--ln`), typography resets, header/navbar, buttons (`.btn`, `.btn.p`, `.btn.b`), base form controls, quotation modal dialog, basket drawer, mobile bottom bar, and shared footer. |
| **`css/animations.css`** | The cinematic Nut & Bolt page transition overlay (`#nutBoltOverlay`), rotating gears, fastening nut motion, spark burst, progress meter, and panel slide keyframes. |
| **`css/home.css`** | Three.js `#c` canvas styling, `#hero` section, `#story` scroll-linked chapters (`.stick`, `.ch`), product grid cards, and interactive 3D lab controls. |
| **`css/industries.css`** | Panoramic blended hero banner, sticky industry selector tab strip, dynamic showcase banner with focus areas, technical pill badges, and engineering reliability grid. |
| **`css/contact.css`** | Contact showcase hero banner with metallic nuts/bolts photography, 5-column contact information cards grid, and corporate enquiry CTA. |
| **`js/config.js`** | Unified business configuration (`CONFIG`), company destination email (`akshtyagiindia@gmail.com`), DOM helpers (`$`, `$$`, `esc`, `RM`, `waLink`), and dynamic copyright year. |
| **`js/main.js`** | Global shell scripts: sticky navbar blur and box-shadow on scroll, responsive mobile navigation toggle. |
| **`js/transition.js`** | Mechanical Nut & Bolt transition animation handling seamless page changes between Home, Industries, and Contact. |
| **`js/quote-modal.js`** | Unified quotation system: basket persistence via `localStorage`, quantity, size, grade adjustments, and direct mail dispatch without opening email client. |
| **`js/three-scene.js`** | Complete Three.js WebGL procedural modeling of hex bolt, nut, and washer, PBR metallic materials, directional lights, scroll-based disassembly, and drag-to-rotate interaction. |
| **`js/products.js`** | Product catalog items array, category filter tabs, keyword search, alphabet/reverse sort, and "Add to Enquiry" basket integration. |
| **`js/industries.js`** | 9-Sector data model, dynamic tab rendering, and instant image/copy crossfading on tab click. |
| **`js/contact.js`** | Verified contact card generation, telephone formatting, and WhatsApp messaging links. |

---

## 3. Local Development Preview

To test locally with active form dispatch:
```bash
node server.js
```
Open **`http://localhost:3000/asia-fastners.html`** in your browser.

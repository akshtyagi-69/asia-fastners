# ASIA FASTNERS PVT LTD — Web Architecture & Documentation

Official website for **Asia Fastners Pvt Ltd**, an international industrial fasteners manufacturing and supply enterprise.

---

## 1. Project Directory Structure

```
asia-fastners/
├── index.html                   # Primary entry point & homepage (3D hero, story, catalog, lab, quote modal)
├── industries.html              # Dedicated Industries showcase (9 engineering sectors & tabs)
├── quality.html                 # Dedicated Quality Assurance & Metrology standards showcase
├── contact.html                 # Dedicated Contact page (verified corporate desk details)
├── 404.html                     # Custom branded 404 error page with search & quick links
├── server.js                    # Local development preview server (Node.js)
├── CNAME                        # Production domain mapping (asiafastners.com)
├── sitemap.xml                  # XML sitemap for search engines
├── robots.txt                   # Web crawler directives
├── llm.txt                      # AI & LLM reference specification
├── favicon.svg                  # Industrial vector monogram favicon
│
├── css/
│   ├── main.css                 # Design tokens (:root), typography, nav, breadcrumbs, forms, modals & footer
│   ├── animations.css           # Nut & Bolt transition overlay & keyframe animations
│   ├── home.css                 # 3D canvas, story chapters, product grid, lab & mobile rules
│   ├── industries.css           # Panoramic hero banner, industry tabs, dynamic showcase
│   ├── quality.css              # Quality hero banner, testing pillars & certification cards
│   └── contact.css              # Contact hero banner, 5-column info cards & CTA
│
├── js/
│   ├── config.js                # Business data (email, phone, WhatsApp) & DOM helper utilities
│   ├── main.js                  # Sticky navbar scroll listener & mobile hamburger menu
│   ├── transition.js            # Cinematic Nut & Bolt transition between views and pages
│   ├── quote-modal.js           # Quotation modal, enquiry basket state & FormSubmit handler
│   ├── three-scene.js           # Three.js procedural 3D Nut & Bolt scene & scroll choreo
│   ├── products.js              # Products dataset, multi-variety slider, live search & basket add
│   ├── industries.js            # 9-Sector data model, tab buttons & crossfade showcase
│   └── contact.js               # Dynamic verified contact cards & direct dial/chat links
│
└── assets/
    ├── favicon.svg              # Vector favicon copy for relative asset linking
    ├── precision-fasteners.jpg  # Hero metallic fasteners photography
    ├── about-fasteners-background.png # High-res About section fastener background
    ├── quality-caliper-measurement.jpg # Quality metrology photography
    ├── industry-automotive.jpg  # Automotive engineering photography
    ├── industry-construction.jpg# Construction & structural steelwork
    ├── industry-electrical.jpg  # Electrical & switchgear equipment
    ├── industry-engineering.jpg # Precision mechanical engineering
    ├── industry-fabrication.jpg # Metal fabrication & welding
    ├── industry-infrastructure.jpg # Infrastructure, bridges & gantries
    ├── industry-machinery.jpg   # Heavy industrial machinery & equipment
    ├── industry-maintenance.jpg # Plant MRO & maintenance turnarounds
    ├── industry-manufacturing.jpg # Automated manufacturing & robotics
    └── product-*.jpg / *.png    # High-resolution product line & variant photographs
```

---

## 2. File Responsibilities & Modules

| File | Purpose & Responsibilities |
| :--- | :--- |
| **`index.html`** | Single entry point and homepage containing the Three.js 3D hero canvas, company story, interactive product catalog with multi-variety image carousels, 3D Assembly Lab, and quotation modal. |
| **`industries.html`** | Deep-dive page detailing 9 industrial sectors served, focus applications, technical standards, and interactive tab switches. |
| **`quality.html`** | Dedicated Quality Assurance showcase covering precision tolerances, chemical/tensile metallurgy, metrology lab, and DIN/ISO/ASTM compliance. |
| **`contact.html`** | Corporate contact portal with direct telephone, WhatsApp, business hours, headquarters address, and RFQ form dispatch. |
| **`404.html`** | Standalone error recovery page with quick navigation, category links, and embedded quotation request dialog. |
| **`css/main.css`** | Central design variables (`--bg`, `--tx`, `--or`, `--ln`), typography resets, header/navbar, breadcrumb trail, buttons, base form controls, quotation modal dialog, basket drawer, and shared footer. |
| **`css/animations.css`** | The cinematic Nut & Bolt page transition overlay (`#nutBoltOverlay`), rotating gears, fastening nut motion, spark burst, progress meter, and panel slide keyframes. |
| **`css/home.css`** | Three.js `#c` canvas styling, `#hero` section, `#story` scroll-linked chapters, product catalog cards, interactive image slider styling, and 3D lab controls. |
| **`css/industries.css`** | Panoramic blended hero banner, sticky industry selector tab strip, dynamic showcase banner with focus areas, technical pill badges, and engineering reliability grid. |
| **`css/quality.css`** | Quality assurance hero, 4 testing pillars, metrology lab showcase, and mill test report highlights. |
| **`css/contact.css`** | Contact showcase hero banner with metallic nuts/bolts photography, 5-column contact information cards grid, and corporate enquiry CTA. |
| **`js/config.js`** | Unified business configuration (`CONFIG`), company destination email (`akshtyagiindia@gmail.com`), DOM helpers (`$`, `$$`, `esc`, `RM`, `waLink`), and dynamic copyright year. |
| **`js/main.js`** | Global shell scripts: sticky navbar blur and box-shadow on scroll, responsive mobile navigation toggle. |
| **`js/transition.js`** | Mechanical Nut & Bolt transition animation handling seamless page changes between Home, Industries, Quality, and Contact. |
| **`js/quote-modal.js`** | Unified quotation system: basket persistence via `localStorage`, quantity, size, grade adjustments, and direct mail dispatch without opening email client. |
| **`js/three-scene.js`** | Complete Three.js WebGL procedural modeling of hex bolt, nut, and washer, PBR metallic materials, directional lights, scroll-based disassembly, and drag-to-rotate interaction. |
| **`js/products.js`** | Product catalog items array, category filter tabs, keyword search, alphabet/reverse sort, interactive multi-variety image slider, and "Add to Enquiry" basket integration. |
| **`js/industries.js`** | 9-Sector data model, dynamic tab rendering, and instant image/copy crossfading on tab click. |
| **`js/contact.js`** | Verified contact card generation, telephone formatting, and WhatsApp messaging links. |

---

## 3. Local Development Preview

To test locally with active form dispatch and proper 404 routing:
```bash
node server.js
```
Open **`http://localhost:3000/`** in your browser.

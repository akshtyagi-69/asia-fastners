/**
 * ASIA FASTNERS PVT LTD - INDUSTRIES SHOWCASE DATA & INTERACTIVITY (industries.js)
 * Manages 9 specialized industry datasets, tab switching, and dynamic panoramic showcase updates.
 */

const INDUSTRIES_DATA = [
  {
    id: "automotive",
    name: "Automotive",
    title: "Automotive Engineering",
    desc: "Reliable fastening components support vehicle assembly, mechanical systems and demanding automotive applications under heavy vibration and stress cycles.",
    img: "assets/industry-automotive.jpg",
    badge: "Automotive Assembly Line",
    spec: "High Tensile • Anti-Vibration",
    apps: [
      "Chassis, Powertrain & Suspension Joints",
      "Body-in-White Robotic Assembly",
      "Subframe & Transmission Mounting"
    ],
    fasteners: ["Flange Bolts", "SEM Screws", "Grade 8.8 / 10.9 Bolts", "Prevailing Torque Nuts"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`
  },
  {
    id: "construction",
    name: "Construction",
    title: "Civil & Structural Construction",
    desc: "Dependable fastening solutions support structural assemblies, steel frameworks and demanding construction applications requiring tested load capacities.",
    img: "assets/industry-construction.jpg",
    badge: "Structural Steel Joint",
    spec: "High-Strength • Hot-Dip Galvanized",
    apps: [
      "Heavy Structural Steel Column-Beam Splicing",
      "Seismic Bracing & Anchor Base Plates",
      "Modular Framework & Prefabricated Trusses"
    ],
    fasteners: ["Heavy Hex Bolts", "Hardened Structural Washers", "Grade 8.8 Hex Nuts", "Anchor Rods"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    title: "Industrial Manufacturing",
    desc: "Precision fasteners designed for high-cycle production lines, automated robotics and modern manufacturing equipment where consistency is paramount.",
    img: "assets/industry-manufacturing.jpg",
    badge: "Robotic Assembly Fixture",
    spec: "Precision Tolerances • Zinc Plated",
    apps: [
      "High-Speed Automated Conveyor Systems",
      "Robotic Tooling & End-Effector Mounting",
      "Precision Production Jigs & Fixtures"
    ],
    fasteners: ["SEM Screws", "Flange Bolts", "Socket Head Cap Screws", "Nyloc Nuts"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`
  },
  {
    id: "engineering",
    name: "Engineering",
    title: "Precision Mechanical Engineering",
    desc: "Engineered hardware manufactured to exacting dimensional tolerances and rigorous metallurgical standards for critical mechanical assemblies.",
    img: "assets/industry-engineering.jpg",
    badge: "CNC Machined Assembly",
    spec: "ISO / DIN Compliance • Class 10.9",
    apps: [
      "High-Precision Gearbox & Drive Connections",
      "Turbine Housing & Compressor Bolting",
      "Specialty Hydraulic Manifold Mounting"
    ],
    fasteners: ["Precision Hex Screws", "Countersunk Bolts", "Spring Washers", "Precision Dowels"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    title: "Large-Scale Infrastructure",
    desc: "Robust fasteners engineered for bridges, utility networks, highway gantries and heavy public works requiring long-term durability in outdoor environments.",
    img: "assets/industry-infrastructure.jpg",
    badge: "Steel Suspension Bridge Joint",
    spec: "Corrosion Resistant • Fatigue Rated",
    apps: [
      "Highway Bridge Girder & Bearing Fastening",
      "Overhead Transmission Tower Structures",
      "Rail Track Bed Infrastructure & Retaining"
    ],
    fasteners: ["High-Tensile Hex Bolts", "Heavy Structural Nuts", "Large-Diameter Washers", "Galvanized Studs"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"/><path d="M6 22V6l6-4 6 4v16"/><path d="M10 22v-6h4v6"/><path d="M6 10h12"/><path d="M6 14h12"/><path d="M6 18h12"/></svg>`
  },
  {
    id: "fabrication",
    name: "Fabrication",
    title: "Metal Fabrication & Welding",
    desc: "Versatile industrial hardware for custom metal shops, welding enclosures and sheet metal structures needing clean fitment and strong clamp force.",
    img: "assets/industry-fabrication.jpg",
    badge: "Custom Steel Framework",
    spec: "Standard Pitch • Clean Assembly",
    apps: [
      "Custom Structural Enclosure Assemblies",
      "Industrial Staircases, Handrails & Platforms",
      "Heavy Machine Bases & Gusset Brackets"
    ],
    fasteners: ["Hex Head Bolts", "Flange Nuts", "Flat & Split Washers", "Threaded Rods"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 3.26-1.25-1.25a2.12 2.12 0 0 0-3 0l-3.38 3.38"/><path d="m4.93 19.07 4.24-4.24"/></svg>`
  },
  {
    id: "machinery",
    name: "Machinery",
    title: "Heavy Machinery & Equipment",
    desc: "Severe-duty fasteners built to absorb severe shock loads, thermal expansion and high mechanical stress in heavy industrial machines.",
    img: "assets/industry-machinery.jpg",
    badge: "Industrial Heavy Machinery",
    spec: "Grade 10.9 / 12.9 • Heat Treated",
    apps: [
      "Earthmoving & Quarrying Equipment Chassis",
      "Heavy Crane Booms & Slewing Ring Mounting",
      "Crusher & Ball Mill Drive Housings"
    ],
    fasteners: ["Heavy Flange Bolts", "Hardened Washers", "Slotted Castle Nuts", "High-Torque Cap Screws"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`
  },
  {
    id: "electrical",
    name: "Electrical",
    title: "Electrical & Power Equipment",
    desc: "Compact, dependable fastening solutions for switchgear cabinets, transformers and electrical enclosures requiring clean conductivity and grounding.",
    img: "assets/industry-electrical.jpg",
    badge: "Power Switchgear Enclosure",
    spec: "Zinc / Trivalent Passivated • Non-Magnetic Options",
    apps: [
      "Medium & High Voltage Switchgear Panels",
      "Electrical Busbar Clamp & Mounting Hardware",
      "Outdoor Power Distribution Cabinets"
    ],
    fasteners: ["SEM Screws with Belleville Washers", "Brass / SS Machine Screws", "Flange Nuts", "Toothed Grounding Washers"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  },
  {
    id: "maintenance",
    name: "Maintenance",
    title: "Industrial Maintenance & MRO",
    desc: "Fast replacement fasteners and maintenance assortments for rapid plant turnarounds, emergency mechanical repairs, and routine equipment servicing.",
    img: "assets/industry-maintenance.jpg",
    badge: "Industrial Pump Overhaul",
    spec: "Universal DIN/ISO Standards • Rapid Dispatch",
    apps: [
      "Industrial Pump, Valve & Piping Flange Overhauls",
      "Factory Plant Preventative Maintenance",
      "Replacement of Corroded or Fatigued Fasteners"
    ],
    fasteners: ["All-Thread Studs", "Full Thread Hex Bolts", "Standard Hex Nuts", "Assorted Washers"],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  }
];

window.INDUSTRIES_DATA = INDUSTRIES_DATA;

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = $("#indTabs");
  if (!tabsContainer) return;

  let currentInd = INDUSTRIES_DATA[0];
  window.currentIndustry = currentInd;

  // Render tabs
  tabsContainer.innerHTML = INDUSTRIES_DATA.map((ind, i) => `
    <button class="ind-tab-btn${i === 0 ? " active" : ""}" data-id="${ind.id}" role="tab" aria-selected="${i === 0 ? "true" : "false"}" type="button">
      ${ind.icon}
      <span>${ind.name}</span>
    </button>
  `).join("");

  function selectIndustry(indId) {
    const data = INDUSTRIES_DATA.find(x => x.id === indId);
    if (!data || data.id === currentInd.id) return;
    currentInd = data;
    window.currentIndustry = currentInd;

    // Update active tab buttons
    document.querySelectorAll(".ind-tab-btn").forEach(btn => {
      const isAct = btn.dataset.id === indId;
      btn.classList.toggle("active", isAct);
      btn.setAttribute("aria-selected", isAct ? "true" : "false");
    });

    // Crossfade showcase image
    const imgEl = $("#indImg");
    if (imgEl) {
      imgEl.classList.add("fading");
      setTimeout(() => {
        imgEl.src = data.img;
        imgEl.alt = `${data.title} Fasteners`;
        imgEl.classList.remove("fading");
      }, 200);
    }

    // Update typography
    const titleEl = $("#indTitle");
    if (titleEl) titleEl.textContent = data.title;
    const descEl = $("#indDesc");
    if (descEl) descEl.textContent = data.desc;
    const badgeNameEl = $("#badgeName");
    if (badgeNameEl) badgeNameEl.textContent = data.badge;
    const badgeSpecEl = $("#badgeSpec");
    if (badgeSpecEl) badgeSpecEl.textContent = data.spec;

    // Update Applications
    const appsEl = $("#indApps");
    if (appsEl) {
      appsEl.innerHTML = data.apps.map(app => `
        <div class="showcase-app-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${esc(app)}</span>
        </div>
      `).join("");
    }

    // Update Fasteners
    const fastenersEl = $("#indFasteners");
    if (fastenersEl) {
      fastenersEl.innerHTML = data.fasteners.map(f => `
        <span class="showcase-fastener-pill">${esc(f)}</span>
      `).join("");
    }
  }

  window.selectIndustry = selectIndustry;

  // Tab click listener
  tabsContainer.addEventListener("click", e => {
    const btn = e.target.closest(".ind-tab-btn");
    if (!btn) return;
    selectIndustry(btn.dataset.id);
  });

  // Initial population
  selectIndustry("automotive");
});

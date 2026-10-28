/**
 * ASIA FASTNERS PVT LTD - PREMIUM PRODUCT CATALOG (products.js)
 * Manages product families, interactive variety carousels, category filters,
 * live search, sorting, touch gestures, and seamless enquiry basket integration.
 */

const PRODUCTS = [
  {
    id: "flange-bolts",
    name: "Flange Bolts",
    cat: "Bolts",
    desc: "Bolts with an integrated circular flange that distributes clamping load without a separate washer, preventing joint embedment.",
    spec: "DIN 6921 / ISO 4162",
    features: ["Class 8.8 / 10.9", "Integral Washer Face", "Anti-Vibration Clamping"],
    variants: [
      {
        name: "Standard Hex Flange Bolt",
        img: "assets/product-flange-bolts.jpg",
        spec: "DIN 6921",
        finish: "Zinc Plated / Class 8.8"
      },
      {
        name: "Serrated Anti-Vibration Flange Bolt",
        img: "assets/product-flange-bolts-serrated.jpg",
        spec: "DIN 6921 Serrated",
        finish: "Stainless Steel A2-70"
      },
      {
        name: "Heavy Industrial Flange Screw",
        img: "assets/product-flange-bolts-heavy.jpg",
        spec: "ISO 4162",
        finish: "Class 10.9 High-Tensile Steel"
      }
    ]
  },
  {
    id: "hex-bolts",
    name: "Hex Bolts",
    cat: "Bolts",
    desc: "Precision hexagon-head bolts engineered for high-tensile structural, automotive, and heavy machinery joint fastening.",
    spec: "DIN 931 / DIN 933 / ISO 4014",
    features: ["Class 8.8 / 10.9 / 12.9", "Zinc & Plain Steel", "Full & Partial Thread"],
    variants: [
      {
        name: "Standard Hex Bolt (Partial Thread)",
        img: "assets/product-hex-bolts.jpg",
        spec: "DIN 931 / ISO 4014",
        finish: "Zinc Plated / Class 8.8"
      },
      {
        name: "Heavy Structural Hex Bolt Assembly",
        img: "assets/product-hex-bolts-structural.jpg",
        spec: "DIN 6914 / EN 14399",
        finish: "Hot-Dip Galvanized / Class 10.9"
      },
      {
        name: "Stainless Steel A2-70 Hex Head Bolt",
        img: "assets/product-hex-bolts-ss.jpg",
        spec: "DIN 933 / ISO 4017",
        finish: "Austenitic Stainless Steel A2"
      }
    ]
  },
  {
    id: "hex-nuts",
    name: "Hex Nuts",
    cat: "Nuts",
    desc: "Internally-threaded hexagonal nuts designed with precision machine tapping to match structural bolts under high torque cycles.",
    spec: "DIN 934 / ISO 4032",
    features: ["Class 8 / 10 / 12", "Chamfered Bearing Faces", "Precision Internal Threads"],
    variants: [
      {
        name: "Standard Hexagon Full Nut",
        img: "assets/product-hex-nuts.jpg",
        spec: "DIN 934 / ISO 4032",
        finish: "Plain & Zinc Plated / Class 8/10"
      },
      {
        name: "Serrated Hex Flange Nut",
        img: "assets/product-hex-nuts-flange.jpg",
        spec: "DIN 6923 / ISO 4161",
        finish: "Self-Locking Serrated Base"
      },
      {
        name: "Nylon Insert Lock Nut (Nyloc)",
        img: "assets/product-hex-nuts-nyloc.png",
        spec: "DIN 985 / ISO 7040",
        finish: "Prevailing Torque Zinc Plated"
      }
    ]
  },
  {
    id: "screws",
    name: "Screws",
    cat: "Screws",
    desc: "High-precision industrial machine screws with pan and socket heads for uniform engagement in manufacturing and equipment assembly.",
    spec: "DIN 7985 / ISO 7045",
    features: ["Stainless Steel & Zinc", "Uniform Thread Pitch", "Phillips & Socket Drive"],
    variants: [
      {
        name: "Pan Head Machine Screw",
        img: "assets/product-screws.jpg",
        spec: "DIN 7985 / ISO 14583",
        finish: "Stainless Steel A2 Socket Head"
      },
      {
        name: "Hexagon Socket Head Cap Screw",
        img: "assets/product-screws-socket.jpg",
        spec: "DIN 912 / ISO 4762",
        finish: "High-Tensile Zinc Plated Steel"
      },
      {
        name: "Button Head Socket Screw",
        img: "assets/product-screws-button.jpg",
        spec: "ISO 7380",
        finish: "High-Strength Metric Machine Thread"
      }
    ]
  },
  {
    id: "sem-screws",
    name: "SEM Screws",
    cat: "Screws",
    desc: "Machine screws supplied with pre-assembled captive flat and spring washers for fast, automated, and secure production line assembly.",
    spec: "DIN 6900 / ISO 10644",
    features: ["Pre-Assembled Washer", "Prevents Washer Loss", "Rapid Assembly Cycle"],
    variants: [
      {
        name: "SEM Screw with Flat & Spring Washer",
        img: "assets/product-sem-screws.jpg",
        spec: "DIN 6900-1",
        finish: "Captive Double Washer Assembly"
      },
      {
        name: "Pan Head Machine SEM Screw with Washer",
        img: "assets/product-sem-screws-pan.jpg",
        spec: "DIN 6900-3",
        finish: "Slotted-Phillips Drive / Press Washer"
      },
      {
        name: "Hex Head Pre-Assembled SEM Joint",
        img: "assets/product-sem-screws-hex.jpg",
        spec: "ISO 10644",
        finish: "Automotive & Machinery Assembly"
      }
    ]
  },
  {
    id: "washers",
    name: "Washers",
    cat: "Washers",
    desc: "Precision flat and lock washers engineered to distribute bearing stress, protect mating surfaces, and prevent vibration loosening.",
    spec: "DIN 125 / DIN 127 / ISO 7089",
    features: ["Hardened Steel & SS", "Uniform Bearing Surface", "Surface Protection"],
    variants: [
      {
        name: "Standard Form A Plain Flat Washer",
        img: "assets/product-washers.jpg",
        spec: "DIN 125 / ISO 7089",
        finish: "Bright Zinc Plated Steel"
      },
      {
        name: "Serrated Safety Contact Lock Washer",
        img: "assets/product-washers-sperr.jpg",
        spec: "DIN 6796 / Schnorr",
        finish: "High-Spring Steel / Conical Grip"
      },
      {
        name: "Large OD Fender Washer",
        img: "assets/product-washers-fender.png",
        spec: "DIN 9021 / ISO 7093",
        finish: "Broad Surface Load Distribution"
      }
    ]
  }
];

window.PRODUCTS = PRODUCTS;

document.addEventListener("DOMContentLoaded", () => {
  const gridEl = $("#grid");
  const chipsEl = $("#chips");
  const qEl = $("#q");
  const sortEl = $("#sort");

  if (!gridEl) return;

  // Independent carousel state tracking per product family
  const variantIndex = {};

  let cat = "All";
  const cats = ["All", ...new Set(PRODUCTS.map(p => p.cat))];

  if (chipsEl) {
    chipsEl.innerHTML = cats.map(c => `
      <button class="chip${c === "All" ? " on" : ""}" data-c="${c}" type="button">${c}</button>
    `).join("");

    chipsEl.onclick = e => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const c = btn.dataset.c;
      if (!c) return;
      cat = c;
      document.querySelectorAll("#chips .chip").forEach(x => x.classList.toggle("on", x.dataset.c === c));
      draw();
    };
  }

  if (qEl) qEl.oninput = draw;
  if (sortEl) sortEl.onchange = draw;

  let hl = [];
  window.setProductHighlight = ids => {
    hl = ids || [];
    draw();
  };

  function getActiveVariant(p) {
    const list = p.variants && p.variants.length ? p.variants : [{ name: p.name, img: p.img, spec: p.spec }];
    const idx = variantIndex[p.id] || 0;
    return {
      variant: list[idx] || list[0],
      index: idx,
      total: list.length,
      list
    };
  }

  function draw() {
    const q = qEl ? qEl.value.trim().toLowerCase() : "";
    let l = PRODUCTS.filter(p => {
      const matchCat = cat === "All" || p.cat === cat;
      const varNames = (p.variants || []).map(v => v.name + (v.spec || "") + (v.finish || "")).join(" ");
      const matchQuery = (p.name + p.desc + p.cat + (p.spec || "") + " " + varNames).toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    const sortVal = sortEl ? sortEl.value : "a";
    l.sort((a, b) => a.name.localeCompare(b.name) * (sortVal === "z" ? -1 : 1));

    gridEl.innerHTML = l.length ? l.map(p => {
      const { variant: v, index: idx, total } = getActiveVariant(p);
      const isMultiple = total > 1;

      return `
      <article class="p-card${hl.includes(p.id) ? " hl" : ""}" data-id="${p.id}">
        <div class="p-card-media" data-media-id="${p.id}">
          <img src="${v.img}" alt="${esc(v.name)}" class="p-card-img" id="img-${p.id}" loading="lazy" width="400" height="240">
          <span class="p-card-cat mono">${esc(p.cat)}</span>

          ${isMultiple ? `
            <button class="p-slider-btn p-slider-prev" type="button" aria-label="Previous product variety" data-slide="prev" data-pid="${p.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="p-slider-btn p-slider-next" type="button" aria-label="Next product variety" data-slide="next" data-pid="${p.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <span class="p-slider-counter mono" id="cnt-${p.id}" aria-label="Variety ${idx + 1} of ${total}">
              ${String(idx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}
            </span>
            <div class="p-slider-variant mono">
              <span class="p-variant-name" id="var-${p.id}">${esc(v.name)}</span>
            </div>
          ` : ""}
        </div>
        <div class="p-card-body">
          <div class="p-card-header">
            <span class="p-card-spec mono" id="spec-${p.id}">${esc(v.spec || p.spec)}</span>
            <h3 class="p-card-title">${esc(p.name)}</h3>
          </div>
          <p class="p-card-desc">${esc(p.desc)}</p>
          <div class="p-card-tags">
            ${p.features.map(f => `<span class="p-tag">${esc(f)}</span>`).join("")}
          </div>
          <div class="p-card-actions">
            <button class="btn p p-add-btn" data-add="${p.id}" type="button">
              <span>Add to Enquiry</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            ${CONFIG.whatsapp ? `
              <a class="p-wa-btn" id="wa-${p.id}" target="_blank" rel="noopener" href="${waLink("Hello Asia Fastners, I would like to enquire about " + p.name + " (" + v.name + ").")}" aria-label="Enquire about ${esc(v.name)} on WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            ` : ""}
          </div>
        </div>
      </article>
      `;
    }).join("") : `
      <div class="p-card-empty">
        <h3>No matching fasteners found</h3>
        <p>Try adjusting your search keyword or clearing the category filter.</p>
      </div>
    `;
  }

  function switchVariant(pid, dir) {
    const prod = PRODUCTS.find(p => p.id === pid);
    if (!prod || !prod.variants || prod.variants.length <= 1) return;

    const total = prod.variants.length;
    let cur = variantIndex[pid] || 0;
    if (dir === "next") {
      cur = (cur + 1) % total;
    } else {
      cur = (cur - 1 + total) % total;
    }
    variantIndex[pid] = cur;

    const v = prod.variants[cur];
    const card = gridEl.querySelector(`.p-card[data-id="${pid}"]`);
    if (!card) return;

    const imgEl = card.querySelector(".p-card-img");
    const cntEl = card.querySelector(".p-slider-counter");
    const varEl = card.querySelector(".p-variant-name");
    const specEl = card.querySelector(".p-card-spec");
    const waBtn = card.querySelector(".p-wa-btn");

    if (cntEl) {
      cntEl.textContent = `${String(cur + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
      cntEl.setAttribute("aria-label", `Variety ${cur + 1} of ${total}`);
    }
    if (varEl) {
      varEl.textContent = v.name;
    }
    if (specEl) {
      specEl.textContent = v.spec || prod.spec;
    }
    if (waBtn && CONFIG.whatsapp) {
      waBtn.href = waLink(`Hello Asia Fastners, I would like to enquire about ${prod.name} (${v.name}).`);
      waBtn.setAttribute("aria-label", `Enquire about ${v.name} on WhatsApp`);
    }

    if (imgEl) {
      const animClass = dir === "next" ? "slide-in-right" : "slide-in-left";
      imgEl.classList.remove("slide-in-right", "slide-in-left");
      void imgEl.offsetWidth; // force DOM reflow
      imgEl.src = v.img;
      imgEl.alt = v.name;
      imgEl.classList.add(animClass);
    }
  }

  // Click event delegation on grid
  gridEl.addEventListener("click", e => {
    const slideBtn = e.target.closest("[data-slide]");
    if (slideBtn) {
      e.preventDefault();
      e.stopPropagation();
      const pid = slideBtn.dataset.pid;
      const dir = slideBtn.dataset.slide;
      switchVariant(pid, dir);
      return;
    }

    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = addBtn.dataset.add;
      const prod = PRODUCTS.find(x => x.id === id);
      if (prod) {
        const { variant: curVar } = getActiveVariant(prod);
        const displayName = curVar ? `${prod.name} (${curVar.name})` : prod.name;

        if (typeof window.addToBasket === "function") {
          window.addToBasket(id, displayName);
        }

        const labelSpan = addBtn.querySelector("span");
        if (labelSpan) labelSpan.textContent = "Added ✓";
        else addBtn.textContent = "Added ✓";
        setTimeout(() => {
          if (labelSpan) labelSpan.textContent = "Add to Enquiry";
          else addBtn.textContent = "Add to Enquiry";
        }, 1200);
      }
    }
  });

  // Touch Swipe Support for Mobile & Tablet
  let touchStartX = 0;
  let touchStartY = 0;
  let activeTouchPid = null;

  gridEl.addEventListener("touchstart", e => {
    const media = e.target.closest(".p-card-media");
    if (!media) return;
    const card = media.closest(".p-card");
    if (!card) return;
    activeTouchPid = card.dataset.id;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  gridEl.addEventListener("touchend", e => {
    if (!activeTouchPid) return;
    const media = e.target.closest(".p-card-media");
    if (!media) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        switchVariant(activeTouchPid, "next");
      } else {
        switchVariant(activeTouchPid, "prev");
      }
    }
    activeTouchPid = null;
  }, { passive: true });

  draw();
});

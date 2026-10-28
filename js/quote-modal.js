/**
 * ASIA FASTNERS PVT LTD - QUOTATION MODAL & BASKET SYSTEM (quote-modal.js)
 * Manages the quote popup dialog, enquiry basket items, quantity updates,
 * and direct email submission to akshtyagiindia@gmail.com.
 */

(function () {
  let basket = [];
  try {
    basket = JSON.parse(localStorage.getItem("af_basket") || "[]");
  } catch (e) {
    basket = [];
  }

  function saveBasket() {
    try {
      localStorage.setItem("af_basket", JSON.stringify(basket));
    } catch (e) {}
    renderBasket();
  }

  function addToBasket(id, name) {
    const existing = basket.find(x => x.id === id);
    if (existing) {
      existing.qty++;
    } else {
      basket.push({ id, name: name || id, qty: 100, size: "", grade: "" });
    }
    saveBasket();
  }

  function renderBasket() {
    const cntEl = $("#cnt");
    if (cntEl) cntEl.textContent = basket.length;

    const bkEl = $("#bk");
    if (bkEl) bkEl.style.display = basket.length ? "block" : "none";

    const itemsHtml = basket.length ? basket.map((b, i) => `
      <div class="it" style="border-top:1px solid var(--ln);padding:10px 0;display:grid;gap:8px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong style="font-size:13px;color:var(--tx)">${esc(b.name)}</strong>
          <button class="chip" data-rm="${i}" type="button" aria-label="Remove ${esc(b.name)}" style="padding:3px 8px;font-size:11px">Remove</button>
        </div>
        <div class="r" style="display:grid;grid-template-columns:80px 1fr 1fr;gap:6px">
          <div>
            <label style="font-size:11px;margin-bottom:2px">Qty</label>
            <input type="number" min="1" value="${b.qty}" data-i="${i}" data-k="qty" style="padding:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:11px;margin-bottom:2px">Size</label>
            <input value="${esc(b.size)}" data-i="${i}" data-k="size" placeholder="e.g. M12" style="padding:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:11px;margin-bottom:2px">Grade</label>
            <input value="${esc(b.grade)}" data-i="${i}" data-k="grade" placeholder="e.g. 8.8" style="padding:6px;font-size:13px">
          </div>
        </div>
      </div>
    `).join("") : `<p style="color:var(--mu);font-size:13px;margin:8px 0">Your basket is empty. Add products from the list above, or describe your requirements in the message field.</p>`;

    const itemsEl = $("#items");
    if (itemsEl) itemsEl.innerHTML = itemsHtml;

    const mbi = $("#modal_basket_items");
    if (mbi) mbi.innerHTML = itemsHtml;

    const sumEl = $("#sum");
    if (sumEl) {
      sumEl.innerHTML = basket.length ? basket.map(b => `
        <p class="mono" style="color:var(--tx);font-size:12px;margin:3px 0">${esc(b.name)} — ${b.qty} pcs${b.size ? " — " + esc(b.size) : ""}${b.grade ? " — " + esc(b.grade) : ""}</p>
      `).join("") : `<p class="mono" style="color:var(--mu);font-size:12px">No products added yet</p>`;
    }
  }

  // Input and button listeners for basket modifications
  const onBInput = e => {
    const t = e.target, i = t.dataset.i;
    if (i === undefined) return;
    basket[i][t.dataset.k] = t.dataset.k === "qty" ? Math.max(1, parseInt(t.value) || 1) : t.value;
    try {
      localStorage.setItem("af_basket", JSON.stringify(basket));
    } catch (x) {}
    const sumEl = $("#sum");
    if (sumEl) {
      sumEl.innerHTML = basket.map(b => `
        <p class="mono" style="color:var(--tx);font-size:12px;margin:3px 0">${esc(b.name)} — ${b.qty} pcs${b.size ? " — " + esc(b.size) : ""}${b.grade ? " — " + esc(b.grade) : ""}</p>
      `).join("");
    }
  };

  const onBClick = e => {
    const r = e.target.dataset.rm;
    if (r !== undefined) {
      basket.splice(+r, 1);
      saveBasket();
    }
  };

  // Quotation Dialog open / close
  function openQuote(e) {
    if (e && e.preventDefault) e.preventDefault();
    const qm = $("#quoteModal");
    if (!qm) return;
    qm.classList.add("open");
    qm.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const inp = $("#n");
      if (inp) inp.focus();
    }, 120);
  }

  function closeQuote() {
    const qm = $("#quoteModal");
    if (!qm) return;
    qm.classList.remove("open");
    qm.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (location.hash === "#quote") {
      try {
        history.replaceState(null, "", location.pathname + location.search);
      } catch (x) {}
    }
  }

  window.openQuote = openQuote;
  window.closeQuote = closeQuote;
  window.addToBasket = addToBasket;
  window.renderBasket = renderBasket;
  window.getBasket = () => basket;

  document.addEventListener("DOMContentLoaded", () => {
    const itemsEl = $("#items");
    if (itemsEl) {
      itemsEl.addEventListener("input", onBInput);
      itemsEl.addEventListener("click", onBClick);
    }

    const mbe = $("#modal_basket_editor");
    if (mbe) {
      mbe.addEventListener("input", onBInput);
      mbe.addEventListener("click", onBClick);
    }

    // Drawer controls
    const dr = $("#drawer");
    const oD = o => {
      if (dr) {
        dr.classList.toggle("open", o);
        dr.setAttribute("aria-hidden", !o);
      }
    };

    const bkBtn = $("#bk");
    if (bkBtn) bkBtn.onclick = () => oD(true);
    const clBtn = $("#cl");
    if (clBtn) clBtn.onclick = () => oD(false);

    let basketEditorOpen = false;
    const open2Btn = $("#open2");
    if (open2Btn) {
      open2Btn.onclick = () => {
        basketEditorOpen = !basketEditorOpen;
        const pnl = $("#modal_basket_editor");
        if (pnl) pnl.style.display = basketEditorOpen ? "block" : "none";
        open2Btn.innerHTML = basketEditorOpen ? "Close basket editor &#9652;" : "Edit enquiry basket &#9662;";
      };
    }

    const gqBtn = $("#gq");
    if (gqBtn) {
      gqBtn.onclick = () => {
        oD(false);
        openQuote();
      };
    }

    // Modal close button
    const closeBtn = $("#quoteModalClose");
    if (closeBtn) closeBtn.onclick = closeQuote;

    const qm = $("#quoteModal");
    if (qm) {
      qm.addEventListener("click", e => {
        if (e.target === qm) closeQuote();
      });
    }

    document.querySelectorAll('a[href="#quote"]').forEach(a => {
      a.addEventListener("click", openQuote);
    });

    window.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        oD(false);
        if (qm && qm.classList.contains("open")) closeQuote();
      }
    });

    if (location.hash === "#quote") {
      setTimeout(openQuote, 150);
    }

    window.addEventListener("hashchange", () => {
      if (location.hash === "#quote") openQuote();
    });

    renderBasket();

    // Form Submission
    const quoteForm = $("#f");
    if (quoteForm) {
      quoteForm.onsubmit = async function (e) {
        e.preventDefault();
        const st = $("#st");
        const btn = $("#f_btn");
        const v = id => {
          const el = $("#" + id);
          return el ? el.value.trim() : "";
        };

        if (st) st.style.display = "block";

        if (!v("n") || !/^\S+@\S+\.\S+$/.test(v("e")) || v("p").replace(/\D/g, "").length < 7) {
          if (st) {
            st.textContent = "Please enter your name, a valid email address and phone / WhatsApp number.";
            st.style.borderColor = "#EF4444";
            st.style.color = "#DC2626";
          }
          return;
        }

        const currentInd = window.currentIndustry;
        const indContext = currentInd ? ` (${currentInd.name})` : "";

        let prodsText = "";
        if (basket.length) {
          prodsText = basket.map(b => `- ${b.name} (${b.qty} pcs${b.size ? " | size: " + b.size : ""}${b.grade ? " | grade: " + b.grade : ""})`).join("\n");
        } else if (currentInd) {
          prodsText = `Industry enquiry: ${currentInd.title}\nSpecified requirement: ${v("m") || "General enquiry"}`;
        } else {
          prodsText = v("m") ? "Custom specification (see message below)" : "General enquiry (no specific basket items selected)";
        }

        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending enquiry...";
        }
        if (st) {
          st.style.borderColor = "var(--bl)";
          st.style.color = "var(--bl)";
          st.textContent = "Submitting your enquiry directly to Asia Fastners...";
        }

        if (location.protocol === "file:") {
          if (st) {
            st.style.borderColor = "#F59E0B";
            st.style.color = "#B45309";
            st.innerHTML = "<strong>Local File Notice:</strong><br>Email dispatch services block submissions from local <code>file:///</code> paths for spam prevention.<br><br>👉 Run this in your terminal:<br><code>node server.js</code><br>Then open: <strong><a href='http://localhost:3000/' target='_blank' style='text-decoration:underline;color:inherit'>http://localhost:3000/</a></strong><br><small><em>(Once pushed to GitHub Pages or any web host, it works automatically without any local server).</em></small>";
          }
          if (btn) {
            btn.disabled = false;
            btn.textContent = "Send enquiry";
          }
          return;
        }

        try {
          const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONFIG.email)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
              "Customer Name": v("n"),
              "Company": v("co") || "Not specified",
              "Customer Email": v("e"),
              "Phone / WhatsApp": v("p"),
              "Selected Fasteners / Details": prodsText,
              "Message": v("m") || "None",
              "_subject": `New Fastener Quotation Enquiry from ${v("n")}${indContext} — Asia Fastners`,
              "_template": "table"
            })
          });
          const data = await res.json();
          if (data.success === "true" || data.success === true) {
            if (st) {
              st.style.borderColor = "#10B981";
              st.style.color = "#047857";
              st.innerHTML = "<strong>✓ Enquiry Sent Successfully!</strong><br>Thank you, your quotation request has been delivered directly to <strong>" + esc(CONFIG.email) + "</strong>. Our engineering team will review your specifications and contact you shortly.";
            }
            quoteForm.reset();
            basket = [];
            saveBasket();
          } else if (data.message && data.message.includes("Activation")) {
            if (st) {
              st.style.borderColor = "#F59E0B";
              st.style.color = "#B45309";
              st.innerHTML = "<strong>⚠️ One-Time Activation Required:</strong><br>FormSubmit has sent an activation email to <strong>" + esc(CONFIG.email) + "</strong>.<br>Please open your Gmail (check <strong>Inbox</strong> or <strong>Spam / Junk</strong> folder) and click the <strong>'Activate Form'</strong> button once. After that one click, every enquiry will land straight in your inbox!";
            }
          } else {
            throw new Error(data.message || "Submission failed");
          }
        } catch (err) {
          if (st) {
            st.style.borderColor = "#EF4444";
            st.style.color = "#DC2626";
            st.innerHTML = "<strong>Submission Error:</strong> " + esc(err.message || "Network error. Please try again.");
          }
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.textContent = "Send enquiry";
          }
        }
      };
    }
  });
})();

/**
 * ASIA FASTNERS PVT LTD - CONTACT PAGE CONTROLLER (contact.js)
 * Generates verified contact cards, interactive dialer / WhatsApp links,
 * and handles corporate enquiry desk details.
 */

document.addEventListener("DOMContentLoaded", () => {
  const ciEl = $("#ci");
  if (!ciEl) return;

  const ICONS = {
    ADDRESS: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    PHONE: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    EMAIL: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    WHATSAPP: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    "BUSINESS HOURS": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  };

  const card = (key, label, val, link) => {
    const isPresent = Boolean(val && String(val).trim());
    let content = "";
    if (!isPresent) {
      content = `<span class="contact-val">Available upon inquiry</span>`;
    } else if (link) {
      content = `<a class="contact-link" href="${esc(link)}"${link.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(val)}</a>`;
    } else {
      content = `<span class="contact-val">${esc(val)}</span>`;
    }
    return `
      <div class="contact-item">
        <div class="contact-item-top">
          <div class="contact-icon" aria-hidden="true">${ICONS[key] || ""}</div>
          <span class="contact-label">${label}</span>
        </div>
        <div class="contact-value">${content}</div>
      </div>`;
  };

  ciEl.innerHTML =
    card("ADDRESS", "Address", CONFIG.address, "") +
    card("PHONE", "Phone", CONFIG.phone, CONFIG.phone ? "tel:" + CONFIG.phone.replace(/[^\d+]/g, "") : "") +
    card("EMAIL", "Email", CONFIG.email, CONFIG.email ? "mailto:" + CONFIG.email : "") +
    card("WHATSAPP", "WhatsApp", CONFIG.whatsapp, CONFIG.whatsapp ? waLink("Hello Asia Fastners, I would like to get in touch.") : "") +
    card("BUSINESS HOURS", "Business Hours", CONFIG.hours, "");

  const mc = $("#mc"), mw = $("#mw");
  if (mc) {
    if (CONFIG.phone) mc.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "");
    else mc.style.display = "none";
  }
  if (mw) {
    if (CONFIG.whatsapp) mw.href = waLink("Hello Asia Fastners, I would like to enquire about your products.");
    else mw.style.display = "none";
  }
});

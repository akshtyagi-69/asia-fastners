/**
 * ASIA FASTNERS PVT LTD - CORE CONFIGURATION & UTILITIES (config.js)
 * Centralizes company information, global selectors, and formatting helpers.
 */

const CONFIG = {
  email: "akshtyagiindia@gmail.com", // Enquiry destination email
  phone: "",                         // e.g. "+91XXXXXXXXXX"
  whatsapp: "",                      // Digits only with country code, e.g. "91XXXXXXXXXX"
  address: "",
  hours: ""
};

// Global DOM helpers
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// HTML entity escaping for security and clean text rendering
const esc = s => String(s).replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

// Reduced motion preference detection
const RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Dynamic WhatsApp link generator
const waLink = msg => CONFIG.whatsapp
  ? "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(msg)
  : "";

window.CONFIG = CONFIG;
window.waLink = waLink;

// Dynamic copyright year initialization
document.addEventListener("DOMContentLoaded", () => {
  const yr = $("#yr");
  if (yr) yr.textContent = new Date().getFullYear();
  const yr2 = $("#yr2");
  if (yr2) yr2.textContent = new Date().getFullYear();
});

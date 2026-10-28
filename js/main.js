/**
 * ASIA FASTNERS PVT LTD - GLOBAL NAVIGATION & SHELL (main.js)
 * Manages sticky navbar scroll shadows, mobile hamburger menu, active link states, and scroll spy.
 */

document.addEventListener("DOMContentLoaded", () => {
  const nav = $("#nav");
  const menuBtn = $("#menu");
  const navList = $("#nl");

  // Sticky nav background transition on scroll
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("s", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile drawer toggle
  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("o");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navList.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navList.classList.remove("o");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (navList.classList.contains("o") && !nav.contains(e.target)) {
        navList.classList.remove("o");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Initialize Scroll Spy for dynamic active navigation indicator (orange bar)
  initScrollSpy();

  // About section reveal animation observer
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      aboutSection.classList.add("about-visible");
    } else if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          aboutSection.classList.add("about-visible");
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      observer.observe(aboutSection);
    } else {
      aboutSection.classList.add("about-visible");
    }
  }
});

// Update active state across navigation links
function setNavActive(hash) {
  if (!hash) return;
  const cleanTarget = hash.replace("#", "");
  document.querySelectorAll("#nl a").forEach(a => {
    const href = a.getAttribute("href") || "";
    const cleanHref = href.includes("#") ? href.split("#")[1] : href;
    const isMatch = href === hash || cleanHref === cleanTarget || (hash === "#hero" && (href === "#hero" || href.endsWith("#hero")));
    a.classList.toggle("active", isMatch);
  });
}
window.setNavActive = setNavActive;

// Scroll Spy: dynamically shifts the orange bar below nav links as the page is scrolled
function initScrollSpy() {
  const homeView = document.getElementById("homeView");
  if (!homeView) return;

  const sections = [
    { id: "products", target: "#products" },
    { id: "about", target: "#about" },
    { id: "hero", target: "#hero" }
  ];

  let ticking = false;

  const updateActiveSection = () => {
    // If dedicated contact view is currently active, ensure Contact is highlighted
    const contactView = document.getElementById("contactView");
    if (contactView && window.getComputedStyle(contactView).display !== "none") {
      setNavActive("#contact");
      ticking = false;
      return;
    }

    // If near the bottom of the page, highlight Products (the final main content section on homepage)
    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 80) {
      setNavActive("#products");
      ticking = false;
      return;
    }

    // Offset threshold line: around 220px from viewport top
    const offset = Math.min(240, Math.max(140, window.innerHeight * 0.32));

    let currentHash = "#hero";

    // Check sections from bottom upward
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentHash = section.target;
          break;
        }
      }
    }

    setNavActive(currentHash);
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  // Initial check on load
  updateActiveSection();
  window.addEventListener("load", updateActiveSection);
}

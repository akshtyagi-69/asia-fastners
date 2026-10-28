/**
 * ASIA FASTNERS PVT LTD - NUT & BOLT PAGE TRANSITION (transition.js)
 * Coordinates the cinematic mechanical fastening overlay between views and pages.
 */

(function () {
  let isTransitioning = false;

  function getOverlay() {
    return {
      overlay: $("#nutBoltOverlay"),
      status: $("#nbStatusText")
    };
  }

  /**
   * Triggers the mechanical nut & bolt transition and navigates to a target URL
   */
  function navigateWithTransition(targetUrl, statusMessage = "DISENGAGING & NAVIGATING...") {
    if (isTransitioning) return;
    const { overlay, status } = getOverlay();

    if (RM || !overlay) {
      window.location.href = targetUrl;
      return;
    }

    isTransitioning = true;
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    if (status) status.textContent = statusMessage;

    if (typeof window.trigger3DFastener === "function") {
      window.trigger3DFastener(true);
    }

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 420);
  }

  window.navigateWithTransition = navigateWithTransition;

  // Intercept cross-page navigation links for cinematic transition
  document.addEventListener("DOMContentLoaded", () => {
    // Inter-page links on dedicated subpages (industries.html, quality.html, contact.html)
    const isSubPage = window.location.pathname.endsWith("industries.html") || 
                      window.location.pathname.endsWith("quality.html") || 
                      window.location.pathname.endsWith("contact.html");

    if (isSubPage) {
      document.querySelectorAll('a[href^="asia-fastners.html"], a[href^="index.html"], a[href="industries.html"], a[href="quality.html"], a[href="contact.html"]').forEach(a => {
        a.addEventListener("click", e => {
          const href = a.getAttribute("href");
          if (!href || href.startsWith("#")) return;
          e.preventDefault();
          navigateWithTransition(href, "DISENGAGING & NAVIGATING...");
        });
      });
    }

    // Homepage in-page view switching (#homeView <-> #contactView)
    const homeView = $("#homeView");
    const homeFooter = $("#homeFooter");
    const contactView = $("#contactView");

    if (homeView && contactView) {
      function showContactView(instant) {
        if (isTransitioning) return;
        const { overlay, status } = getOverlay();

        if (instant || RM || !overlay) {
          homeView.style.display = "none";
          if (homeFooter) homeFooter.style.display = "none";
          contactView.style.display = "block";
          window.scrollTo({ top: 0, behavior: "instant" });
          if (typeof setNavActive === "function") setNavActive("#contact");
          if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(true);
          return;
        }

        isTransitioning = true;
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        if (status) status.textContent = "FASTENING CONNECTION TO CONTACT DESK...";
        if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(true);

        setTimeout(() => {
          homeView.style.display = "none";
          if (homeFooter) homeFooter.style.display = "none";
          contactView.style.display = "block";
          window.scrollTo({ top: 0, behavior: "instant" });
          if (typeof setNavActive === "function") setNavActive("#contact");
          if (status) status.textContent = "CONNECTION SECURED ✓";
        }, 420);

        setTimeout(() => {
          overlay.classList.remove("active");
          overlay.setAttribute("aria-hidden", "true");
          isTransitioning = false;
        }, 850);
      }

      function showHomeView(targetHash, instant) {
        if (isTransitioning) return;
        const targetId = (targetHash || "#hero").replace("#", "");
        const { overlay, status } = getOverlay();

        if (instant || RM || !overlay) {
          contactView.style.display = "none";
          homeView.style.display = "block";
          if (homeFooter) homeFooter.style.display = "block";
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "instant" });
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
          if (typeof setNavActive === "function") setNavActive("#" + targetId);
          if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(false);
          return;
        }

        isTransitioning = true;
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        if (status) status.textContent = "DISENGAGING & NAVIGATING...";
        if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(false);

        setTimeout(() => {
          contactView.style.display = "none";
          homeView.style.display = "block";
          if (homeFooter) homeFooter.style.display = "block";
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "instant" });
          } else {
            window.scrollTo({ top: 0, behavior: "instant" });
          }
          if (typeof setNavActive === "function") setNavActive("#" + targetId);
          if (status) status.textContent = "COMPONENTS ALIGNED ✓";
        }, 420);

        setTimeout(() => {
          overlay.classList.remove("active");
          overlay.setAttribute("aria-hidden", "true");
          isTransitioning = false;
        }, 850);
      }

      window.showContactView = showContactView;
      window.showHomeView = showHomeView;

      // Click listener for homepage routing
      document.addEventListener("click", e => {
        const a = e.target.closest("a");
        if (!a) return;
        const href = a.getAttribute("href");
        if (!href) return;

        if (href === "#contact") {
          e.preventDefault();
          try { history.pushState(null, "", "#contact"); } catch (x) {}
          showContactView(false);
        } else if (href === "industries.html") {
          e.preventDefault();
          const { overlay, status } = getOverlay();
          if (overlay) {
            overlay.classList.add("active");
            overlay.setAttribute("aria-hidden", "false");
            if (status) status.textContent = "ALIGNING INDUSTRIAL SPECIFICATIONS...";
            if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(true);
            setTimeout(() => { window.location.href = "industries.html"; }, 420);
          } else {
            window.location.href = "industries.html";
          }
        } else if (href === "quality.html") {
          e.preventDefault();
          const { overlay, status } = getOverlay();
          if (overlay) {
            overlay.classList.add("active");
            overlay.setAttribute("aria-hidden", "false");
            if (status) status.textContent = "VERIFYING QUALITY STANDARDS & SPECIFICATIONS...";
            if (typeof window.trigger3DFastener === "function") window.trigger3DFastener(true);
            setTimeout(() => { window.location.href = "quality.html"; }, 420);
          } else {
            window.location.href = "quality.html";
          }
        } else if (href === "#quote") {
          // Handled by quote modal
        } else if (href.startsWith("#")) {
          if (contactView.style.display !== "none") {
            e.preventDefault();
            try { history.pushState(null, "", href); } catch (x) {}
            showHomeView(href, false);
          } else {
            if (typeof setNavActive === "function") setNavActive(href);
          }
        }
      });

      // Handle initial load with #contact hash
      if (location.hash === "#contact") {
        showContactView(true);
      } else {
        if (typeof setNavActive === "function") setNavActive(location.hash || "#hero");
      }

      window.addEventListener("hashchange", () => {
        if (location.hash === "#contact") {
          showContactView(false);
        } else if (location.hash === "#quote") {
          if (typeof window.openQuote === "function") window.openQuote();
        } else if (contactView.style.display !== "none") {
          showHomeView(location.hash || "#hero", false);
        } else {
          if (typeof setNavActive === "function") setNavActive(location.hash || "#hero");
        }
      });
    }
  });
})();

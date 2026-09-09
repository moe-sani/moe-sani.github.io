/* ==========================================================================
   Moe Sani — site interactions
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Theme (light / dark) ---------- */
  var root = document.documentElement;
  var STORAGE_KEY = "ms-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored) {
      applyTheme(stored);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    }
  }
  initTheme();

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var isDark = root.getAttribute("data-theme") === "dark";
        var next = isDark ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      });
    }

    /* ---------- Mobile nav ---------- */
    var navToggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        var open = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          navLinks.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- Scroll-aware header ---------- */
    var header = document.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---------- Smooth anchor scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        var id = anchor.getAttribute("href");
        if (!id || id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        // threshold 0 so elements taller than the viewport (e.g. long
        // articles) still reveal; rootMargin triggers slightly into view.
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---------- Current year ---------- */
    var yearEls = document.querySelectorAll("[data-year]");
    var year = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = year; });

    /* ---------- Mermaid diagrams ---------- */
    var mermaidBlocks = Array.prototype.slice.call(
      document.querySelectorAll("code.language-mermaid, pre.language-mermaid, div.language-mermaid")
    );
    if (!mermaidBlocks.length) return;

    import("https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs")
      .then(function (mod) {
        var mermaid = mod.default;
        var diagrams = [];

        mermaidBlocks.forEach(function (node) {
          var codeEl = node.tagName === "CODE" ? node : node.querySelector("code") || node;
          var source = codeEl.textContent;
          /* Replace the whole highlighted block, not just the <code> element. */
          var block = node.closest(".highlighter-rouge") || node.closest("pre") || node;
          var figure = document.createElement("figure");
          figure.className = "mermaid-figure";
          var holder = document.createElement("div");
          holder.className = "mermaid";
          holder.textContent = source;
          figure.appendChild(holder);
          block.parentNode.replaceChild(figure, block);
          diagrams.push({ el: holder, source: source });
        });

        function renderAll() {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "strict",
            theme: root.getAttribute("data-theme") === "dark" ? "dark" : "default",
            themeVariables: { fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px" },
            flowchart: { useMaxWidth: true, htmlLabels: true },
            sequence: { useMaxWidth: true },
            state: { useMaxWidth: true }
          });
          diagrams.forEach(function (d) {
            d.el.removeAttribute("data-processed");
            d.el.textContent = d.source;
          });
          mermaid.run({ nodes: diagrams.map(function (d) { return d.el; }) });
        }

        renderAll();

        if ("MutationObserver" in window) {
          new MutationObserver(renderAll).observe(root, {
            attributes: true,
            attributeFilter: ["data-theme"]
          });
        }
      })
      .catch(function () {
        /* Mermaid unavailable: the original code blocks stay on the page. */
      });
  });
})();

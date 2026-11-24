document.documentElement.classList.add('js');
/* Progressive enhancement only: every page is readable without JavaScript. */
(function () {
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
  // lightbox (links still open the full image without JS)
  var dlg = document.getElementById("lb");
  if (dlg && typeof dlg.showModal === "function") {
    var img = dlg.querySelector("img"), cap = dlg.querySelector("p");
    document.querySelectorAll("a[data-lb]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault(); img.src = a.getAttribute("href");
        img.alt = a.querySelector("img").alt; cap.textContent = a.getAttribute("data-lb");
        dlg.showModal();
      });
    });
    dlg.querySelector("button").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  }
  var y = document.querySelectorAll("[data-year]"); y.forEach(function (n) { n.textContent = new Date().getFullYear(); });
})();
(function () {
  var bar = document.querySelector(".progress");
  var links = [].slice.call(document.querySelectorAll(".jump a"));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function onScroll() {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    var cur = -1;
    secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < 160) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle("on", i === cur); });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
})();

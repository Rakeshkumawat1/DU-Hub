/* ==========================================================================
   EM Hub — Shared runtime
   Icons, theme, chrome rendering (header / footer / portal sidebars),
   and all page-level interactions. No dependencies, no network, file:// safe.
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Icon set (inline SVG paths — 24x24, stroke based)
     ------------------------------------------------------------------ */
  var P = {
    pulse: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    cross: '<path d="M12 3h0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 0 6h-3v3a3 3 0 0 1-6 0v-3H6a3 3 0 0 1 0-6h3V6a3 3 0 0 1 3-3Z"/>',
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-5 4 3 5-7"/>',
    bars: '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>',
    pie: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10Z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    xCircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="m8.21 13.89-1.2 7.11L12 18.5l4.99 2.5-1.2-7.12"/>',
    certificate: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9h10M7 13h5"/><path d="M12 17v4l2.5-1.5L17 21v-4"/>',
    flask: '<path d="M9 2v6.5L3.6 18A2 2 0 0 0 5.3 21h13.4a2 2 0 0 0 1.7-3L15 8.5V2"/><path d="M8 2h8"/><path d="M6.5 15h11"/>',
    brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4 17.5a2.5 2.5 0 0 1-.34-4.5A2.5 2.5 0 0 1 4 8.5a2.5 2.5 0 0 1 2.54-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 20 17.5a2.5 2.5 0 0 0 .34-4.5A2.5 2.5 0 0 0 20 8.5a2.5 2.5 0 0 0-2.54-3A2.5 2.5 0 0 0 14.5 2Z"/>',
    stethoscope: '<path d="M4 2v6a4 4 0 0 0 8 0V2"/><path d="M4 2H2M12 2h2"/><path d="M8 12v3a6 6 0 0 0 12 0v-1"/><circle cx="20" cy="10" r="2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    play: '<path d="m6 3 14 9-14 9V3Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.61.78 1.03 1.42 1.03H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUp: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>',
    bookmark: '<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>',
    note: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54Z"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"/><path d="M4 22v-7"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 17 9 5 9-5"/><path d="m3 12 9 5 9-5"/>',
    video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    audio: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    pound: '<path d="M18 7c0-2.2-1.8-4-4-4s-4 1.8-4 4v6a4 4 0 0 1-2 3.5"/><path d="M8 13h6"/><path d="M6 20h12"/>',
    badge: '<path d="m12 2 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8Z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    twitter: '<path d="M22 4a10 10 0 0 1-3 1 4.5 4.5 0 0 0-7.7 4A12.8 12.8 0 0 1 2 4.7a4.5 4.5 0 0 0 1.4 6A4.4 4.4 0 0 1 1.4 10a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 19.5a12.7 12.7 0 0 0 19.6-11.3A9 9 0 0 0 22 4Z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    youtube: '<path d="M22.5 6.9a2.8 2.8 0 0 0-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.1 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.1Z"/><path d="m10 15 5-3-5-3Z"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3"/><path d="M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3"/>'
  };

  function icon(name, cls) {
    var d = P[name] || P.info;
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  }
  function iconFilled(name, cls) {
    var d = P[name] || P.info;
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">' + d + "</svg>";
  }

  /* ------------------------------------------------------------------
     Theme
     ------------------------------------------------------------------ */
  var THEME_KEY = "emhub-theme";

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.innerHTML = icon(t === "dark" ? "sun" : "moon");
      btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
      btn.setAttribute("title", t === "dark" ? "Light mode" : "Dark mode");
    });
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (!saved) {
      saved = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(saved);
  }
  function toggleTheme() {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }

  /* ------------------------------------------------------------------
     Chrome — public header / footer
     ------------------------------------------------------------------ */
  var PUBLIC_NAV = [
    { href: "index.html",   label: "Home",     key: "home" },
    { href: "courses.html", label: "Courses",  key: "courses" },
    { href: "about.html",   label: "About",    key: "about" },
    { href: "faculty.html", label: "Faculty",  key: "faculty" },
    { href: "contact.html", label: "Contact",  key: "contact" }
  ];

  function brandMarkup(prefix) {
    return '<a class="brand" href="' + prefix + 'index.html">' +
      '<span class="brand-mark">' + icon("pulse") + "</span>" +
      '<span class="brand-text"><span class="brand-name">EM Hub</span>' +
      '<span class="brand-sub">Emergency Medicine</span></span></a>';
  }

  function renderPublicHeader(host) {
    var active = host.getAttribute("data-active") || "";
    var p = host.getAttribute("data-prefix") || "";
    var links = PUBLIC_NAV.map(function (n) {
      return '<a href="' + p + n.href + '"' + (n.key === active ? ' class="is-active" aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("");

    host.className = "site-header";
    host.innerHTML =
      '<div class="container">' +
        brandMarkup(p) +
        '<nav class="nav" aria-label="Primary">' + links + "</nav>" +
        '<div class="header-actions">' +
          '<button class="btn btn-ghost btn-icon" data-theme-toggle type="button"></button>' +
          '<a class="btn btn-ghost btn-desktop" href="' + p + 'login.html">Log in</a>' +
          '<a class="btn btn-primary" href="' + p + 'register.html">Get started</a>' +
          '<button class="btn btn-ghost btn-icon nav-toggle" type="button" data-mobile-toggle aria-label="Open menu" aria-expanded="false">' + icon("menu") + "</button>" +
        "</div>" +
      "</div>" +
      '<div class="mobile-nav" id="mobileNav"><div class="container">' + links +
        '<div class="row"><a class="btn btn-outline grow" href="' + p + 'login.html">Log in</a>' +
        '<a class="btn btn-primary grow" href="' + p + 'register.html">Get started</a></div>' +
      "</div></div>";

    host.querySelector("[data-theme-toggle]").addEventListener("click", toggleTheme);
    var mt = host.querySelector("[data-mobile-toggle]");
    mt.addEventListener("click", function () {
      var nav = host.querySelector("#mobileNav");
      var open = nav.classList.toggle("is-open");
      mt.setAttribute("aria-expanded", String(open));
      mt.innerHTML = icon(open ? "x" : "menu");
    });
  }

  function renderFooter(host) {
    var p = host.getAttribute("data-prefix") || "";
    var year = 2026;
    host.className = "site-footer";
    host.innerHTML =
      '<div class="container"><div class="footer-grid">' +
        "<div>" + brandMarkup(p) +
          '<p style="margin-top:16px;max-width:300px">Specialist preparation for MRCEM, FRCEM, DNB Emergency Medicine and Critical Appraisal — built and taught by practising emergency physicians.</p>' +
          '<div class="social-row">' +
            '<a href="#" aria-label="EM Hub on X">' + icon("twitter") + "</a>" +
            '<a href="#" aria-label="EM Hub on LinkedIn">' + icon("linkedin") + "</a>" +
            '<a href="#" aria-label="EM Hub on YouTube">' + icon("youtube") + "</a>" +
            '<a href="#" aria-label="EM Hub on Instagram">' + icon("instagram") + "</a>" +
          "</div>" +
        "</div>" +
        '<div><h5>Courses</h5>' +
          '<a href="' + p + 'course-detail.html?course=mrcem-primary">MRCEM Primary</a>' +
          '<a href="' + p + 'course-detail.html?course=mrcem-sba">MRCEM SBA</a>' +
          '<a href="' + p + 'course-detail.html?course=mrcem-osce">MRCEM OSCE</a>' +
          '<a href="' + p + 'course-detail.html?course=frcem-sba">FRCEM Final SBA</a>' +
          '<a href="' + p + 'course-detail.html?course=frcem-osce">FRCEM Final OSCE</a>' +
          '<a href="' + p + 'course-detail.html?course=dnb-em">DNB Emergency Medicine</a>' +
          '<a href="' + p + 'course-detail.html?course=critical-appraisal">Critical Appraisal</a>' +
        "</div>" +
        '<div><h5>Platform</h5>' +
          '<a href="' + p + 'about.html">About EM Hub</a>' +
          '<a href="' + p + 'faculty.html">Our faculty</a>' +
          '<a href="' + p + 'contact.html">Personalised enquiry</a>' +
          '<a href="' + p + 'candidate/dashboard.html">Candidate portal</a>' +
          '<a href="' + p + 'faculty-portal/dashboard.html">Faculty portal</a>' +
          '<a href="' + p + 'admin/dashboard.html">Admin portal</a>' +
        "</div>" +
        '<div><h5>Support</h5>' +
          '<a href="' + p + 'index.html#faq">Frequently asked questions</a>' +
          '<a href="' + p + 'contact.html">Contact support</a>' +
          '<a href="#">Institutional licences</a>' +
          '<a href="#">Refund policy</a>' +
          '<a href="#">Accessibility statement</a>' +
        "</div>" +
        '<div><h5>Get in touch</h5>' +
          '<p style="display:flex;gap:9px;align-items:flex-start;margin-bottom:10px">' + icon("mail") + "<span>hello@emhub.example</span></p>" +
          '<p style="display:flex;gap:9px;align-items:flex-start;margin-bottom:10px">' + icon("phone") + "<span>+44 20 7946 0812</span></p>" +
          '<p style="display:flex;gap:9px;align-items:flex-start">' + icon("pin") + "<span>Sovereign House, 12 Portland Street<br>Manchester M1 3HL, United Kingdom</span></p>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<span>© " + year + " EM Hub Medical Education Ltd. All rights reserved. Prototype for demonstration purposes.</span>" +
        '<span>Privacy · Terms · Cookies</span>' +
      "</div></div>";
  }

  /* ------------------------------------------------------------------
     Chrome — portal shells
     ------------------------------------------------------------------ */
  var SIDEBARS = {
    candidate: {
      title: "Candidate",
      user: { name: "Dr Ravi Krishnan", initials: "RK", meta: "MRCEM SBA · 3 Month Plan" },
      groups: [
        { label: "Learning", items: [
          { key: "dashboard",   href: "dashboard.html",   label: "Dashboard",     icon: "home" },
          { key: "my-courses",  href: "my-courses.html",  label: "My Courses",    icon: "book", count: "3" },
          { key: "learn",       href: "learn.html",       label: "Continue Learning", icon: "layers" },
          { key: "question-bank", href: "question-bank.html", label: "Question Bank", icon: "flask" }
        ]},
        { label: "Assessment", items: [
          { key: "mock-tests",  href: "mock-tests.html",  label: "Mock Tests",    icon: "monitor" },
          { key: "results",     href: "results.html",     label: "Test Results",  icon: "chart" },
          { key: "progress",    href: "progress.html",    label: "Progress",      icon: "target" },
          { key: "certificates",href: "certificates.html",label: "Certificates",  icon: "certificate", count: "2" }
        ]},
        { label: "Account", items: [
          { key: "subscription",href: "subscription.html",label: "Subscription",  icon: "card" },
          { key: "settings",    href: "settings.html",    label: "Settings",      icon: "settings" }
        ]}
      ]
    },
    faculty: {
      title: "Faculty",
      user: { name: "Dr Aisha Rahman", initials: "AR", meta: "Programme Director" },
      groups: [
        { label: "Overview", items: [
          { key: "dashboard", href: "dashboard.html", label: "Dashboard", icon: "home" },
          { key: "students",  href: "students.html",  label: "Students",  icon: "users", count: "1.2k" }
        ]},
        { label: "Authoring", items: [
          { key: "content",   href: "content.html",   label: "Content Library", icon: "book" },
          { key: "questions", href: "questions.html", label: "Question Bank",   icon: "flask" },
          { key: "uploads",   href: "uploads.html",   label: "Media Uploads",   icon: "upload" }
        ]},
        { label: "Account", items: [
          { key: "settings", href: "settings.html", label: "Settings", icon: "settings" }
        ]}
      ]
    },
    admin: {
      title: "Admin",
      user: { name: "Meera Shah", initials: "MS", meta: "Platform Administrator" },
      groups: [
        { label: "Overview", items: [
          { key: "dashboard", href: "dashboard.html", label: "Dashboard", icon: "home" },
          { key: "analytics", href: "analytics.html", label: "Analytics", icon: "chart" }
        ]},
        { label: "Manage", items: [
          { key: "users",         href: "users.html",         label: "Users",         icon: "users", count: "12.4k" },
          { key: "courses",       href: "courses.html",       label: "Courses",       icon: "book" },
          { key: "subscriptions", href: "subscriptions.html", label: "Subscriptions", icon: "card" },
          { key: "faculty",       href: "faculty.html",       label: "Faculty",       icon: "badge" }
        ]},
        { label: "System", items: [
          { key: "settings", href: "settings.html", label: "Settings", icon: "settings" }
        ]}
      ]
    }
  };

  function renderSidebar(host) {
    var role = host.getAttribute("data-role") || "candidate";
    var active = host.getAttribute("data-active") || "";
    var cfg = SIDEBARS[role];
    var p = host.getAttribute("data-prefix") || "../";

    var groups = cfg.groups.map(function (g) {
      var items = g.items.map(function (it) {
        return '<a class="sidebar-link' + (it.key === active ? " is-active" : "") + '" href="' + it.href + '"' +
          (it.key === active ? ' aria-current="page"' : "") + ">" + icon(it.icon) + "<span>" + it.label + "</span>" +
          (it.count ? '<span class="count">' + it.count + "</span>" : "") + "</a>";
      }).join("");
      return '<div class="sidebar-group"><div class="group-label">' + g.label + "</div>" + items + "</div>";
    }).join("");

    host.className = "app-sidebar";
    host.innerHTML =
      '<div class="sidebar-brand">' + brandMarkup(p) +
        '<span class="badge badge-teal" style="margin-left:auto">' + cfg.title + "</span></div>" +
      '<nav class="sidebar-nav" aria-label="' + cfg.title + ' navigation">' + groups + "</nav>" +
      '<div class="sidebar-foot">' +
        '<a class="sidebar-user" href="#">' +
          '<span class="avatar avatar-sm">' + cfg.user.initials + "</span>" +
          '<span class="grow"><span class="name" style="display:block">' + cfg.user.name + "</span>" +
          '<span class="meta">' + cfg.user.meta + "</span></span>" +
        "</a>" +
        '<a class="sidebar-link" href="' + p + 'login.html" style="margin-top:4px">' + icon("logout") + "<span>Sign out</span></a>" +
      "</div>";
  }

  function renderTopbar(host) {
    var title = host.getAttribute("data-title") || "";
    var sub = host.getAttribute("data-sub") || "";
    var actions = host.getAttribute("data-actions") || "";
    host.className = "app-topbar";
    host.innerHTML =
      '<button class="btn btn-ghost btn-icon nav-toggle" type="button" data-sidebar-toggle aria-label="Open navigation">' + icon("menu") + "</button>" +
      "<div><h1>" + title + "</h1>" + (sub ? '<div class="sub">' + sub + "</div>" : "") + "</div>" +
      '<div class="spacer"></div>' +
      '<div class="search-box no-print">' + icon("search") +
        '<input type="search" placeholder="Search courses, topics, questions…" aria-label="Search">' +
      "</div>" +
      (actions === "none" ? "" :
        '<button class="btn btn-ghost btn-icon" type="button" aria-label="Notifications" style="position:relative">' + icon("bell") +
        '<span style="position:absolute;top:7px;right:8px;width:7px;height:7px;border-radius:50%;background:var(--danger)"></span></button>') +
      '<button class="btn btn-ghost btn-icon" data-theme-toggle type="button"></button>';

    host.querySelector("[data-theme-toggle]").addEventListener("click", toggleTheme);
    var st = host.querySelector("[data-sidebar-toggle]");
    if (st) st.addEventListener("click", function () {
      document.querySelector(".app-sidebar").classList.toggle("is-open");
      document.querySelector(".sidebar-backdrop").classList.toggle("is-open");
    });
  }

  /* ------------------------------------------------------------------
     Interactions
     ------------------------------------------------------------------ */
  function initAccordions(root) {
    (root || document).querySelectorAll(".accordion-trigger").forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      if (!btn.querySelector("svg")) btn.insertAdjacentHTML("beforeend", icon("chevronDown"));
      btn.setAttribute("aria-expanded", btn.closest(".accordion").classList.contains("is-open") ? "true" : "false");
      btn.addEventListener("click", function () {
        var acc = btn.closest(".accordion");
        var open = acc.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function initTabs(root) {
    (root || document).querySelectorAll("[data-tabs]").forEach(function (group) {
      if (group.dataset.bound) return;
      group.dataset.bound = "1";
      group.querySelectorAll(".tab").forEach(function (tab) {
        tab.setAttribute("role", "tab");
        tab.addEventListener("click", function () {
          var target = tab.getAttribute("data-tab");
          group.querySelectorAll(".tab").forEach(function (t) {
            var on = t === tab;
            t.classList.toggle("is-active", on);
            t.setAttribute("aria-selected", String(on));
          });
          var scope = document.querySelector(group.getAttribute("data-tabs")) || document;
          scope.querySelectorAll(".tab-panel").forEach(function (pnl) {
            pnl.classList.toggle("is-active", pnl.getAttribute("data-panel") === target);
          });
        });
      });
    });
  }

  function initChapterTree(root) {
    (root || document).querySelectorAll(".chapter-toggle").forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      btn.addEventListener("click", function () {
        var g = btn.closest(".chapter-group");
        var open = g.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px" });
    els.forEach(function (e, i) { e.style.transitionDelay = (i % 4) * 60 + "ms"; io.observe(e); });
  }

  function initCounters() {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var started = false;
      function run() {
        if (started) return; started = true;
        var start = performance.now(), dur = 1100;
        function step(now) {
          var t = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = (target * eased).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { run(); io.disconnect(); } }, { threshold: .4 });
        io.observe(el);
      } else run();
    });
  }

  function initProgressBars() {
    document.querySelectorAll(".progress-bar[data-pct]").forEach(function (bar) {
      var pct = bar.getAttribute("data-pct");
      bar.style.width = "0%";
      setTimeout(function () { bar.style.width = pct + "%"; }, 120);
      var wrap = bar.parentElement;
      wrap.setAttribute("role", "progressbar");
      wrap.setAttribute("aria-valuenow", pct);
      wrap.setAttribute("aria-valuemin", "0");
      wrap.setAttribute("aria-valuemax", "100");
    });
  }

  function initForms() {
    document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var msg = form.getAttribute("data-demo-form") || "Saved. This is a prototype — no data was sent.";
        var go = form.getAttribute("data-redirect");
        toast(msg);
        if (go) setTimeout(function () { window.location.href = go; }, 700);
      });
    });
  }

  function initModals() {
    document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var m = document.querySelector(btn.getAttribute("data-modal-open"));
        if (m) m.classList.add("is-open");
      });
    });
    document.querySelectorAll(".modal-backdrop").forEach(function (bd) {
      bd.addEventListener("click", function (e) { if (e.target === bd) bd.classList.remove("is-open"); });
      bd.querySelectorAll("[data-modal-close]").forEach(function (b) {
        b.addEventListener("click", function () { bd.classList.remove("is-open"); });
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") document.querySelectorAll(".modal-backdrop.is-open").forEach(function (m) { m.classList.remove("is-open"); });
    });
  }

  function initTableFilters() {
    document.querySelectorAll("[data-filter-input]").forEach(function (input) {
      input.addEventListener("input", function () {
        var q = input.value.toLowerCase().trim();
        var table = document.querySelector(input.getAttribute("data-filter-input"));
        if (!table) return;
        var shown = 0;
        table.querySelectorAll("tbody tr").forEach(function (tr) {
          var hit = tr.textContent.toLowerCase().indexOf(q) > -1;
          tr.style.display = hit ? "" : "none";
          if (hit) shown++;
        });
        var out = document.querySelector(input.getAttribute("data-filter-count") || "___none");
        if (out) out.textContent = shown;
      });
    });
    document.querySelectorAll("[data-chip-group]").forEach(function (group) {
      group.querySelectorAll(".chip").forEach(function (chip) {
        chip.addEventListener("click", function () {
          group.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
          chip.classList.add("is-active");
          var val = chip.getAttribute("data-value");
          var table = document.querySelector(group.getAttribute("data-chip-group"));
          if (!table) return;
          table.querySelectorAll("tbody tr").forEach(function (tr) {
            tr.style.display = (!val || val === "all" || (tr.getAttribute("data-tags") || "").indexOf(val) > -1) ? "" : "none";
          });
        });
      });
    });
  }

  function initBackdrop() {
    var bd = document.querySelector(".sidebar-backdrop");
    if (!bd) return;
    bd.addEventListener("click", function () {
      document.querySelector(".app-sidebar").classList.remove("is-open");
      bd.classList.remove("is-open");
    });
  }

  /* ------------------------------------------------------------------
     Toast
     ------------------------------------------------------------------ */
  function toast(msg) {
    var host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      document.body.appendChild(host);
    }
    var el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.innerHTML = icon("checkCircle") + "<span>" + msg + "</span>";
    host.appendChild(el);
    setTimeout(function () {
      el.style.transition = "opacity .3s, transform .3s";
      el.style.opacity = "0"; el.style.transform = "translateY(8px)";
      setTimeout(function () { el.remove(); }, 320);
    }, 3000);
  }

  /* ------------------------------------------------------------------
     Chart builders (pure SVG / DOM, no libraries)
     ------------------------------------------------------------------ */
  function donut(pct, size, stroke, color) {
    size = size || 150; stroke = stroke || 14;
    var r = (size - stroke) / 2, c = 2 * Math.PI * r;
    var off = c * (1 - pct / 100);
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" role="img" aria-label="' + pct + ' percent">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="var(--bg-sunken)" stroke-width="' + stroke + '"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + (color || "url(#emGrad)") + '" stroke-width="' + stroke +
      '" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + off +
      '" transform="rotate(-90 ' + size / 2 + " " + size / 2 + ')" style="transition:stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)"/>' +
      '<defs><linearGradient id="emGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="var(--blue-500)"/><stop offset="100%" stop-color="var(--teal-400)"/></linearGradient></defs></svg>';
  }

  function pieRing(segments, size, stroke) {
    size = size || 150; stroke = stroke || 20;
    var r = (size - stroke) / 2, c = 2 * Math.PI * r, acc = 0;
    var parts = segments.map(function (s) {
      var len = c * (s.pct / 100);
      var el = '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + s.color +
        '" stroke-width="' + stroke + '" stroke-dasharray="' + len + " " + (c - len) +
        '" stroke-dashoffset="' + (-acc) + '" transform="rotate(-90 ' + size / 2 + " " + size / 2 + ')"/>';
      acc += len;
      return el;
    }).join("");
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" role="img">' + parts + "</svg>";
  }

  function lineChart(values, opts) {
    opts = opts || {};
    var w = opts.width || 560, h = opts.height || 200, pad = 26;
    var min = opts.min != null ? opts.min : Math.min.apply(null, values) - 6;
    var max = opts.max != null ? opts.max : Math.max.apply(null, values) + 6;
    var span = Math.max(1, max - min);
    var step = (w - pad * 2) / Math.max(1, values.length - 1);
    var pts = values.map(function (v, i) {
      return [pad + i * step, h - pad - ((v - min) / span) * (h - pad * 2)];
    });
    var d = pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
    var area = d + " L" + pts[pts.length - 1][0].toFixed(1) + " " + (h - pad) + " L" + pad + " " + (h - pad) + " Z";
    var grid = "";
    for (var g = 0; g <= 4; g++) {
      var y = pad + ((h - pad * 2) / 4) * g;
      grid += '<line x1="' + pad + '" y1="' + y + '" x2="' + (w - pad) + '" y2="' + y + '" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 4"/>';
    }
    var dots = pts.map(function (p) {
      return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="var(--surface)" stroke="var(--blue-500)" stroke-width="2.5"/>';
    }).join("");
    var labels = (opts.labels || []).map(function (l, i) {
      return '<text x="' + pts[i][0].toFixed(1) + '" y="' + (h - 6) + '" text-anchor="middle" font-size="10" font-weight="600" fill="var(--text-subtle)">' + l + "</text>";
    }).join("");
    return '<svg viewBox="0 0 ' + w + " " + h + '" width="100%" height="' + h + '" preserveAspectRatio="none" role="img" aria-label="Trend chart">' +
      '<defs><linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="var(--blue-500)" stop-opacity=".28"/>' +
      '<stop offset="100%" stop-color="var(--blue-500)" stop-opacity="0"/></linearGradient></defs>' +
      grid +
      '<path d="' + area + '" fill="url(#lineFill)"/>' +
      '<path d="' + d + '" fill="none" stroke="var(--blue-500)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      dots + labels + "</svg>";
  }

  function sparkline(values, color) {
    var w = 120, h = 40;
    var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
    var span = Math.max(1, max - min);
    var step = w / Math.max(1, values.length - 1);
    var d = values.map(function (v, i) {
      return (i ? "L" : "M") + (i * step).toFixed(1) + " " + (h - ((v - min) / span) * (h - 6) - 3).toFixed(1);
    }).join(" ");
    return '<svg class="spark" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="' + d + '" fill="none" stroke="' + (color || "var(--teal-400)") + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function barChart(items, opts) {
    opts = opts || {};
    var max = Math.max.apply(null, items.map(function (i) { return i.v; }));
    return '<div class="bars">' + items.map(function (it) {
      var pct = Math.round((it.v / max) * 100);
      return '<div class="bar-col">' +
        '<span class="bar-value">' + (opts.prefix || "") + it.v + (opts.suffix || "") + "</span>" +
        '<div class="bar' + (opts.teal ? " teal" : "") + '" style="height:' + pct + '%" title="' + it.m + ": " + it.v + '"></div>' +
        '<span class="bar-label">' + it.m + "</span></div>";
    }).join("") + "</div>";
  }

  function hbars(items) {
    return items.map(function (it) {
      var tone = it.tone === "green" ? "is-green" : it.tone === "amber" ? "is-amber" : it.tone === "red" ? "is-red" : "is-teal";
      return '<div class="hbar-row"><span class="hbar-label" title="' + it.label + '">' + it.label + "</span>" +
        '<span class="progress progress-sm"><span class="progress-bar ' + tone + '" data-pct="' + it.pct + '" style="width:0%"></span></span>' +
        '<span class="hbar-value">' + it.pct + "%</span></div>";
    }).join("");
  }

  function qrSvg(size) {
    // Deterministic pseudo-QR block pattern — decorative placeholder.
    var n = 21, cell = 100 / n, seed = 7, out = "";
    function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }
    for (var y = 0; y < n; y++) {
      for (var x = 0; x < n; x++) {
        var finder = (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8);
        var on;
        if (finder) {
          var lx = x > n - 8 ? x - (n - 7) : x, ly = y > n - 8 ? y - (n - 7) : y;
          var ring = Math.max(Math.abs(lx - 3), Math.abs(ly - 3));
          on = ring !== 2 && ring <= 3;
        } else {
          on = rnd() > .52;
        }
        if (on) out += '<rect x="' + (x * cell).toFixed(2) + '" y="' + (y * cell).toFixed(2) +
          '" width="' + (cell + .2).toFixed(2) + '" height="' + (cell + .2).toFixed(2) + '" fill="#101828"/>';
      }
    }
    return '<svg class="qr" viewBox="0 0 100 100" width="' + (size || 74) + '" height="' + (size || 74) +
      '" role="img" aria-label="Certificate verification QR code">' + out + "</svg>";
  }

  function xrayPlaceholder() {
    // Stylised AP chest radiograph — right haemopneumothorax.
    return '<svg viewBox="0 0 600 460" width="100%" role="img" aria-label="Chest radiograph showing right haemopneumothorax">' +
      '<defs>' +
        '<radialGradient id="lungL" cx="50%" cy="45%"><stop offset="0%" stop-color="#2c3646"/><stop offset="100%" stop-color="#0d1119"/></radialGradient>' +
        '<linearGradient id="fluid" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a2130"/><stop offset="62%" stop-color="#1a2130"/><stop offset="64%" stop-color="#c9d3e0"/><stop offset="100%" stop-color="#e6ecf4"/></linearGradient>' +
      "</defs>" +
      '<rect width="600" height="460" fill="#05070c"/>' +
      '<ellipse cx="300" cy="240" rx="230" ry="205" fill="#141a26"/>' +
      // spine
      '<rect x="288" y="40" width="24" height="380" rx="8" fill="#b9c4d4" opacity=".55"/>' +
      // left lung (image right side, normal)
      '<path d="M330 80 C400 84 452 140 456 230 C460 320 420 380 350 392 L336 392 Z" fill="url(#lungL)"/>' +
      // right lung field with collapsed lung + fluid level
      '<path d="M270 80 C200 84 148 140 144 230 C140 320 180 380 250 392 L264 392 Z" fill="url(#fluid)"/>' +
      '<path d="M268 96 C232 112 214 168 216 214 C218 250 236 268 262 274 L266 274 Z" fill="#39455a" opacity=".95"/>' +
      // ribs
      '<g stroke="#c2ccdb" stroke-width="5" fill="none" opacity=".42" stroke-linecap="round">' +
        '<path d="M288 110 C240 108 186 132 156 176"/><path d="M312 110 C360 108 414 132 444 176"/>' +
        '<path d="M288 160 C236 160 178 188 152 232"/><path d="M312 160 C364 160 422 188 448 232"/>' +
        '<path d="M288 212 C238 214 186 244 162 288"/><path d="M312 212 C362 214 414 244 438 288"/>' +
        '<path d="M288 264 C244 268 198 296 178 336"/><path d="M312 264 C356 268 402 296 422 336"/>' +
      "</g>" +
      // heart border
      '<path d="M300 250 C300 300 330 350 300 390 C270 350 300 300 300 250 Z" fill="#cfd8e4" opacity=".18"/>' +
      // diaphragms
      '<path d="M156 386 C210 366 262 366 300 384" stroke="#dbe3ec" stroke-width="6" fill="none" opacity=".6"/>' +
      '<path d="M300 384 C340 362 396 362 446 384" stroke="#dbe3ec" stroke-width="6" fill="none" opacity=".6"/>' +
      // annotations
      '<line x1="200" y1="176" x2="118" y2="132" stroke="#f59e0b" stroke-width="2.5"/>' +
      '<circle cx="200" cy="176" r="5" fill="none" stroke="#f59e0b" stroke-width="2.5"/>' +
      '<text x="20" y="126" fill="#f59e0b" font-size="15" font-weight="700" font-family="sans-serif">Absent lung markings</text>' +
      '<line x1="212" y1="330" x2="120" y2="374" stroke="#22d3ee" stroke-width="2.5"/>' +
      '<circle cx="212" cy="330" r="5" fill="none" stroke="#22d3ee" stroke-width="2.5"/>' +
      '<text x="20" y="396" fill="#22d3ee" font-size="15" font-weight="700" font-family="sans-serif">Fluid level</text>' +
      '<text x="516" y="42" fill="#8fa0b6" font-size="16" font-weight="800" font-family="sans-serif">L</text>' +
      "</svg>";
  }

  /* ------------------------------------------------------------------
     Small helpers
     ------------------------------------------------------------------ */
  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }
  function stars(n) {
    var out = "";
    for (var i = 0; i < 5; i++) out += iconFilled("star", i < n ? "" : "off");
    return out;
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function fmtMoney(n) { return "£" + n.toLocaleString("en-GB"); }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function boot() {
    initTheme();
    document.querySelectorAll("[data-header]").forEach(renderPublicHeader);
    document.querySelectorAll("[data-footer]").forEach(renderFooter);
    document.querySelectorAll("[data-sidebar]").forEach(renderSidebar);
    document.querySelectorAll("[data-topbar]").forEach(renderTopbar);

    // Page content first, so markup generated in pageInit also gets its icons.
    if (typeof window.pageInit === "function") window.pageInit();

    // Any element with data-icon gets its glyph injected, once.
    document.querySelectorAll("[data-icon]").forEach(function (n) {
      if (!n.querySelector("svg")) n.insertAdjacentHTML("afterbegin", icon(n.getAttribute("data-icon")));
    });

    initAccordions(); initTabs(); initChapterTree(); initReveal();
    initCounters(); initProgressBars(); initForms(); initModals();
    initTableFilters(); initBackdrop();

    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      if (b.dataset.bound) return;
      b.dataset.bound = "1";
      b.addEventListener("click", toggleTheme);
    });
    applyTheme(document.documentElement.getAttribute("data-theme"));
  }

  window.EM = {
    icon: icon, iconFilled: iconFilled, toast: toast, qs: qs, stars: stars, el: el,
    fmtMoney: fmtMoney, donut: donut, pieRing: pieRing, lineChart: lineChart,
    sparkline: sparkline, barChart: barChart, hbars: hbars, qrSvg: qrSvg,
    xray: xrayPlaceholder, applyTheme: applyTheme,
    initAccordions: initAccordions, initTabs: initTabs, initProgressBars: initProgressBars
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

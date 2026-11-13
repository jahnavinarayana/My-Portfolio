/* Gorle Jahnavi portfolio.
   EDIT YOUR CONTENT IN THE DATA OBJECT BELOW. Everything on the pages is rendered from it. */
"use strict";

const DATA = {
  name: "Gorle Jahnavi",
  email: "jahnavinarayana10@gmail.com",
  linkedin: "https://www.linkedin.com/in/jahnavi-gorle-1b0bba304",
  timeZone: "Asia/Kolkata",
  projects: [
    {
      name: "Online Blood Bank", cat: "Web Development",
      stack: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
      problem: "Finding a matching blood group quickly is slow and depends on phone calls and word of mouth.",
      approach: "Built a platform where donors register, hospitals and patients search by blood group and location, and requests are tracked in a relational database.",
      outcome: "One searchable place for donor and request records, with a clear flow from request to fulfilment.",
      features: ["Donor registration and profiles", "Search by blood group and location", "Blood request creation and status tracking", "Relational database for donors, requests and records"]
    },
    {
      name: "Plant Disease Detection", cat: "AI / ML",
      stack: ["Python", "Machine Learning", "Image Processing", "Data Science"],
      problem: "Farmers and gardeners often spot plant diseases late, when treatment is harder.",
      approach: "Trained an image classification model on labelled leaf images so a photo of a leaf returns the likely disease.",
      outcome: "A working detector that turns a leaf photo into an early, actionable diagnosis.",
      features: ["Leaf image upload", "Disease prediction from a trained image model", "Trained on labelled leaf images", "Clear result for quick decisions"]
    },
    {
      name: "Recharge and Bill Payment Platform", cat: "Web Development",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      problem: "Users juggle several apps to recharge phones and pay utility bills.",
      approach: "Built a responsive Bootstrap front end with a MySQL back end that stores users, plans, and transaction history.",
      outcome: "One responsive place to recharge and pay bills, with every transaction recorded.",
      features: ["Mobile recharge with plan selection", "Utility bill payment", "Transaction history per user", "Responsive Bootstrap layout on MySQL storage"]
    }
  ],
  jobs: [
    {
      role: "Cloud Computing Intern", org: "Alpha Innovation",
      dates: "05 Jul 2025 to 01 Sep 2025", duration: "8 weeks", domain: "Cloud Computing",
      id: "Certificate ID RKMvNYuu0r", cert: 1,
      note: "Completed an eight-week internship in Cloud Computing and was recognised on the certificate as dedicated, determined and hard working.",
      points: ["Learned core cloud computing concepts and how cloud services are used to build and run applications", "Completed hands-on tasks and assignments across the eight-week programme", "Strengthened problem-solving and the habit of delivering work on schedule"]
    },
    {
      role: "Python Programming Intern", org: "InternPe",
      dates: "26 Aug 2024 to 20 Oct 2024", duration: "8 weeks", domain: "Python Programming",
      id: "CID IPI#37889", cert: 0,
      note: "Worked as a Python Programming intern and was recognised as sincere and dedicated, with a professional attitude and very good knowledge of the job.",
      points: ["Built practical Python skills through guided programming tasks", "Applied Python fundamentals to problem-solving exercises", "Gained experience working to deadlines in a professional internship setting"]
    }
  ],
  skills: [
    { g: "Languages", short: "Languages", i: ["Python", "Java", "SQL"] },
    { g: "Web and Full-stack", short: "Web", i: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"] },
    { g: "AI / ML and Data", short: "AI / ML", i: ["Machine Learning fundamentals", "Data Science fundamentals", "Image classification"] },
    { g: "Cloud", short: "Cloud", i: ["Cloud Computing fundamentals"] },
    { g: "Project Management", short: "Project Mgmt", i: ["Work Breakdown Structure", "Predictive planning", "Project kickoff"] }
  ],
  certs: [
    { t: "Internship Completion: Python Programming", by: "InternPe", d: "Oct 2024", file: "assets/cert-python-internship" },
    { t: "Internship Certificate: Cloud Computing", by: "Alpha Innovation", d: "Sep 2025", file: "assets/cert-cloud-internship" },
    { t: "Project Management: Creating the WBS", by: "Coursera", d: "Jul 12, 2026", file: "assets/cert-wbs-coursera" },
    { t: "PMI Kickoff Badge: Predictive", by: "Project Management Institute", d: "Digital badge", file: "assets/badge-pmi-kickoff" }
  ]
};

/* ------------------------------------------------------------------ helpers */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tags = (a) => `<div class="tags">${a.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse = matchMedia("(pointer: coarse)").matches || matchMedia("(max-width: 760px)").matches;
document.documentElement.classList.add("js");
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage may be unavailable */ } }
};

/* ------------------------------------------------------------------ render */
const ARROW = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

function renderTiles() {
  const skillCount = DATA.skills.reduce((n, g) => n + g.i.length, 0);
  const t = [
    ["experience", DATA.jobs.length, "Experience", "Internships completed"],
    ["projects", DATA.projects.length, "Projects", "Case studies"],
    ["skills", skillCount, "Skills", `Across ${DATA.skills.length} areas`],
    ["certifications", DATA.certs.length, "Certifications", "Certificates and badges"],
    ["contact", "Open", "Contact", "Full-time and freelance"]
  ];
  $("#tiles").innerHTML = t.map(([h, n, l, d]) =>
    `<a class="tile glass" data-liquid href="#${h}"><span class="go" aria-hidden="true">${ARROW}</span><span class="n">${n}</span><span class="t">${l}</span><span class="d">${d}</span></a>`).join("");
}

function renderJobs() {
  $("#jobs").innerHTML = DATA.jobs.map((j) => `<article class="card glass glow reveal">
<h2>${esc(j.role)}</h2>
<div class="meta"><span class="org">${esc(j.org)}</span><span>${esc(j.dates)}</span><span>${esc(j.duration)}</span></div>
<p class="note">${esc(j.note)}</p>
<ul>${j.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
${tags([j.domain, j.id])}
<button class="btn ghost small" data-liquid type="button" data-cert="${j.cert}"><span>View certificate</span></button></article>`).join("");
}

let projCat = "All";
function renderProjects(cat) {
  if (cat) projCat = cat;
  const list = DATA.projects.filter((p) => projCat === "All" || p.cat === projCat), n = list.length;
  $("#pcount").textContent = `Showing ${n} of ${DATA.projects.length} projects`;
  $("#plist").innerHTML = list.map((p, i) => `<article class="pc card glass glow reveal">
<div class="pstep">Project ${String(i + 1).padStart(2, "0")} of ${String(n).padStart(2, "0")}</div>
<div class="cat">${esc(p.cat)}</div><h3>${esc(p.name)}</h3>${tags(p.stack)}
<div class="pdetail" style="margin-top:22px">
<dl class="cs"><div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div><div><dt>Approach</dt><dd>${esc(p.approach)}</dd></div><div><dt>Outcome</dt><dd>${esc(p.outcome)}</dd></div></dl>
<div><h4>Key features</h4><ul class="feat">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></div></div></article>`).join("");
  observeReveals($("#plist"));
}

function renderChips() {
  const cats = ["All", ...new Set(DATA.projects.map((p) => p.cat))];
  $("#chips").innerHTML = cats.map((c, i) => `<button class="chip" data-liquid type="button" data-f="${esc(c)}" aria-pressed="${i === 0}"><span>${esc(c)}</span></button>`).join("");
}

function renderSkills() {
  $("#skl").innerHTML = DATA.skills.map((g) => `<tr class="reveal"><th scope="row">${esc(g.g)}</th><td>${tags(g.i)}</td></tr>`).join("");
}

function renderCerts() {
  const html = DATA.certs.map((c, i) => `<button class="cert glass glow reveal" type="button" data-cert="${i}" aria-label="View certificate: ${esc(c.t)}">
<span class="im"><img src="${esc(c.file)}-thumb.jpg" alt="Preview of ${esc(c.t)}" width="520" height="390" loading="lazy" decoding="async"></span>
<span class="tx"><b>${esc(c.t)}</b><small>${esc(c.by)} · ${esc(c.d)}</small></span></button>`).join("");
  $("#certs").innerHTML = html;
}

/* ------------------------------------------------------------------ clock (India time) */
function tick() {
  const n = new Date();
  $("#time").textContent = n.toLocaleTimeString("en-GB", { timeZone: DATA.timeZone, hour12: false });
  $("#date").textContent = n.toLocaleDateString("en-GB", { timeZone: DATA.timeZone, weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

/* ------------------------------------------------------------------ sound (Web Audio) */
let ac = null, muted = store.get("muted") === "1";
function tap(freq = 980) {
  if (muted) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === "suspended") ac.resume();
    const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(freq * 0.43, t + 0.07);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.14, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    o.connect(g).connect(ac.destination);
    o.start(t); o.stop(t + 0.1);
  } catch (e) { /* audio blocked: stay silent */ }
}
function paintSound() {
  const b = $("#sound");
  b.setAttribute("aria-pressed", String(muted));
  b.setAttribute("aria-label", muted ? "Unmute interaction sounds" : "Mute interaction sounds");
}

/* ------------------------------------------------------------------ theme */
function theme() { return document.documentElement.getAttribute("data-theme") || "dark"; }
function setTheme(t) {
  const h = document.documentElement;
  h.classList.add("theming");
  h.setAttribute("data-theme", t);
  store.set("theme", t);
  const m = $('meta[name="theme-color"]'); if (m) m.content = t === "dark" ? "#04050d" : "#e9e3fa";
  setTimeout(() => h.classList.remove("theming"), 650);
}

/* ------------------------------------------------------------------ scroll reveal */
let io = null;
function observeReveals(root = document) {
  const els = $$(".reveal", root).filter((el) => !el.dataset.seen && el.getClientRects().length);
  if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => (e.dataset.seen = "1")); return; }
  io = io || new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); }
  }), { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  els.forEach((el) => {
    el.dataset.seen = "1";
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight) el.classList.add("pre"); // only hide what is below the fold
    io.observe(el);
  });
  setTimeout(() => els.forEach((el) => el.classList.remove("pre")), 2500); // safety net
}

/* ------------------------------------------------------------------ project card tilt + liquid hover */
function bindTilt() {
  if (reduce || coarse) return;
  $$(".pc").forEach((c) => {
    c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--px", x * 100 + "%"); c.style.setProperty("--py", y * 100 + "%");
      c.style.transform = `perspective(900px) rotateX(${((0.5 - y) * 7).toFixed(2)}deg) rotateY(${((x - 0.5) * 9).toFixed(2)}deg) translateY(-3px)`;
    });
    c.addEventListener("pointerleave", () => { c.style.transform = ""; });
  });
}
document.addEventListener("pointerover", (e) => {
  const b = e.target.closest("[data-liquid]");
  if (!b) return;
  const r = b.getBoundingClientRect();
  b.style.setProperty("--x", e.clientX - r.left + "px"); b.style.setProperty("--y", e.clientY - r.top + "px");
});

/* ------------------------------------------------------------------ router (one page per subject) */
const PAGES = ["home", "experience", "projects", "skills", "certifications", "contact"];
const TITLES = { home: "Gorle Jahnavi | Software Developer Portfolio", experience: "Experience | Gorle Jahnavi", projects: "Projects | Gorle Jahnavi", skills: "Skills | Gorle Jahnavi", certifications: "Certifications | Gorle Jahnavi", contact: "Contact | Gorle Jahnavi" };
const links = $$("nav a"), secs = $$(".page");
let shown = null, t1 = 0, t2 = 0;

function hashPage() { const p = location.hash.replace("#", ""); return PAGES.includes(p) ? p : null; }
function show(p) {
  shown = p;
  secs.forEach((s) => s.classList.toggle("cur", s.id === p));
  links.forEach((a) => { const on = a.dataset.s === p; a.classList.toggle("on", on); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"); });
  document.title = TITLES[p];
  $("#announce").textContent = `${p[0].toUpperCase() + p.slice(1)} page`;
  window.scrollTo(0, 0);
  closeMenu();
  const on = links.find((a) => a.dataset.s === p); if (on && on.scrollIntoView) on.scrollIntoView({ inline: "center", block: "nearest" });
  const sec = $("#" + p);
  observeReveals(sec);
  const h = $("h1", sec); if (h) h.focus({ preventScroll: true });
}
function go(p, instant) {
  if (!PAGES.includes(p) || p === shown) return;
  if (instant || reduce) { show(p); return; }
  const L = $("#loader");
  clearTimeout(t1); clearTimeout(t2);
  shown = p; // lock so a second event for the same page is ignored
  L.classList.add("on");
  t1 = setTimeout(() => show(p), 300);
  t2 = setTimeout(() => L.classList.remove("on"), 850);
}
addEventListener("hashchange", () => { const p = hashPage(); if (p) go(p); });

/* ------------------------------------------------------------------ menu */
function closeMenu() { /* nav is always visible in the header */ }

/* ------------------------------------------------------------------ lightbox */
const modal = $("#modal");
let cur = 0;
function openCert(i) {
  cur = (i + DATA.certs.length) % DATA.certs.length;
  const c = DATA.certs[cur];
  $("#mimg").src = c.file + ".jpg"; $("#mimg").alt = "Certificate: " + c.t;
  $("#mcap").textContent = `${c.t} · ${c.by} (${cur + 1} of ${DATA.certs.length})`;
  if (!modal.open) modal.showModal();
}

/* ------------------------------------------------------------------ contact form */
function validate() {
  const f = { fn: $("#fn"), fe: $("#fe"), fs: $("#fs"), fm: $("#fm") };
  const err = { fn: !f.fn.value.trim() && "Enter your name.", fe: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.fe.value.trim()) && "Enter a valid email address, such as name@example.com.", fs: !f.fs.value.trim() && "Enter a subject.", fm: f.fm.value.trim().length < 10 && "Write a message of at least 10 characters." };
  const ids = { fn: "en", fe: "ee", fs: "es", fm: "em" };
  let ok = true, first = null;
  Object.keys(f).forEach((k) => {
    $("#" + ids[k]).textContent = err[k] || "";
    f[k].setAttribute("aria-invalid", err[k] ? "true" : "false");
    if (err[k]) { ok = false; first = first || f[k]; }
  });
  if (first) first.focus();
  return ok;
}

/* ------------------------------------------------------------------ events */
document.addEventListener("click", (e) => {
  const t = e.target;
  if (t.closest("button, a, .chip, .tile, .cert")) tap(t.closest("#sound") ? 1300 : 980);

  const a = t.closest("a[href^='#']");
  if (a) {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    if (a.id === "skip") { $("#main").focus(); return; }
    if (PAGES.includes(id)) {
      closeMenu();
      try { if (location.hash !== "#" + id) history.pushState(null, "", "#" + id); } catch (x) { try { location.hash = id; } catch (y) { /* sandboxed */ } }
      if (id === shown) window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); else go(id);
    }
    return;
  }
  const f = t.closest("[data-f]");
  if (f) { $$(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === f))); renderProjects(f.dataset.f); return; }
  const c = t.closest("[data-cert]");
  if (c) { openCert(+c.dataset.cert); return; }
  if (t.closest("#mclose") || t === modal) { modal.close(); return; }
  if (t.closest("#mprev")) { openCert(cur - 1); return; }
  if (t.closest("#mnext")) { openCert(cur + 1); return; }
  if (t.closest("#theme")) { setTheme(theme() === "dark" ? "light" : "dark"); return; }
  if (t.closest("#sound")) { muted = !muted; store.set("muted", muted ? "1" : "0"); paintSound(); if (!muted) tap(1300); return; }
  if (t.closest("#copy")) {
    const b = $("#copy");
    const done = () => { b.textContent = "Copied"; setTimeout(() => (b.textContent = "Copy email"), 1800); };
    const fail = () => { b.textContent = "Select the address to copy"; setTimeout(() => (b.textContent = "Copy email"), 2600); };
    try { navigator.clipboard.writeText(DATA.email).then(done, fail); } catch (x) { fail(); }
  }
});
addEventListener("popstate", () => { const p = hashPage() || "home"; go(p); });
document.addEventListener("keydown", (e) => {
  if (modal.open) { if (e.key === "ArrowLeft") openCert(cur - 1); if (e.key === "ArrowRight") openCert(cur + 1); }
  if (e.key === "Escape") closeMenu();
});

$("#cf").addEventListener("submit", (e) => {
  e.preventDefault();
  const o = $("#fmsg");
  if (!validate()) { o.className = "msg err"; o.textContent = "Fix the highlighted fields and try again."; return; }
  o.className = "msg ok";
  o.textContent = "Opening your email app. If nothing opens, copy my address and write to me directly.";
  const n = $("#fn").value.trim(), m = $("#fe").value.trim();
  location.href = `mailto:${DATA.email}?subject=${encodeURIComponent($("#fs").value.trim())}&body=${encodeURIComponent($("#fm").value.trim() + "\n\nFrom: " + n + " (" + m + ")")}`;
});

if (!reduce && !coarse) addEventListener("pointermove", (e) => {
  const a = $("#aura"); a.style.setProperty("--mx", e.clientX + "px"); a.style.setProperty("--my", e.clientY + "px");
}, { passive: true });

/* ------------------------------------------------------------------ boot */
renderTiles(); renderJobs(); renderChips(); renderProjects("All"); renderSkills(); renderCerts();
$("#yr").textContent = new Date().getFullYear();
paintSound(); tick(); setInterval(tick, 1000);
go(hashPage() || "home", true);
observeReveals(document);

/* ------------------------------------------------------------------ opening title page */
(function intro() {
  const el = $("#intro");
  if (!el) return;
  const parts = $$("header.site-header, main, footer.site-footer");
  parts.forEach((p) => p.setAttribute("inert", ""));
  let done = false;
  function end() {
    if (done) return;
    done = true;
    parts.forEach((p) => p.removeAttribute("inert"));
    el.classList.add("out");
    setTimeout(() => el.remove(), 1000);
    const h = $("#home h1"); if (h && shown === "home") h.focus({ preventScroll: true });
  }
  const pct = $("#pct"), total = reduce ? 1200 : 3300, t0 = performance.now();
  (function count() { if (done) return; const k = Math.min(1, (performance.now() - t0) / total); if (pct) pct.textContent = Math.round(k * 100); if (k < 1) requestAnimationFrame(count); })();
  setTimeout(end, total);
  el.addEventListener("click", end);
  addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === "Escape") end(); });
})();

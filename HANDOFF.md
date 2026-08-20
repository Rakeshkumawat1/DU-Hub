# EM Hub — Prototype Handoff

Session date: **16 August 2026**
Working directory: `/Users/apple/projects/testing stuff/staticUiLogicPrompt`
Source brief: [`logic.md`](logic.md) (unchanged — treat as the spec of record)

---

## 1. What this is

A high-fidelity, **clickable static prototype** of *EM Hub*, a medical exam preparation
platform for emergency medicine certifications (MRCEM, FRCEM, DNB Emergency Medicine,
Critical Appraisal). Built for investor demos, stakeholder review and client presentation.

It is a **prototype, not an application**. There is no backend, no build step, no
persistence beyond `localStorage` (theme) and `sessionStorage` (last mock result).

### Decisions taken in this session

Two choices were made by the user up front and everything follows from them:

| Question | Decision |
| --- | --- |
| How to build it | **Static HTML / CSS / JS files** — no framework, no bundler, no CDN |
| First-pass scope | **Everything in the spec** — all four areas built in one pass |

Consequences worth remembering:

- **No network requests at all.** No CDN fonts, no icon library, no chart library.
  Everything is hand-rolled so the prototype works offline and from `file://`.
- **`fetch()` is deliberately avoided** for HTML partials — it fails under `file://`
  due to CORS. Shared chrome is injected by JS instead (see §3).
- Charts, icons, the QR code and the X-ray image are all **generated SVG** in
  `assets/js/app.js`.

---

## 2. How to run it

```bash
open index.html          # works directly — no server needed
```

Optional, if you prefer a server (nothing depends on it):

```bash
python3 -m http.server 8000
```

**Prototype log-ins** — `login.html` has a role switcher (Candidate / Faculty / Admin)
that changes the redirect target, plus three direct shortcut buttons underneath.
Any email/password is accepted. Any six digits verify on `verify-email.html`.

---

## 3. Architecture

### File inventory — 38 pages, 4 shared assets

```
assets/css/styles.css        64K   design system: tokens, components, responsive, print
assets/js/data.js            56K   ALL placeholder content (courses, faculty, questions, …)
assets/js/app.js             44K   icons, theme, chrome rendering, charts, interactions
assets/js/questions.js       12K   shared question renderer (used in 3 places)

Public site (11)
  index.html                 Home — hero, courses, journey, faculty, stats, testimonials, plans, FAQ
  courses.html               7 course cards + filters + comparison table
  course-detail.html         7 tabs; reads ?course=<id>
  about.html                 story, mission, vision, methodology, editorial process
  faculty.html               8 faculty, filter + search + profile modal
  contact.html               personalised enquiry form
  login.html / register.html / verify-email.html      auth flow with OTP
  checkout.html              duration picker, promo code, live VAT maths
  question-bank-sample.html  free sample — all 5 question formats

candidate/ (14)
  dashboard.html             widgets, readiness donut, trend, subjects, activity, certificates
  my-courses.html            purchased courses + recommendations
  learn.html                 3-pane learning screen (chapters | content | notes/bookmarks/progress)
  question-bank.html         session builder, practice/exam toggle, palette
  mock-tests.html            configure 30/60/120/180, practice vs exam
  mock-test-runner.html      live timer, flagging, palette, pacing, submit modal
  result.html                score, breakdown, subject vs cohort, pacing, percentile
  results.html               all attempts + score history
  result-detail.html         per-question review with explanations
  progress.html              completion, heatmap, subject table, milestones
  certificates.html          list + public verification widget
  certificate.html           printable certificate with QR; reads ?id=<cert>
  subscription.html          access, deferral request modal, invoices
  settings.html              profile, study prefs, notifications, accessibility, security

faculty-portal/ (6)
  dashboard.html  content.html  questions.html  students.html  uploads.html  settings.html

admin/ (7)
  dashboard.html  users.html  courses.html  subscriptions.html
  faculty.html    analytics.html  settings.html
```

### The page contract

Every page follows the same shape. **Copy an existing page rather than starting fresh.**

```html
<head>
  <link rel="stylesheet" href="assets/css/styles.css">   <!-- ../ inside portals -->
  <script>/* inline theme bootstrap — prevents a light flash */</script>
</head>
<body>
  <!-- markup with empty hosts: <div id="someHost"></div> -->

  <script src="assets/js/data.js"></script>
  <script src="assets/js/app.js"></script>
  <script>
    function pageInit() { /* fill the hosts */ }
  </script>
</body>
```

`app.js` boots on `DOMContentLoaded` and does, **in this order**:

1. apply theme
2. render chrome — `[data-header]`, `[data-footer]`, `[data-sidebar]`, `[data-topbar]`
3. **call `window.pageInit()`**
4. inject `[data-icon]` glyphs (guarded, so it never double-injects)
5. bind accordions, tabs, chapter tree, reveals, counters, progress bars, forms,
   modals, table filters, sidebar backdrop

Step 3 sits **before** step 4 on purpose — markup created inside `pageInit` still gets
its icons. Steps 4 and 5 likewise run after, so dynamically added accordions, tabs and
progress bars are bound. **If you reorder `boot()`, this breaks.**

### Shared chrome — declarative attributes

```html
<!-- public pages -->
<header data-header data-active="courses" data-prefix=""></header>
<footer data-footer data-prefix=""></footer>

<!-- portal pages -->
<div class="app">
  <aside data-sidebar data-role="candidate" data-active="dashboard" data-prefix="../"></aside>
  <div class="app-main">
    <div data-topbar data-title="Dashboard" data-sub="…"></div>
    <main class="app-content" id="main"> … </main>
  </div>
</div>
<div class="sidebar-backdrop"></div>
```

- `data-prefix` is `""` at the root and `"../"` inside `candidate/`,
  `faculty-portal/` and `admin/`. Get this wrong and links break.
- Sidebar contents are defined in the `SIDEBARS` object in `app.js`.
  **Adding a portal page means adding it there too**, or it has no nav entry.
- `data-role` is one of `candidate` | `faculty` | `admin`.

### Public API surface

`window.EM` (from `app.js`):

| Member | Purpose |
| --- | --- |
| `icon(name, cls)` / `iconFilled()` | inline SVG from the ~70-glyph set in `P` |
| `toast(msg)` | bottom-right notification — the standard "this is a prototype" affordance |
| `qs(name)` | read a query-string parameter |
| `donut` `pieRing` `lineChart` `barChart` `hbars` `sparkline` | SVG/DOM charts |
| `qrSvg(size)` | deterministic decorative QR block pattern |
| `xray()` | stylised chest radiograph for the image-question format |
| `applyTheme(t)` | `"light"` or `"dark"` |
| `initAccordions` `initTabs` `initProgressBars` | re-bind after injecting new markup |

`window.EMQ` (from `questions.js`) — the question renderer, shared by
`question-bank-sample.html`, `candidate/question-bank.html`, `candidate/learn.html`,
`candidate/result-detail.html` and `faculty-portal/questions.html`:

| Member | Purpose |
| --- | --- |
| `render(q, opts)` | card markup; `opts = {index, total, mode, showMeta, flagged}` |
| `reveal(card, q, picked, showExplanation)` | mark correct/wrong, returns `true` if right |
| `attach(container, lookup, onAnswer)` | wire practice-mode interaction |
| `typeBadge(q)` / `mediaBlock(q)` | format badge, media frame |

`window.EMHUB` (from `data.js`) — all content. `courseById(id)` falls back to
MRCEM SBA rather than returning `undefined`, so a bad `?course=` never white-screens.

### Design system

Tokens live at the top of `styles.css`. Light theme on `:root`, dark theme on
`[data-theme="dark"]`, persisted to `localStorage` under `emhub-theme`.
Every page has an inline bootstrap script in `<head>` to set the attribute before
first paint — **keep it when adding pages** or you get a white flash in dark mode.

Palette is white / blue (`--blue-*`) / teal (`--teal-*`) per the brief.
Breakpoints: 1200 / 1080 / 900 / 680 px. Desktop-first. Print styles included
(certificates and reports are designed to print).

---

## 4. Bug fixed late in the session — read before touching icons

Footer "Get in touch" icons were rendering enormous. `icon()` emitted an `<svg>`
with a `viewBox` but no width/height and no class; an unsized SVG has no intrinsic
size, so as a **flex item** it stretched to fill the row. It only looked fine
elsewhere because component rules (`.btn svg`, `.icon-tile svg`, `.alert svg`,
`.social-row svg`) happened to constrain it.

Fixed systemically, not locally:

1. `icon()` / `iconFilled()` now stamp every glyph with a base `ico` class.
2. `.ico { width: 1.1em; height: 1.1em; flex: none; }` — deliberately low
   specificity `(0,1,0)` so all existing component rules `(0,1,1)` still win and
   nothing else changed size. `flex: none` is what stops the stretching.
3. `span[style*="inline-flex"] > .ico { width:100%; height:100% }` so icons nested
   in explicitly-sized wrapper spans fill their wrapper exactly.
4. `.site-footer p > .ico` pins contact icons to 16px and aligns them to the first
   text line rather than the middle of the two-line address.

**Chart SVGs deliberately do not carry `.ico`** — `donut`, `pieRing`, `lineChart`,
`barChart`, `sparkline`, `qrSvg` and `xray()` size themselves. Do not add a global
`svg { … }` size rule; it will destroy the charts.

---

## 5. Verification already done

- **Link graph**: all 38 pages crawled, every relative `href`/`src` resolves.
  (The checker reports ~6 hits that are JS string fragments, not links — ignore them.)
- **JS syntax**: every inline `<script>` plus all three external files pass
  `node --check`. Seven genuine bugs were found and fixed this way — string literals
  opened with `'` and closed with `"` in table-row builders.

Re-run both checks after any substantial edit:

```bash
# syntax across every inline and external script
python3 - <<'PY'
import os,re,subprocess,tempfile
html=[os.path.join(d,f) for d,_,fs in os.walk('.') for f in fs if f.endswith('.html')]
errs=0
for f in sorted(html):
    for i,m in enumerate(re.finditer(r'<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>',
                                     open(f,encoding='utf-8').read(), re.S)):
        tf=tempfile.NamedTemporaryFile('w',suffix='.js',delete=False,encoding='utf-8')
        tf.write(m.group(1)); tf.close()
        r=subprocess.run(['node','--check',tf.name],capture_output=True,text=True)
        if r.returncode: errs+=1; print("ERR",f,i,r.stderr.split("\n\n")[0][:400])
        os.unlink(tf.name)
for js in ['assets/js/data.js','assets/js/app.js','assets/js/questions.js']:
    r=subprocess.run(['node','--check',js],capture_output=True,text=True)
    if r.returncode: errs+=1; print("ERR",js,r.stderr[:400])
print("syntax errors:",errs)
PY
```

**Not yet done: no browser render check.** Nothing has been opened in a real browser
or screenshotted in this session, so visual regressions and runtime `TypeError`s are
still possible. The footer icon bug was caught by the user's eye, not by tooling —
treat that as the standing reminder to actually look at the pages.

---

## 6. Suggested next steps

Roughly in order of value:

1. **Open every page in a browser and check the console.** This is the biggest
   remaining gap. Both themes, and at 375px / 768px / 1440px.
2. **Print check** on `candidate/certificate.html` and `candidate/result.html` —
   both have print styles that have never been exercised.
3. **Keyboard and screen-reader pass.** ARIA is in place (roles, `aria-pressed`,
   `aria-current`, skip links, `role="progressbar"`), but nothing has been tested
   with an actual assistive technology.
4. **Content realism review with a clinician.** The medical content is deliberately
   detailed and plausible but was written for demo purposes — it should not be
   presented as clinically authoritative without review.
5. **Fill the thin spots** if the demo needs more depth: only 8 questions exist in
   `QUESTIONS`, and the mock runner cycles them to fill a 20-question paper.

### Known simplifications (intentional, but ask before demoing them as real)

- The mock runner builds a **20-question** paper regardless of the 30/60/120/180
  choice, and the timer runs at real speed against the requested limit.
- Audio and video playback are simulated — clicking play animates a waveform and
  raises a toast.
- Search boxes in portal topbars are decorative; the *in-page* search and filter
  controls (faculty, tables, chapters) genuinely work.
- Form submits are intercepted by `data-demo-form`, show a toast, and optionally
  redirect via `data-redirect`. Nothing is sent anywhere.

### Conventions to keep

- Vanilla ES5-style JS — `var`, `function`, no arrow functions or template literals.
  Consistency matters more than modernity here; match what is already there.
- British English throughout the copy, GBP pricing, `£` symbol.
- Realistic placeholder content, never lorem ipsum.
- Every interactive control does *something* — if there is no real behaviour,
  call `EM.toast()` so the demo never feels dead.

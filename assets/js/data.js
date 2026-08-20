/* ==========================================================================
   EM Hub — Prototype data
   Single source of realistic placeholder content for every screen.
   Exposed as window.EMHUB.
   ========================================================================== */
(function () {
  "use strict";

  var COURSES = [
    {
      id: "mrcem-primary",
      code: "MRCEM Primary",
      title: "MRCEM Primary",
      tag: "Basic Sciences",
      tagTone: "blue",
      short: "Master the basic sciences blueprint — anatomy, physiology, pharmacology, microbiology and evidence-based medicine — with 2,400+ mapped SBAs.",
      long: "MRCEM Primary is the first hurdle of the Royal College of Emergency Medicine membership pathway. Our programme rebuilds the basic sciences from first principles and then drills them against exam-standard single best answer questions written to the RCEM 2024 curriculum blueprint.",
      examBody: "Royal College of Emergency Medicine (UK)",
      format: "180 SBA questions, 3 hours, computer-based",
      passMark: "Standard set by Angoff method (typically 62–68%)",
      sittings: "Three sittings per year — January, May, September",
      questions: 2400,
      hours: 68,
      chapters: 42,
      videos: 96,
      priceFrom: 49,
      rating: 4.8,
      reviews: 412,
      students: 3180,
      subjects: [
        "Anatomy", "Physiology", "Pharmacology", "Microbiology",
        "Pathology", "Evidence-Based Medicine"
      ],
      features: [
        "2,400+ SBAs mapped to the RCEM basic sciences blueprint",
        "Concise high-yield notes for all 42 chapters",
        "96 whiteboard videos on the hardest physiology topics",
        "Unlimited timed mock exams in true exam interface",
        "Performance analytics by subject and sub-topic",
        "Faculty Q&A within 24 hours on weekdays"
      ]
    },
    {
      id: "mrcem-sba",
      code: "MRCEM SBA",
      title: "MRCEM SBA (Intermediate)",
      tag: "Clinical",
      tagTone: "teal",
      short: "Clinical decision-making across the full acute presentation blueprint, with 3,100+ scenario-driven SBAs and structured revision notes.",
      long: "The MRCEM Intermediate SBA examination tests applied clinical knowledge across the breadth of emergency medicine. This programme moves you from recall to reasoning with case-anchored questions, red-flag frameworks and rapid revision maps.",
      examBody: "Royal College of Emergency Medicine (UK)",
      format: "180 SBA questions, 3 hours, computer-based",
      passMark: "Standard set by Angoff method (typically 60–66%)",
      sittings: "Three sittings per year — February, June, October",
      questions: 3100,
      hours: 84,
      chapters: 56,
      videos: 74,
      priceFrom: 55,
      rating: 4.9,
      reviews: 528,
      students: 4260,
      subjects: [
        "Resuscitation", "Cardiology", "Respiratory", "Neurology",
        "Trauma", "Toxicology", "Paediatric EM", "Musculoskeletal"
      ],
      features: [
        "3,100+ clinically anchored single best answer questions",
        "Presentation-based revision notes with red-flag boxes",
        "ECG, imaging and blood gas interpretation libraries",
        "Adaptive weak-topic drilling engine",
        "Timed full-length mocks with percentile benchmarking",
        "Downloadable one-page summaries for every chapter"
      ]
    },
    {
      id: "mrcem-osce",
      code: "MRCEM OSCE",
      title: "MRCEM OSCE",
      tag: "Practical",
      tagTone: "violet",
      short: "Station-by-station OSCE preparation with 180 filmed stations, examiner mark schemes and structured communication frameworks.",
      long: "The MRCEM OSCE assesses clinical skills, communication and professionalism across 16 live stations. We break every station archetype down into a repeatable structure, then film consultant-led demonstrations so you can see exactly what a pass looks like.",
      examBody: "Royal College of Emergency Medicine (UK)",
      format: "16 stations of 7 minutes plus reading time",
      passMark: "Pass required in a minimum number of stations",
      sittings: "Three sittings per year — March, July, November",
      questions: 640,
      hours: 46,
      chapters: 24,
      videos: 180,
      priceFrom: 65,
      rating: 4.7,
      reviews: 296,
      students: 1890,
      subjects: [
        "History Taking", "Clinical Examination", "Practical Skills",
        "Resuscitation Stations", "Communication", "Teaching Stations"
      ],
      features: [
        "180 filmed demonstration stations with examiner commentary",
        "Downloadable examiner mark schemes for self-scoring",
        "Communication frameworks for breaking bad news and consent",
        "Paired-practice scripts to rehearse with a colleague",
        "Live mock OSCE circuits every month",
        "Station timer tool that mirrors exam conditions"
      ]
    },
    {
      id: "frcem-sba",
      code: "FRCEM SBA",
      title: "FRCEM Final SBA",
      tag: "Advanced",
      tagTone: "blue",
      short: "Consultant-level decision-making, service management and complex multi-morbidity, with 2,800+ questions at true FRCEM standard.",
      long: "FRCEM Final SBA is pitched at the level of a day-one consultant. The programme prioritises high-stakes judgement — resource limitation, ethical conflict, complex multi-morbidity and departmental leadership — alongside the full clinical blueprint.",
      examBody: "Royal College of Emergency Medicine (UK)",
      format: "180 SBA questions, 3 hours, computer-based",
      passMark: "Standard set by Angoff method (typically 58–64%)",
      sittings: "Two sittings per year — April and October",
      questions: 2800,
      hours: 92,
      chapters: 61,
      videos: 88,
      priceFrom: 62,
      rating: 4.8,
      reviews: 341,
      students: 2470,
      subjects: [
        "Complex Resuscitation", "Critical Care", "Major Incident",
        "Leadership & Management", "Ethics & Law", "Quality Improvement"
      ],
      features: [
        "2,800+ questions written at genuine FRCEM Final standard",
        "Management, ethics and law modules with UK guideline anchors",
        "Guideline update feed — NICE, RCEM, Resus Council",
        "Consultant-level case discussions on video",
        "Percentile benchmarking against the current cohort",
        "Exam-day strategy masterclass"
      ]
    },
    {
      id: "frcem-osce",
      code: "FRCEM OSCE",
      title: "FRCEM Final OSCE",
      tag: "Practical",
      tagTone: "violet",
      short: "The final practical hurdle — leadership, resuscitation command, difficult conversations and departmental prioritisation stations.",
      long: "The FRCEM Final OSCE tests whether you can run a department under pressure. Our circuits rehearse resuscitation command, simultaneous prioritisation, complaints handling and teaching, with consultant examiners scoring you against the real domains.",
      examBody: "Royal College of Emergency Medicine (UK)",
      format: "18 stations, mixed duration, live examiners",
      passMark: "Domain-based scoring across all stations",
      sittings: "Two sittings per year — May and November",
      questions: 520,
      hours: 52,
      chapters: 22,
      videos: 156,
      priceFrom: 72,
      rating: 4.9,
      reviews: 214,
      students: 1340,
      subjects: [
        "Resuscitation Command", "Prioritisation", "Difficult Conversations",
        "Teaching & Supervision", "Complaints & Governance"
      ],
      features: [
        "156 filmed consultant-led station demonstrations",
        "Live scored mock circuits with individual feedback reports",
        "Leadership language scripts for resus command",
        "Prioritisation drills against a simulated departmental board",
        "Complaint and duty-of-candour conversation frameworks",
        "Two 1:1 coaching calls included on 3-month plans and above"
      ]
    },
    {
      id: "dnb-em",
      code: "DNB EM",
      title: "DNB Emergency Medicine",
      tag: "India",
      tagTone: "teal",
      short: "Complete DNB Emergency Medicine theory and practical preparation aligned to the NBEMS curriculum, with Indian-context protocols.",
      long: "Built specifically for NBEMS candidates, this programme covers the full DNB Emergency Medicine theory blueprint alongside practical and viva preparation, using Indian epidemiology, protocols and drug availability throughout.",
      examBody: "National Board of Examinations in Medical Sciences (India)",
      format: "Four theory papers plus practical and viva",
      passMark: "50% aggregate with paper-wise minimum",
      sittings: "Two sittings per year — June and December",
      questions: 2650,
      hours: 78,
      chapters: 54,
      videos: 112,
      priceFrom: 42,
      rating: 4.7,
      reviews: 389,
      students: 2960,
      subjects: [
        "Tropical Emergencies", "Envenomation", "Trauma", "Toxicology",
        "Obstetric Emergencies", "Disaster Medicine", "Critical Care"
      ],
      features: [
        "Complete NBEMS theory blueprint coverage in 54 chapters",
        "Snake bite, organophosphate and tropical fever protocols",
        "Theory paper writing technique with model answers",
        "Practical and viva question bank with examiner prompts",
        "Indian guideline anchors — AIIMS, NBEMS, ICMR",
        "Weekly live doubt-clearing sessions"
      ]
    },
    {
      id: "critical-appraisal",
      code: "Critical Appraisal",
      title: "Critical Appraisal & EBM",
      tag: "Skills",
      tagTone: "amber",
      short: "Statistics without the fear. Study design, bias, forest plots and diagnostic accuracy, drilled with real emergency medicine papers.",
      long: "Critical appraisal is the most reliably scoreable part of any emergency medicine exam — and the most commonly neglected. This short, intense programme takes you from p-values to forest plots using real published EM papers.",
      examBody: "Applicable to MRCEM, FRCEM and DNB pathways",
      format: "Short-answer and structured appraisal questions",
      passMark: "Component of the wider written examination",
      sittings: "Available year-round",
      questions: 780,
      hours: 26,
      chapters: 18,
      videos: 42,
      priceFrom: 29,
      rating: 4.9,
      reviews: 512,
      students: 5140,
      subjects: [
        "Study Design", "Bias & Confounding", "Statistical Tests",
        "Diagnostic Accuracy", "Meta-analysis", "Guideline Appraisal"
      ],
      features: [
        "18 chapters from first principles — no statistics background needed",
        "780 appraisal questions built on real published EM papers",
        "Forest plot and funnel plot interpretation workshops",
        "Sensitivity, specificity and likelihood ratio drills",
        "Model structured answers marked against exam criteria",
        "Printable formula and definition sheet"
      ]
    }
  ];

  var PLANS = [
    { months: 1, label: "1 Month",  price: 49,  perMonth: 49.00, save: 0,  note: "Final sprint revision" },
    { months: 2, label: "2 Months", price: 89,  perMonth: 44.50, save: 9,  note: "Focused preparation" },
    { months: 3, label: "3 Months", price: 119, perMonth: 39.67, save: 19, note: "Most chosen plan", featured: true },
    { months: 4, label: "4 Months", price: 149, perMonth: 37.25, save: 24, note: "Comfortable pacing" },
    { months: 6, label: "6 Months", price: 199, perMonth: 33.17, save: 32, note: "Best overall value" }
  ];

  var PLAN_FEATURES = {
    1: ["Full question bank access", "Unlimited timed mocks", "Performance analytics", "Mobile and tablet access"],
    2: ["Everything in 1 Month", "Downloadable revision notes", "Weak topic drilling engine", "Faculty Q&A access"],
    3: ["Everything in 2 Months", "Full video library", "Monthly live mock exam", "Completion certificate"],
    4: ["Everything in 3 Months", "Priority faculty Q&A", "Printable summary packs", "Study plan builder"],
    6: ["Everything in 4 Months", "Two 1:1 coaching calls", "Guaranteed extension on exam deferral", "Alumni community access"]
  };

  var FACULTY = [
    {
      id: "f-aisha",
      name: "Dr Aisha Rahman",
      initials: "AR",
      qual: "MBBS, MRCEM, FRCEM",
      role: "Programme Director",
      spec: "Resuscitation & Critical Care",
      years: 16,
      location: "Manchester, UK",
      courses: ["MRCEM SBA", "FRCEM SBA"],
      bio: "Consultant in Emergency Medicine at a major trauma centre and RCEM examiner for eight years. Aisha designed the EM Hub blueprint mapping and leads the resuscitation curriculum.",
      long: "Aisha has supervised more than 900 candidates through the MRCEM and FRCEM pathways. Her teaching focuses on decision-making under uncertainty — the skill that separates a borderline candidate from a comfortable pass. She sits on two national resuscitation working groups and publishes regularly on human factors in the resus room."
    },
    {
      id: "f-vikram",
      name: "Dr Vikram Menon",
      initials: "VM",
      qual: "MBBS, MD, DNB (EM)",
      role: "Head of DNB Programme",
      spec: "Tropical & Toxicological Emergencies",
      years: 14,
      location: "Kochi, India",
      courses: ["DNB Emergency Medicine"],
      bio: "Senior consultant and NBEMS-accredited trainer with a specialist interest in envenomation and poisoning protocols across South Asia.",
      long: "Vikram built the DNB Emergency Medicine syllabus mapping used across EM Hub and has trained over 600 NBEMS candidates. His envenomation and organophosphate modules are drawn from more than a decade of frontline practice in high-volume Indian emergency departments."
    },
    {
      id: "f-sarah",
      name: "Dr Sarah Whitfield",
      initials: "SW",
      qual: "MBChB, MRCEM, PGCert Med Ed",
      role: "OSCE Lead",
      spec: "Communication & Clinical Skills",
      years: 11,
      location: "Bristol, UK",
      courses: ["MRCEM OSCE", "FRCEM OSCE"],
      bio: "OSCE examiner and medical educator who has run more than 120 mock circuits. Sarah's communication frameworks are the backbone of the OSCE programme.",
      long: "Sarah's work centres on the stations candidates fear most — breaking bad news, consent under time pressure and managing an angry relative. She trains examiners as well as candidates, which gives her programme an unusually precise read on how marks are actually awarded."
    },
    {
      id: "f-james",
      name: "Dr James Okonkwo",
      initials: "JO",
      qual: "MBBS, FRCEM, MSc Clinical Ed",
      role: "Basic Sciences Lead",
      spec: "Physiology & Pharmacology",
      years: 13,
      location: "Birmingham, UK",
      courses: ["MRCEM Primary"],
      bio: "Consultant and university lecturer who rebuilt the Primary basic sciences curriculum around the concepts candidates actually lose marks on.",
      long: "James teaches physiology the way it is examined — mechanism first, numbers second. His whiteboard video series on acid–base balance and cardiac physiology is consistently the highest-rated content on the platform."
    },
    {
      id: "f-priya",
      name: "Dr Priya Nair",
      initials: "PN",
      qual: "MBBS, MRCEM, MSc EBHC",
      role: "Critical Appraisal Lead",
      spec: "Evidence-Based Medicine & Statistics",
      years: 9,
      location: "Edinburgh, UK",
      courses: ["Critical Appraisal & EBM"],
      bio: "Emergency physician and evidence-based healthcare researcher who makes statistics genuinely approachable for clinicians.",
      long: "Priya holds a master's in evidence-based healthcare from Oxford and reviews for two emergency medicine journals. Her appraisal module has the highest completion rate on EM Hub because she teaches from real papers rather than abstract formulas."
    },
    {
      id: "f-daniel",
      name: "Dr Daniel Fischer",
      initials: "DF",
      qual: "MD, EBEEM, MRCEM",
      role: "Trauma Lead",
      spec: "Major Trauma & Pre-hospital Care",
      years: 15,
      location: "Leeds, UK",
      courses: ["MRCEM SBA", "FRCEM OSCE"],
      bio: "Major trauma centre consultant and HEMS physician bringing pre-hospital decision-making into the exam curriculum.",
      long: "Daniel splits his week between the resus room and a helicopter emergency medical service. His trauma teaching is built around real, anonymised cases — including the ones that went wrong — which is why candidates remember it under exam pressure."
    },
    {
      id: "f-mei",
      name: "Dr Mei-Ling Chen",
      initials: "MC",
      qual: "MBBS, MRCPCH, MRCEM",
      role: "Paediatric EM Lead",
      spec: "Paediatric Emergency Medicine",
      years: 12,
      location: "London, UK",
      courses: ["MRCEM SBA", "FRCEM SBA"],
      bio: "Dual-trained paediatrician and emergency physician covering the paediatric blueprint that candidates most often under-prepare.",
      long: "Mei-Ling leads the paediatric strand across all clinical courses, covering the sepsis pathways, safeguarding scenarios and weight-based prescribing that reliably appear in every sitting."
    },
    {
      id: "f-omar",
      name: "Dr Omar Haddad",
      initials: "OH",
      qual: "MBBS, MRCEM, MBA",
      role: "Leadership & Governance",
      spec: "Departmental Management & Ethics",
      years: 18,
      location: "Dubai, UAE",
      courses: ["FRCEM SBA", "FRCEM OSCE"],
      bio: "Clinical director with an MBA, teaching the management, ethics and governance domains that dominate FRCEM Final.",
      long: "Omar has run emergency departments in the UK and the Gulf. He teaches the management blueprint as a set of repeatable frameworks rather than opinions, which is exactly how the FRCEM Final examiners score it."
    }
  ];

  var TESTIMONIALS = [
    {
      quote: "I failed Primary twice with another provider before switching. The subject analytics showed me my pharmacology was the problem — not my effort. Passed at the next sitting with 74%.",
      name: "Dr Hannah Blake", role: "MRCEM Primary, passed January 2026", initials: "HB", stars: 5
    },
    {
      quote: "The OSCE station videos are the closest thing to sitting in the exam room. Watching a consultant do the breaking-bad-news station properly rewired how I approached all sixteen.",
      name: "Dr Kofi Mensah", role: "MRCEM OSCE, passed November 2025", initials: "KM", stars: 5
    },
    {
      quote: "As a DNB candidate I'd struggled to find material that wasn't purely UK-focused. The envenomation and tropical fever modules were exactly what the theory papers asked for.",
      name: "Dr Ananya Iyer", role: "DNB Emergency Medicine, passed December 2025", initials: "AI", stars: 5
    },
    {
      quote: "Critical appraisal went from my worst section to a guaranteed twelve marks. Dr Nair teaches statistics like a clinician, not a statistician.",
      name: "Dr Tom Ridley", role: "FRCEM Final SBA, passed October 2025", initials: "TR", stars: 5
    },
    {
      quote: "Working nights with two small children, the mobile app was the only way this happened. Twenty questions on the commute added up to the whole bank over four months.",
      name: "Dr Fatima Al-Sayed", role: "MRCEM SBA, passed June 2025", initials: "FA", stars: 5
    },
    {
      quote: "The mock exam interface is identical to the real thing. On exam day there were no surprises at all, which took an enormous amount of pressure off.",
      name: "Dr Liam Docherty", role: "FRCEM Final SBA, passed April 2026", initials: "LD", stars: 5
    }
  ];

  var STATS = [
    { value: "12,400+", label: "Doctors prepared", note: "Across 42 countries" },
    { value: "94%",     label: "First-attempt pass rate", note: "2025 cohort, verified" },
    { value: "12,800+", label: "Exam-standard questions", note: "Reviewed every sitting" },
    { value: "4.8 / 5", label: "Average candidate rating", note: "From 2,692 reviews" }
  ];

  var FAQS = [
    {
      q: "How closely does the question bank match the real exam?",
      a: "Every question is written by a practising emergency physician against the current published blueprint and reviewed by a second faculty member before release. After each sitting we survey candidates and retire or rewrite any question that no longer reflects examined standard. Roughly 8% of the bank is refreshed each cycle."
    },
    {
      q: "What happens if my exam is deferred or postponed?",
      a: "Tell us your new sitting date and we extend your subscription to cover it at no cost. This applies to college-initiated postponements and to personal deferrals for illness, parental leave or visa delays. There is no limit on how many times you can request an extension."
    },
    {
      q: "Can I use EM Hub on my phone during clinical shifts?",
      a: "Yes. The platform is fully responsive and question sessions save automatically after every answer, so you can do ten questions in a coffee break and resume mid-session hours later on a different device."
    },
    {
      q: "Do you offer a free trial before I subscribe?",
      a: "Every course has a free sample of 25 questions with full explanations, plus two sample chapters of notes. No card details are required for the sample — register with an email address and you have immediate access."
    },
    {
      q: "Is the platform suitable for international medical graduates?",
      a: "It is designed for them. Around 68% of our candidates sit their exams outside the UK. Explanations assume no prior familiarity with NHS systems, and UK-specific pathways are flagged and explained wherever they appear."
    },
    {
      q: "How do subscriptions and payments work?",
      a: "Subscriptions are one-off payments for a fixed duration — one, two, three, four or six months — not rolling contracts, so nothing renews automatically. All prices are in GBP and include VAT where applicable. We accept card payments and institutional purchase orders."
    },
    {
      q: "Can my hospital or training programme buy group access?",
      a: "Yes. We work with more than 60 deaneries, hospitals and training programmes on cohort licences, which include a supervisor dashboard showing aggregate progress. Contact us for institutional pricing."
    },
    {
      q: "What is included in the completion certificate?",
      a: "Certificates are issued once you complete 80% of a course and are verifiable through a QR code linked to a public verification record. They carry your name, the course, completion date and a unique certificate number suitable for your portfolio."
    }
  ];

  var WHY_CHOOSE = [
    { icon: "target",     title: "Blueprint-mapped, not padded", text: "Every question and note is tagged to a specific curriculum item. Nothing is in the bank because it was easy to write." },
    { icon: "chart",      title: "Analytics that name the gap",  text: "Subject and sub-topic breakdowns tell you precisely where marks are leaking, then build a drill session to close it." },
    { icon: "stethoscope",title: "Written by practising EM consultants", text: "Sixteen faculty, all working clinically, several serving as college examiners. No outsourced question writing." },
    { icon: "monitor",    title: "A true exam-day simulation",   text: "Our mock interface mirrors the real computer-based test — same layout, same flagging, same countdown behaviour." },
    { icon: "refresh",    title: "Refreshed every sitting",      text: "Candidate feedback after each sitting drives question retirement, guideline updates and new content within weeks." },
    { icon: "shield",     title: "Deferral protection",          text: "If your exam moves, your access moves with it. No forms, no fees, no arguments." }
  ];

  var JOURNEY = [
    { n: 1, title: "Diagnose", text: "Sit a baseline assessment. We map your current standing against the blueprint in under an hour." },
    { n: 2, title: "Learn",    text: "Work through structured notes and videos, chapter by chapter, with progress tracked automatically." },
    { n: 3, title: "Drill",    text: "Answer targeted question sets. The engine keeps returning you to weak sub-topics until they hold." },
    { n: 4, title: "Simulate", text: "Sit full-length timed mocks in exam conditions and benchmark against the current cohort." }
  ];

  /* ---------------- Candidate portal data ---------------- */

  var CANDIDATE = {
    name: "Dr Ravi Krishnan",
    initials: "RK",
    email: "ravi.krishnan@example.com",
    country: "India",
    gmc: "Pending",
    joined: "12 February 2026",
    plan: "3 Month Plan",
    enrolled: [
      { id: "mrcem-sba", title: "MRCEM SBA (Intermediate)", progress: 68, expiry: "24 October 2026", daysLeft: 69, lastTopic: "Acute Coronary Syndromes", questionsDone: 1420, questionsTotal: 3100, accuracy: 71 },
      { id: "critical-appraisal", title: "Critical Appraisal & EBM", progress: 92, expiry: "24 October 2026", daysLeft: 69, lastTopic: "Forest Plot Interpretation", questionsDone: 718, questionsTotal: 780, accuracy: 84 },
      { id: "mrcem-osce", title: "MRCEM OSCE", progress: 24, expiry: "18 December 2026", daysLeft: 124, lastTopic: "Consent for Procedural Sedation", questionsDone: 154, questionsTotal: 640, accuracy: 66 }
    ],
    activity: [
      { when: "Today, 08:12",      title: "Completed 30-question drill — Toxicology",     meta: "24 / 30 correct · 22 min", tone: "green" },
      { when: "Yesterday, 21:40",  title: "Finished topic: Acute Coronary Syndromes",     meta: "MRCEM SBA · Cardiology",   tone: "blue" },
      { when: "Yesterday, 19:05",  title: "Mock exam #7 submitted",                        meta: "132 / 180 · 73.3%",        tone: "teal" },
      { when: "14 Aug, 07:30",     title: "Bookmarked 4 questions in Neurology",          meta: "MRCEM SBA",                tone: "amber" },
      { when: "13 Aug, 22:15",     title: "Certificate issued — Critical Appraisal",      meta: "EMH-CA-2026-04817",        tone: "violet" }
    ],
    certificates: [
      { id: "EMH-CA-2026-04817", course: "Critical Appraisal & EBM", date: "13 August 2026", score: "88%", status: "Issued" },
      { id: "EMH-FN-2026-03104", course: "Foundation in Emergency Medicine", date: "02 May 2026", score: "91%", status: "Issued" }
    ],
    testHistory: [
      { id: "MK-0007", name: "Full Mock #7",         course: "MRCEM SBA", date: "15 Aug 2026", qs: 180, score: 132, pct: 73.3, time: "2h 48m", mode: "Exam" },
      { id: "MK-0006", name: "Toxicology Drill",     course: "MRCEM SBA", date: "11 Aug 2026", qs: 30,  score: 24,  pct: 80.0, time: "22m",     mode: "Practice" },
      { id: "MK-0005", name: "Full Mock #6",         course: "MRCEM SBA", date: "04 Aug 2026", qs: 180, score: 124, pct: 68.9, time: "2h 55m", mode: "Exam" },
      { id: "MK-0004", name: "Appraisal Final Test", course: "Critical Appraisal", date: "28 Jul 2026", qs: 60, score: 53, pct: 88.3, time: "51m", mode: "Exam" },
      { id: "MK-0003", name: "Cardiology Drill",     course: "MRCEM SBA", date: "22 Jul 2026", qs: 60,  score: 39,  pct: 65.0, time: "48m",     mode: "Practice" },
      { id: "MK-0002", name: "Full Mock #5",         course: "MRCEM SBA", date: "14 Jul 2026", qs: 180, score: 115, pct: 63.9, time: "2h 59m", mode: "Exam" },
      { id: "MK-0001", name: "Baseline Assessment",  course: "MRCEM SBA", date: "02 Jul 2026", qs: 120, score: 62,  pct: 51.7, time: "1h 54m", mode: "Exam" }
    ],
    subjectPerformance: [
      { subject: "Resuscitation",   pct: 82, attempted: 214, tone: "green" },
      { subject: "Cardiology",      pct: 76, attempted: 268, tone: "green" },
      { subject: "Respiratory",     pct: 74, attempted: 190, tone: "green" },
      { subject: "Toxicology",      pct: 80, attempted: 132, tone: "green" },
      { subject: "Trauma",          pct: 68, attempted: 176, tone: "amber" },
      { subject: "Paediatric EM",   pct: 61, attempted: 148, tone: "amber" },
      { subject: "Neurology",       pct: 57, attempted: 164, tone: "red" },
      { subject: "Musculoskeletal", pct: 49, attempted: 128, tone: "red" }
    ],
    scoreTrend: [51.7, 58.2, 63.9, 65.0, 68.9, 71.4, 73.3],
    weeklyActivity: [
      { d: "Mon", v: 42 }, { d: "Tue", v: 68 }, { d: "Wed", v: 30 },
      { d: "Thu", v: 85 }, { d: "Fri", v: 54 }, { d: "Sat", v: 120 }, { d: "Sun", v: 96 }
    ]
  };

  /* ---------------- Learning content ---------------- */

  var CHAPTERS = [
    {
      title: "Cardiovascular Emergencies", pct: 78,
      topics: [
        { name: "Acute Coronary Syndromes", done: true,  active: true },
        { name: "ECG Interpretation in ACS", done: true },
        { name: "Acute Heart Failure",       done: true },
        { name: "Arrhythmia Management",     done: false },
        { name: "Aortic Dissection",         done: false },
        { name: "Pericarditis & Tamponade",  done: false }
      ]
    },
    {
      title: "Respiratory Emergencies", pct: 60,
      topics: [
        { name: "Acute Asthma", done: true },
        { name: "COPD Exacerbation", done: true },
        { name: "Pulmonary Embolism", done: true },
        { name: "Pneumothorax", done: false },
        { name: "Community-Acquired Pneumonia", done: false }
      ]
    },
    {
      title: "Neurological Emergencies", pct: 35,
      topics: [
        { name: "Acute Stroke Pathways", done: true },
        { name: "Status Epilepticus", done: false },
        { name: "Subarachnoid Haemorrhage", done: false },
        { name: "Meningitis & Encephalitis", done: false },
        { name: "Headache Red Flags", done: false }
      ]
    },
    {
      title: "Trauma & Musculoskeletal", pct: 22,
      topics: [
        { name: "Primary Survey & ATLS", done: true },
        { name: "Head Injury & NICE CT Rules", done: false },
        { name: "Chest Trauma", done: false },
        { name: "Pelvic Fractures", done: false },
        { name: "Limb Fractures & Dislocations", done: false }
      ]
    },
    {
      title: "Toxicology", pct: 84,
      topics: [
        { name: "Paracetamol Overdose", done: true },
        { name: "Tricyclic Antidepressants", done: true },
        { name: "Organophosphate Poisoning", done: true },
        { name: "Carbon Monoxide", done: false }
      ]
    },
    {
      title: "Paediatric Emergency Medicine", pct: 18,
      topics: [
        { name: "Paediatric Sepsis Pathways", done: true },
        { name: "Bronchiolitis", done: false },
        { name: "Croup & Stridor", done: false },
        { name: "Safeguarding Concerns", done: false }
      ]
    }
  ];

  /* ---------------- Question bank ---------------- */

  var QUESTIONS = [
    {
      id: "Q-4821", type: "sba", typeLabel: "Single Best Answer",
      subject: "Cardiology", topic: "Acute Coronary Syndromes",
      difficulty: "Moderate", correctPct: 62,
      stem: "A 58-year-old man presents with 40 minutes of central crushing chest pain radiating to his left arm, associated with sweating and nausea. He is a smoker with type 2 diabetes. Observations: HR 96, BP 148/88, RR 20, SpO₂ 96% on air. His ECG shows 2 mm ST elevation in leads II, III and aVF with reciprocal depression in I and aVL. The nearest primary PCI centre is 35 minutes away by ambulance.\n\nWhat is the single most appropriate immediate management step?",
      options: [
        { key: "A", text: "Administer thrombolysis in the emergency department" },
        { key: "B", text: "Activate the primary PCI pathway and transfer immediately" },
        { key: "C", text: "Give aspirin 300 mg and admit for serial troponins" },
        { key: "D", text: "Arrange an urgent CT coronary angiogram" },
        { key: "E", text: "Commence a heparin infusion and observe for 12 hours" }
      ],
      answer: "B",
      explanation: "This is an inferior STEMI. Primary percutaneous coronary intervention is the reperfusion strategy of choice where it can be delivered within 120 minutes of the time thrombolysis could have been given. With a transfer time of 35 minutes this target is comfortably achievable, so the PCI pathway should be activated without delay.\n\nThrombolysis (A) is reserved for situations where primary PCI cannot be delivered within that window. Serial troponins (C) delay reperfusion in a patient with diagnostic ST elevation — the diagnosis is already made. CT coronary angiography (D) has no role in acute STEMI. Anticoagulation alone (E) is not reperfusion therapy.",
      teaching: "In any STEMI question, establish two things before choosing: is the ECG diagnostic, and can PCI be delivered within 120 minutes? Those two answers determine the management step in almost every variant of this question."
    },
    {
      id: "Q-3390", type: "multi", typeLabel: "Multiple Correct",
      subject: "Respiratory", topic: "Pulmonary Embolism",
      difficulty: "Hard", correctPct: 41,
      stem: "A 34-year-old woman, 12 days post-caesarean section, presents with sudden-onset pleuritic chest pain and breathlessness. HR 118, BP 104/62, RR 26, SpO₂ 92% on air. She is haemodynamically stable.\n\nSelect ALL of the following that are appropriate components of her initial assessment and management.",
      options: [
        { key: "A", text: "Calculate a two-level Wells score for pulmonary embolism" },
        { key: "B", text: "Request a D-dimer to exclude pulmonary embolism" },
        { key: "C", text: "Commence therapeutic low molecular weight heparin while awaiting imaging" },
        { key: "D", text: "Arrange CT pulmonary angiography or a V/Q scan" },
        { key: "E", text: "Administer systemic thrombolysis immediately" }
      ],
      answers: ["A", "C", "D"],
      explanation: "Wells scoring (A) remains the appropriate first step in risk stratification. Empirical therapeutic anticoagulation (C) is indicated where there is a delay to definitive imaging in a patient with high clinical suspicion and no contraindication. Definitive imaging (D) with CTPA or V/Q is required to confirm the diagnosis.\n\nD-dimer (B) is unhelpful in the postpartum period — it is physiologically raised and will not exclude PE, so a negative result cannot be acted upon. Thrombolysis (E) is reserved for massive PE with haemodynamic instability; this patient is stable.",
      teaching: "Pregnancy and the postpartum period are the classic setting where D-dimer loses its exclusion value. Any question that pairs a raised-D-dimer physiological state with a PE presentation is testing exactly this point."
    },
    {
      id: "Q-2214", type: "image", typeLabel: "Image-Based",
      subject: "Trauma", topic: "Chest Trauma",
      difficulty: "Moderate", correctPct: 58,
      stem: "A 27-year-old motorcyclist is brought in after a high-speed collision. He is breathless with reduced air entry on the right. His trauma chest radiograph is shown below.\n\nWhat is the single most appropriate immediate intervention?",
      media: { kind: "image", caption: "Supine AP chest radiograph — trauma series, right hemithorax" },
      options: [
        { key: "A", text: "Needle decompression in the second intercostal space, mid-clavicular line" },
        { key: "B", text: "Insertion of a chest drain in the fifth intercostal space, anterior axillary line" },
        { key: "C", text: "Urgent CT of the chest before any intervention" },
        { key: "D", text: "Non-invasive ventilation and observation" },
        { key: "E", text: "Emergency thoracotomy in the resuscitation room" }
      ],
      answer: "B",
      explanation: "The radiograph demonstrates a large traumatic haemopneumothorax without radiological or clinical features of tension. The correct management is formal tube thoracostomy in the safe triangle — fifth intercostal space, anterior axillary line.\n\nNeedle decompression (A) is a temporising measure for tension pneumothorax, which is a clinical diagnosis and is not present here. CT (C) delays definitive treatment in a symptomatic patient. NIV (D) risks converting this into a tension pneumothorax. Thoracotomy (E) is reserved for traumatic arrest or massive ongoing haemorrhage.",
      teaching: "Tension pneumothorax is a clinical diagnosis, not a radiological one. If the question shows you a radiograph, the examiners have already told you it is not a tension — otherwise the patient would not have survived to imaging."
    },
    {
      id: "Q-5107", type: "audio", typeLabel: "Audio Question",
      subject: "Cardiology", topic: "Valvular Disease",
      difficulty: "Hard", correctPct: 44,
      stem: "Listen to the auscultation recording taken at the left sternal edge of a 71-year-old man presenting with exertional syncope and progressive breathlessness.\n\nWhich single valvular lesion does this most likely represent?",
      media: { kind: "audio", caption: "Cardiac auscultation — left sternal edge, patient sitting forward, 12 seconds" },
      options: [
        { key: "A", text: "Mitral regurgitation" },
        { key: "B", text: "Aortic stenosis" },
        { key: "C", text: "Aortic regurgitation" },
        { key: "D", text: "Mitral stenosis" },
        { key: "E", text: "Tricuspid regurgitation" }
      ],
      answer: "B",
      explanation: "The recording demonstrates a harsh ejection systolic murmur that is loudest in the aortic area and radiates to the carotids, with a soft and delayed second heart sound. Combined with exertional syncope and breathlessness in an older patient, this is severe aortic stenosis.\n\nMitral regurgitation (A) produces a pansystolic murmur radiating to the axilla. Aortic regurgitation (C) is early diastolic. Mitral stenosis (D) gives a mid-diastolic rumble with an opening snap. Tricuspid regurgitation (E) is pansystolic and louder on inspiration.",
      teaching: "The triad of exertional syncope, angina and breathlessness in an elderly patient should make you think aortic stenosis before you have heard anything. Use the audio to confirm the timing — systolic or diastolic — and the rest follows."
    },
    {
      id: "Q-6642", type: "video", typeLabel: "Video Question",
      subject: "Neurology", topic: "Acute Stroke Pathways",
      difficulty: "Moderate", correctPct: 66,
      stem: "Watch the clip of a 68-year-old woman assessed 90 minutes after a witnessed onset of symptoms. She is on apixaban for atrial fibrillation. Her CT head shows no haemorrhage and no established infarct.\n\nWhat is the single most appropriate next step?",
      media: { kind: "video", caption: "Bedside neurological assessment — 1 min 48 s", duration: "1:48" },
      options: [
        { key: "A", text: "Administer intravenous alteplase immediately" },
        { key: "B", text: "Refer urgently for mechanical thrombectomy assessment" },
        { key: "C", text: "Give aspirin 300 mg and admit to the stroke unit" },
        { key: "D", text: "Repeat the CT head in six hours" },
        { key: "E", text: "Commence a heparin infusion" }
      ],
      answer: "B",
      explanation: "The clip demonstrates a dense left-sided hemiparesis with gaze deviation and neglect, consistent with a large vessel occlusion. She is within the thrombectomy window and mechanical thrombectomy is not contraindicated by direct oral anticoagulant use.\n\nThrombolysis (A) is contraindicated because she has taken apixaban within the preceding 48 hours. Aspirin (C) and delayed re-imaging (D) both forfeit a salvageable window. Heparin (E) has no role in acute ischaemic stroke management.",
      teaching: "Anticoagulation excludes thrombolysis but does not exclude thrombectomy. Examiners use the DOAC detail specifically to see whether you conflate the two reperfusion strategies."
    },
    {
      id: "Q-1188", type: "sba", typeLabel: "Single Best Answer",
      subject: "Toxicology", topic: "Paracetamol Overdose",
      difficulty: "Easy", correctPct: 79,
      stem: "A 22-year-old woman presents four hours after taking 30 tablets of paracetamol 500 mg in a single impulsive overdose. She weighs 60 kg and is alert with normal observations.\n\nWhat is the single most appropriate action?",
      options: [
        { key: "A", text: "Await the four-hour paracetamol level and plot it on the treatment nomogram" },
        { key: "B", text: "Commence acetylcysteine immediately without waiting for levels" },
        { key: "C", text: "Administer activated charcoal" },
        { key: "D", text: "Discharge with psychiatric follow-up if she remains asymptomatic" },
        { key: "E", text: "Perform gastric lavage" }
      ],
      answer: "A",
      explanation: "This is a single acute overdose presenting at four hours, which is exactly when a paracetamol level becomes interpretable. The level should be taken now and plotted against the treatment line, with acetylcysteine started if it falls on or above it.\n\nImmediate acetylcysteine (B) is appropriate for staggered overdoses, presentations beyond eight hours or where timing is uncertain — none apply here. Activated charcoal (C) is only useful within one hour of ingestion. Discharge (D) is unsafe before the level is known. Gastric lavage (E) is obsolete in this context.",
      teaching: "Four hours is the pivot. Before four hours the level cannot be interpreted; at or after four hours in a single acute overdose, take the level and use the nomogram."
    },
    {
      id: "Q-7730", type: "sba", typeLabel: "Single Best Answer",
      subject: "Paediatric EM", topic: "Paediatric Sepsis",
      difficulty: "Moderate", correctPct: 57,
      stem: "A 3-year-old boy, weight 15 kg, is brought in with a two-day history of fever and increasing lethargy. He is mottled and cool peripherally with a capillary refill of 4 seconds. HR 178, RR 44, BP 78/44, temperature 39.4°C. He has a non-blanching purpuric rash over his trunk.\n\nAfter high-flow oxygen and obtaining intravenous access, what is the single most appropriate immediate intervention?",
      options: [
        { key: "A", text: "10 mL/kg bolus of 0.9% sodium chloride over 10 minutes" },
        { key: "B", text: "20 mL/kg bolus of 0.9% sodium chloride over 5 minutes" },
        { key: "C", text: "Intravenous ceftriaxone before any fluid resuscitation" },
        { key: "D", text: "Urgent lumbar puncture to confirm the diagnosis" },
        { key: "E", text: "5 mL/kg bolus of 4.5% human albumin solution" }
      ],
      answer: "B",
      explanation: "This child is in septic shock with meningococcal features. Current UK paediatric sepsis guidance calls for a rapid 20 mL/kg isotonic crystalloid bolus — 300 mL for a 15 kg child — given over five minutes, with reassessment after each bolus.\n\nA 10 mL/kg bolus (A) is used in neonates and in children with known cardiac disease or severe malnutrition. Antibiotics (C) are urgent and should follow within the first hour, but they do not precede fluid resuscitation in decompensated shock. Lumbar puncture (D) is contraindicated in shock with purpura. Albumin (E) is not the first-line resuscitation fluid.",
      teaching: "Learn the bolus volumes as a pair: 20 mL/kg for the well-grown child in shock, 10 mL/kg where fluid overload is a genuine risk. Examiners reliably test the exception rather than the rule."
    },
    {
      id: "Q-9012", type: "sba", typeLabel: "Single Best Answer",
      subject: "Critical Appraisal", topic: "Diagnostic Accuracy",
      difficulty: "Hard", correctPct: 38,
      stem: "A new point-of-care test for pulmonary embolism is evaluated in 1,000 emergency department patients. 100 have PE confirmed on CTPA. The new test is positive in 90 of those with PE and in 180 of those without.\n\nWhat is the negative predictive value of the test in this population?",
      options: [
        { key: "A", text: "Approximately 33%" },
        { key: "B", text: "Approximately 90%" },
        { key: "C", text: "Approximately 80%" },
        { key: "D", text: "Approximately 98.6%" },
        { key: "E", text: "Approximately 66%" }
      ],
      answer: "D",
      explanation: "Build the 2×2 table. True positives 90, false negatives 10, false positives 180, true negatives 720.\n\nNegative predictive value = true negatives ÷ all negative results = 720 ÷ (720 + 10) = 720 ÷ 730 = 98.6%.\n\nOption B is the sensitivity (90/100). Option C is the specificity (720/900). Option A is close to the positive predictive value (90/270 = 33%).",
      teaching: "Always draw the 2×2 table before looking at the options. Predictive values read across the rows of test results; sensitivity and specificity read down the columns of true disease status."
    }
  ];

  /* ---------------- Mock test config ---------------- */

  var MOCK_LENGTHS = [
    { n: 30,  mins: 30,  label: "Quick drill",     desc: "A focused set for a coffee break or commute." },
    { n: 60,  mins: 60,  label: "Half session",    desc: "Long enough to expose pacing problems." },
    { n: 120, mins: 120, label: "Extended paper",  desc: "Two-thirds of a real sitting, full concentration load." },
    { n: 180, mins: 180, label: "Full exam",       desc: "Exact length and timing of the real examination." }
  ];

  /* ---------------- Faculty portal data ---------------- */

  var FACULTY_USER = {
    name: "Dr Aisha Rahman", initials: "AR", role: "Programme Director",
    stats: [
      { label: "Active students",  value: "1,284", delta: "+8.4%", up: true,  note: "vs last month" },
      { label: "Content items",    value: "342",   delta: "+16",   up: true,  note: "published this month" },
      { label: "Questions authored", value: "1,908", delta: "+124", up: true, note: "this cycle" },
      { label: "Avg. question rating", value: "4.7", delta: "-0.1", up: false, note: "from 2,140 ratings" }
    ],
    contentQueue: [
      { title: "Arrhythmia Management",        type: "Topic",    course: "MRCEM SBA",  status: "Published", updated: "15 Aug 2026", items: 18 },
      { title: "Aortic Dissection",            type: "Topic",    course: "MRCEM SBA",  status: "In review", updated: "14 Aug 2026", items: 12 },
      { title: "Toxicology — 40 new SBAs",     type: "Question", course: "MRCEM SBA",  status: "Draft",     updated: "14 Aug 2026", items: 40 },
      { title: "Consent for Sedation",         type: "Station",  course: "MRCEM OSCE", status: "Published", updated: "12 Aug 2026", items: 1 },
      { title: "Forest Plots — video series",  type: "Video",    course: "Critical Appraisal", status: "Published", updated: "10 Aug 2026", items: 6 },
      { title: "Paediatric Sepsis Pathways",   type: "Topic",    course: "MRCEM SBA",  status: "In review", updated: "09 Aug 2026", items: 14 },
      { title: "Head Injury & NICE CT Rules",  type: "Topic",    course: "FRCEM SBA",  status: "Draft",     updated: "07 Aug 2026", items: 9 }
    ],
    students: [
      { name: "Dr Ravi Krishnan",   initials: "RK", course: "MRCEM SBA",  progress: 68, avg: 71, last: "Today",     risk: "On track" },
      { name: "Dr Elena Novak",     initials: "EN", course: "MRCEM SBA",  progress: 91, avg: 84, last: "Today",     risk: "On track" },
      { name: "Dr Samuel Adeyemi",  initials: "SA", course: "FRCEM SBA",  progress: 34, avg: 58, last: "3 days",    risk: "At risk" },
      { name: "Dr Ana Silva",      initials: "AS", course: "MRCEM OSCE", progress: 55, avg: 69, last: "Yesterday", risk: "On track" },
      { name: "Dr Yusuf Kaya",      initials: "YK", course: "MRCEM Primary", progress: 12, avg: 44, last: "11 days", risk: "Inactive" },
      { name: "Dr Grace Thornton",  initials: "GT", course: "Critical Appraisal", progress: 100, avg: 89, last: "2 days", risk: "Complete" }
    ]
  };

  /* ---------------- Admin portal data ---------------- */

  var ADMIN = {
    name: "Meera Shah", initials: "MS", role: "Platform Administrator",
    kpis: [
      { label: "Total candidates",    value: "12,486", delta: "+412",   up: true,  note: "new this month",   icon: "users",  tone: "" },
      { label: "Active subscriptions",value: "4,932",  delta: "+6.2%",  up: true,  note: "vs last month",    icon: "card",   tone: "teal" },
      { label: "Revenue (MTD)",       value: "£486,240", delta: "+11.4%", up: true, note: "vs Jul 2026",     icon: "pound",  tone: "green" },
      { label: "Live courses",        value: "7",      delta: "+1",     up: true,  note: "DNB EM launched",  icon: "book",   tone: "violet" },
      { label: "Faculty members",     value: "16",     delta: "+2",     up: true,  note: "onboarded in Aug", icon: "badge",  tone: "amber" }
    ],
    revenueByMonth: [
      { m: "Feb", v: 318 }, { m: "Mar", v: 356 }, { m: "Apr", v: 392 },
      { m: "May", v: 371 }, { m: "Jun", v: 428 }, { m: "Jul", v: 436 }, { m: "Aug", v: 486 }
    ],
    revenueByCourse: [
      { name: "MRCEM SBA",          v: 148, pct: 30 },
      { name: "MRCEM Primary",      v: 104, pct: 21 },
      { name: "FRCEM Final SBA",    v: 92,  pct: 19 },
      { name: "DNB Emergency Med",  v: 62,  pct: 13 },
      { name: "MRCEM OSCE",         v: 44,  pct: 9 },
      { name: "FRCEM Final OSCE",   v: 21,  pct: 4 },
      { name: "Critical Appraisal", v: 15,  pct: 3 }
    ],
    users: [
      { name: "Dr Ravi Krishnan",  email: "ravi.krishnan@example.com",  initials: "RK", role: "Candidate", country: "India",     plan: "3 Month",  status: "Active",    joined: "12 Feb 2026", spend: "£119" },
      { name: "Dr Elena Novak",    email: "elena.novak@example.com",    initials: "EN", role: "Candidate", country: "Czechia",   plan: "6 Month",  status: "Active",    joined: "04 Jan 2026", spend: "£199" },
      { name: "Dr Aisha Rahman",   email: "a.rahman@emhub.example",     initials: "AR", role: "Faculty",   country: "UK",        plan: "—",        status: "Active",    joined: "18 Mar 2024", spend: "—" },
      { name: "Dr Samuel Adeyemi", email: "s.adeyemi@example.com",      initials: "SA", role: "Candidate", country: "Nigeria",   plan: "2 Month",  status: "Expiring",  joined: "22 Jun 2026", spend: "£89" },
      { name: "Dr Mei-Ling Chen",  email: "m.chen@emhub.example",       initials: "MC", role: "Faculty",   country: "UK",        plan: "—",        status: "Active",    joined: "09 Sep 2024", spend: "—" },
      { name: "Dr Yusuf Kaya",     email: "yusuf.kaya@example.com",     initials: "YK", role: "Candidate", country: "Turkey",    plan: "1 Month",  status: "Expired",   joined: "02 May 2026", spend: "£49" },
      { name: "Dr Grace Thornton", email: "g.thornton@example.com",     initials: "GT", role: "Candidate", country: "Ireland",   plan: "3 Month",  status: "Active",    joined: "30 Apr 2026", spend: "£148" },
      { name: "Meera Shah",        email: "meera.shah@emhub.example",   initials: "MS", role: "Admin",     country: "UK",        plan: "—",        status: "Active",    joined: "01 Nov 2023", spend: "—" },
      { name: "Dr Ana Silva",      email: "ana.silva@example.com",      initials: "AS", role: "Candidate", country: "Portugal",  plan: "4 Month",  status: "Active",    joined: "11 Jul 2026", spend: "£149" },
      { name: "Dr Omar Haddad",    email: "o.haddad@emhub.example",     initials: "OH", role: "Faculty",   country: "UAE",       plan: "—",        status: "Active",    joined: "14 Feb 2025", spend: "—" }
    ],
    subscriptions: [
      { ref: "SUB-20418", user: "Dr Ravi Krishnan",  course: "MRCEM SBA",           duration: "3 Months", start: "24 Jul 2026", expiry: "24 Oct 2026", amount: "£119", status: "Active" },
      { ref: "SUB-20417", user: "Dr Elena Novak",    course: "MRCEM SBA",           duration: "6 Months", start: "04 Jan 2026", expiry: "04 Jul 2026", amount: "£199", status: "Renewed" },
      { ref: "SUB-20416", user: "Dr Samuel Adeyemi", course: "FRCEM Final SBA",     duration: "2 Months", start: "22 Jun 2026", expiry: "22 Aug 2026", amount: "£89",  status: "Expiring" },
      { ref: "SUB-20415", user: "Dr Ana Silva",      course: "MRCEM OSCE",          duration: "4 Months", start: "11 Jul 2026", expiry: "11 Nov 2026", amount: "£149", status: "Active" },
      { ref: "SUB-20414", user: "Dr Yusuf Kaya",     course: "MRCEM Primary",       duration: "1 Month",  start: "02 May 2026", expiry: "02 Jun 2026", amount: "£49",  status: "Expired" },
      { ref: "SUB-20413", user: "Dr Grace Thornton", course: "Critical Appraisal",  duration: "3 Months", start: "30 Apr 2026", expiry: "30 Jul 2026", amount: "£119", status: "Expired" },
      { ref: "SUB-20412", user: "Dr Ravi Krishnan",  course: "Critical Appraisal",  duration: "3 Months", start: "24 Jul 2026", expiry: "24 Oct 2026", amount: "£119", status: "Active" },
      { ref: "SUB-20411", user: "Dr Liam Docherty",  course: "FRCEM Final SBA",     duration: "6 Months", start: "18 Mar 2026", expiry: "18 Sep 2026", amount: "£199", status: "Active" }
    ],
    countries: [
      { name: "United Kingdom", pct: 32, users: 3996 },
      { name: "India",          pct: 24, users: 2997 },
      { name: "Ireland",        pct: 9,  users: 1124 },
      { name: "UAE",            pct: 8,  users: 999 },
      { name: "Nigeria",        pct: 7,  users: 874 },
      { name: "Pakistan",       pct: 6,  users: 749 },
      { name: "Egypt",          pct: 5,  users: 624 },
      { name: "Other",          pct: 9,  users: 1123 }
    ],
    signups: [
      { m: "Feb", v: 286 }, { m: "Mar", v: 342 }, { m: "Apr", v: 318 },
      { m: "May", v: 389 }, { m: "Jun", v: 402 }, { m: "Jul", v: 374 }, { m: "Aug", v: 412 }
    ],
    funnel: [
      { stage: "Visited site",        v: 48200, pct: 100 },
      { stage: "Registered",          v: 12486, pct: 26 },
      { stage: "Started free sample", v: 8140,  pct: 17 },
      { stage: "Purchased",           v: 4932,  pct: 10 },
      { stage: "Completed a course",  v: 2618,  pct: 5 }
    ]
  };

  window.EMHUB = {
    COURSES: COURSES,
    PLANS: PLANS,
    PLAN_FEATURES: PLAN_FEATURES,
    FACULTY: FACULTY,
    TESTIMONIALS: TESTIMONIALS,
    STATS: STATS,
    FAQS: FAQS,
    WHY_CHOOSE: WHY_CHOOSE,
    JOURNEY: JOURNEY,
    CANDIDATE: CANDIDATE,
    CHAPTERS: CHAPTERS,
    QUESTIONS: QUESTIONS,
    MOCK_LENGTHS: MOCK_LENGTHS,
    FACULTY_USER: FACULTY_USER,
    ADMIN: ADMIN,
    courseById: function (id) {
      for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) return COURSES[i];
      return COURSES[1];
    }
  };
})();

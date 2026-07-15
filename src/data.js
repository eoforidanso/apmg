// Facts marked REAL are pulled from the live goapmg.com site (July 2026).
// Everything marked PLACEHOLDER needs to be swapped for real copy/assets before launch.

export const PHONE = "847-371-5200"; // REAL
export const PHONE_HREF = "tel:+18473715200";
export const CRISIS_LINE = "988"; // REAL — call or text to reach a crisis counselor

// PLACEHOLDER — real booking system link not yet provided; goapmg.com uses /get-started
export const BOOKING_URL = "https://www.goapmg.com/get-started";
export const VIRTUAL_WAITING_ROOM_URL = "https://www.goapmg.com/get-started"; // PLACEHOLDER

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "New Patients", to: "/first-visit" },
  { label: "Team", to: "/team" },
  { label: "Insurance", to: "/insurance" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" }, // PLACEHOLDER
  { label: "Facebook", href: "https://facebook.com" }, // PLACEHOLDER
];

// REAL — city names confirmed on goapmg.com; full street addresses not published, PLACEHOLDER
export const LOCATIONS = [
  {
    city: "Rolling Meadows",
    address: "PLACEHOLDER — street address",
    phone: PHONE,
  },
  {
    city: "Glenview",
    address: "PLACEHOLDER — street address",
    phone: PHONE,
  },
  {
    city: "St. Charles",
    address: "PLACEHOLDER — street address",
    phone: PHONE,
  },
];

// REAL — service list and descriptions summarized from the goapmg.com/services page (July 2026)
export const SERVICES = [
  {
    name: "Adult & Child Psychiatry",
    summary:
      "Evaluation and ongoing medication management for patients of all ages, with individualized treatment plans and care coordination.",
  },
  {
    name: "Therapy",
    summary: "Individual and group therapy sessions offered alongside psychiatric care.",
  },
  {
    name: "Deep TMS",
    summary:
      "A newer, FDA-approved form of transcranial magnetic stimulation for depression — non-invasive, non-convulsive, and delivered in-office.",
    image: `${import.meta.env.BASE_URL}services/dtms-treatment.webp`,
  },
  {
    name: "Spravato",
    summary:
      "An esketamine-based treatment option for patients with treatment-resistant depression who haven't found relief from standard antidepressants.",
  },
  {
    name: "Pharmacogenomic Testing",
    summary:
      "GeneSight genetic testing that helps guide medication choices for depression, anxiety, ADHD, and related conditions.",
  },
  {
    name: "On-Site Psychiatric Care",
    summary:
      "Regularly scheduled psychiatric visits to assisted living and nursing facilities, coordinated with facility staff.",
  },
];

// REAL — Dr. Christopher Lynn confirmed as Medical Director on goapmg.com; bio is PLACEHOLDER.
// Photos supplied directly by the user (July 2026) and copied into public/team/.
// Titles/bios are PLACEHOLDER — only names came from the photo filenames.
// Each entry also supports optional `credentials` (string), `specialties` (string[]), and
// `yearsExperience` (string) fields for the Team page's credentials micro-section — left
// unset here since we don't have real licensure/specialty data for anyone yet, and
// fabricating clinical credentials for named providers isn't something to guess at.
export const TEAM = [
  {
    name: "Dr. Christopher Lynn, NP",
    title: "Medical Director, Interventional Psychiatry",
    quote:
      "At APMG, we understand that traditional treatments don't work for everyone — that's why we offer advanced, evidence-based options alongside compassionate, personalized care.",
    bio: "PLACEHOLDER — full bio and credentials needed.",
    photo: `${import.meta.env.BASE_URL}team/christopher-lynn.webp`,
  },
  {
    name: "Joe",
    title: "PLACEHOLDER — Title",
    quote: "",
    bio: "PLACEHOLDER — add bio.",
    photo: `${import.meta.env.BASE_URL}team/joe.webp`,
  },
  {
    name: "Irina",
    title: "PLACEHOLDER — Title",
    quote: "",
    bio: "PLACEHOLDER — add bio.",
    photo: `${import.meta.env.BASE_URL}team/irina.webp`,
  },
  {
    name: "John Santos",
    title: "PLACEHOLDER — Title",
    quote: "",
    bio: "PLACEHOLDER — add bio.",
    photo: `${import.meta.env.BASE_URL}team/john-santos.webp`,
  },
  {
    name: "Aragon",
    title: "PLACEHOLDER — Title",
    quote: "",
    bio: "PLACEHOLDER — add bio.",
    photo: `${import.meta.env.BASE_URL}team/aragon.webp`,
  },
  {
    name: "PLACEHOLDER — Team Member",
    title: "PLACEHOLDER — Title",
    quote: "",
    bio: "PLACEHOLDER — add bio.",
    photo: `${import.meta.env.BASE_URL}team/team-member-6.webp`,
  },
];

// PLACEHOLDER — no insurance list published on the live site; confirm real payer list
export const INSURANCE_PROVIDERS = [
  "PLACEHOLDER — Blue Cross Blue Shield",
  "PLACEHOLDER — Aetna",
  "PLACEHOLDER — Cigna",
  "PLACEHOLDER — UnitedHealthcare",
  "PLACEHOLDER — Medicare",
];

// PLACEHOLDER — sample posts; connect to a real CMS/blog source later
export const BLOG_POSTS = [
  {
    title: "PLACEHOLDER — Understanding Deep TMS: What to Expect",
    excerpt: "PLACEHOLDER — a short summary of the post goes here.",
    date: "PLACEHOLDER",
  },
  {
    title: "PLACEHOLDER — When Traditional Antidepressants Aren't Enough",
    excerpt: "PLACEHOLDER — a short summary of the post goes here.",
    date: "PLACEHOLDER",
  },
  {
    title: "PLACEHOLDER — Telehealth Psychiatry: Is It Right for You?",
    excerpt: "PLACEHOLDER — a short summary of the post goes here.",
    date: "PLACEHOLDER",
  },
];

// Hero copy rewritten July 2026 per user direction (headline/subhead/tagline/microcopy
// are new marketing copy, not sourced from the live site). The "7-10 days" new-patient
// turnaround claim is operational and unverified — confirm accuracy before launch.
export const HERO = {
  eyebrow: "Advanced Practice Medical Group",
  tagline: "Psychiatric Nurse Practitioners • Therapy • Collaborative Care.",
  headline: "Personalized Mental Health Care, In-Person or Online.",
  subhead: "Evidence-based care from psychiatric specialists, tailored to your needs and schedule.",
  ctaMicrocopy: "No referral needed • New patients seen within 7–10 days.", // PLACEHOLDER — confirm timeframe
};

// Trust-bar items below the hero. PLACEHOLDER — confirm licensure scope and the
// 7-10 day new-patient turnaround are accurate before launch.
export const TRUST_ITEMS = [
  "Serving adults and adolescents in Illinois",
  "Telehealth and in-person visits available",
  "New patients seen within 7–10 days",
];

// Generic clinical categories, not sourced from the live site — confirm against APMG's
// actual scope of practice before launch.
export const CONCERNS = [
  "Anxiety",
  "Depression",
  "ADHD",
  "Trauma & PTSD",
  "Bipolar Disorder",
  "OCD",
];

// Free-to-use (Unsplash License) stock photography standing in for APMG's own
// photography until real logo/office/team photos are supplied. Self-hosted in
// public/ (July 2026) so the site doesn't depend on Unsplash's CDN staying up.
export const IMAGES = {
  hero: {
    url: `${import.meta.env.BASE_URL}hero.jpg`,
    credit: "Photo by Pedro Lastra / Unsplash",
  },
  quote: {
    // User-supplied photo (untraced source — no attribution to fabricate).
    url: `${import.meta.env.BASE_URL}quote.webp`,
    credit: null,
  },
  whoWeHelp: {
    url: `${import.meta.env.BASE_URL}who-we-help.webp`,
    credit: "Photo by Anna Shvets / Pexels",
  },
};

// Per-route SEO metadata. Consumed by <Seo> (src/components/Seo.jsx), which sets
// document.title + meta description on navigation. Titles follow
// "Page — Practice | Locale" for local-search relevance. Descriptions are
// original marketing copy; confirm any operational claims before launch.
export const SITE = {
  name: "Advanced Practice Medical Group",
  shortName: "APMG",
  url: "https://eoforidanso.github.io/apmg/",
  locale: "Chicagoland, Illinois",
};

export const PAGE_SEO = {
  "/": {
    title: "Psychiatry & Mental Health Care in Illinois | APMG",
    description:
      "Advanced Practice Medical Group offers personalized psychiatric care, therapy, and advanced treatments like Deep TMS and Spravato — in-person across Chicagoland or via telehealth.",
  },
  "/about": {
    title: "About Us — Advanced Practice Medical Group | Chicagoland Psychiatry",
    description:
      "Learn about APMG, a mental health collective combining traditional psychiatric care with advanced interventional treatments across Rolling Meadows, Glenview, and St. Charles, IL.",
  },
  "/services": {
    title: "Services — Psychiatry, Therapy, Deep TMS & Spravato | APMG",
    description:
      "From medication management and therapy to Deep TMS, Spravato, and pharmacogenomic testing — explore APMG's full range of evidence-based mental health services.",
  },
  "/team": {
    title: "Our Team — Meet the APMG Clinicians | Chicagoland Psychiatry",
    description:
      "Meet the psychiatric and medical specialists at Advanced Practice Medical Group, dedicated to evidence-based, personalized mental health care.",
  },
  "/insurance": {
    title: "Insurance & Coverage | Advanced Practice Medical Group",
    description:
      "APMG works with a range of insurance providers, plus self-pay and concierge options, to keep mental health care accessible. Call to verify your coverage.",
  },
  "/blog": {
    title: "Blog — Insights on Mental Wellness | APMG",
    description:
      "Perspectives from APMG's clinical team on psychiatric care, Deep TMS, Spravato, telehealth, and advanced treatment options.",
  },
  "/contact": {
    title: "Contact Us | Advanced Practice Medical Group",
    description:
      "Reach Advanced Practice Medical Group to request an appointment or ask about care. Call 847-371-5200 or send a message. In crisis? Call or text 988.",
  },
  "/first-visit": {
    title: "Your First Visit — What to Expect | APMG",
    description:
      "New to Advanced Practice Medical Group? Here's what to expect at your first appointment, what to bring, how telehealth works, and how insurance and cost work.",
  },
  "/self-check": {
    title: "Mental Health Self-Check — PHQ-9 & GAD-7 | APMG",
    description:
      "Take a free, private, 2-minute depression (PHQ-9) or anxiety (GAD-7) self-check. Educational only — not a diagnosis. Your answers stay on your device.",
  },
  "/privacy": {
    title: "Privacy Policy | Advanced Practice Medical Group",
    description:
      "How Advanced Practice Medical Group collects, uses, and protects information submitted through this website.",
  },
};

// PLACEHOLDER — drafted FAQ answers for the practice to review/confirm before
// launch. The insurance, referral, and wait-time answers make operational claims
// that must be verified. Also powers FAQPage structured data in index.html if kept.
export const FAQS = [
  {
    q: "Do I need a referral to be seen?",
    a: "No — you can request an appointment directly, no referral required. If your insurance plan requires one, we'll let you know during scheduling.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with a range of insurance providers, and also offer self-pay and concierge options. Call us at 847-371-5200 to verify your specific plan.",
  },
  {
    q: "How soon can new patients be seen?",
    a: "We aim to see new patients within 7–10 days. Availability varies by location and provider — call us for the soonest opening.",
  },
  {
    q: "Do you offer telehealth as well as in-person visits?",
    a: "Yes. Many of our services are available by secure video visit, and we also see patients in person across our Chicagoland locations.",
  },
  {
    q: "What conditions do you treat?",
    a: "Our clinicians treat anxiety, depression, ADHD, trauma and PTSD, bipolar disorder, OCD, and more — for both adults and adolescents.",
  },
  {
    q: "What advanced treatments do you offer?",
    a: "Beyond psychiatry and therapy, we offer Deep TMS, Spravato (esketamine), and pharmacogenomic testing for patients who need more than a standard approach.",
  },
];

// Crisis resources — surfaced in the always-available crisis element (see
// CrisisButton.jsx) and screener results. 988 and 741741 are the real US
// national lines; these are stable and safe to hard-code.
export const CRISIS_RESOURCES = [
  {
    label: "988 Suicide & Crisis Lifeline",
    detail: "Free, confidential support, 24/7.",
    actions: [
      { text: "Call 988", href: "tel:988" },
      { text: "Text 988", href: "sms:988" },
    ],
  },
  {
    label: "Crisis Text Line",
    detail: "Text HOME to 741741 to reach a trained crisis counselor.",
    actions: [{ text: "Text 741741", href: "sms:741741&body=HOME" }],
  },
  {
    label: "Emergency",
    detail: "If you or someone else is in immediate danger, call 911 or go to your nearest emergency room.",
    actions: [{ text: "Call 911", href: "tel:911" }],
  },
];

// Response options shared by both PHQ-9 and GAD-7 (each item scored 0–3).
export const SCREENER_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

// PHQ-9 and GAD-7 are validated, public-domain screening instruments (free to
// use, no license needed). These are educational self-checks, NOT diagnoses —
// the Screener component enforces that framing and routes high-risk results to
// crisis resources. Answers are scored client-side and never sent or stored.
export const SCREENERS = {
  phq9: {
    id: "phq9",
    name: "PHQ-9",
    focus: "Depression",
    title: "Depression self-check",
    subtitle: "PHQ-9 · about 2 minutes",
    prompt: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
      "Trouble concentrating on things, such as reading the newspaper or watching television",
      "Moving or speaking so slowly that other people could have noticed — or being so fidgety or restless that you have been moving around a lot more than usual",
      "Thoughts that you would be better off dead, or of hurting yourself in some way",
    ],
    // Item 9 (0-based index 8): ANY positive answer routes to crisis resources,
    // regardless of total score.
    crisisItemIndex: 8,
    max: 27,
    bands: [
      { max: 4, label: "Minimal", note: "Your answers suggest minimal depression symptoms right now." },
      { max: 9, label: "Mild", note: "Your answers suggest mild depression symptoms." },
      { max: 14, label: "Moderate", note: "Your answers suggest moderate depression symptoms. Talking with a clinician is a good next step." },
      { max: 19, label: "Moderately severe", note: "Your answers suggest moderately severe symptoms. We'd encourage reaching out to a clinician soon." },
      { max: 27, label: "Severe", note: "Your answers suggest severe symptoms. Please consider reaching out to a clinician promptly." },
    ],
  },
  gad7: {
    id: "gad7",
    name: "GAD-7",
    focus: "Anxiety",
    title: "Anxiety self-check",
    subtitle: "GAD-7 · about 2 minutes",
    prompt: "Over the last 2 weeks, how often have you been bothered by the following problems?",
    questions: [
      "Feeling nervous, anxious, or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen",
    ],
    crisisItemIndex: null,
    max: 21,
    bands: [
      { max: 4, label: "Minimal", note: "Your answers suggest minimal anxiety symptoms right now." },
      { max: 9, label: "Mild", note: "Your answers suggest mild anxiety symptoms." },
      { max: 14, label: "Moderate", note: "Your answers suggest moderate anxiety symptoms. Talking with a clinician is a good next step." },
      { max: 21, label: "Severe", note: "Your answers suggest severe anxiety symptoms. We'd encourage reaching out to a clinician soon." },
    ],
  },
};

// "Your First Visit" content. Reassurance-focused, written for an anxious
// first-time visitor. Cost/insurance specifics are PLACEHOLDER — confirm real
// self-pay pricing, sliding scale, and payer details before launch.
export const FIRST_VISIT = {
  steps: [
    {
      title: "Reach out",
      body: "Request an appointment online or call us — no referral needed. We'll help you find the right provider and a time that works.",
    },
    {
      title: "Your first appointment",
      body: "Your first visit is a thorough evaluation (about 45–60 minutes). Your provider will listen to what's bringing you in, your history, and your goals. There are no wrong answers — go at your own pace.",
    },
    {
      title: "Your plan, together",
      body: "You and your provider will build a plan that fits you — which may include therapy, medication, or advanced options like Deep TMS or Spravato. You decide what feels right.",
    },
    {
      title: "Ongoing support",
      body: "We schedule follow-ups to see how you're doing and adjust as needed. Care is a partnership, not a one-time visit.",
    },
  ],
  bring: [
    "A photo ID",
    "Your insurance card (if using insurance)",
    "A list of any current medications and doses",
    "Any relevant records or prior evaluations, if you have them",
  ],
  telehealth: [
    "A private, quiet space where you feel comfortable talking",
    "A phone, tablet, or computer with a camera",
    "A stable internet connection — we'll send a secure video link before your visit",
  ],
};

// PLACEHOLDER — cost fear is the #1 barrier to seeking mental health care, so
// this is deliberately structured (not a vague "we accept insurance" line).
// The STRUCTURE and framing are real; the specific dollar figures, sliding
// scale criteria, and superbill process are NOT — those need the practice's
// actual billing/pricing info before launch. Do not fill these with invented
// numbers; a wrong number on a real medical site is worse than a placeholder.
export const COST_TRANSPARENCY = [
  {
    title: "We verify your benefits",
    body: "Before your first visit, we'll check your insurance coverage and let you know what to expect — so there are no surprises.",
    confirmed: true,
  },
  {
    title: "Self-pay pricing",
    body: "PLACEHOLDER — list per-visit self-pay rates (initial evaluation, follow-up, therapy session).",
    confirmed: false,
  },
  {
    title: "Sliding scale",
    body: "PLACEHOLDER — confirm whether a sliding scale is offered and, if so, the criteria and how to ask about it.",
    confirmed: false,
  },
  {
    title: "Superbills for out-of-network claims",
    body: "PLACEHOLDER — confirm whether APMG provides superbills for patients to self-submit to an out-of-network plan.",
    confirmed: false,
  },
];

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
// photography until real logo/office/team photos are supplied.
export const IMAGES = {
  hero: {
    url: "https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    credit: "Photo by Inggrid Koe / Unsplash",
  },
  quote: {
    url: "https://images.unsplash.com/photo-1525891618908-24765267dab7?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    credit: "Photo by Rebecca Prest / Unsplash",
  },
};

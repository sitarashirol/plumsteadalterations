// =============================================================================
// THE ONLY FILE YOU EDIT — all business details & site content live here.
// =============================================================================
// This file is the single source of truth for the whole website: the business
// name, phone number, services, prices, service area, every headline and
// paragraph, and the deployment settings.
//
// This is *also* the only file that differs between this site and its sister
// site (Alterations by Raj). Every other file in the two repos is identical, so
// they stay in sync — to change how the site *looks or works*, edit the shared
// components; to change what it *says*, edit this file.
//
// NOTE ON PRICES: the "from" prices below are competitive placeholder estimates.
// Please review each one and adjust to what you actually want to charge.
// =============================================================================

// --- Deployment ---------------------------------------------------------------
// `site`   full production URL. For a custom domain use the domain; for a
//          github.io project page use 'https://<user>.github.io'.
// `base`   sub-path the site is served from. '/' for a custom domain at the
//          root, or '/<repo-name>' for a github.io project page.
// `domain` custom domain for GitHub Pages. Leave '' to use the github.io URL.
//          When set, a CNAME file is generated at build so Pages serves it.
export const deploy = {
  site: 'https://doylestownalterations.com',
  base: '/',
  domain: 'doylestownalterations.com',
};

export const business = {
  name: 'Doylestown Alterations',
  // How the name is split in the header/footer logo: `pre` in ink, `accent` in
  // the plum brand color.
  brand: { pre: 'Doylestown', accent: 'Alterations' },

  // Phone number in two formats: one for links, one for display.
  phoneLink: '+12673345212', // used by text/call links — keep the +1 and no spaces
  phoneDisplay: '(267) 334-5212', // how the number appears on the page

  // Service-area business run from home — we intentionally do NOT show a street
  // address. We only name the town/region for trust + local SEO.
  locality: 'Pipersville',
  region: 'PA',
  regionName: 'Pennsylvania',
  country: 'US',
  // Short human label for the area, used in eyebrows/headings.
  regionLabel: 'Doylestown & Bucks County, PA',

  // "$" = inexpensive (good for an affordable positioning). Options: $, $$, $$$.
  priceRange: '$',

  // Towns served — used in the page copy AND in the structured data Google reads.
  areaServed: [
    'Doylestown',
    'Pipersville',
    'New Hope',
    'Furlong',
    'Buckingham',
    'Plumsteadville',
    'Point Pleasant',
    'Ottsville',
    'Dublin',
    'Chalfont',
  ],
};

// --- SEO / social -------------------------------------------------------------
export const seo = {
  title:
    'Doylestown Alterations | Clothing Alterations in Doylestown & Bucks County, PA',
  description:
    'Affordable, expert clothing alterations in Doylestown & Bucks County, PA. Hemming, sleeve adjustments, taking in & letting out, plus zipper and button repairs. Text for a fast, free quote.',
  // Bottom line shown on the social-share (Open Graph) image.
  ogTagline: 'Affordable clothing alterations & repairs',
};

// --- Hero ---------------------------------------------------------------------
// `lead` and `contactNote` may contain simple HTML (e.g. <strong>).
export const hero = {
  eyebrow: 'Affordable alterations · Doylestown & Bucks County, PA',
  heading: 'Expert alterations at honest, everyday-low prices.',
  lead: 'Friendly, professional alterations from an experienced seamstress serving the Doylestown area. Most everyday jobs are simple, quick, and <strong>start well under $20</strong> — with a clear price before any work begins.',
  contactNote:
    '<strong>Text is the best way to reach us.</strong> Send a photo and a quick note about what you need for a fast, free quote.',
};

// A few headline "from" prices shown right in the hero so the affordable
// positioning is obvious at a glance. Keep these to the 3–4 most compelling,
// everyday jobs and make sure they match the prices in `services` below.
export const priceHighlights: { label: string; price: string }[] = [
  { label: 'Pant hemming', price: '$15' },
  { label: 'Zipper & button repairs', price: '$8' },
  { label: 'Sleeve adjustments', price: '$18' },
];

// "Why neighbors choose us" card in the hero.
export const whyUs = {
  title: 'Why neighbors choose us',
  points: [
    'Experienced, trained in clothing alterations',
    'Honest, low prices — most jobs under $20',
    'Quick turnaround — most jobs in a few days',
    'Personal, one-on-one service',
    'Convenient local drop-off & pick-up',
  ],
};

// --- Services -----------------------------------------------------------------
// Set `fromPrice` to a string like '$15' to show "from $15", or to null to show
// "Ask for a quote" instead (handy for open-ended jobs like custom curtains).
export type Service = {
  title: string;
  description: string;
  fromPrice: string | null;
};

export const services: Service[] = [
  {
    title: 'Hemming',
    description:
      'Shorten pants, jeans, skirts, and dresses to the perfect length — including original-hem finishes on jeans.',
    fromPrice: '$15',
  },
  {
    title: 'Sleeve Adjustments',
    description:
      'Lengthen or shorten sleeves on shirts, blouses, jackets, and dresses for a clean, proportional fit.',
    fromPrice: '$18',
  },
  {
    title: 'Taking In & Letting Out',
    description:
      'Adjust waists and side seams so your favorite pieces fit just right — whether they need to be taken in or let out.',
    fromPrice: '$20',
  },
  {
    title: 'Repairs',
    description:
      'Replace buttons, fix or replace zippers, and mend seams and small tears to give your clothes a second life.',
    fromPrice: '$8',
  },
];

// --- Section copy -------------------------------------------------------------
// In `area.lead` you can use the tokens {locality} and {topTowns}; in
// `about.paragraphs` you can use {locality}. They are filled in automatically.
export const sections = {
  services: {
    eyebrow: 'What we do',
    heading: 'Everyday alterations & repairs',
    lead: 'We focus on the alterations people need most — done well, and done affordably. (We don’t make new garments from scratch.)',
  },
  pricing: {
    eyebrow: 'Simple, fair pricing',
    heading: 'Starting prices',
    lead: 'Every garment is a little different, so the prices below are starting points. Text a photo and a quick description for an exact, no-pressure quote.',
    note: 'Prices vary by garment, fabric, and the work involved. You’ll always get a clear quote before any work begins.',
  },
  area: {
    eyebrow: 'Where we serve',
    heading: 'Proudly serving the Doylestown & Bucks County area',
    lead: 'Based near {locality} and serving {topTowns}, and the surrounding communities.',
  },
  faq: {
    eyebrow: 'Good to know',
    heading: 'Frequently asked questions',
  },
};

// --- About --------------------------------------------------------------------
export const about = {
  eyebrow: 'About',
  heading: 'An experienced seamstress, right in your neighborhood',
  paragraphs: [
    'Doylestown Alterations is a home-based alterations service in {locality}, Bucks County. After years of experience and a long history of happy customers, our seamstress is now offering that same careful, trained craftsmanship to neighbors across the Doylestown area.',
    'Every garment gets personal attention and an honest price. Whether it’s hemming a new pair of pants, taking in a dress for a special occasion, or fixing a stubborn zipper, you can count on quality work and a friendly, neighborly experience.',
  ],
  stats: [
    { num: 'Years', label: 'of alterations experience' },
    { num: 'Local', label: 'serving the Doylestown area' },
    { num: 'Fair', label: 'competitive pricing' },
  ],
  card: {
    title: 'Ready when you are',
    body: 'The easiest way to get started is a quick text. Tell us what you need, attach a photo if you can, and we’ll reply with a price and a time to drop off your garments.',
  },
};

// --- Contact / CTA ------------------------------------------------------------
export const cta = {
  eyebrow: 'Get a free quote',
  heading: 'Let’s get your clothes fitting perfectly.',
  lead: 'Text a photo and a short description of what you need — you’ll get a friendly, no-obligation quote, usually the same day.',
  note: 'Please text rather than call — it’s the fastest way to reach us.',
};

export const footer = {
  tagline: 'Serving Doylestown & Bucks County, PA',
  note: 'By appointment · Local drop-off & pick-up',
};

// --- FAQ ----------------------------------------------------------------------
export const faqs = [
  {
    q: 'How much do alterations cost?',
    a: 'Prices depend on the garment and the work involved, but most simple jobs start at just a few dollars. Send a text describing what you need (a photo helps!) and you’ll get a friendly, no-obligation quote.',
  },
  {
    q: 'How long do alterations take?',
    a: 'Most everyday alterations are ready within a few days. If you have an event coming up, just mention your deadline and we’ll do our best to accommodate it.',
  },
  {
    q: 'Where are you located?',
    a: 'We’re based in Pipersville (Plumstead Township) and proudly serve Doylestown and the surrounding Bucks County area. Drop-off and pick-up details are arranged when you reach out by text.',
  },
  {
    q: 'What kinds of alterations do you do?',
    a: 'We focus on everyday alterations and repairs — hemming, sleeve adjustments, taking garments in or letting them out, and fixing zippers, buttons, and seams. We don’t make new clothing from scratch.',
  },
  {
    q: 'How do I get started?',
    a: 'Just text ' + business.phoneDisplay + ' with a quick description of what you need. It’s the fastest way to get a quote and find a time to drop off your garments.',
  },
];

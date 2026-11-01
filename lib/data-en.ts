// =====================================================================
// MS Fit Coaching: the main page in English (/en).
//
// A demo translation of the Polish copy in lib/data.ts, which is the
// source of truth. Photos, prices, links and placeholders are reused from
// there, so only the wording lives here. Typed as `Content`, so adding a
// field to the Polish page without translating it fails the build.
//
// Before this goes live: have the copy reviewed by Marta (and ideally a
// native speaker). The page is noindex until then; see README.md.
// =====================================================================

import { pl, type Content, type Link } from "./data";

const home = "/en";

const ids = {
  content: "content",
  about: "about",
  howIWork: "how-i-work",
  transformations: "transformations",
  testimonials: "reviews",
  products: "products",
  faq: "faq",
  contact: "contact",
};

// ---------------------------------------------------------------------
// Site
// ---------------------------------------------------------------------

const site = {
  ...pl.site,
  jobTitle: "Online personal trainer",
  locale: "en_GB",
  title: "Lose weight for good, no yo-yo dieting | MS Fit Coaching – Marta Sim",
  description:
    "Online personal trainer for women in the UK and Poland. A diet and training plan made for you, ongoing support and results that stay with you – no more yo-yo dieting.",
  ogImage: {
    ...pl.site.ogImage,
    alt: "MS Fit Coaching – lose weight without yo-yo dieting, with coach Marta Sim",
  },
  areaServed: ["United Kingdom", "Poland"],
};

const applyCta: Link = {
  label: "Apply for coaching",
  href: site.applicationUrl,
};

// ---------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------

const nav: Link[] = [
  { label: "About me", href: `${home}#${ids.about}` },
  { label: "How I work", href: `${home}#${ids.howIWork}` },
  { label: "Transformations", href: `${home}#${ids.transformations}` },
  { label: "Products", href: `${home}#${ids.products}` },
  { label: "FAQ", href: `${home}#${ids.faq}` },
];

// ---------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------

const hero = {
  // "⁠" (word joiner) stops the big heading from breaking inside "yo-yo".
  title: "Lose weight for good. No more yo-⁠yo dieting.",
  lead: "A diet and training plan made for you – around your schedule, your tastes and your goals. I guide you online, step by step, until the new habits become part of everyday life.",
  primaryCta: applyCta,
  secondaryCta: { label: "See products", href: `#${ids.products}` },
  stats: [
    // TODO [PLACEHOLDER] confirm the exact "1000+" claim with Marta (as in Polish).
    { value: "1000+", label: "clients" },
    { value: "Plan", label: "made for you, not from a template" },
    { value: "Online", label: "support in the UK and Poland" },
  ],
  image: {
    ...pl.hero.image,
    alt: "Marta Sim smiling in black workout clothes, holding a dumbbell",
  },
  imageCaption: "Marta Sim, online personal trainer",
};

// ---------------------------------------------------------------------
// Problem / empathy
// ---------------------------------------------------------------------

const problem = {
  title: "Sound all too familiar?",
  intro:
    "If another diet left you back where you started, it's not down to weak willpower. None of those plans were ever written for you.",
  points: [
    {
      title: "Diets that don't survive real life",
      text: "A strict meal plan works for two weeks. Then comes a weekend, a birthday or a bad day – and the weight comes back, often with extra.",
    },
    {
      title: "No time",
      text: "Work, home, kids, changing shifts. An hour at the gym every day and cooking five meals sounds like a plan for someone else.",
    },
    {
      title: "Motivation that fades",
      text: "You start full of energy, but without support and a clear plan it's easy to give up after the first bad week. And then it's “starting Monday” all over again.",
    },
  ],
  chart: {
    title: "Rollercoaster or steady progress?",
    yoyoLabel: "Miracle diet",
    steadyLabel: "Tailored plan",
    axisY: "weight",
    axisX: "time",
    description:
      "Illustrative chart with no numbers. The “Miracle diet” line drops and rises sharply several times and ends higher than where it started. The “Tailored plan” line falls gently and stays at a lower level.",
    caption:
      "Illustration only. Instead of a rollercoaster: a calm pace and habits that stay with you for longer.",
  },
};

// ---------------------------------------------------------------------
// About me
// ---------------------------------------------------------------------

const about = {
  title: "Hi, I'm Marta",
  // TODO [PLACEHOLDER] replace with Marta's own story, in her words (as in Polish).
  paragraphs: [
    "I'm a personal trainer, coaching women from Poland and the UK online. I know what it's like to start “on Monday” yet again – and how much changes with a plan that fits real life, not the other way round.",
    "I don't believe in starving yourself, banned foods or training until you drop. I believe in food you enjoy, movement that fits into your week, and small changes that add up to a big difference over time.",
    "I live in the UK, so I know what life is like for Polish women abroad: different shops, shift work and missing home cooking. I take all of that into account in your plan.",
  ],
  credentialsTitle: "Qualifications",
  // TODO [PLACEHOLDER] Marta's real qualifications (as in Polish).
  credentials: [
    "[PLACEHOLDER] Coaching qualification, e.g. Level 3 Personal Trainer",
    "[PLACEHOLDER] Nutrition or dietetics course",
    "[PLACEHOLDER] Years of experience coaching clients",
  ],
  image: {
    ...pl.about.image,
    alt: "Marta Sim at the gym doing a sumo squat with dumbbells",
  },
  instagramLabel: "Find me on Instagram",
};

// ---------------------------------------------------------------------
// How I work + offer
// ---------------------------------------------------------------------

const howIWork = {
  title: "How we work together",
  intro:
    "Four simple steps – from your first message to a plan that really works in your life.",
  steps: [
    {
      title: "You fill in the application",
      text: "You answer a few questions about your goal, your daily life, your health and what you've tried so far. It only takes a few minutes.",
    },
    {
      title: "Consultation",
      text: "We talk about what you need and whether coaching is right for you. No pressure and no commitment.",
    },
    {
      title: "A plan made for you",
      text: "You get a meal plan and a training plan that fit your schedule, your tastes and where you train – at home or at the gym.",
    },
    {
      title: "Support and check-ins",
      text: "We review your progress regularly and adjust the plan as we go. Got a question or a tough week? You won't be left to deal with it alone.",
    },
  ],
};

const offers = [
  {
    title: "1:1 online coaching",
    text: "Full coaching: diet, training and regular contact with me. We agree the price and length of coaching after the consultation, once I know what you need.",
    includes: [
      "A personal meal plan, with no banned foods",
      "A training plan for home or the gym",
      "Regular check-ins and plan adjustments",
      "Contact with me through the app",
      "Tips for eating out, travelling and the holidays",
    ],
    cta: applyCta,
  },
];

// ---------------------------------------------------------------------
// Transformations
// ---------------------------------------------------------------------

const [client1, ania, magda] = pl.transformations.items;

const transformations = {
  // "­" (soft hyphen): the one long word only breaks, with a hyphen,
  // on the narrowest phones (320px), where it's too wide for the screen.
  title: "Trans­formations",
  intro: "Real women, real lives and changes that lasted.",
  note: "Photos published with clients' consent. Results vary from person to person. Quotes translated from Polish.",
  items: [
    {
      ...client1,
      name: "My client",
      description:
        "No magic tricks and no shortcuts – just consistency, patience and everyday choices.",
      before: { ...client1.before, alt: "Client before starting coaching, front view" },
      after: { ...client1.after, alt: "The same client after a period of coaching, front view" },
    },
    {
      ...ania,
      quote: "I eat normally, I train at home, and my trousers finally fit the way I wanted.",
      before: { ...ania.before, alt: "Ania before starting coaching" },
      after: { ...ania.after, alt: "Ania after a period of coaching" },
    },
    {
      ...magda,
      quote: "The biggest change was in my head. I stopped being afraid of food.",
      before: { ...magda.before, alt: "Magda before starting coaching" },
      after: { ...magda.after, alt: "Magda after a period of coaching" },
    },
  ],
};

// ---------------------------------------------------------------------
// Reviews
// ---------------------------------------------------------------------

const testimonials = {
  title: "What my clients say",
  intro: "A few words from women who've been on this journey with me (translated from Polish).",
  items: [
    {
      quote:
        "I was afraid I'd get yet another printed meal plan and be left alone with it. Marta answered every question, and the plan changed along with me.",
      name: "Joanna",
      detail: "London",
      placeholder: true,
    },
    {
      quote:
        "I work shifts and thought that ruled out any kind of diet. It turned out all I needed was a plan built around my schedule.",
      name: "Ewelina",
      detail: "Birmingham",
      placeholder: true,
    },
    {
      quote:
        "My first weeks without starving myself and without feeling guilty over a slice of cake. I train at home three times a week and I finally enjoy it.",
      name: "Karolina",
      detail: "Wrocław",
      placeholder: true,
    },
  ],
};

// ---------------------------------------------------------------------
// Products
//
// The guides themselves are in Polish, so every card says so.
// ---------------------------------------------------------------------

const [ebook, trainingPlan, mealPlan] = pl.products.items;

const products = {
  title: "Products",
  intro:
    "Want to start on your own? Ready-made guides you can download straight after purchase.",
  buyLabel: "Buy now",
  currencyOrder: ["gbp", "pln"] satisfies Content["products"]["currencyOrder"],
  items: [
    {
      ...ebook,
      title: "Recipe e-book",
      description:
        "Simple, filling recipes for every meal of the day – with calories, macros and a shopping list.",
      format: "PDF e-book · in Polish",
      image: { ...ebook.image, alt: "Cover of the MS Fit recipe e-book" },
      features: ["Recipes for every meal of the day", "Calories and macros", "Ready-made shopping list"],
    },
    {
      ...trainingPlan,
      title: "Training plan",
      description:
        "A week-by-week plan for home or the gym, with tips for every exercise.",
      format: "PDF plan · in Polish",
      image: { ...trainingPlan.image, alt: "Preview of the MS Fit training plan" },
      features: ["Home and gym versions", "Laid out week by week", "Tips for every exercise"],
    },
    {
      ...mealPlan,
      title: "Meal plan",
      description:
        "A ready-made meal plan with meal swaps and a shopping list, to help you eat regularly without counting every calorie.",
      format: "PDF plan · in Polish",
      image: { ...mealPlan.image, alt: "Preview of the MS Fit meal plan" },
      features: ["Ready-made meal plan", "Meal swaps", "Shopping list"],
    },
  ],
};

// ---------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------

const faq = {
  title: "Frequently asked questions",
  intro: "Can't find the answer to your question? I'm happy to help.",
  contactLink: { label: "Message me", href: `#${ids.contact}` },
  items: [
    {
      question: "Who is coaching for?",
      answer:
        "For women who want to lose weight and get in better shape without starving themselves and without the yo-yo effect – whatever their age and fitness level. I work with Polish women in the UK, in Poland and anywhere with an internet connection.",
    },
    {
      question: "When will I see the first results?",
      answer:
        "That's very individual. Many clients notice the first changes – more energy, better sleep, looser clothes – after a few weeks. I don't promise a specific number of kilos, because a healthy pace depends on your body, your lifestyle and your commitment. We aim for results that last.",
    },
    {
      question: "Do I need any exercise equipment?",
      answer:
        "You don't need any. I'll adapt the plan to whatever you have to hand – bodyweight training, resistance bands or dumbbells. If you'd like to buy something, I'll tell you what's actually worth getting.",
    },
    {
      question: "Training at home or at the gym?",
      answer:
        "Whichever you prefer. I'll put together a plan for home, the gym or a mix of both – so it fits your schedule and you enjoy it.",
    },
    {
      question: "I have allergies or intolerances, or I don't eat meat. Is that a problem?",
      answer:
        "Not at all. I build your meal plan around allergies, intolerances, a vegetarian or vegan diet, and your tastes. If you have a condition that needs a therapeutic diet, you'll also need advice from your doctor or a clinical dietitian.",
    },
    {
      question: "How do we keep in touch?",
      // TODO [PLACEHOLDER] confirm app name, check-in frequency and reply times (as in Polish).
      answer:
        "We keep in touch online, through a coaching app. At regular intervals we do check-ins to review your progress and adjust the plan, and I answer questions between check-ins on working days.",
    },
    {
      question: "Can I return a digital product?",
      answer:
        "You have 14 days to cancel, but you lose that right if you agree to download the file straight away, before that period ends. If the file is faulty or doesn't match its description, message me and I'll replace it or give you a refund.",
      link: { label: "Read the Terms (in Polish)", href: "/regulamin" },
    },
    {
      question: "Can I start if I have health problems or I'm pregnant?",
      answer:
        "Before starting a new diet or training plan, check with your doctor – especially if you're pregnant, breastfeeding, taking medication or have a long-term condition. The application asks about your health so I can put together a safe plan.",
    },
  ],
};

// ---------------------------------------------------------------------
// Final CTA + contact form
// ---------------------------------------------------------------------

const finalCta = {
  title: "Are you ready for a change?",
  text: "Fill in a short application. I'll get back to you, we'll talk about your goal and see whether we can start working together.",
  cta: applyCta,
  instagramText: "Would you like to get to know me first? On Instagram I share recipes and training tips (in Polish).",
};

const contactForm = {
  ...pl.contactForm,
  title: "Got a question? Message me",
  intro: "I'll reply by email as soon as I can.",
  fields: {
    name: "First name",
    email: "Email",
    message: "Message",
  },
  consent: {
    before: "I agree to my data being processed so that you can reply to my message, in line with the ",
    linkLabel: "Privacy Policy",
    href: pl.contactForm.consent.href,
    after: " (in Polish).",
  },
  honeypot: "Website",
  submit: "Send message",
  sending: "Sending…",
  success: "Thank you! Your message has arrived. I'll reply as soon as I can.",
  errors: {
    name: "Enter your first name.",
    email: "Enter a valid email address, e.g. anna@example.com.",
    message: "Write a message – at least 10 characters.",
    consent: "Tick the consent box so that I can reply to your message.",
    tooLong: "This text is too long.",
    failed: "The message couldn't be sent. Please try again or email",
  },
};

// ---------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------

const footer = {
  tagline: "Tailored online diet and training – for women in the UK and Poland.",
  disclaimer:
    "The content on this site is for information only and is not medical advice. Check with your doctor before starting a diet or training plan. Results vary and depend on things like your health, lifestyle and commitment.",
  // The legal pages are only in Polish for now.
  legalLinks: [
    { label: "Privacy policy (in Polish)", href: "/polityka-prywatnosci" },
    { label: "Terms (in Polish)", href: "/regulamin" },
  ],
};

// ---------------------------------------------------------------------
// Interface wording
// ---------------------------------------------------------------------

const ui = {
  skipToContent: "Skip to content",
  homeLabel: "Coaching – home page",
  mainNav: "Main navigation",
  mobileNav: "Mobile menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  newTab: "(opens in a new tab)",
  onInstagram: "on Instagram",
  price: "Price",
  or: "or",
  before: "Before",
  after: "After",
  quote: { open: "“", close: "”" },
  chartLegend: "Legend",
  placeholder: "Sample content – to be replaced",
  languageSwitch: { short: "PL", label: "Wersja polska", href: pl.home, lang: pl.lang },
};

const schema = {
  catalogName: "Coaching and products",
  serviceType: "Online personal training and nutrition coaching",
};

export const en: Content = {
  lang: "en",
  home,
  ids,
  site,
  applyCta,
  nav,
  hero,
  problem,
  about,
  howIWork,
  offers,
  transformations,
  testimonials,
  products,
  faq,
  finalCta,
  contactForm,
  footer,
  ui,
  schema,
};

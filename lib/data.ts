// =====================================================================
// MS Fit Coaching: all site content in one place.
//
// Edit text, links, prices and products here. Components only lay it out.
// Anything marked [PLACEHOLDER] or TODO must be confirmed with Marta
// before launch (the full checklist is at the end of README.md).
//
// Items with `placeholder: true` show a visible "Przykładowa treść" badge
// on the site. Set it to false (or delete it) once real, consented
// content is in place.
// =====================================================================

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Link = { label: string; href: string };

// ---------------------------------------------------------------------
// Site
// ---------------------------------------------------------------------

/** Public URL for canonical, OpenGraph, sitemap and JSON-LD links.
 *  Set NEXT_PUBLIC_SITE_URL on Vercel once the final domain is live;
 *  until then the Vercel production domain is used automatically. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "MS Fit Coaching",
  shortName: "MS Fit",
  coachName: "Marta Sim",
  jobTitle: "Trenerka personalna online",
  url: siteUrl.replace(/\/$/, ""),
  locale: "pl_PL",
  title: "Schudnij bez efektu jojo | MS Fit Coaching – Marta Sim",
  description:
    "Trenerka personalna online dla kobiet w UK i w Polsce. Dieta i trening szyte na miarę, stałe wsparcie i efekty, które zostają z Tobą – bez efektu jojo.",
  email: "kontakt@msfitcoaching.pl", // TODO [PLACEHOLDER] confirm Marta's contact email
  instagram: {
    handle: "@msfit_coaching_",
    url: "https://www.instagram.com/msfit_coaching_/",
  },
  /** Existing coaching application form on onlinecoaching.io. */
  applicationUrl: "https://martaciupak.onlinecoaching.io/pre-application",
  ogImage: {
    src: "/images/og.jpg",
    alt: "MS Fit Coaching – schudnij bez efektu jojo z trenerką Martą Sim",
    width: 1200,
    height: 630,
  },
  /** Countries Marta works with, for structured data. */
  areaServed: ["Wielka Brytania", "Polska"],
};

export const applyCta: Link = {
  label: "Aplikuj na współpracę",
  href: site.applicationUrl,
};

// ---------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------

// Links start with "/" so they also work from the legal pages.
export const nav: Link[] = [
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Jak pracuję", href: "/#jak-pracuje" },
  { label: "Metamorfozy", href: "/#metamorfozy" },
  { label: "Produkty", href: "/#produkty" },
  { label: "FAQ", href: "/#faq" },
];

// ---------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------

export const hero = {
  title: "Schudnij na dobre. Bez efektu jojo.",
  lead: "Dieta i trening szyte na miarę – pod Twój grafik, Twoje smaki i Twoje cele. Prowadzę Cię online, krok po kroku, aż nowe nawyki staną się codziennością.",
  primaryCta: applyCta,
  secondaryCta: { label: "Zobacz produkty", href: "#produkty" } satisfies Link,
  stats: [
    // TODO [PLACEHOLDER] confirm the exact "1000+" claim with Marta.
    { value: "1000+", label: "podopiecznych" },
    { value: "Plan", label: "szyty na miarę, nie z szablonu" },
    { value: "Online", label: "wsparcie w UK i w Polsce" },
  ],
  // Interim photo cropped from Instagram (low resolution, text removed).
  // TODO swap for the original, full-size file from Marta's photo shoot.
  image: {
    src: "/images/marta-hero.jpg",
    alt: "Uśmiechnięta Marta Sim w czarnym stroju treningowym, z hantlą w dłoni",
    width: 678,
    height: 848,
  } satisfies ImageAsset,
  imageCaption: "Marta Sim, trenerka personalna online",
};

// ---------------------------------------------------------------------
// Problem / empathy
// ---------------------------------------------------------------------

export const problem = {
  title: "Znasz to aż za dobrze?",
  intro:
    "Jeśli kolejna dieta skończyła się powrotem do punktu wyjścia, to nie przez słabą wolę. Po prostu żaden z tych planów nie był pisany dla Ciebie.",
  points: [
    {
      title: "Diety, które nie wytrzymują zderzenia z życiem",
      text: "Restrykcyjny jadłospis działa przez dwa tygodnie. Potem przychodzi weekend, urodziny albo gorszy dzień – i kilogramy wracają, często z nawiązką.",
    },
    {
      title: "Brak czasu",
      text: "Praca, dom, dzieci, zmiany w grafiku. Godzina na siłowni codziennie i gotowanie pięciu posiłków brzmią jak plan dla kogoś innego.",
    },
    {
      title: "Motywacja, która znika",
      text: "Zaczynasz z zapałem, ale bez wsparcia i jasnego planu łatwo odpuścić po pierwszym gorszym tygodniu. A potem znowu „od poniedziałku”.",
    },
  ],
  chart: {
    title: "Huśtawka czy stały postęp?",
    yoyoLabel: "Dieta-cud",
    steadyLabel: "Plan szyty na miarę",
    axisY: "waga",
    axisX: "czas",
    description:
      "Wykres poglądowy, bez liczb. Linia „Dieta-cud” kilka razy gwałtownie spada i rośnie, a kończy się wyżej niż na starcie. Linia „Plan szyty na miarę” opada łagodnie i utrzymuje się na niższym poziomie.",
    caption:
      "Schemat poglądowy. Zamiast huśtawki: spokojne tempo i nawyki, które zostają z Tobą na dłużej.",
  },
};

// ---------------------------------------------------------------------
// O mnie
// ---------------------------------------------------------------------

export const about = {
  title: "Cześć, jestem Marta",
  // TODO [PLACEHOLDER] replace with Marta's own story, in her words.
  paragraphs: [
    "Jestem trenerką personalną i prowadzę online kobiety z Polski i z Wysp. Wiem, jak to jest zaczynać „od poniedziałku” po raz kolejny – i jak wiele zmienia plan, który pasuje do prawdziwego życia, a nie odwrotnie.",
    "Nie wierzę w głodówki, zakazane produkty ani treningi do upadłego. Wierzę w jedzenie, które lubisz, ruch, który zmieścisz w swoim tygodniu, i w małe zmiany, które z czasem dają duży efekt.",
    "Mieszkam w Wielkiej Brytanii, więc dobrze znam realia Polek na emigracji: inne sklepy, pracę na zmiany i tęsknotę za domowym jedzeniem. Uwzględniam to wszystko w Twoim planie.",
  ],
  credentialsTitle: "Kwalifikacje",
  // TODO [PLACEHOLDER] Marta's real qualifications. These are shown on the site.
  credentials: [
    "[PLACEHOLDER] Kwalifikacja trenerska, np. Level 3 Personal Trainer",
    "[PLACEHOLDER] Kurs z zakresu żywienia lub dietetyki",
    "[PLACEHOLDER] Liczba lat doświadczenia w prowadzeniu podopiecznych",
  ],
  // Interim photo: a frame from an Instagram reel cover (640 px wide).
  // TODO swap for an original, full-size photo of Marta.
  image: {
    src: "/images/marta-o-mnie.jpg",
    alt: "Marta Sim na siłowni robi przysiad sumo z hantlami",
    width: 640,
    height: 800,
  } satisfies ImageAsset,
  instagramLabel: "Zajrzyj do mnie na Instagramie",
};

// ---------------------------------------------------------------------
// Jak pracuję + offer
// ---------------------------------------------------------------------

export const howIWork = {
  title: "Jak wygląda nasza współpraca",
  intro:
    "Cztery proste kroki – od pierwszej wiadomości do planu, który naprawdę działa w Twoim życiu.",
  steps: [
    {
      title: "Wypełniasz aplikację",
      text: "Odpowiadasz na kilka pytań o swój cel, codzienność, zdrowie i dotychczasowe próby. To zajmie Ci tylko kilka minut.",
    },
    {
      title: "Konsultacja",
      text: "Rozmawiamy o tym, czego potrzebujesz i czy współpraca jest dla Ciebie. Bez presji i bez zobowiązań.",
    },
    {
      title: "Plan szyty na miarę",
      text: "Dostajesz plan żywieniowy i treningowy dopasowany do Twojego grafiku, smaków i miejsca treningu – w domu albo na siłowni.",
    },
    {
      title: "Wsparcie i check-iny",
      text: "Regularnie sprawdzamy postępy i na bieżąco poprawiamy plan. Masz pytanie albo gorszy tydzień? Nie zostajesz z tym sama.",
    },
  ],
};

export const offers = [
  {
    title: "Współpraca online 1:1",
    // TODO [PLACEHOLDER] confirm whether to show a price or keep "after consultation".
    text: "Pełne prowadzenie: dieta, trening i stały kontakt ze mną. Cenę i długość współpracy ustalamy po konsultacji, kiedy już wiem, czego potrzebujesz.",
    includes: [
      "Indywidualny plan żywieniowy, bez zakazanych produktów",
      "Plan treningowy na dom albo siłownię",
      "Regularne check-iny i korekty planu", // TODO [PLACEHOLDER] confirm check-in frequency
      "Kontakt ze mną przez aplikację",
      "Wskazówki, jak jeść na mieście, w podróży i w święta",
    ],
    cta: applyCta,
  },
];

// ---------------------------------------------------------------------
// Metamorfozy
// ---------------------------------------------------------------------

export type Transformation = {
  name: string;
  /** The client's own words, shown in quotation marks. */
  quote?: string;
  /** Marta's description, used when there is no quote from the client. */
  description?: string;
  before: ImageAsset;
  after: ImageAsset;
  placeholder?: boolean;
};

// TODO [PLACEHOLDER] real before/after photos, first names and quotes.
// Only publish with each client's written consent.
export const transformations = {
  title: "Metamorfozy",
  intro:
    "Prawdziwe kobiety, prawdziwe życie i zmiany, które zostały na dłużej.",
  note: "Zdjęcia publikowane za zgodą podopiecznych. Rezultaty są indywidualne.",
  items: [
    // From Marta's Instagram transformation post (front view, faces cropped out).
    // TODO confirm the client agreed to her photos being used on the website,
    // and ask whether she'd like her first name and a quote shown.
    {
      name: "Moja podopieczna",
      description:
        "Bez magicznych sposobów i dróg na skróty – za to z konsekwencją, cierpliwością i codziennymi wyborami.",
      before: {
        src: "/images/metamorfozy/klientka-1-przed.jpg",
        alt: "Podopieczna przed rozpoczęciem współpracy, sylwetka z przodu",
        width: 514,
        height: 685,
      },
      after: {
        src: "/images/metamorfozy/klientka-1-po.jpg",
        alt: "Ta sama podopieczna po okresie współpracy, sylwetka z przodu",
        width: 514,
        height: 685,
      },
    },
    {
      name: "Ania",
      quote: "Jem normalnie, trenuję w domu, a spodnie wreszcie leżą tak, jak chciałam.",
      before: {
        src: "/images/metamorfozy/ania-przed.jpg",
        alt: "Ania przed rozpoczęciem współpracy",
        width: 900,
        height: 1200,
      },
      after: {
        src: "/images/metamorfozy/ania-po.jpg",
        alt: "Ania po okresie współpracy",
        width: 900,
        height: 1200,
      },
      placeholder: true,
    },
    {
      name: "Magda",
      quote: "Najbardziej zmieniła się moja głowa. Przestałam się bać jedzenia.",
      before: {
        src: "/images/metamorfozy/magda-przed.jpg",
        alt: "Magda przed rozpoczęciem współpracy",
        width: 900,
        height: 1200,
      },
      after: {
        src: "/images/metamorfozy/magda-po.jpg",
        alt: "Magda po okresie współpracy",
        width: 900,
        height: 1200,
      },
      placeholder: true,
    },
  ] satisfies Transformation[],
};

// ---------------------------------------------------------------------
// Opinie
// ---------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  placeholder?: boolean;
};

// TODO [PLACEHOLDER] replace with real reviews (with permission). Publishing
// invented reviews is illegal in the UK (DMCC Act 2024), so keep the
// placeholder badge on until these are real.
export const testimonials = {
  title: "Opinie podopiecznych",
  intro: "Kilka słów od kobiet, które przeszły tę drogę ze mną.",
  items: [
    {
      quote:
        "Bałam się, że znowu dostanę kartkę z jadłospisem i zostanę z nią sama. Marta odpisywała na każde pytanie, a plan zmieniał się razem ze mną.",
      name: "Joanna",
      detail: "Londyn",
      placeholder: true,
    },
    {
      quote:
        "Pracuję na zmiany i myślałam, że to wyklucza jakąkolwiek dietę. Okazało się, że wystarczył plan ułożony pod mój grafik.",
      name: "Ewelina",
      detail: "Birmingham",
      placeholder: true,
    },
    {
      quote:
        "Pierwsze tygodnie bez głodówki i bez wyrzutów sumienia po kawałku ciasta. Trenuję w domu trzy razy w tygodniu i wreszcie to lubię.",
      name: "Karolina",
      detail: "Wrocław",
      placeholder: true,
    },
  ] satisfies Testimonial[],
};

// ---------------------------------------------------------------------
// Produkty
// ---------------------------------------------------------------------

export type Product = {
  id: string;
  title: string;
  description: string;
  format: string;
  /** Show one or both currencies. Prices are whole units (79 = 79 zł). */
  price: { pln?: number; gbp?: number };
  image: ImageAsset;
  /** Payhip / Lemon Squeezy / Stripe Payment Link URL. Opens in a new tab. */
  checkoutUrl: string;
  /** Short "what's inside" bullets, shown on the /demo pricing cards. */
  features?: string[];
};

// TODO [PLACEHOLDER] final product names, descriptions, prices and mockups.
export const products = {
  title: "Produkty",
  intro:
    "Chcesz zacząć samodzielnie? Gotowe materiały do pobrania od razu po zakupie.",
  buyLabel: "Kup teraz",
  items: [
    {
      id: "ebook-przepisy",
      title: "E-book z przepisami",
      description:
        "Proste, sycące przepisy na każdy posiłek dnia – z kalorycznością, makroskładnikami i listą zakupów.",
      format: "E-book PDF",
      price: { pln: 79, gbp: 15 },
      image: {
        src: "/images/produkty/ebook-przepisy.jpg",
        alt: "Okładka e-booka z przepisami MS Fit",
        width: 1200,
        height: 900,
      },
      checkoutUrl: "#", // TODO: paste the Payhip / Lemon Squeezy / Stripe checkout link
      features: [
        "Przepisy na każdy posiłek dnia",
        "Kaloryczność i makroskładniki",
        "Gotowa lista zakupów",
      ],
    },
    {
      id: "plan-treningowy",
      title: "Plan treningowy",
      description:
        "Rozpisany tydzień po tygodniu plan na dom albo siłownię, ze wskazówkami do każdego ćwiczenia.",
      format: "Plan PDF",
      price: { pln: 129, gbp: 25 },
      image: {
        src: "/images/produkty/plan-treningowy.jpg",
        alt: "Podgląd planu treningowego MS Fit",
        width: 1200,
        height: 900,
      },
      checkoutUrl: "#", // TODO: paste the Payhip / Lemon Squeezy / Stripe checkout link
      features: [
        "Wersja na dom i na siłownię",
        "Rozpisany tydzień po tygodniu",
        "Wskazówki do każdego ćwiczenia",
      ],
    },
    {
      id: "plan-zywieniowy",
      title: "Plan żywieniowy",
      description:
        "Gotowy jadłospis z zamiennikami posiłków i listą zakupów, który pomoże Ci jeść regularnie bez liczenia każdej kalorii.",
      format: "Plan PDF",
      price: { pln: 99, gbp: 19 },
      image: {
        src: "/images/produkty/plan-zywieniowy.jpg",
        alt: "Podgląd planu żywieniowego MS Fit",
        width: 1200,
        height: 900,
      },
      checkoutUrl: "#", // TODO: paste the Payhip / Lemon Squeezy / Stripe checkout link
      features: [
        "Gotowy jadłospis",
        "Zamienniki posiłków",
        "Lista zakupów",
      ],
    },
  ] satisfies Product[],
};

// ---------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------

export type Faq = { question: string; answer: string; link?: Link };

export const faq = {
  title: "Najczęstsze pytania",
  intro: "Nie ma tu odpowiedzi na Twoje pytanie? Chętnie pomogę.",
  contactLink: { label: "Napisz do mnie", href: "#kontakt" } satisfies Link,
  items: [
    {
      question: "Dla kogo jest współpraca?",
      answer:
        "Dla kobiet, które chcą schudnąć i poprawić sylwetkę bez głodówek i bez efektu jojo – niezależnie od wieku i poziomu zaawansowania. Pracuję z Polkami w Wielkiej Brytanii, w Polsce i wszędzie tam, gdzie jest internet.",
    },
    {
      question: "Kiedy zobaczę pierwsze efekty?",
      answer:
        "To bardzo indywidualne. Wiele podopiecznych pierwsze zmiany – więcej energii, lepszy sen, luźniejsze ubrania – zauważa po kilku tygodniach. Nie obiecuję konkretnej liczby kilogramów, bo zdrowe tempo zależy od Twojego organizmu, stylu życia i zaangażowania. Stawiamy na efekt, który zostanie.",
    },
    {
      question: "Czy potrzebuję sprzętu do ćwiczeń?",
      answer:
        "Nie musisz go mieć. Plan dopasuję do tego, co masz pod ręką – może to być trening z masą własnego ciała, z gumami albo z hantlami. Jeśli zechcesz coś dokupić, podpowiem, co naprawdę się przyda.",
    },
    {
      question: "Trening w domu czy na siłowni?",
      answer:
        "Jak wolisz. Przygotuję plan na dom, na siłownię albo łączony – tak, żeby pasował do Twojego grafiku i sprawiał Ci przyjemność.",
    },
    {
      question: "Mam alergie, nietolerancje albo nie jem mięsa. Czy to problem?",
      answer:
        "Żaden. Plan żywieniowy układam z uwzględnieniem alergii, nietolerancji, diety wegetariańskiej lub wegańskiej i Twoich smaków. Jeśli masz chorobę wymagającą diety leczniczej, potrzebna będzie też opinia lekarza lub dietetyka klinicznego.",
    },
    {
      question: "Jak wygląda kontakt z Tobą?",
      // TODO [PLACEHOLDER] confirm app name, check-in frequency and reply times.
      answer:
        "Kontaktujemy się online, przez aplikację do prowadzenia podopiecznych. W stałych odstępach robimy check-iny, w których omawiamy postępy i poprawiamy plan, a na pytania między check-inami odpowiadam w dni robocze.",
    },
    {
      question: "Czy mogę zwrócić produkt cyfrowy?",
      answer:
        "Masz 14 dni na odstąpienie od umowy, ale tracisz to prawo, jeśli zgodzisz się na natychmiastowe pobranie pliku przed upływem tego terminu. Jeśli plik jest uszkodzony albo niezgodny z opisem, napisz do mnie – wymienię go lub zwrócę pieniądze.",
      link: { label: "Przeczytaj Regulamin", href: "/regulamin" },
    },
    {
      question: "Czy mogę zacząć, jeśli mam problemy zdrowotne albo jestem w ciąży?",
      answer:
        "Przed rozpoczęciem nowej diety lub treningu skonsultuj się z lekarzem – szczególnie jeśli jesteś w ciąży, karmisz piersią, przyjmujesz leki lub chorujesz przewlekle. W aplikacji zapytam o Twoje zdrowie, żeby dobrać bezpieczny plan.",
    },
  ] satisfies Faq[],
};

// ---------------------------------------------------------------------
// Final CTA + contact form
// ---------------------------------------------------------------------

export const finalCta = {
  title: "Jesteś gotowa na zmianę?",
  text: "Wypełnij krótką aplikację. Odezwę się do Ciebie, porozmawiamy o Twoim celu i sprawdzimy, czy możemy zacząć razem.",
  cta: applyCta,
  instagramText: "Wolisz najpierw mnie poznać? Na Instagramie dzielę się przepisami i wskazówkami treningowymi.",
};

export const contactForm = {
  title: "Masz pytanie? Napisz do mnie",
  intro: "Odpowiem mailowo najszybciej, jak to możliwe.",
  fields: {
    name: "Imię",
    email: "E-mail",
    message: "Wiadomość",
  },
  consent: {
    before:
      "Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na wiadomość, zgodnie z ",
    linkLabel: "Polityką prywatności",
    after: ".",
  },
  submit: "Wyślij wiadomość",
  sending: "Wysyłanie…",
  success: "Dziękuję! Wiadomość dotarła. Odpowiem najszybciej, jak to możliwe.",
  errors: {
    name: "Wpisz swoje imię.",
    email: "Wpisz poprawny adres e-mail, np. ania@przyklad.pl.",
    message: "Napisz wiadomość – co najmniej 10 znaków.",
    consent: "Zaznacz zgodę, żebym mogła odpowiedzieć na Twoją wiadomość.",
    tooLong: "Ten tekst jest za długi.",
    failed: "Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz na",
  },
  /** Shared by the form (maxLength) and the API route (validation). */
  limits: { name: 100, email: 254, message: 2000, messageMin: 10 },
};

// ---------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------

export const footer = {
  tagline: "Dieta i trening online szyte na miarę – dla kobiet w UK i w Polsce.",
  disclaimer:
    "Treści na tej stronie mają charakter informacyjny i nie są poradą medyczną. Przed rozpoczęciem diety lub treningu skonsultuj się z lekarzem. Rezultaty są indywidualne i zależą m.in. od stanu zdrowia, stylu życia i zaangażowania.",
  legalLinks: [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Regulamin", href: "/regulamin" },
  ] satisfies Link[],
};

// ---------------------------------------------------------------------
// Business & legal info (used by the legal pages and footer)
// ---------------------------------------------------------------------

export const business = {
  tradingName: site.name,
  // TODO [PLACEHOLDER] legal name: sole trader's full name or the Ltd company name.
  legalName: "Marta Sim",
  // TODO [PLACEHOLDER] e.g. "przedsiębiorca jednoosobowy (sole trader)" or "spółka Ltd, nr 12345678".
  legalForm: "przedsiębiorca jednoosobowy (sole trader) z siedzibą w Wielkiej Brytanii",
  // TODO [PLACEHOLDER] business/correspondence address shown in the legal pages.
  address: "[PLACEHOLDER] adres korespondencyjny, Wielka Brytania",
  email: site.email,
  // TODO [PLACEHOLDER] ICO data protection fee registration number (ico.org.uk).
  icoNumber: "[PLACEHOLDER] numer rejestracji w ICO",
  // TODO [PLACEHOLDER] VAT status, e.g. "Sprzedawca nie jest zarejestrowany jako podatnik VAT."
  vatNote: "[PLACEHOLDER] informacja o statusie VAT sprzedawcy.",
  // TODO [PLACEHOLDER] Payhip / Lemon Squeezy / Stripe, once chosen.
  paymentProvider: "operator płatności – [PLACEHOLDER] do potwierdzenia (np. Payhip, Lemon Squeezy lub Stripe)",
};

export type Processor = { name: string; purpose: string; location: string };

export const legal = {
  /** Shows a "template – needs review" box on both legal pages.
   *  Set to false once Marta (ideally with a lawyer) has approved the text. */
  isTemplate: true,
  lastUpdated: "30 października 2026",
  /** Data processors listed in the privacy policy. */
  processors: [
    {
      name: "Vercel Inc.",
      purpose: "hosting strony oraz anonimowe statystyki odwiedzin (Vercel Web Analytics, bez plików cookie)",
      location: "USA; serwery w UE i USA",
    },
    {
      name: "Resend",
      purpose: "wysyłka wiadomości z formularza kontaktowego na skrzynkę e-mail",
      location: "USA",
    },
    {
      name: "onlinecoaching.io",
      purpose: "formularz aplikacyjny i platforma do prowadzenia współpracy (plany, check-iny, wiadomości)",
      location: "[PLACEHOLDER] do potwierdzenia",
    },
    {
      name: "Operator płatności – do potwierdzenia",
      purpose: "obsługa płatności i dostarczanie produktów cyfrowych",
      location: "[PLACEHOLDER] do potwierdzenia",
    },
  ] satisfies Processor[],
  /** How long contact-form messages are kept. */
  contactRetention: "do 12 miesięcy od ostatniej wiadomości", // TODO [PLACEHOLDER] confirm
};

// ---------------------------------------------------------------------
// Demo page (/demo)
//
// An editorial redesign aimed only at women who want to lose weight and
// move more. Not indexed and not in the sitemap. It reuses the photos,
// steps, transformation, products and FAQ above, so edits there show up
// on both pages. Keep the November places/month accurate if it goes live.
// ---------------------------------------------------------------------

/** Line icons drawn in components/demo/EdIcons.tsx. */
export type DemoIcon =
  | "trend"
  | "energy"
  | "clock"
  | "loop"
  | "dumbbell"
  | "bowl"
  | "calendar"
  | "chat"
  | "cutlery";

export type DemoCard = { icon: DemoIcon; title: string; text: string };

export const demo = {
  meta: {
    title: "Otwieram 3 wolne miejsca na listopad",
    description:
      "Szukam 3 kobiet, które chcą schudnąć bez efektu jojo, ruszać się więcej i wejść w Nowy Rok jako najlepsza wersja siebie. Dieta i trening online szyte na miarę.",
  },
  nav: [
    { label: "Dla kogo", href: "#dla-kogo" },
    { label: "Co dostajesz", href: "#co-dostajesz" },
    { label: "Metamorfoza", href: "#metamorfoza" },
    { label: "Cennik", href: "#cennik" },
    { label: "FAQ", href: "#faq" },
  ] satisfies Link[],
  cta: { label: "Zarezerwuj swoje miejsce", href: site.applicationUrl } satisfies Link,
  ctaShort: "Zarezerwuj miejsce",
  /** Opens a DM to Marta on Instagram. */
  dm: {
    href: "https://ig.me/m/msfit_coaching_",
    before: "Wolisz napisać? Wyślij mi na Instagramie wiadomość z hasłem",
    keyword: "LISTOPAD",
  },

  hero: {
    status: "Otwieram 3 wolne miejsca na listopad",
    title: "Wejdź w Nowy Rok jako najlepsza wersja siebie.",
    lead: "Szukam 3 kobiet, które chcą schudnąć bez efektu jojo i ruszać się więcej. Dieta i trening online szyte na miarę – pod Twój grafik, Twoje smaki i Twoje cele.",
    secondary: { label: "Zobacz, co dostajesz", href: "#co-dostajesz" } satisfies Link,
    image: hero.image,
    caption: hero.imageCaption,
  },

  stats: [
    // TODO [PLACEHOLDER] confirm the "1000+" claim (also in hero.stats).
    { value: "1000+", label: "podopiecznych" },
    { value: "1:1", label: "plan szyty na miarę, nie z szablonu" },
    { value: "Online", label: "wsparcie w UK i w Polsce" },
  ],

  forYou: {
    title: "To jest dla Ciebie, jeśli…",
    intro: "Rozpoznajesz się w którymś z tych punktów? Dobrze trafiłaś.",
    items: [
      {
        icon: "trend",
        title: "Chcesz schudnąć na stałe",
        text: "I wreszcie utrzymać efekt – bez głodówek i bez efektu jojo.",
      },
      {
        icon: "energy",
        title: "Brakuje Ci energii",
        text: "Chcesz ruszać się więcej, ale nie wiesz, od czego zacząć.",
      },
      {
        icon: "clock",
        title: "Masz mało czasu",
        text: "Praca, dom i dzieci zajmują Ci cały dzień.",
      },
      {
        icon: "loop",
        title: "Próbowałaś już wielu diet",
        text: "I za każdym razem wracałaś do punktu wyjścia.",
      },
      {
        icon: "dumbbell",
        title: "Chcesz trenować po swojemu",
        text: "W domu albo na siłowni – w swoim tempie, ale z planem.",
      },
    ] satisfies DemoCard[],
    closing: {
      title: "Kiwasz głową?",
      text: "To miejsce czeka na Ciebie.",
    },
  },

  // Marta's own words, from her Instagram caption.
  statement: {
    lines: ["Nie musisz być idealna.", "Musisz po prostu zacząć."],
    author: site.coachName,
    role: "trenerka personalna online",
  },

  offer: {
    title: "Co dostajesz we współpracy 1:1",
    intro: "Wszystko szyte na miarę – pod Twoje ciało, Twój grafik i Twój talerz.",
    // The same items as offers[0].includes, each with a short description.
    benefits: [
      {
        icon: "bowl",
        title: "Indywidualny plan żywieniowy",
        text: "Bez zakazanych produktów – jesz to, co lubisz.",
      },
      {
        icon: "dumbbell",
        title: "Plan treningowy",
        text: "Na dom albo siłownię, dopasowany do Twojego poziomu.",
      },
      {
        icon: "calendar",
        title: "Regularne check-iny",
        text: "Sprawdzamy postępy i na bieżąco korygujemy plan.",
      },
      {
        icon: "chat",
        title: "Kontakt ze mną w aplikacji",
        text: "Pytania i gorsze dni omawiamy na bieżąco.",
      },
      {
        icon: "cutlery",
        title: "Jedzenie poza domem",
        text: "Wskazówki, jak jeść na mieście, w podróży i w święta.",
      },
    ] satisfies DemoCard[],
    note: "Cenę i długość współpracy ustalamy po konsultacji.",
    image: about.image,
  },

  steps: {
    title: "Jak to działa",
    intro: "Cztery kroki od pierwszej wiadomości do planu, który działa w Twoim życiu.",
    items: howIWork.steps,
  },

  transformation: {
    title: "Efekt konsekwencji, nie przypadku.",
    // Adapted from Marta's caption on the transformation post.
    text: "Bez magicznych sposobów i dróg na skróty. Za to z konsekwencją, cierpliwością i codziennymi wyborami, które z czasem dają niesamowite efekty.",
    item: transformations.items[0],
    caption: "Ta sama podopieczna, sylwetka z przodu.",
    note: transformations.note,
  },

  pricing: {
    title: "Wybierz swój start",
    intro: "Zacznij samodzielnie z gotowym planem albo pracuj ze mną 1:1.",
    products: products.items,
    buyLabel: products.buyLabel,
    coaching: {
      name: offers[0].title,
      label: "Ze mną, krok po kroku",
      badge: "Polecam",
      description: "Pełne prowadzenie: dieta, trening i stały kontakt ze mną.",
      price: "Indywidualnie",
      priceNote: "cenę ustalamy po konsultacji",
      features: [
        "Dieta i trening szyte na miarę",
        "Regularne check-iny i korekty planu",
        "Kontakt ze mną w aplikacji",
      ],
      cta: applyCta,
    },
  },

  faq: {
    title: "Pytania, które słyszę najczęściej",
    intro: "Nie ma tu odpowiedzi na Twoje pytanie? Napisz do mnie na Instagramie.",
    items: faq.items,
  },

  final: {
    title: "Jedno z 3 miejsc może być Twoje.",
    text: "Każdą podopieczną prowadzę osobiście, dlatego liczba miejsc w miesiącu jest ograniczona. Wypełnij krótką aplikację – odezwę się i porozmawiamy o Twoim celu.",
    image: hero.image,
  },

  backLink: { label: "Zobacz standardową wersję strony", href: "/" } satisfies Link,
};

// ---------------------------------------------------------------------
// Demo 2 (/demo-2)
//
// The same campaign content as `demo` above, redesigned to match Marta's
// "Otwieram 3 wolne miejsca na listopad" poster: black, hot pink and a
// heavy editorial serif. Only the poster-specific wording and the words
// shown in pink live here; everything else is read from `demo`.
// Not indexed and not in the sitemap.
// ---------------------------------------------------------------------

export const demo2 = {
  hero: {
    // One line each, as on the poster.
    lines: ["Otwieram", "3 wolne", "miejsca", "na listopad."],
    lead: "Poszukuję 3 kobiet, które chcą schudnąć bez efektu jojo, ruszać się więcej i wejść w Nowy Rok jako najlepsza wersja siebie.",
    dm: "Wyślij mi wiadomość z hasłem LISTOPAD, jeśli chcesz zarezerwować swoje miejsce.",
  },
  /** Phrases shown in hot pink, matched inside each section's copy.
   *  If the copy changes and a phrase no longer appears, it just shows white. */
  pink: {
    heroLines: ["3 wolne", "miejsca"],
    heroLead: ["3 kobiet", "najlepsza wersja siebie"],
    dm: ["LISTOPAD"],
    forYou: ["dla Ciebie"],
    forYouClosing: ["czeka na Ciebie"],
    statement: ["idealna", "zacząć"],
    offer: ["1:1"],
    steps: ["działa"],
    transformation: ["konsekwencji"],
    pricing: ["start"],
    faq: ["najczęściej"],
    final: ["3 miejsc"],
  },
  backLinks: [
    { label: "Standardowa wersja strony", href: "/" },
    { label: "Wersja edytorska (demo 1)", href: "/demo" },
  ] satisfies Link[],
};

// ---------------------------------------------------------------------
// Demo 3 (/demo-3)
//
// The main page's content and section order (everything above, from
// `hero` to `contactForm`) in the /demo-2 poster style. Only the poster
// line breaks and the words shown in pink live here.
// Not indexed and not in the sitemap.
// ---------------------------------------------------------------------

export const demo3 = {
  /** hero.title split into poster lines. Keep in sync with hero.title. */
  heroLines: ["Schudnij", "na dobre.", "Bez efektu", "jojo."],
  /** Phrases shown in hot pink, matched inside the main page's copy. */
  pink: {
    heroLines: ["Bez efektu", "jojo."],
    heroLead: ["szyte na miarę"],
    problem: ["aż za dobrze"],
    about: ["Marta"],
    howIWork: ["współpraca"],
    offer: ["1:1"],
    transformations: ["Metamorfozy"],
    testimonials: ["podopiecznych"],
    faq: ["pytania"],
    final: ["na zmianę?"],
  },
  /** Icons for the three problem points, in order. */
  problemIcons: ["loop", "clock", "energy"] satisfies DemoIcon[],
  backLinks: [
    { label: "Standardowa wersja strony", href: "/" },
    { label: "Wersja edytorska (demo 1)", href: "/demo" },
    { label: "Wersja plakatowa (demo 2)", href: "/demo-2" },
  ] satisfies Link[],
};

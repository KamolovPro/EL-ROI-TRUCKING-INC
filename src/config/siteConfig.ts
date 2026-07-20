// Site Configuration File
// Edit this file to update company information across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "EL ROI TRUCKING INC",
    tagline: "Family-run trucking from Southern California",
    description: "EL ROI TRUCKING is a family-run carrier based in Hesperia, California. We watch over every load from pickup to delivery — because your freight deserves more than a tracking number.",
  },

  // Contact Information
  contact: {
    phone: "(760) 623-9032",
    phoneRaw: "+17606239032",
    email: "dispatch@elroitrucking.com",
    dispatchEmail: "dispatch@elroitrucking.com",
    address: {
      street: "8450 G Ave Spc 19",
      city: "Hesperia",
      state: "CA",
      zip: "92345",
      country: "USA",
    },
  },

  // License Numbers
  licenses: {
    usdot: "4282525",
    mc: "1664987",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/#",
    linkedin: "https://linkedin.com/company/#",
    twitter: "https://twitter.com/#",
    instagram: "https://instagram.com/#",
  },

  // Working Hours
  workingHours: {
    weekdays: "Mon - Fri: 6:00 AM - 8:00 PM",
    weekend: "Sat: 7:00 AM - 3:00 PM · Sun: Closed",
    dispatch: "24/7 Dispatch Available",
  },

  // ===========================================
  // COLOR SCHEME CONFIGURATION
  // All values in HSL format: "hue saturation% lightness%"
  // Example: "162 60% 14%" = Deep Emerald Green
  // ===========================================
colors: {
    // Light Mode
    light: {
      // Основной цвет бренда - Глубокий изумрудно-зеленый
      primary: "162 60% 14%",
      primaryForeground: "0 0% 100%",

      // Акцентный цвет - Теплое золото
      accent: "40 95% 48%",
      accentForeground: "162 60% 10%",

      // Фон - Теплый почти белый
      background: "40 30% 98%",
      foreground: "162 40% 10%",

      // Карточки
      card: "0 0% 100%",
      cardForeground: "162 50% 12%",

      // Вторичные/Приглушенные тона (на базе зеленого)
      secondary: "160 18% 94%",
      secondaryForeground: "162 45% 16%",
      muted: "155 14% 91%",
      mutedForeground: "160 14% 40%",

      // Границы
      border: "155 16% 87%",
    },

    // Dark Mode
    dark: {
      // В темной теме основной акцент - золото
      primary: "40 95% 52%",
      primaryForeground: "162 60% 8%",

      // Акцент (кнопки, выделение)
      accent: "40 95% 52%",
      accentForeground: "162 60% 8%",

      // Фон - Очень темный зеленый (почти черный)
      background: "165 45% 6%",
      foreground: "40 20% 95%",

      // Карточки
      card: "163 40% 9%",
      cardForeground: "40 20% 95%",

      // Вторичные тона для темной темы
      secondary: "160 30% 13%",
      secondaryForeground: "40 15% 90%",
      muted: "160 25% 11%",
      mutedForeground: "150 10% 60%",

      // Границы
      border: "160 25% 16%",
    },
  },

  // Driver Benefits (for Drive With Us page)
  driverBenefits: [
    "Honest pay per mile, no games",
    "Bonuses for clean inspections",
    "Health, dental & vision plans",
    "401(k) retirement plan",
    "Paid vacation & holidays",
    "Well-kept, late-model trucks",
    "Company fuel card",
    "Direct deposit every week",
  ],

  // Services offered
  services: [
    {
      title: "Full Truckload (FTL)",
      description: "One truck, one load, one destination — direct delivery with no extra handling.",
    },
    {
      title: "Refrigerated Freight",
      description: "Temperature-controlled trailers for goods that can't take chances.",
    },
    {
      title: "Expedited Delivery",
      description: "When the clock matters, your load goes first — day or night.",
    },
    {
      title: "Regional & Long Haul",
      description: "From Southern California up the I-15 and coast to coast.",
    },
  ],

  // Stats for homepage
  stats: [
    { value: "100%", label: "Family Owned" },
    { value: "48", label: "States We Serve" },
    { value: "24/7", label: "Dispatch On Call" },
    { value: "99%", label: "On-Time Deliveries" },
  ],

  // FAQ items
  faq: [
    {
      question: "What makes EL ROI TRUCKING different?",
      answer: "We're a family-run company, small enough that every load gets personal attention and big enough to deliver anywhere in the continental US. When you call, you talk to someone who actually knows your shipment."
    },
    {
      question: "Where do you operate?",
      answer: "We're based in Hesperia, California, right on the I-15 corridor. From there we run regional routes across the Southwest and long-haul lanes to all 48 continental states."
    },
    {
      question: "What kind of freight do you haul?",
      answer: "Dry goods, refrigerated cargo, and time-critical expedited loads. If you're not sure whether your freight fits, call us — we'll give you a straight answer."
    },
    {
      question: "How does your dispatch work?",
      answer: "Our dispatch line is answered around the clock by a real person, not a phone tree. You'll always know where your load is and when it will arrive."
    },
    {
      question: "What do you look for in drivers?",
      answer: "A valid Class A CDL, a clean driving record, the ability to pass a DOT physical and drug screen, and a minimum age of 23. Just as important: people who take pride in doing the job right."
    },
    {
      question: "I'm a newer driver — can I still apply?",
      answer: "Yes. If you hold a valid CDL and have the right attitude, we'll pair you with experienced drivers and help you build safe miles with us."
    },
    {
      question: "How do I get a rate for my load?",
      answer: "Fill out the quote form or call us directly. Tell us the route, the freight, and the dates — we'll come back quickly with an honest rate and no hidden fees."
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

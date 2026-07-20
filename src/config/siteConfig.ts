// Site Configuration File
// Edit this file to update company information across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "EL ROI TRUCKING INC",
    tagline: "Dependable freight solutions across America",
    description: "We deliver reliable, efficient, and cost-effective trucking services with a personal touch — treating every load like it's our own.",
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
    weekdays: "Mon - Fri: 6:00 AM - 10:00 PM",
    weekend: "Sat - Sun: 8:00 AM - 6:00 PM",
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
    "Competitive pay per mile",
    "Clean inspection bonuses",
    "Health, dental & vision insurance",
    "401(k) retirement plan",
    "Paid vacation & holidays",
    "Modern equipment (newest trucks)",
    "Fuel card provided",
    "Direct deposit every Friday",
  ],

  // Services offered
  services: [
    {
      title: "Full Truckload (FTL)",
      description: "Dedicated truck for your shipment with direct delivery.",
    },
    {
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective shipping for smaller loads.",
    },
    {
      title: "Expedited Freight",
      description: "Time-critical deliveries with guaranteed transit times.",
    },
    {
      title: "Dedicated Trucking",
      description: "Consistent capacity with dedicated drivers and equipment.",
    },
  ],

  // Stats for homepage
  stats: [
    { value: "24/7", label: "Dispatch Support" },
    { value: "48", label: "States Covered" },
    { value: "99%", label: "On-Time Delivery" },
    { value: "100%", label: "Safety Commitment" },
  ],

  // FAQ items
  faq: [
    {
      question: "What incentives do you offer for drivers?",
      answer: "We provide bonuses to each driver for maintaining a clean inspection record, on-time delivery performance, and safe driving habits."
    },
    {
      question: "What kind of support do drivers receive?",
      answer: "Our dedicated dispatch team is available 24/7 to assist with any inquiries or issues. We provide real-time support to ensure your operations run smoothly."
    },
    {
      question: "What types of trucks are in the EL ROI TRUCKING fleet?",
      answer: "Our fleet consists of modern, well-maintained trucks including dry vans, refrigerated trailers, and flatbeds. All trucks are equipped with the latest safety and tracking technology."
    },
    {
      question: "What discounts are available for owner-operators?",
      answer: "We offer competitive fuel discounts, maintenance program discounts, and insurance rate benefits for our owner-operators."
    },
    {
      question: "What are the qualifications required for hiring drivers?",
      answer: "We require a valid Class A CDL, clean driving record, ability to pass DOT physical and drug screen, and must be at least 23 years old."
    },
    {
      question: "What if a driver lacks experience?",
      answer: "We welcome new drivers! While experience is preferred, we offer training programs for drivers with valid CDL who are eager to learn and grow with our company."
    },
    {
      question: "What types of loads do you handle?",
      answer: "We handle a wide variety of freight including dry goods, refrigerated cargo, oversized loads, and specialized shipments across all 48 continental states."
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

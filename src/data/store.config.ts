export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export const store = {
  name: "Sartorial Atelier",
  shortName: "Sartorial",
  tagline: "Erise",
  city: "Ahmedabad",
  state: "Gujarat",
  placeLine: "Ahmedabad, Gujarat",
  promise: "Tailored for work. Made for celebrations.",
  whatsappNumber: "919879000000",
  phone: "+91 98790 00000",
  email: "concierge@sartorial-erise.in",
  address: {
    line1: "Shop 3, Silver Arcade",
    line2: "Station Road",
    city: "Ahmedabad",
    state: "Gujarat",
    postcode: "380001",
    country: "India",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:30 am – 8:30 pm" },
    { days: "Sunday", time: "11:00 am – 6:00 pm" },
  ],
  announcements: [
    "VISIT OUR ATELIER IN AHMEDABAD",
    "ORDER EASILY ON WHATSAPP",
    "COMPLIMENTARY ALTERATIONS IN STORE"
  ],
  marqueeItems: [
    "OFFICE CASUALS",
    "KURTA PAJAMA",
    "AHMEDABAD, GUJARAT",
    "EASY ORDERING ON WHATSAPP",
    "HONEST FABRICS",
    "FITS YOU PROPERLY",
    "BESPOKE SUITING",
    "HAND-FINISHED DETAILS"
  ],
  testimonials: [
    {
      id: "t-1",
      quote: "The half-canvas blazer feels weightless yet structured. After a full day of meetings and flights, the drape remained immaculate.",
      author: "Vikramaditya Shah",
      role: "Managing Director",
      location: "Ahmedabad",
      rating: 5
    },
    {
      id: "t-2",
      quote: "Ordered my wedding reception bandhgala and kurta set over WhatsApp with custom measurements. The fit was sharper than Savile Row.",
      author: "Karan Patel",
      role: "Architect & Designer",
      location: "Vadodara",
      rating: 5
    },
    {
      id: "t-3",
      quote: "A true old-school atelier experience in modern clothes. They did three rounds of cuff alterations with zero fuss until it draped like a glove.",
      author: "Dr. Anirudh Mehta",
      role: "Cardiothoracic Surgeon",
      location: "Ahmedabad",
      rating: 5
    }
  ],
  pricingTiers: [
    {
      id: "p-rtw",
      name: "Ready-to-Wear Rail",
      subtitle: "Everyday luxury office casuals and refined staples",
      price: "₹3,490",
      period: "starting from",
      popular: false,
      features: [
        "100% Normandy linen & long-staple cotton",
        "Classic European cuts & comfort collars",
        "Complimentary sleeve & hem adjustments",
        "Direct doorstep delivery or in-store pickup",
        "WhatsApp concierge re-ordering"
      ],
      ctaText: "Explore Collection"
    },
    {
      id: "p-mtm",
      name: "Made-to-Measure Suiting",
      subtitle: "Half-canvas & full-canvas jackets, trousers and blazers",
      price: "₹12,500",
      period: "per two-piece suit",
      popular: true,
      features: [
        "Premium Italian & Australian Merino wools",
        "Individual 28-point bespoke pattern cutting",
        "Choice of horn buttons, pick stitching & linings",
        "Two in-person or virtual basted fittings",
        "Lifetime complimentary seam adjustments"
      ],
      ctaText: "Book Tailor Consultation"
    },
    {
      id: "p-bridal",
      name: "Festive & Wedding Couture",
      subtitle: "Handcrafted kurta sets, sherwanis and bandhgalas",
      price: "₹18,900",
      period: "starting from",
      popular: false,
      features: [
        "Handspun Mulberry silk, Chanderi & raw silks",
        "Tonal zari & thread hand-embroidery by master artisans",
        "Custom dyed matching trousers & silk pocket squares",
        "Atelier styling session with our master tailor",
        "Express priority crafting for wedding dates"
      ],
      ctaText: "Consult Wedding Stylist"
    }
  ],
  copyrightYear: 2026,
};

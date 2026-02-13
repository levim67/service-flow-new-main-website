import { NavItem, PricingTier, FaqItem, CaseStudy } from './types';

export const BOOKING_URL = "https://cal.com/service-flow-orxqj5/15min";
export const AUDIT_URL = "https://forms.gle/Q24kBvzR1WipPBhH8";
export const CONTACT_EMAIL = "sfscaling@gmail.com";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

export const INDUSTRIES = [
  "Pressure Washing",
  "Roofing",
  "Landscaping",
  "Auto Detailing",
  "Home Cleaning",
  "Gyms & Fitness",
  "Med Spas",
  "HVAC"
];

export const SERVICES_LIST = [
  {
    title: "Facebook Ads",
    desc: "Target homeowners based on location, interests, and demographics.",
    outcome: "Built to generate consistent quote requests."
  },
  {
    title: "Instagram Ads",
    desc: "Showcase before/after results with visual Reels and Stories to build trust.",
    outcome: "Built to increase engagement and inquiries."
  },
  {
    title: "Website Builds",
    desc: "Fast, mobile-first service pages designed specifically for local businesses.",
    outcome: "Built to convert traffic into calls and form fills."
  }
];

export const DELIVERABLES = [
  {
    title: "12 Reels-Style Ads",
    desc: "We produce 12 video ad variations per month (3 per week) to prevent ad fatigue."
  },
  {
    title: "Meta Ads Management",
    desc: "Full campaign setup on Facebook & Instagram, audience targeting, and daily bid management."
  },
  {
    title: "High-Intent Forms",
    desc: "Custom lead forms that filter out low-quality inquiries before you pay."
  },
  {
    title: "Follow-Up Systems",
    desc: "Proven text and call scripts to help you convert leads into booked jobs."
  },
  {
    title: "Weekly Optimization",
    desc: "We kill losing ads and scale winning ads every single week."
  }
];

export const WEBSITE_DELIVERABLES = [
  {
    title: "Mobile-First Design",
    desc: "Over 80% of local searches happen on phones. We build sites that work perfectly on mobile."
  },
  {
    title: "Speed & SEO Basics",
    desc: "Lightweight pages that load instantly and follow Google's best practices."
  },
  {
    title: "Clear Call-to-Actions",
    desc: "Prominent 'Call Now' buttons and simple quote forms to maximize conversions."
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,200",
    features: [
      "1 Campaign (FB or IG)",
      "6 Creative Variations/mo",
      "Weekly Reporting",
      "Email Support",
      "Self-Managed Follow-up"
    ],
    cta: "Book Discovery Call"
  },
  {
    name: "Growth",
    price: "$2,000",
    highlight: true,
    features: [
      "2 Campaigns (FB + IG)",
      "12 Creative Variations/mo",
      "Weekly Reporting",
      "Priority Email & Slack",
      "Follow-up Script Templates",
      "CRM Integration Setup"
    ],
    cta: "Book Discovery Call"
  },
  {
    name: "Scale",
    price: "$3,500",
    features: [
      "4 Campaigns",
      "Unlimited Creative Testing",
      "Bi-Weekly Strategy Calls",
      "Slack Support",
      "Full CRM Buildout",
      "Sales Call Review"
    ],
    cta: "Book Discovery Call"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How soon will I see leads?",
    answer: "Typically within 48-72 hours of launching the ads. Our setup process takes about 3-5 days."
  },
  {
    question: "Do I need a website?",
    answer: "No, we can use Meta's native Lead Forms. However, if you need a website to build long-term trust, we can build a high-converting one for you."
  },
  {
    question: "What ad spend do you recommend?",
    answer: "We recommend starting with at least $30-$50/day (approx. $1,000/mo) paid directly to Facebook/Meta."
  },
  {
    question: "What makes leads 'high intent'?",
    answer: "We add friction intentionally. We ask specific qualifying questions (e.g., 'When are you looking to start?') to filter out window shoppers."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "Pressure Washing",
    location: "Southeast Metro Area",
    offer: "Spring Driveway + Sidewalk Bundle",
    angles: ["Satisfying 'before/after' visual", "Homeowner pride/curb appeal", "Limited time seasonal offer"],
    delivered: ["12 Video Reels", "Instant Form Setup", "SMS Automation Script"],
    tag: "Example Build"
  },
  {
    industry: "Landscaping",
    location: "Suburban Residential Area",
    offer: "New Website Launch",
    angles: ["Mobile-first design", "Fast load speeds", "Clear 'Get Quote' buttons"],
    delivered: ["5-Page WordPress Site", "Google Maps Embed", "Contact Form Integration"],
    tag: "Spec Example"
  },
  {
    industry: "Roofing",
    location: "Midwest Suburbs",
    offer: "Free Storm Damage Inspection",
    angles: ["Neighbor awareness", "Educational 'signs of damage'", "Insurance claim assistance"],
    delivered: ["Static & Video Ads", "Pre-qualifying Quiz", "Calendar Booking Integration"],
    tag: "Spec Example"
  }
];
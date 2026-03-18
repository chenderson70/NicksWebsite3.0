import { publicAsset } from "@/lib/utils";

const defaultSiteUrl = "http://localhost:3000";

export const BRAND = {
  name: "Loneless Wolf",
  statement: "You are not alone in being a working optimist leaning on faith.",
  motto: "Fear is not an option when you're prepared.",
  identity:
    "Professional athlete, mental performance and culture enhancer coach, and mentor.",
} as const;

export const SITE = {
  name: "Nick Parks | Loneless Wolf",
  title: "Nick Parks | Loneless Wolf | Professional Athlete, Mental Performance Coach & Speaker",
  description:
    "Loneless Wolf - You are not alone. Professional athlete, mental performance and culture enhancer coach, and mentor. Fear is not an option when you're prepared.",
  url: process.env.APP_URL || defaultSiteUrl,
  ogImage: publicAsset("/images/LoneWolf.JPG"),
  email: "nparks@lonelesswolf.com",
  phone: "678-468-1604",
  location: "Atlanta, Georgia",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Contact", href: "/contact" },
] as const;

export const INITIATIVE_LINKS = [
  {
    label: "Services",
    href: "/services",
    description: "Loneless Wolf speaking, coaching, and development options for teams, leaders, and organizations.",
  },
  {
    label: "Mission",
    href: "/mission",
    description: "The convictions, roadmap, and Loneless Wolf purpose behind Nick's work.",
  },
  {
    label: "Trusted By",
    href: "/testimonials",
    description: "Organizations, leaders, and testimonials that reflect trust earned over time.",
  },
  {
    label: "Coming Soon",
    href: "/coming-soon",
    description: "Upcoming Loneless Wolf content, tools, and new ways to go deeper with the message.",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Short reads on preparation, resilience, leadership, athletics, and faith.",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/lonelesswolf",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-parks-42768990",
    icon: "linkedin",
  },
] as const;

export const CLIENTS = [
  { name: "McDonald's", logo: publicAsset("/images/logos/Mcdonals-Logo.png"), logoScale: 1.15 },
  { name: "Eric Thomas", logo: publicAsset("/images/logos/ericthomas.webp"), logoScale: 1.1 },
  { name: "Montverde Academy", logo: publicAsset("/images/logos/montverde.jpg"), logoScale: 1.3 },
  { name: "Hillgrove High School", logo: publicAsset("/images/logos/hillgrove.jpg"), logoScale: 1.16 },
  { name: "Urban League of Greater Atlanta", logo: publicAsset("/images/logos/Urbanleague.webp"), logoScale: 1.18 },
  { name: "House of Highlights", logo: publicAsset("/images/logos/houseofhighlights.webp"), logoScale: 1.12 },
  { name: "Slamball", logo: publicAsset("/images/logos/slamball.jpg"), logoScale: 1.1 },
  { name: "Cherokee County", logo: publicAsset("/images/logos/cherokee.png"), logoScale: 1.08 },
  { name: "Purdue University", logo: publicAsset("/images/logos/purdue.png"), logoScale: 1.18 },
  { name: "Word of Faith", logo: publicAsset("/images/logos/wordoffaith.png"), logoScale: 1.1 },
  {
    name: "Shaquille O'Neal Boys & Girls Club",
    logo: publicAsset("/images/logos/shaqboysandgirlsclub.png"),
    logoScale: 1.08,
  },
  {
    name: "Warrick Dunn Family Foundation",
    logo: publicAsset("/images/logos/warrickdunncharity.jpg"),
    logoScale: 1.14,
  },
] as const;

export const BOOKING_TYPES = [
  {
    title: "Keynote\nSpeaking",
    icon: "microphone",
    type: "keynote",
  },
  {
    title: "Team and Culture\nDevelopment",
    icon: "users",
    type: "coaching",
  },
  {
    title: "Mentorship and\nStrategy",
    icon: "podcast",
    type: "meeting",
  },
] as const;

export const HOMEPAGE_STATS = [
  { value: "15x", label: "All-American honors" },
  { value: "50+", label: "Speaking events and leadership rooms" },
  { value: "54 yr", label: "School record shattered at Purdue" },
] as const;

export const BLOG_CATEGORIES = ["All", "Mindset", "Leadership", "Athletics", "Faith"] as const;

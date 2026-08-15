export const site = {
  brand: "Meridian",
  legalName: "Meridian Home Care LLC",
  tagline: "Cleaning, reimagined.",
  phone: "(312) 555-0148",
  phoneHref: "tel:+13125550148",
  email: "hello@meridianhome.co",
  address: {
    street: "1104 W Fulton Market",
    city: "Chicago",
    region: "IL",
    postalCode: "60607",
    country: "US",
  },
  license: "IL license #CL-114862",
  insurance: "Bonded & insured to $2M",
  founded: 2014,
  hours: "7am – 9pm, seven days",
  rating: { value: 4.9, count: 2417 },
  url: "https://meridianhome.co",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerCols = [
  {
    title: "Services",
    links: [
      { label: "House cleaning", href: "/services/house-cleaning" },
      { label: "Deep cleaning", href: "/services/deep-cleaning" },
      { label: "Move-in clean", href: "/services/move-in-clean" },
      { label: "Move-out clean", href: "/services/move-out-clean" },
      { label: "Airbnb turnover", href: "/services/airbnb-turnover" },
      { label: "Commercial contract", href: "/services/commercial-contract" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Meridian", href: "/about" },
      { label: "Careers — we hire", href: "/careers" },
      { label: "Service areas", href: "/areas" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

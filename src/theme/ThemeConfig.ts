export const ThemeConfig = {
  primary: "#D4AF37",
  background: "#FFFFFF",
  text: "#2B2B2B",
  secondary: "#F7F7F8",
  accent: "#6B7280",
  muted: "#9CA3AF",
  border: "#E5E7EB",
  card: "#FAFAFA",
} as const;

export const SiteConfig = {
  salonName: "Lumière Hair Studio",
  city: "Austin, TX",
  phone: "(512) 555-0188",
  phoneHref: "tel:+15125550188",
  email: "hello@lumierehair.com",
  address: "210 W 6th Street, Austin, TX 78701",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.679!2d-97.7466!3d30.2682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzA1LjUiTiA5N8KwNDQnNDcuOCJX!5e0!3m2!1sen!2sus!4v1700000000000",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

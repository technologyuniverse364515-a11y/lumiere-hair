import haircut from "@/assets/service-haircut.jpg";
import styling from "@/assets/service-styling.jpg";
import coloring from "@/assets/service-coloring.jpg";
import grooming from "@/assets/service-grooming.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  items: { name: string; description: string; price: string }[];
};

export const ServiceCategories: ServiceCategory[] = [
  {
    id: "haircut",
    name: "Haircuts",
    description: "Precision cuts tailored to your face shape and lifestyle.",
    image: haircut,
    items: [
      { name: "Women's Haircut & Style", description: "Consultation, shampoo, cut, and finish.", price: "$75+" },
      { name: "Men's Haircut", description: "Classic or modern cut with hot towel finish.", price: "$45+" },
      { name: "Kids' Cut (12 & under)", description: "Friendly, quick, and stress-free.", price: "$30" },
      { name: "Bang Trim", description: "Quick refresh between visits.", price: "$15" },
    ],
  },
  {
    id: "styling",
    name: "Styling",
    description: "From everyday blowouts to special occasion looks.",
    image: styling,
    items: [
      { name: "Signature Blowout", description: "Smooth, voluminous finish.", price: "$55" },
      { name: "Special Occasion Updo", description: "Weddings, galas, and events.", price: "$95+" },
      { name: "Bridal Trial + Day Of", description: "Includes consultation and run-through.", price: "$250+" },
      { name: "Curl Set", description: "Hot tools for soft, lasting curls.", price: "$65" },
    ],
  },
  {
    id: "coloring",
    name: "Color",
    description: "Dimensional color crafted by certified colorists.",
    image: coloring,
    items: [
      { name: "Single Process Color", description: "Root to tip refresh.", price: "$95+" },
      { name: "Partial Highlights", description: "Face-framing dimension.", price: "$140+" },
      { name: "Full Balayage", description: "Hand-painted, sun-kissed look.", price: "$220+" },
      { name: "Color Correction", description: "Custom quote after consultation.", price: "From $250" },
    ],
  },
  {
    id: "grooming",
    name: "Men's Grooming",
    description: "Sharp lines, clean fades, and beard care.",
    image: grooming,
    items: [
      { name: "Beard Trim & Shape", description: "Includes hot towel.", price: "$30" },
      { name: "Cut + Beard Combo", description: "Full grooming experience.", price: "$70" },
      { name: "Straight-Razor Shave", description: "Traditional hot lather shave.", price: "$45" },
      { name: "Gray Blending", description: "Subtle, natural-looking color.", price: "$55" },
    ],
  },
];

export const GalleryImages = [
  { src: g1, alt: "Long blonde balayage hair styled with soft waves" },
  { src: g2, alt: "Sleek brunette bob with bangs" },
  { src: g3, alt: "Men's modern fade haircut with styled beard" },
  { src: g4, alt: "Vibrant copper red curls" },
  { src: g5, alt: "Bridal updo with delicate flowers" },
  { src: g6, alt: "Defined natural curls styled volumized" },
];

export const Testimonials = [
  {
    name: "Jessica M.",
    rating: 5,
    text: "Best balayage I've ever had. Isabella took the time to understand exactly what I wanted and absolutely delivered. The salon itself is gorgeous — I feel pampered every visit.",
    service: "Balayage",
  },
  {
    name: "Marcus T.",
    rating: 5,
    text: "Found my forever barber. Clean fade every single time, and the hot towel shave is unmatched. Easy booking and never a long wait.",
    service: "Cut + Beard",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "I came in with damaged box-dyed hair and walked out with the most beautiful, healthy color. The team is genuinely kind and incredibly skilled.",
    service: "Color Correction",
  },
  {
    name: "Hannah L.",
    rating: 5,
    text: "Did my bridal trial here and immediately booked them for my wedding. Stunning updo that lasted all night. Worth every penny.",
    service: "Bridal Updo",
  },
  {
    name: "Daniel R.",
    rating: 5,
    text: "Modern, clean, and the stylists actually listen. My wife and I both go here now — that says it all.",
    service: "Haircut",
  },
  {
    name: "Olivia K.",
    rating: 5,
    text: "I've been going to Lumière for over three years. Consistent quality, warm atmosphere, and they always remember the little details.",
    service: "Cut & Color",
  },
];

export const WhyChooseUs = [
  {
    title: "Award-Winning Stylists",
    description: "Trained at Vidal Sassoon, Redken, and Aveda academies.",
    icon: "Award",
  },
  {
    title: "Premium Products Only",
    description: "We use Olaplex, Kerastase, and Davines on every guest.",
    icon: "Sparkles",
  },
  {
    title: "Transparent Pricing",
    description: "No surprises — clear pricing, complimentary consultations.",
    icon: "BadgeCheck",
  },
  {
    title: "5-Star Experience",
    description: "300+ five-star reviews from happy guests across Austin.",
    icon: "Star",
  },
];

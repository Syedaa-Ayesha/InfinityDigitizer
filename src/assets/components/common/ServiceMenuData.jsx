import {
  Flower2,
  ScanSearch,
  Gem,
} from "lucide-react";

export const serviceMenuData = [
  {
    id: 1,
    slug: "embroidery-digitizing",
    icon: Flower2,
    title: "Embroidery Digitizing",
    description:
      "Convert your artwork into production-ready embroidery files for perfect stitching on any fabric.",
   

    features: [
      "DST, PES, EXP & more",
      "Fast 4–24 Hour Turnaround",
      "100% Manual Digitizing",
      "Unlimited Revisions",
      "Money Back Guarantee",
    ],

    button: "Get Quote Now",
    learnMore: "/services/embroidery-digitizing",
    quoteLink: "/quote",
  },

  {
    id: 2,
    slug: "vector-tracing",
    icon: ScanSearch,
    title: "Vector Tracing",
    description:
      "Convert low-resolution images into clean, scalable vector files for print, web and branding.",
    //   image: vectorImg,

    features: [
      "AI, EPS, SVG, PDF, PNG",
      "100% Manual Tracing",
      "Print Ready Files",
      "High Quality Output",
      "Unlimited Revisions",
    ],

    button: "Get Quote Now",
    learnMore: "/services/vector-tracing",
    quoteLink: "/quote",
  },

  {
    id: 3,
    slug: "logo-designing",
    icon: Gem,
    title: "Logo Designing",
    description:
      "We create modern, unique and professional logos that make your brand stand out.",

    features: [
      "Unique & Creative Concepts",
      "Unlimited Revisions",
      "Source Files Included",
      "High Resolution Files",
      "100% Satisfaction",
    ],

    button: "Get Quote Now",
    learnMore: "/services/logo-designing",
    quoteLink: "/quote",
  },
];
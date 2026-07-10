import {
  Flower2,
  PenTool,
  Gem,
} from "lucide-react";

// Images
import embroideryImg from "../../images/GIRL & SKULL  1.png";
import vectorImg from "../../images/846 2 1.png";
import logoImg from "../../images/12 inches wide 1.png";

export const MegaMenuData = [
  {
    id: 1,

    icon: Flower2,

    title: "Embroidery Digitizing",

    description:
      "Convert your artwork into production-ready embroidery files for perfect stitching on any fabric.",

    features: [
      "DST, PES, JEF, EXP & more",
      "Fast 4 – 24 Hour Turnaround",
      "100% Manual Digitizing",
      "Unlimited Revisions",
      "Money Back Guarantee",
    ],

    image: embroideryImg,

    buttonText: "Get Quote Now",

    linkText: "Learn More",
  },

  {
    id: 2,

    icon: PenTool,

    title: "Vector Tracing",

    description:
      "Convert low-resolution images into clean, scalable vector files for print, web and branding.",

    features: [
      "AI, EPS, SVG, PDF, PNG",
      "100% Manual Tracing",
      "Print Ready Files",
      "High Quality Output",
      "Unlimited Revisions",
    ],

    image: vectorImg,

    buttonText: "Get Quote Now",

    linkText: "Learn More",
  },

  {
    id: 3,

    icon: Gem,

    title: "Logo Designing",

    description:
      "We create modern, unique and professional logos that make your brand stand out from the crowd.",

    features: [
      "Unique & Creative Concepts",
      "Unlimited Revisions",
      "Source Files Included",
      "High Resolution Files",
      "100% Satisfaction",
    ],

    image: logoImg,

    buttonText: "Get Quote Now",

    linkText: "Learn More",
  },
];
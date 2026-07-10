import {
  Clock,
  ShieldCheck,
  RefreshCw,
  CircleDollarSign,
  File,
} from "lucide-react";

import img1 from "../../images/ServiceHeroImage01.png";
import img2 from "../../images/ServiceHeroImage02.png";
import img3 from "../../images/ServiceHeroImage03.png";

export const serviceHeroData = [
  {
    id: 1,

    title: "Custom Embroidery Digitizing Services",

    description:
      "Get all types of custom embroidery digitizing services under one roof, with quality you can trust.",

    image: img1,

    services: [
      {
        title: "Detailed Stitch Mapping",
        Icon: Clock,
      },
      {
        title: "Machine Ready Designs",
        Icon: ShieldCheck,
      },
      {
        title: "Flawless Stitch Quality",
        Icon: File,
      },
      {
        title: "Manual Digitizing",
        Icon: RefreshCw,
      },
      {
        title: "All Embroidery Formats",
        Icon: CircleDollarSign,
      },
    ],
  },

  {
    id: 2,

    title: "Vector Tracing Services",

    description:
      "Professional vector conversion for print-ready artwork with unlimited revisions.",

    image: img2,

    services: [
      {
        title: "AI & EPS Files",
        Icon: Clock,
      },
      {
        title: "Manual Tracing",
        Icon: ShieldCheck,
      },
      {
        title: "Print Ready",
        Icon: File,
      },
      {
        title: "Unlimited Revisions",
        Icon: RefreshCw,
      },
      {
        title: "Fast Delivery",
        Icon: CircleDollarSign,
      },
    ],
  },

  {
    id: 3,

    title: "Logo Designing Services",

    description:
      "Professional logo design that builds trust and strengthens your brand identity.",

    image: img3,

    services: [
      {
        title: "Unique Concepts",
        Icon: Clock,
      },
      {
        title: "Brand Identity",
        Icon: ShieldCheck,
      },
      {
        title: "Source Files",
        Icon: File,
      },
      {
        title: "Unlimited Revisions",
        Icon: RefreshCw,
      },
      {
        title: "Commercial License",
        Icon: CircleDollarSign,
      },
    ],
  },
];
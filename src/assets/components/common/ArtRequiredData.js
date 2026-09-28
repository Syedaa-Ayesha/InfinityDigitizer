import {
  Image,
  FileText,
  Hash,
  Palette,
  MessageSquare,
  Zap,
  Headphones,
  ShieldCheck,
  PenTool,
  Shirt,
  PenLine,
} from "lucide-react";

export const artRequiredData = {
  /* =====================================================
     PAGE HERO
  ===================================================== */
  hero: {
    badge: "ART REQUIREMENTS",
    title: "Send Us the Right Artwork",
    description:
      "Clear and complete artwork helps us deliver accurate, high-quality results faster.",
  },

  /* =====================================================
     HERO HIGHLIGHTS
  ===================================================== */
  highlights: [
    {
      id: 1,
      title: "Faster Processing",
      description: "Get your files ready and save time.",
      Icon: Zap,
    },
    {
      id: 2,
      title: "Need Help?",
      description: "Our team is here to guide you.",
      Icon: Headphones,
    },
    {
      id: 3,
      title: "Better Results",
      description: "High-quality artwork means better output.",
      Icon: ShieldCheck,
    },
  ],

  /* =====================================================
     GENERAL REQUIREMENTS
  ===================================================== */
  generalRequirements: {
    title: "General Requirements",
    description:
      "These guidelines apply to all types of orders (embroidery digitizing, vector tracing, and logo design).",

    items: [
      {
        id: 1,
        title: "Clear & High-Quality",
        description:
          "Provide a clear, high-resolution image. Avoid blurry, pixelated or low-quality files.",
        Icon: Image,
      },

      {
        id: 2,
        title: "Original File (if available)",
        description:
          "If you have the original file (AI, EPS, PDF, etc.), please share it.",
        Icon: FileText,
      },

      {
        id: 3,
        title: "Specify Size",
        description:
          "Let us know the required size (width × height) or placement (e.g. left chest).",
        Icon: Hash,
      },

      {
        id: 4,
        title: "Color Information",
        description:
          "Mention desired colors (Pantone, thread colors, or color preferences).",
        Icon: Palette,
      },

      {
        id: 5,
        title: "Special Instructions",
        description:
          "Share any specific details, effects, or references you want us to follow.",
        Icon: MessageSquare,
      },
    ],
  },

  /* =====================================================
     LARGE REQUIREMENT CARDS
  ===================================================== */
  requirementSections: [
    /* ===================================================
       EMBROIDERY
    =================================================== */
    {
      id: 1,
      type: "embroidery",

      title: "Embroidery Digitizing Requirements",

      subtitle:
        "To create the best embroidery files, please provide:",

      /* BLUE THEME */
      theme: {
        iconGradient:
          "linear-gradient(135deg, #4F7CF7 0%, #2F5CC8 100%)",

        bulletColor: "#3D6FE0",

        acceptedBg: "#EDF3FF",
        acceptedColor: "#3D6FE0",
        acceptedBorder: "#D8E4FF",
      },

      bullets: [
        {
          id: 1,
          text: "Clear image or original artwork",
          note: "(JPG, PNG, PDF, AI, etc.)",
        },

        {
          id: 2,
          text: "Desired size and placement",
          note: "(e.g. left chest, cap front, jacket back)",
        },

        {
          id: 3,
          text: "Color preferences",
          note: '(or mention "match the image")',
        },

        {
          id: 4,
          text: "Fabric type",
          note: "(if known)",
        },

        {
          id: 5,
          text: "Any special effects",
          note: "(3D puff, appliqué, chenille, etc.)",
        },

        {
          id: 6,
          text: "Reference image",
          note: "(if available)",
        },
      ],

      acceptedFormats: {
        title: "Accepted File Formats",
        description:
          "JPG, PNG, PDF, AI, EPS, SVG (or any clear image)",
      },

      Icon: Shirt,
      image: null,
    },

    /* ===================================================
       VECTOR
    =================================================== */
    {
      id: 2,
      type: "vector",

      title: "Vector Art Requirements",

      subtitle:
        "For the best vector tracing results, please provide:",

      /* GREEN THEME */
      theme: {
        iconGradient:
          "linear-gradient(135deg, #2C9653 0%, #206F54 100%)",

        bulletColor: "#2C9653",

        acceptedBg: "#EAF7EE",
        acceptedColor: "#2C9653",
        acceptedBorder: "#D5EEDC",
      },

      bullets: [
        {
          id: 1,
          text: "Clear, high-resolution image or original file",
          note: "",
        },

        {
          id: 2,
          text: "Mention the final usage (print, DTF, engraving, laser cutting, etc.)",
          note: "(width × height)",
        },

        {
          id: 3,
          text: "Required file format",
          note: " (AI, EPS, SVG, PDF, etc.)",
        },

        {
          id: 4,
          text: "Pantone or color details",
          note: " (if needed)",
        },

        {
          id: 5,
          text: "Any text that needs to be",
          note: " editable",
        },

        {
          id: 6,
          text: "Reference or sample",
          note: "(if available)",
        },
      ],

      acceptedFormats: {
        title: "Accepted File Formats",
        description:
          "JPG, PNG, PDF, AI, EPS, SVG (or any clear image)",
      },

      Icon: PenTool,
      image: null,
    },

    /* ===================================================
       LOGO
    =================================================== */
    {
      id: 3,
      type: "logo",

      title: "Logo Design Requirements",

      subtitle:
        "To design a logo that matches your vision, please share:",

      /* ORANGE THEME */
      theme: {
        iconGradient:
          "linear-gradient(135deg, #F59E0B 0%, #E76A14 100%)",

        bulletColor: "#E67E22",

        acceptedBg: "#FFF3E8",
        acceptedColor: "#E67E22",
        acceptedBorder: "#F9DFC5",
      },

      bullets: [
        {
          id: 1,
          text: "Business or brand name",
          note: "",
        },

        {
          id: 2,
          text: "Logo style or reference",
          note: "(if available)",
        },

        {
          id: 3,
          text: "Color preferences ",
          note: "(or leave it to our suggestion)",
        },

        {
          id: 4,
          text: "Any tagline or slogan ",
          note: "(if applicable)",
        },

        {
          id: 5,
          text: "Reference logos or inspiration",
          note: "(website, print, embroidery, etc.)",
        },

        {
          id: 6,
          text: "Specific ideas, symbols, or elements you want to include",
          note: "",
        },
      ],

      acceptedFormats: {
        title: "Accepted File Formats",
        description:
          "JPG, PNG, PDF, AI, EPS, etc.",
      },

      Icon: PenLine,
      image: null,
    },
  ],
};
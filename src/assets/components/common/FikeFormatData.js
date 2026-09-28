import DST from "../../icons/DST.png"
import PES from "../../icons/PES.png"
import EXP from "../../icons/EXP.png"
import JEF from "../../icons/JEF.png"
import VP3 from "../../icons/VP3.png"
import XXX from "../../icons/XXX.png"
import EMB from "../../icons/EMB.png"
import HUS from "../../icons/HUS.png"
import PCS from "../../icons/PCS.png"
import SEW from "../../icons/SEW.png"
import AI from "../../icons/DST.png"
import EPS from "../../icons/EPS.png"
import SVG from "../../icons/SVG.png"
import PDF from "../../icons/PDF.png"
import CDR from "../../icons/CDR.png"
import JPG from "../../icons/JPG.png"
import PNG from "../../icons/PNG.png"
import TIFF from "../../icons/TIFF.png"
import BMP from "../../icons/BMP.png"
import GIF from "../../icons/GIF.png"
export const fileFormatData = {
  /* =========================================
     PAGE HERO
  ========================================= */

  hero: {
    badge: "FILE FORMATS",
    title: "File Formats",
    description:
      "We work with all major file formats to make your ordering process simple and hassle-free.",
  },

  /* =========================================
     HERO HIGHLIGHTS
  ========================================= */

  highlights: [
    {
      id: 1,
      title: "Wide Format Support",
      description:
        "Send your file in any common format.",
      icon: null,
    },
    {
      id: 2,
      title: "Machine Ready Files",
      description:
        "Optimized for all major machines.",
      icon: null,
    },
    {
      id: 3,
      title: "Need Help?",
      description:
        "Our team is here to assist.",
      icon: null,
    },
  ],

  /* =========================================
     EMBROIDERY FORMATS
  ========================================= */

 embroideryFormats: [
  {
    id: 1,
    extension: "DST",
    name: "DST",
    subtitle: "Tajima (Most Common)",
    description:
      "Widely used format for commercial embroidery machines.",
    icon: DST,
  },

  {
    id: 2,
    extension: "PES",
    name: "PES",
    subtitle: "Brother",
    description:
      "Compatible with Brother embroidery machines.",
    icon: PES,
  },

  {
    id: 3,
    extension: "EXP",
    name: "EXP",
    subtitle: "Melco",
    description:
      "Compatible with Melco embroidery machines.",
    icon: EXP,
  },

  {
    id: 4,
    extension: "JEF",
    name: "JEF",
    subtitle: "Janome",
    description:
      "Used for Janome embroidery machines.",
    icon: JEF,
  },

  {
    id: 5,
    extension: "VP3",
    name: "VP3",
    subtitle: "Husqvarna / Viking",
    description:
      "Used for Husqvarna Viking embroidery machines.",
    icon: VP3,
  },

  {
    id: 6,
    extension: "XXX",
    name: "XXX",
    subtitle: "Singer",
    description:
      "Supports Singer embroidery machines.",
    icon: XXX,
  },

  {
    id: 7,
    extension: "EMB",
    name: "EMB",
    subtitle: "Wilcom (Editable)",
    description:
      "Master embroidery format for editing and customization.",
    icon: EMB,
  },

  {
    id: 8,
    extension: "HUS",
    name: "HUS",
    subtitle: "Husqvarna",
    description:
      "Used for Husqvarna embroidery machines.",
    icon: HUS,
  },

  {
    id: 9,
    extension: "PCS",
    name: "PCS",
    subtitle: "Pfaff",
    description:
      "Used for Pfaff embroidery machines.",
    icon: PCS,
  },

  {
    id: 10,
    extension: "SEW",
    name: "SEW",
    subtitle: "Janome",
    description:
      "Used for Janome embroidery machines.",
    icon: SEW,
  },
],

  /* =========================================
     VECTOR FORMATS
  ========================================= */

vectorFormats: [
  {
    id: 1,
    extension: "AI",
    name: "AI",
    subtitle: "Adobe Illustrator",
    description:
      "Best for high-quality vector graphics.",
    icon: AI,
  },

  {
    id: 2,
    extension: "EPS",
    name: "EPS",
    subtitle: "Encapsulated PostScript",
    description:
      "Scalable vector format commonly used for professional artwork.",
    icon: EPS,
  },

  {
    id: 3,
    extension: "SVG",
    name: "SVG",
    subtitle: "Scalable Vector Graphics",
    description:
      "Perfect for web and scalable vector editing.",
    icon: SVG,
  },

  {
    id: 4,
    extension: "PDF",
    name: "PDF",
    subtitle: "Portable Document Format",
    description:
      "Accepted for vector artwork and editing.",
    icon: PDF,
  },

  {
    id: 5,
    extension: "CDR",
    name: "CDR",
    subtitle: "CorelDRAW",
    description:
      "Editable vector format used in CorelDRAW.",
    icon: CDR,
  },
],

  /* =========================================
     OTHER ACCEPTED FORMATS
  ========================================= */

  otherFormats: [
  {
    id: 1,
    extension: "JPG",
    name: "JPG",
    subtitle: "High Quality",
    description:
      "High-quality image files are accepted.",
    icon: JPG,
  },

  {
    id: 2,
    extension: "PNG",
    name: "PNG",
    subtitle: "Transparent",
    description:
      "Best for transparent backgrounds.",
    icon: PNG,
  },

  {
    id: 3,
    extension: "TIFF",
    name: "TIFF",
    subtitle: "High Resolution",
    description:
      "High-resolution format for detailed artwork.",
    icon: TIFF,
  },

  {
    id: 4,
    extension: "BMP",
    name: "BMP",
    subtitle: "Bitmap",
    description:
      "Also accepted, though less common.",
    icon: BMP,
  },

  {
    id: 5,
    extension: "GIF",
    name: "GIF",
    subtitle: "GIF",
    description:
      "Accepted for simple graphics and references.",
    icon: GIF,
  },
],

  /* =========================================
     BOTTOM CTA
  ========================================= */

  bottomCards: [
    {
      id: 1,
      type: "help",
      title: "Need a Different Format?",
      description:
        "If you need a file format not listed here, just let us know. We’ll do our best to provide the exact format you need.",
      buttonText: "Contact Us",
      buttonLink: "/contactus",
      icon: null,
    },

    {
      id: 2,
      type: "guarantee",
      title: "Our Guarantee",
      description:
        "All files are thoroughly tested before delivery to ensure they work perfectly with your machine or software.",
      buttonText: "Get a Quote",
      buttonLink: "/contactus",
      icon: null,
    },
  ],
};
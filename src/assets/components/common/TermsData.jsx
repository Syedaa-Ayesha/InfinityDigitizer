import {
  FileText,
  ShieldCheck,
  Lock,
  Headphones,
  BadgeCheck,
  Layers3,
  ShoppingCart,
  FileCheck,
  Clock,
  RefreshCcw,
  Copyright,
  UploadCloud,
  Link,
  TriangleAlert,
  Mail,
} from "lucide-react";

/* ========================================
   TERMS HERO DATA
======================================== */

export const termsHero = {
  title: "Terms and Conditions",

  description:
    "Welcome to Infinity Digitizing. By using our website and placing an order for any of our embroidery digitizing, vector art, or logo design services, you agree to the terms outlined below. Please take a moment to read through them. If anything here doesn't sit right with you, we'd rather you reach out before placing an order than after.",

  date: "May 15, 2026",

  // Abhi screenshot wala pale block hi rahega.
  // Baad mein image deni ho to sirf yahan path add karna hai.
  rightImage: null,
};

/* ========================================
   TERMS HIGHLIGHTS
======================================== */

export const highlightItems = [
  {
    title: "User Content",
    description:
      "Files you send us stay yours; used only for your order.",
    icon: FileText,
  },

  {
    title: "Disruption of Services",
    description:
      "Uninterrupted service isn't guaranteed; we're not liable for outage delays.",
    icon: ShieldCheck,
  },

  {
    title: "File Delivery",
    description:
      "Delivered within 4 to 24 hours to your registered email.",
    icon: Lock,
  },

  {
    title: "File Creation",
    description:
      "Every design is manually digitized from your submitted image and instructions.",
    icon: Headphones,
  },

  {
    title: "Copyrighted Elements",
    description:
      "We only work with content you own rights to; no unauthorized reproduction.",
    icon: BadgeCheck,
  },
];

/* ========================================
   TERMS ITEMS
======================================== */

export const termsItems = [
  {
    number: "01",
    title: "1. Design Editing",
    icon: FileCheck,
    description:
      "Small tweaks like colour changes, minor resizing, and format conversions are handled free of charge. If a request involves a significant redesign or a full rework of the original file, we'll let you know the added cost before proceeding, based on how complex the changes are.",
  },

  {
    number: "02",
    title: "2. Payments",
    icon: Layers3,
    description:
      "We accept payment through secure, standard payment methods at checkout. Orders are processed once payment is confirmed, and a failed or declined payment may delay your file delivery date. If you run into any payment issue, contact us and we'll sort out an alternative.",
  },

  {
    number: "03",
    title: "3. Price Changes",
    icon: ShoppingCart,
    description:
      "Our pricing (starting at $15, depending on design complexity) may be revised from time to time to reflect our service costs. Any change will be reflected on our website, and confirmed orders are honoured at the price agreed when you placed them.",
  },

  {
    number: "04",
    title: "4. Design Details",
    icon: Clock,
    description:
      "You're responsible for double-checking the accuracy of the image, colours, sizing, and instructions you submit with your order. Infinity Digitizing isn't liable for errors that come from incomplete or incorrect details provided at submission, so it's worth a quick review before you send your order through.",
  },

  {
    number: "05",
    title: "5. Intellectual Property",
    icon: RefreshCcw,
    description:
      "The Infinity Digitizing website, along with its text, graphics, and branding, is our property and protected under applicable copyright and intellectual property law. You're welcome to use the final digitized or vectorized files we deliver for your own commercial or personal purposes, but our website content itself may not be copied or reused without permission.",
  },

  {
    number: "06",
    title: "6. Order Cancellation",
    icon: Copyright,
    description:
      "You can cancel an order free of charge before work has begun. Once digitizing or vector work is underway, cancellation may not be possible, as time and resources have already gone into your file; reach out as early as you can if your plans change.",
  },

  {
    number: "07",
    title: "7. Limitation of Liability",
    icon: UploadCloud,
    description:
      "Infinity Digitizing isn't responsible for indirect or consequential losses arising from the use of our files, including issues that occur during stitching, printing, or production on your end. Our liability, where applicable, is limited to the value of the order placed.",
  },

  {
    number: "08",
    title: "8. Governing Law",
    icon: TriangleAlert,
    description:
      "These terms are governed by the laws applicable to the jurisdiction in which Infinity Digitizing operates, and any disputes will be handled accordingly.",
  },

  {
    number: "09",
    title: "9. Changes to Terms and Conditions",
    icon: Link,
    description:
      "We may update these terms from time to time to reflect changes in how we operate. Continuing to use our services after an update means you accept the revised terms, so it's worth checking back occasionally.",
  },

  {
    number: "10",
    title: "10. Contact Us",
    icon: Mail,
    description: (
      <>
        Questions about these terms? We're happy to help.
        <br />

        Email:{" "}
        <a
          href="mailto:info@inifinitydigitizing.com"
          className="underline"
        >
          info@inifinitydigitizing.com
        </a>{" "}

        Call / WhatsApp: +1 (830) 623-2195
      </>
    ),
  },
];
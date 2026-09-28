import {
  ShoppingCart,
  FileText,
  Palette,
  BookOpen,
  CreditCard,
  RefreshCcw,
  Headphones,
} from "lucide-react";

export const helpTopics = [
  {
    id: 1,
    title: "Orders & Account",
    description: "Placing orders, tracking, accounts, and more.",
    icon: ShoppingCart,

    keywords: [
      "order",
      "orders",
      "account",
      "tracking",
      "place order",
      "order status",
    ],

    link: "/register",
  },

  {
    id: 2,
    title: "File Formats",
    description: "Accepted file types and guidelines.",
    icon: FileText,

    keywords: [
      "file",
      "files",
      "format",
      "formats",
      "dst",
      "pes",
      "jef",
      "machine format",
    ],

    link: "/file-formats",
  },

  {
    id: 3,
    title: "Artwork & Requirements",
    description: "Art requirements, best practices, and tips.",
    icon: Palette,

    keywords: [
      "artwork",
      "art",
      "requirements",
      "design",
      "image",
      "logo",
      "artwork requirements",
    ],

    link: "/art-requirements",
  },

  {
    id: 4,
    title: "Digitizing Guide",
    description: "Learn about the digitizing process.",
    icon: BookOpen,

    keywords: [
      "digitizing",
      "digitize",
      "embroidery",
      "cap",
      "jacket",
      "left chest",
      "puff",
      "patch",
      "digitizing guide",
    ],

    link: "/services",
  },

  {
    id: 5,
    title: "Payments & Billing",
    description: "Payment methods, invoices, and billing.",
    icon: CreditCard,

    keywords: [
      "payment",
      "payments",
      "billing",
      "invoice",
      "price",
      "pricing",
      "checkout",
    ],

    link: "/pricing",
  },

  {
    id: 6,
    title: "Returns & Refunds",
    description: "Policies and eligibility information.",
    icon: RefreshCcw,

    keywords: [
      "refund",
      "refunds",
      "return",
      "returns",
      "cancellation",
      "revisions",
      "refund policy",
    ],

    link: "/refund-policy",
  },

  {
    id: 7,
    title: "Technical Support",
    description: "Get help with technical issues.",
    icon: Headphones,

    keywords: [
      "support",
      "technical",
      "issue",
      "problem",
      "help",
      "contact",
      "error",
    ],

    link: "/contact-us",
  },
];
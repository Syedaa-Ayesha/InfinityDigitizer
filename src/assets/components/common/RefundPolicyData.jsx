import {
  FileText,
  ShieldCheck,
  CircleX,
  Pencil,
  ShoppingCart,
  SlidersHorizontal,
  CreditCard,
  PieChart,
  UserRoundPlus,
  Headphones,
} from "lucide-react";

export const refundPolicyData = {
  hero: {
    title: "Refund Policy",

    description:
      "We aim to provide high quality embroidery digitizing, vector art and logo design services. Customer satisfaction is our top priority. Please read our refund policy carefully before placing an order.",

    date: "May 15, 2026",
  },

  overview: {
    title: "Our Policy At A Glance",

    description:
      "Please read the following terms carefully to understand your rights and our procedures regarding refunds, cancellations and revisions.",
  },

  cards: [
    {
      number: "01",
      icon: FileText,
      title: "General Refund Policy",
      description:
        "Due to the nature of our digital services, all sales are final. However, we understand that issues may arise. Please review our policy below.",
      bullets: [],
    },

    {
      number: "02",
      icon: ShieldCheck,
      title: "When Refunds Are Available",
      description:
        "Refunds may be considered in the following cases:",
      bullets: [
        "Order canceled before work starts",
        "Payment made but service not delivered",
        "We are unable to deliver the agreed service",
      ],
    },

    {
      number: "03",
      icon: CircleX,
      title: "Non-Refundable Situations",
      description:
        "Refunds are not available in the following cases:",
      bullets: [
        "Work completed and approved by customer",
        "After files are downloaded or delivered",
        "Change of mind",
        "Multiple revisions requested",
      ],
    },

    {
      number: "04",
      icon: Pencil,
      title: "Revisions & Corrections",
      description:
        "We offer free revisions to ensure your complete satisfaction.",
      bullets: [
        "Limit depends on the project type",
        "Revisions do not mean new design creation",
        "Order is considered complete after final approval",
      ],
    },

    {
      number: "05",
      icon: ShoppingCart,
      title: "Order Cancellation",
      description:
        "Orders can be cancelled within 12 hours of placement if work has not been started.",
      bullets: [],
    },

    {
      number: "06",
      icon: SlidersHorizontal,
      title: "Quality Issues",
      description:
        "If there is a genuine technical error from our end, we will correct it as soon as possible. Refunds are issued only if we are unable to fix the issue.",
      bullets: [],
    },

    {
      number: "07",
      icon: CreditCard,
      title: "Refund Processing",
      description:
        "Approved refunds will be processed to your original payment method within 5–10 business days depending on your bank or payment provider.",
      bullets: [],
    },

    {
      number: "08",
      icon: PieChart,
      title: "Partial Refunds",
      description:
        "Partial refunds may be issued in cases where, a portion of the work has been completed. and the remaining part cannot be completed.",
      bullets: [],
    },

    {
      number: "09",
      icon: UserRoundPlus,
      title: "Customer Responsibility",
      description:
        "Customers must provide correct logo, artwork, sizes, instructions and other requirements. We are not responsible for issues caused by incorrect information.",
      bullets: [],
    },

    {
      number: "10",
      icon: Headphones,
      title: "Contact Us",
      description:
        "For any refund requests or concerns, please contact our support team. We are here to help and resolve any issue fairly.",
      bullets: [],
    },
  ],
};
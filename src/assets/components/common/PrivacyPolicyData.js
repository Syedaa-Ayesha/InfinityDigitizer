import {
  ShieldCheck,
  LockKeyhole,
  Eye,
  Database,
  Headphones,
} from "lucide-react";

export const privacyPolicyData = {
  /* =================================
     HERO
  ================================= */

  hero: {
    title: "Privacy Policy",

    description:
      "At Infinity Digitizing, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, protect, and manage your information when you visit our website, request our services, place an order, or communicate with our team.",

    date: "May 15, 2026",

    rightImage: null,
  },

  /* =================================
     HIGHLIGHTS
  ================================= */

  highlights: [
    {
      title: "100% Secure",
      description:
        "Your data is protected with industry standard security.",

      icon: ShieldCheck,
    },

    {
      title: "Privacy Guaranteed",
      description:
        "We never sell or share your personal information with anyone.",

      icon: LockKeyhole,
    },

    {
      title: "Transparency",
      description:
        "Clear and transparent policies so you can trust every step.",

      icon: Eye,
    },

    {
      title: "Data Protection",
      description:
        "We take all necessary measures to secure your personal information.",

      icon: Database,
    },

    {
      title: "Always Here",
      description:
        "Have questions? We're always ready to help and support you.",

      icon: Headphones,
    },
  ],

  /* =================================
     PRIVACY SECTIONS
  ================================= */

  sections: [
    {
      id: "01",
      title: "Our Commitment",

      description: [
    "Your trust is important to us. We are committed to collecting only the information that is necessary to provide you with our embroidery digitizing, vector art, and logo design services and to improving your overall experience on our website.",

    "This policy applies to all visitors, customers, and users of our website and services. By using our services, you agree to the collection and use of information as described in this Privacy Policy.",
  ],

     
      image: null,

      imagePosition: "left",
    },

    {
      id: "02",
      title: "Information We Collect",

      description:
        "We collect different types of information to provide and improve our services. The information we may collect includes:",

      bullets: [
        {
          label: "Personal Details:",
          text: "Name, email address, phone number, and company name when you place an order or contact us.",
        },

        {
          label: "Design Files:",
          text: "Artwork, logo, and design files you upload for digitizing or conversion.",
        },

        {
          label: "Payment Information:",
          text: "Billing details processed securely through our payment partners.",
        },

        {
          label: "Usage Data:",
          text: "Browser type, IP address, pages visited, and time spent on our website.",
        },
      ],

      image: null,

      imagePosition: "right",
    },

    {
      id: "03",
      title: "How We Use Your Information",

      description:
        "We use the information we collect to process orders, provide services, communicate with customers, improve our website, and maintain the security and reliability of our services.",

      bullets: [
        {
          text: "To complete and deliver your requested services.",
        },

        {
          text: "To respond to questions, requests, and service-related concerns.",
        },

        {
          text: "To understand how customers use our website and improve our services.",
        },

        {
          text: "To protect our website, users, and business from unauthorized activity.",
        },
      ],

      image: null,

      imagePosition: "left",
    },

  {
  id: "04",
  title: "Cookies & Tracking",

  description: [
    "Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.",

    "We use cookies for: session management, remembering your cart and order history, analytics (Google Analytics), and improving website functionality. You can choose to disable cookies in your browser settings at any time, though some features of our website may not function correctly without them.",
  ],

  showVisual: false,
},
    {
      id: "05",
      title: "Data Security",

      description:[
        "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include SSL encryption for data transmission, secure server storage, and restricted access to personal data.",

        "While we take every precaution to safeguard your information, no method of internet transmission is 100% secure. We continuously update our security practices to maintain the highest level of protection.",
      ],
      image: null,

      imagePosition: "left",
    },
    {
  id: "06",
  title: "Third-Party Services",

  description: [
    "We may use trusted third-party services to help operate our business and deliver services to you. These partners include PayPal for payment processing, Google Analytics for website analytics, and email service providers for communication. Each of these partners has their own privacy policy and we encourage you to review them.",

    "We do not sell, trade, or rent your personal information to any third party for marketing purposes. Any data sharing with third parties is solely for the purpose of delivering our services to you.",
  ],

  showVisual: false,
},
    {
      id: "07",
      title: "Your Rights & Choices",

      description:
        "You have full rights over your personal information. At any time, you may:",

      bullets: [
        {
          
          text: "Request access to the personal data we hold about you",
        },

        {
         
          text: "To respond to questions, requests, and service-related concerns.",
        },

        {
          
          text: "To understand how customers use our website and improve our services.",
        },

        {
        
          text: "To protect our website, users, and business from unauthorized activity.",
        },
      ],

      image: null,

      imagePosition: "left",
    },
    {
      id: "08",
      title: "Policy Updates",

      description:[
        "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will update the 'Last Updated' date at the top of this page and notify registered customers via email..",

      "We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes constitutes your acceptance of the updated policy."
      ],
       showVisual: false,
    },
  ],
};
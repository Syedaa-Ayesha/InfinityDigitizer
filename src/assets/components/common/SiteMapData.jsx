import {
  House,
  SlidersHorizontal,
  BriefcaseBusiness,
  Gift,
  Tag,
  Mail,
  FileText,
  ShieldCheck,
  User,
  UserPlus,
  Star,
  MessageCircle,
  CircleQuestionMark,
  Ruler,
  FileCheck,
  RefreshCcw,
  Network,
  Headphones,
  FileCode,
  Image,
} from "lucide-react";

/* =========================
   MAIN PAGES
========================= */

export const mainPagesData = [
  {
    id: "01",
    number: "01",
    title: "Home",
    icon: House,
    links: [
      {
        label: "Your Artwork, Perfectly Prepared",
        path: "/#quote",
      },
      {
        label: "What Services We Offer",
        path: "/#offer",
      },
      {
        label: "How To Place Your Order",
        path: "/#order",
      },
      {
        label: "Our Competitive Prices",
        path: "/#price",
      },
    ],
  },

  {
    id: "02",
    number: "02",
    title: "Services",
    icon: SlidersHorizontal,
    links: [
      {
        label: "Embroidery Digitizing",
        path: "/services#embroidery-digitizing",
      },
      {
        label: "Vector Tracing",
        path: "/services#vector-art",
      },
      {
        label: "Logo Designing",
        path: "/services#logo-design",
      },
      {
        label: "All Services",
        path: "/services",
      },
    ],
  },

  {
    id: "03",
    number: "03",
    title: "B2B Solutions",
    icon: BriefcaseBusiness,
    links: [
      {
        label: "Businesses We Serve",
        path: "/b2b#serve",
      },
      {
        label: "Why Businesses Choose Us",
        path: "/b2b#chooseus",
      },
      {
        label: "How Our Process Work",
        path: "/b2b#processWork",
      },
      {
        label: "Partner with Us",
        path: "/b2b#partner",
      },
      
    ],
  },

  {
    id: "04",
    number: "04",
    title: "Free Designs",
    icon: Gift,
    links: [
      {
        label: "Embroidery Designs",
        path: "/freedesign",
      },
      {
        label: "Vector Designs",
        path: "/",
      },
      {
        label: "Request a Design",
        path: "/#quote",
      },
    ],
  },

  {
    id: "05",
    number: "05",
    title: "Pricing",
    icon: Tag,
    links: [
      {
        label: "Our Packages",
        path: "/pricing",
      },
      {
        label: "Embroidery Digitizing Price",
        path: "/pricing#embroideryDigitizing",
      },
      {
        label: "Vector Tracing Price",
        path: "/pricing#vectorTracing",
      },
      {
        label: "Logo Design Price",
        path: "/pricing#logoDesign",
      },
    ],
  },

  {
    id: "06",
    number: "06",
    title: "Contact Us",
    icon: Mail,
    links: [
      {
        label: "Get in Touch",
        path: "/contactus",
      },
      {
        label: "Contact Form",
        path: "/contactus",
      },
      {
        label: "Our Location",
        path: "/contactus",
      },
      {
        label: "Tell Us About Your Project",
        path: "/contactus",
      },
    ],
  },
];

/* =========================
   RESOURCE PAGES/ Drop Down
========================= */

export const resourcePagesData = [
  {
    id: "01",
    number: "01",
    title: "Login",
    icon: User,
    links: [
      {
        label: "Access Your Account",
        path: "/login",
      },
      {
        label: "Manage Orders",
        path: "/login",
      },
      {
        label: "Track Progress",
        path: "/login",
      },
      {
        label: "Account Settings",
        path: "/login",
      },
    ],
  },

  {
    id: "02",
    number: "02",
    title: "Sign Up",
    icon: UserPlus,
    links: [
      {
        label: "Create New Account",
        path: "/signup",
      },
      {
        label: "Join Now",
        path: "/signup",
      },
      {
        label: "Start Ordering",
        path: "/signup",
      },
     
    ],
  },

  {
    id: "03",
    number: "03",
    title: "Why Choose Us",
    icon: Star,
    links: [
      {
        label: "Our Advantages",
        path: "/why-choose-us",
      },
      {
        label: "Quality Commitment",
        path: "/why-choose-us",
      },
      {
        label: "Customer Satisfaction",
        path: "/why-choose-us",
      },
      {
        label: "What Makes Us Different",
        path: "/why-choose-us",
      },
    ],
  },

{
  id: "04",
  number: "04",
  title: "Reviews / Testimonials",
  icon: MessageCircle,
  links: [
    {
      label: "All Reviews",
      path: "/reviews?tab=all#reviews",
    },
    
    {
      label: "Embroidery Digitizing Reviews",
      path: "/reviews?tab=embroidery#reviews",
    },
    {
      label: "Vector Tracing Reviews",
      path: "/reviews?tab=vector#reviews",
    },
    {
      label: "Logo Design Reviews",
      path: "/reviews?tab=logo#reviews",
    },
  ],
},

  {
  id: "05",
  number: "05",
  title: "Blog",
  icon: FileText,
  links: [
    {
      label: "Latest Articles",
      path: "/blogsList",
    },
    {
      label: "Embroidery Digitizing Blogs",
      path: "/blogsList?category=embroidery",
    },
    {
      label: "Vector Tracing Blogs",
      path: "/blogsList?category=vector",
    },
    {
      label: "Logo Design Blogs",
      path: "/blogsList?category=logo",
    },
    {
      label: "Tips & Guides",
      path: "/blogsList?category=tips",
    },
    {
      label: "Industry News",
      path: "/blogsList?category=news",
    },
  ],
},

  {
  id: "06",
  number: "06",
  title: "FAQs",
  icon: CircleQuestionMark,
  links: [
    {
      id: "faq-general",
      label: "General Questions",
      path: "/faqs?category=support",
    },
    {
      id: "faq-embroidery",
      label: "Embroidery Questions",
      path: "/faqs?category=embroidery",
    },
    {
      id: "faq-vector",
      label: "Vector Questions",
      path: "/faqs?category=vector",
    },
    {
      id: "faq-logo",
      label: "Logo Design Questions",
      path: "/faqs?category=logo",
    },
  ],
},

 {
  id: "07",
  number: "07",
  title: "Size Guidelines",
  icon: Ruler,
  links: [
    {
      id: "size-garments",
      label: "Embroidery Placement",
      path: "/sizes?category=garments",
    },
    {
      id: "size-cap",
      label: "Cap Embroidery",
      path: "/sizes?category=cap",
    },
    {
      id: "size-logo",
      label: "Left Chest Logo",
      path: "/sizes?category=logo",
    },
    {
      id: "size-jacket",
      label: "Jacket Back",
      path: "/sizes?category=jacket",
    },
    {
      id: "size-towel",
      label: "Towel & Others",
      path: "/sizes?category=towel",
    },
  ],
},

  {
    id: "08",
    number: "08",
    title: "Terms & Conditions",
    icon: FileCheck,
    links: [
      {
        label: "Terms of Use",
        path: "/terms-and-conditions",
      },
      {
        label: "Service Agreement",
        path: "/terms-and-conditions",
      },
      {
        label: "User Responsibilities",
        path: "/terms-and-conditions",
      },
      {
        label: "Legal Information",
        path: "/terms-and-conditions",
      },
    ],
  },

  {
    id: "09",
    number: "09",
    title: "Privacy Policy",
    icon: ShieldCheck,
    links: [
      {
        label: "Data Protection",
        path: "/privacy-policy",
      },
      {
        label: "Your Privacy",
        path: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        path: "/privacy-policy",
      },
      {
        label: "Information Usage",
        path: "/privacy-policy",
      },
    ],
  },

  {
    id: "10",
    number: "10",
    title: "Refund Policy",
    icon: RefreshCcw,
    links: [
      {
        label: "Refund Eligibility",
        path: "/refund-policy",
      },
      {
        label: "Request a Refund",
        path: "/refund-policy",
      },
      {
        label: "Processing Time",
        path: "/refund-policy",
      },
      {
        label: "Policy Details",
        path: "/refund-policy",
      },
    ],
  },

  {
    id: "11",
    number: "11",
    title: "Sitemap",
    icon: Network,
    links: [
      {
        label: "Complete Page List",
        path: "/sitemap",
      },
      {
        label: "Easy Navigation",
        path: "/sitemap",
      },
      {
        label: "Find Information",
        path: "/sitemap",
      },
      {
        label: "Stay Connected",
        path: "/sitemap",
      },
    ],
  },

  {
    id: "12",
    number: "12",
    title: "Help Center",
    icon: Headphones,
    links: [
      {
        label: "Get Support",
        path: "/help-center",
      },
      {
        label: "Guides & Tutorials",
        path: "/help-center",
      },
      {
        label: "Troubleshooting",
        path: "/help-center",
      },
      {
        label: "Contact Support",
        path: "/contact-us",
      },
    ],
  },

  {
    id: "13",
    number: "13",
    title: "File Formats",
    icon: FileCode,
    links: [
      {
        label: "Accepted Formats",
        path: "/file-formats",
      },
      {
        label: "File Requirements",
        path: "/file-formats",
      },
      {
        label: "Best Practices",
        path: "/file-formats",
      },
      {
        label: "File Preparation Tips",
        path: "/file-formats",
      },
    ],
  },

  {
    id: "14",
    number: "14",
    title: "Art Requirements",
    icon: Image,
    links: [
      {
        label: "Artwork Guidelines",
        path: "/art-requirements",
      },
      {
        label: "Accepted Art Types",
        path: "/art-requirements",
      },
      {
        label: "Quality Tips",
        path: "/art-requirements",
      },
      {
        label: "Common Mistakes",
        path: "/art-requirements",
      },
    ],
  },
];
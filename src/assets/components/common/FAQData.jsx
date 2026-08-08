
import {
  CircleQuestionMark,
  Eye,
  Scissors,
  Pen,
  Truck,
  Headphones,
} from "lucide-react";

export const faqData = [
  {
    id: "general",
    title: "General Questions",
    icon: CircleQuestionMark,

    questions: [
      {
        id: 1,
        question: "01. What do you need to start my order?",
        answer:
          "We just need your artwork, logo, or image in any format like JPG, PNG, PDF, AI, PSD, EPS, or even a simple screenshot.",
      },
      {
        id: 2,
        question: "02. How much do your services cost?",
        answer:
          "Our pricing depends on the type and complexity of the project. Contact us for a free quote.",
      },
      {
        id: 3,
        question: "03. How fast can I receive my files?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
        {
        id: 4,
        question: "04. Do you offer revisions?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
        {
        id: 5,
        question: "05. Which file formats do you provide?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
        {
        id: 6,
        question: "06. Can you convert a low quality image into vector art?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
        {
        id: 7,
        question: "07. Do you offer custom logo design services?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
       {
        id: 8,
        question: "08. What type of logo design services do you provide?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
       {
        id: 9,
        question: "09. Do you offer rush delivery?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
       {
        id: 10,
        question: "10. Are there any hidden charges?",
        answer:
          "Delivery time depends on the type and complexity of your project.",
      },
    ],
  },

  {
    id: "embroidery",
    title: "Embroidery Digitizing",
    icon: Eye,

    questions: [
      {
        id: 1,
        question: "What is embroidery digitizing?",
        answer:
          "Embroidery digitizing converts your artwork into a stitch-ready file for embroidery machines.",
      },
      {
        id: 2,
        question: "What embroidery file formats do you provide?",
        answer:
          "We provide commonly requested formats such as DST, PES, JEF, EXP and more.",
      },
    ],
  },

  {
    id: "vector",
    title: "Vector Tracing",
    icon: Scissors,

    questions: [
      {
        id: 1,
        question: "What is vector tracing?",
        answer:
          "Vector tracing converts raster or low-resolution artwork into clean and scalable vector artwork.",
      },
      {
        id: 2,
        question: "Can you convert low quality images into vector art?",
        answer:
          "Yes, we can recreate low-resolution artwork as clean vector files.",
      },
    ],
  },

  {
    id: "logo",
    title: "Logo Designing",
    icon: Pen,

    questions: [
      {
        id: 1,
        question: "Do you offer custom logo design?",
        answer:
          "Yes, we create professional custom logos according to your brand identity.",
      },
      {
        id: 2,
        question: "What type of logo designs do you provide?",
        answer:
          "We create modern, minimal, professional and custom logo designs.",
      },
    ],
  },

  {
    id: "pricing",
    title: "Pricing & Delivery",
    icon: Truck,

    questions: [
      {
        id: 1,
        question: "How much do your services cost?",
        answer:
          "Pricing depends on the service and complexity of the artwork.",
      },
      {
        id: 2,
        question: "Do you offer rush delivery?",
        answer:
          "Yes, rush delivery is available for urgent projects.",
      },
    ],
  },

  {
    id: "support",
    title: "Support",
    icon: Headphones,

    questions: [
      {
        id: 1,
        question: "How can I contact your support team?",
        answer:
          "You can contact our support team through our contact form or email.",
      },
      {
        id: 2,
        question: "Do you provide support after delivery?",
        answer:
          "Yes, our team is available to assist you with any project-related questions.",
      },
    ],
  },
];
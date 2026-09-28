import {
  Mail,
  MessageCircleMore,
  Phone,
} from "lucide-react";

export const supportInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Email Support",
    description: "support@infinitydigitizing.com",
    available: "We usually reply within 12 hours",
    link: "mailto:support@infinitydigitizing.com",
    type: "email",
  },

  {
    id: 2,
    icon: MessageCircleMore,
    title: "Live Chat",
    description: "Chat with our team",
    available: "Usually online now",
    link: "#",
    type: "chat",
    online: true,
  },

  {
    id: 3,
    icon: Phone,
    title: "Call Us",
    description: "+1 (702) 555-0188",
    available: "Mon - Fri, 9:00 AM - 6:00 PM (EST)",
    link: "tel:+17025550188",
    type: "phone",
  },
];
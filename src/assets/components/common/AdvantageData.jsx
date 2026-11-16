import {
  Clock3,
  ShieldCheck,
  CreditCard,
  Crown,
  Cloud,
  CircleDollarSign,
} from "lucide-react";
import fastTurnAround from '../../images/2-fast-turnaround.png'
import assurance from '../../images/3-quality-assurance-01.jpg'
import affordableRate from '../../images/7-affordable-rates.png'
import revision from '../../images/6-free-revisions-backup.png'
import checkout from '../../images/4-easy-checkout.png'
import quality from '../../images/5-high-quality-results.png'

export const advantagesData = [
  {
    id: 1,
    title: "Fast Turnaround",
    description:
      "We deliver embroidery, logo & vector art services within 2 to 24 hours, without compromising on quality, speed or accuracy.",
    icon: Clock3,
    image: fastTurnAround,
  },

  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Every file goes through careful detailing and strict quality checks before it is delivered to you.",
    icon: ShieldCheck,
    image: assurance,
  },

  {
    id: 3,
    title: "Easy Checkout",
    description:
      "Pay safely and easily through PayPal or Stripe, fast, secure, and hassle free.",
    icon: CreditCard,
    image: checkout,
  },

  {
    id: 4,
    title: "High Quality Results",
    description:
      "We never cut corners on quality, ensuring every design we deliver meets the highest design standards.",
    icon: Crown,
    image: quality,
  },

  {
    id: 5,
    title: "Free Revisions and File Backup",
    description:
      "We offer unlimited revisions until you're 100% satisfied, and we keep a backup of every file we create.",
    icon: Cloud,
    image: revision,
  },

  {
    id: 6,
    title: "Affordable Rates",
    description:
      "Get professional embroidery digitizing services starting at just $15, with high quality results, fast turnaround times, and absolutely no hidden charges.",
    icon: CircleDollarSign,
    image: affordableRate,
  },
];
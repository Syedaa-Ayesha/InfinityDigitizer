import {
  UserRound,
  ShoppingCart,
  Hourglass,
  FileCheck,
  CreditCard,
  Download,
  Gauge,
  FileHeart,
  BanknoteCheck,
  Sparkles,
  CircleDollarSign,
  MessageSquareCheck

} from "lucide-react";
import img03 from '../../images/easy-checkout 1.png'
import img01 from '../../images/fast-turnaround 1.png'
import img04 from '../../images/high-quality-result 1.png'
import img05 from '../../images/Free-revisions-and-file-backup 1.png'
import img06 from '../../images/price 1.png'
import img02 from '../../images/qualiy-assurance 1.png'
const CardData=[

{
    step: "01",
    icon: <UserRound size={40} strokeWidth={2} />,
    title: "Step 1: Create Your Account",
    description:
    "Sign up with your basic details  and create your account in just a  few minutes.",
  },
  {
    step: "02",
    icon: <ShoppingCart size={40} strokeWidth={2} />,
    title: "Step 2: Submit Your Design Request",
    description:
      "Complete the order form with your design details, turnaround time and instructions.",
  },
  {
    step: "03",
    icon: <Hourglass size={40} strokeWidth={2} />,
    title: "Step 3: Let Our Team Review It",
    description:
      "Our team reviews your request to make sure all requirements are clear.",
  },
  {
    step: "04",
    icon: <FileCheck size={40} strokeWidth={2} />,
    title: "Step 4: Check Your Proof File",
    description:
      "Review your proof file and request any changes before final approval.",
  },
  {
    step: "05",
    icon: <CreditCard size={40} strokeWidth={2} />,
    title: "Step 5: Choose a Payment Option",
    description:
      "Pay securely through PayPal or Stripe using your preferred method.",
  },
  {
    step: "06",
    icon: <Download size={40} strokeWidth={2} />,
    title: "Step 6: Get Your Final File",
    description: "Receive embroidery, logo designing & vector files in all major formats, including DST, PES, EMB, EXP, AI, SVG, EPS, PDF and more.",
  },
];
const features = [
  {
    step: "01",
    icon: <Gauge size={50} color="#7434E5" />,
    title: "Fast Turnaround",
    description: "We deliver embroidery & vector art services within 2 to 24 hours, without compromising on quality, speed or accuracy.",
    image : img01
  },
  {
    step: "02",
    icon: <FileHeart size={50}  color="#7434E5"/>,
    title: "Quality Assurance",
    description: "Every file goes through careful detailing and strict quality checks before it is delivered to you.",
    image : img02

  },
  {
    step: "03",
    icon: <BanknoteCheck size={50}  color="#7434E5"/>,
    title: "Easy Checkout",
    description: "Pay safely and easily through PayPal or Stripe, fast, secure, and hassle free.",
    image : img03

  },
    {
   step: "04",
    icon: <Sparkles size={50}  color="#7434E5"/>,
    title: "High Quality Results",
    description: "We never cut corners on quality, ensuring every design we deliver meets the highest embroidery standards.",
    image : img04

  },
  {
 step: "05",
    icon: <MessageSquareCheck size={50}  color="#7434E5"/>,
    title: "Free Revisions and File Backup",
    description: "We offer unlimited revisions until you're 100% satisfied, and we keep a backup of every file we create.",
    image : img05

  },
  {
   step: "06",
    icon: <CircleDollarSign size={50}  color="#7434E5"/>,
    title: "Affordable Rates",
    description: "Get professional digitizing starting at a flat rate of $15, with absolutely no hidden charges.",
    image : img06

  },
];

export { CardData, features };
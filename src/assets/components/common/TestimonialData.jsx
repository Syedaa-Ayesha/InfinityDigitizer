import {
  Grid2X2,
  FileText,
  PenTool,
  Pencil,
  Headphones,
} from "lucide-react";
import userImg from '../../images/Trustprofile01.png';
import flag from "../../images/🇺🇸.png"
export const reviewTabs = [
  {
    id: "all",
    title: "All Reviews",
    value: "all",
    icon: Grid2X2,
  },
  {
    id: "embroidery",
    title: "Embroidery Digitizing",
    value: "embroidery",
    icon: FileText,
  },
  {
    id: "vector",
    title: "Vector Tracing",
    value: "vector",
    icon: PenTool,
  },
  {
    id: "logo",
    title: "Logo Designing",
    value: "logo",
    icon: Pencil,
  },
  {
    id: "support",
    title: "Customer Support",
    value: "support",
    icon: Headphones,
  },
];
export const TestimonialData= [
  {
    id: 1,
    category: "embroidery",
    review:
      "We needed each embroidery files for a bulk uniform order and Infinity Digitizing delivered perfectly. The puff lettering on the caps looked sharp and the files ran clean on the first run. Fast, reliable, and perfectly quality. Best embroidery digitizing company, highly recommended.",
    name: "James Carter",
    country: "USA",
    flag: flag,
    rating: 5,
    image:userImg,
    
  },

  {
    id: 2,
    category: "embroidery",
    review:
      "I’ve tried a few digitizing services before but the results here were excellent quality. The design I wanted, with solid stitching and no distortion at all. Let’s say, Lim T., UK",
    name: "Sarah Mitchell",
    country: "Canada",
    flag: flag,
    rating: 5,
  },

  {
    id: 3,
    category: "vector",
    review:
      "I sent them a blurry old logo and got back a clean, high-resolution vector file within hours. The turnaround was quick and the artwork was spot on. I’m super happy and will definitely use it again for future projects.",
    name: "Daniel Roberts",
    country: "UK",
    flag:flag,
       rating: 5,
  },

  {
    id: 4,
    category: "logo",
    review:
      "Our company logo has a lot of fine detail and was worried it wouldn’t design well. Infinity Digitizing handled it brilliantly, every element came through clean and the service was professional from the first run.",
    name: "Emily Johnson",
    country: "Australia",
    flag: flag,

    rating: 5,
  },

  {
    id: 5,
    category: "embroidery",
    review:
      "Ordered the chest logo digitizing for our staff shirts and the results were excellent. Clean stitching, correct sizing, and delivered within a few hours. Exactly what we needed for our deadline.",
    name: "Michael Brown",
    country: "Germany",
    flag: flag,

    rating: 5,
  },

  {
    id: 6,
    category: "embroidery",
    review:
      "The applique digitizing work was clean and professionally done. The edges were neat, the file ran smoothly, and the final result on fabric looked great. Highly recommend for applique work.",
    name: "Olivia Martinez",
    country: "Spain",
    flag: flag,

    rating: 5,
  },

  {
    id: 7,
    category: "embroidery",
    review:
      "We needed clean embroidery files for a large apparel order, and every design stitched perfectly. The quality was excellent, and the delivery was even faster than expected.",
    name: "Ryan Thompson",
    country: "America",
    flag: flag,

    rating: 5,
  },

  {
    id: 8,
    category: "vector",
    review:
      "Our logo was converted into vector format with incredible accuracy. The file was clean, and it was ready for printing without any edits.",
    name: "Sophia Evans",
    country: "Canada",
    flag: flag,
 
    rating: 5,
  },

  {
    id: 9,
    category: "support",
    review:
      "Communication was smooth from start to finish. They understood exactly what we needed and delivered a professional result that matched our expectations.",
    name: "Liam Foster",
    country: "United Kingdom",
    flag: flag,
    rating: 5,
  },
];
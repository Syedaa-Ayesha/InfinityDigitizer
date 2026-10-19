import {
  Flower2,
  PenTool,
  BadgePercent,
} from "lucide-react";

import embroideryImg from "../../images/embroidery.jpg";
import vectorImg from "../../images/vector.jpg";
import logoImg from "../../images/logo.jpg";

export const ProfessionalServicesData = [
  {
    id: 1,
    title: "Embroidery Digitizing",
    description:
      "Quality embroidery digitizing for caps, jackets, patches and promotional apparel with clean stitch paths and professional results.",
    icon: Flower2,
    image: embroideryImg,
  },

  {
    id: 2,
    title: "Vector Tracing",
    description:
      "Convert low resolution artwork into sharp vector files suitable for screen printing and more.",
    icon: PenTool,
    image: vectorImg,
  },

  {
    id: 3,
    title: "Custom Logo Design",
    description:
      "Create distinctive logos that reflect your brand identity with clean, scalable artwork suitable for both digital and print applications.",
    icon: BadgePercent,
    image: logoImg,
  },
];
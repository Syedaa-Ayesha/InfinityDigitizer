import {
  Flower2,
  PenTool,
  BadgePercent,
} from "lucide-react";

import embroideryImg from "../../images/ServiceHeroImage01.png";
import vectorImg from "../../images/ServiceHeroImage02.png";
import logoImg from "../../images/ServiceHeroImage03.png";

export const professionalServices = [
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
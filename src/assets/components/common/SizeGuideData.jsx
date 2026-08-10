import {
  Shirt,
  Badge,
  Heart,
  BriefcaseBusiness,
  PanelsTopLeft,
} from "lucide-react";
import image1 from '../../icons/left chest.png';
import image2 from '../../icons/right chest.png';
import image3 from '../../icons/Center chest.png';
import image4 from '../../icons/Full front.png';
import image5 from '../../icons/Back upper.png';
import image6 from '../../icons/Back full.png';

export const sizeGuideData = [
  {
    id: "garments",
    title: "Embroidery Placement",
    value: "garments",
    icon: Shirt,

    tableData: [
      {
        id: 1,
        item: "Left Chest",
        size: "3.5 - 4 inches",
        placement: "7 - 9 inches below shoulder seam",
        notes:"Best for logos and small text designs.",
        image: image1,
      },
      {
        id: 2,
        item: "Right Chest",
        size: "3.5 - 4 inches",
        placement: "7 - 9 inches below shoulder seam",
        notes: "Ideal for name, text or logo.",
        image:image2,
      },
      {
        id: 3,
        item: "Center Chest",
        size: "8 - 10 inches",
        placement: "Center of the chest area",
        notes :"Perfect for larger logos and designs.",
        image: image3,
      },
      {
        id: 5,
        item: "Front Full",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes:"Best for big logos or custom artwork.",
        image:image4
      },
      {
        id: 6,
        item: "Back (Upper)",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes:"Best for big logos or custom artwork.",
        image: image5
      },
      {
        id: 7,
        item: "Back (Full)",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes:"Best for big logos or custom artwork.",
        image: image6
      },
    ],
  },

  {
    id: "cap",
    title: "Cap Embroidery",
    value: "cap",
    icon: Badge,

    tableData: [
      {
        id: 1,
        item: "Front Center",
        size: "2.25 inches high",
        placement: "Center front panel",
      },
      {
        id: 2,
        item: "Left Panel",
        size: "2 - 2.5 inches",
        placement: "Side panel center",
      },
      {
        id: 3,
        item: "Right Panel",
        size: "2 - 2.5 inches",
        placement: "Side panel center",
      },
      {
        id: 4,
        item: "Back",
        size: "1 - 2 inches",
        placement: "Above adjustment strap",
      },
    ],
  },

  {
    id: "logo",
    title: "Left Chest Logo",
    value: "logo",
    icon: Heart,

    tableData: [
      {
        id: 1,
        item: "Standard Logo",
        size: "3.5 - 4 inches",
        placement: "Left chest",
      },
      {
        id: 2,
        item: "Small Logo",
        size: "2.5 - 3 inches",
        placement: "Smaller garments",
      },
      {
        id: 3,
        item: "Large Logo",
        size: "4 - 5 inches",
        placement: "Jackets and larger apparel",
      },
    ],
  },

  {
    id: "jacket",
    title: "Jacket Back",
    value: "jacket",
    icon: BriefcaseBusiness,

    tableData: [
      {
        id: 1,
        item: "Small Back",
        size: "8 - 10 inches",
        placement: "Upper back",
      },
      {
        id: 2,
        item: "Standard Back",
        size: "10 - 12 inches",
        placement: "Center back",
      },
      {
        id: 3,
        item: "Large Back",
        size: "12 - 14 inches",
        placement: "Large jackets",
      },
    ],
  },

  {
    id: "towel",
    title: "Towel & Others",
    value: "towel",
    icon: PanelsTopLeft,

    tableData: [
      {
        id: 1,
        item: "Bath Towel",
        size: "4 - 6 inches",
        placement: "Lower corner",
      },
      {
        id: 2,
        item: "Hand Towel",
        size: "3 - 4 inches",
        placement: "Lower center",
      },
      {
        id: 3,
        item: "Tote Bag",
        size: "4 - 6 inches",
        placement: "Front center",
      },
    ],
  },
];
// import {
//   Shirt,
//   Badge,
//   Heart,
//   BriefcaseBusiness,
//   PanelsTopLeft,
// } from "lucide-react";
// import image1 from '../../icons/left chest.png';
// import image2 from '../../icons/right chest.png';
// import image3 from '../../icons/Center chest.png';
// import image4 from '../../icons/Full front.png';
// import image5 from '../../icons/Back upper.png';
// import image6 from '../../icons/Back full.png';

// export const sizeGuideData = [
//   {
//     id: "garments",
//     title: "Embroidery Placement",
//     value: "garments",
//     icon: Shirt,

//     tableData: [
//       {
//         id: 1,
//         item: "Left Chest",
//         size: "3.5 - 4 inches",
//         placement: "7 - 9 inches below shoulder seam",
//         notes:"Best for logos and small text designs.",
//         image: image1,
//       },
//       {
//         id: 2,
//         item: "Right Chest",
//         size: "3.5 - 4 inches",
//         placement: "7 - 9 inches below shoulder seam",
//         notes: "Ideal for name, text or logo.",
//         image:image2,
//       },
//       {
//         id: 3,
//         item: "Center Chest",
//         size: "8 - 10 inches",
//         placement: "Center of the chest area",
//         notes :"Perfect for larger logos and designs.",
//         image: image3,
//       },
//       {
//         id: 5,
//         item: "Front Full",
//         size: "3 - 4 inches",
//         placement: "2 - 4 inches above sleeve hem",
//         notes:"Best for big logos or custom artwork.",
//         image:image4
//       },
//       {
//         id: 6,
//         item: "Back (Upper)",
//         size: "3 - 4 inches",
//         placement: "2 - 4 inches above sleeve hem",
//         notes:"Best for big logos or custom artwork.",
//         image: image5
//       },
//       {
//         id: 7,
//         item: "Back (Full)",
//         size: "3 - 4 inches",
//         placement: "2 - 4 inches above sleeve hem",
//         notes:"Best for big logos or custom artwork.",
//         image: image6
//       },
//     ],
//   },

//   {
//     id: "cap",
//     title: "Cap Embroidery",
//     value: "cap",
//     icon: Badge,

//     tableData: [
//       {
//         id: 1,
//         item: "Front Center",
//         size: "2.25 inches high",
//         placement: "Center front panel",
//       },
//       {
//         id: 2,
//         item: "Left Panel",
//         size: "2 - 2.5 inches",
//         placement: "Side panel center",
//       },
//       {
//         id: 3,
//         item: "Right Panel",
//         size: "2 - 2.5 inches",
//         placement: "Side panel center",
//       },
//       {
//         id: 4,
//         item: "Back",
//         size: "1 - 2 inches",
//         placement: "Above adjustment strap",
//       },
//     ],
//   },

//   {
//     id: "logo",
//     title: "Left Chest Logo",
//     value: "logo",
//     icon: Heart,

//     tableData: [
//       {
//         id: 1,
//         item: "Standard Logo",
//         size: "3.5 - 4 inches",
//         placement: "Left chest",
//       },
//       {
//         id: 2,
//         item: "Small Logo",
//         size: "2.5 - 3 inches",
//         placement: "Smaller garments",
//       },
//       {
//         id: 3,
//         item: "Large Logo",
//         size: "4 - 5 inches",
//         placement: "Jackets and larger apparel",
//       },
//     ],
//   },

//   {
//     id: "jacket",
//     title: "Jacket Back",
//     value: "jacket",
//     icon: BriefcaseBusiness,

//     tableData: [
//       {
//         id: 1,
//         item: "Small Back",
//         size: "8 - 10 inches",
//         placement: "Upper back",
//       },
//       {
//         id: 2,
//         item: "Standard Back",
//         size: "10 - 12 inches",
//         placement: "Center back",
//       },
//       {
//         id: 3,
//         item: "Large Back",
//         size: "12 - 14 inches",
//         placement: "Large jackets",
//       },
//     ],
//   },

//   {
//     id: "towel",
//     title: "Towel & Others",
//     value: "towel",
//     icon: PanelsTopLeft,

//     tableData: [
//       {
//         id: 1,
//         item: "Bath Towel",
//         size: "4 - 6 inches",
//         placement: "Lower corner",
//       },
//       {
//         id: 2,
//         item: "Hand Towel",
//         size: "3 - 4 inches",
//         placement: "Lower center",
//       },
//       {
//         id: 3,
//         item: "Tote Bag",
//         size: "4 - 6 inches",
//         placement: "Front center",
//       },
//     ],
//   },
// ];






import {
  Shirt,
  Badge,
  Heart,
  BriefcaseBusiness,
  PanelsTopLeft,
  UserRound,
  ShoppingBag,
  Layers3,
  Home,
} from "lucide-react";

import image1 from "../../icons/left chest.png";
import image2 from "../../icons/right chest.png";
import image3 from "../../icons/Center chest.png";
import image4 from "../../icons/Full front.png";
import image5 from "../../icons/Back upper.png";
import image6 from "../../icons/Back full.png";

export const sizeGuideData = [
  /* =========================================================
     EXISTING GARMENTS
  ========================================================= */
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
        notes: "Best for logos and small text designs.",
        image: image1,
      },
      {
        id: 2,
        item: "Right Chest",
        size: "3.5 - 4 inches",
        placement: "7 - 9 inches below shoulder seam",
        notes: "Ideal for name, text or logo.",
        image: image2,
      },
      {
        id: 3,
        item: "Center Chest",
        size: "8 - 10 inches",
        placement: "Center of the chest area",
        notes: "Perfect for larger logos and designs.",
        image: image3,
      },
      {
        id: 5,
        item: "Front Full",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes: "Best for big logos or custom artwork.",
        image: image4,
      },
      {
        id: 6,
        item: "Back (Upper)",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes: "Best for big logos or custom artwork.",
        image: image5,
      },
      {
        id: 7,
        item: "Back (Full)",
        size: "3 - 4 inches",
        placement: "2 - 4 inches above sleeve hem",
        notes: "Best for big logos or custom artwork.",
        image: image6,
      },
    ],
  },

  /* =========================================================
     EXISTING CAP
  ========================================================= */
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

  /* =========================================================
     EXISTING LOGO
  ========================================================= */
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

  /* =========================================================
     EXISTING JACKET
  ========================================================= */
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

  /* =========================================================
     EXISTING TOWEL
  ========================================================= */
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

  /* =========================================================
     01 NAMES & MONOGRAMS EMBROIDERY
  ========================================================= */
  {
    id: "names-monograms",
    title: "Names & Monograms Embroidery",
    value: "names-monograms",
    icon: UserRound,

    tableData: [
      {
        id: 1,
        item: "Chest Name (Left/Right)",
        placement: "Left or right chest area Above pocket or seam",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 0.5”–1” (1.5 cm–2.5 cm)",
        bestFor: "Employee names, small text branding",
        notes: "Keep text short for best readability.",
      },
      {
        id: 2,
        item: "Sleeve Name",
        placement: "Left or right sleeve 1–2” below shoulder seam",
        size:
          "W: 2”–4” (5 cm–10 cm)\nH: 0.5”–1” (1.5 cm–2.5 cm)",
        bestFor: "Personal names, team names",
        notes: "Avoid long names on narrow sleeves.",
      },
      {
        id: 3,
        item: "Back Yoke Name",
        placement: "Upper back yoke Below collar seam",
        size:
          "W: 3”–6” (7.5 cm–15 cm)\nH: 0.5”–1” (1.5 cm–2.5 cm)",
        bestFor: "Names, brand tags, personalization",
        notes: "Centered for a balanced look.",
      },
      {
        id: 4,
        item: "Cuff Name",
        placement: "On cuff edge Left or right cuff",
        size:
          "W: 1.5”–3” (4 cm–7.5 cm)\nH: 0.4”–0.8” (1 cm–2 cm)",
        bestFor: "Initials, names, personal style",
        notes: "Best for short names or initials.",
      },
      {
        id: 5,
        item: "Collar Name",
        placement: "On collar tip or band Left or right side",
        size:
          "W: 1.5”–3” (4 cm–7.5 cm)\nH: 0.4”–0.8” (1 cm–2 cm)",
        bestFor: "Names, initials, brand identity",
        notes: "Keep small for a clean finish.",
      },
      {
        id: 6,
        item: "Towel Monogram",
        placement: "Or corner Center lower band",
        size:
          "W: 1.5”–3.5” (4 cm–9 cm)\nH: 1.5”–3.5” (4 cm–9 cm)",
        bestFor: "Monograms, initials, gifts",
        notes: "Use larger size for luxury look.",
      },
      {
        id: 7,
        item: "Hat Name (Back)",
        placement: "Back above strap Centered",
        size:
          "W: 2”–4” (5 cm–10 cm)\nH: 0.4”–0.8” (1 cm–2 cm)",
        bestFor: "Personal names, casual branding",
        notes: "Short names work best.",
      },
      {
        id: 8,
        item: "Monogram (3 Letter)",
        placement: "Centered placement On pocket, chest, or towel",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2”–4” (5 cm–10 cm)",
        bestFor: "Elegant monograms, weddings, gifts",
        notes: "Center letter slightly larger for balance.",
      },
    ],
  },

  /* =========================================================
     02 BAGS & ACCESSORIES
  ========================================================= */
  {
    id: "bags-accessories",
    title: "Bags & Accessories Embroidery",
    value: "bags-accessories",
    icon: ShoppingBag,

    tableData: [
      {
        id: 1,
        item: "Tote Bag",
        placement: "Front center area Keep away from seams and edges",
        size:
          "W: 6”–10” (15 cm–25 cm)\nH: 6”–8” (15 cm–20 cm)",
        bestFor: "Logos, artwork, brand designs",
        notes: "Best for medium to large logos.",
      },
      {
        id: 2,
        item: "Backpack",
        placement: "Front pocket area Center placement",
        size:
          "W: 4”–7” (10 cm–18 cm)\nH: 4”–7” (10 cm–18 cm)",
        bestFor: "School logos, team logos, text",
        notes: "Avoid zippers and curved seams.",
      },
      {
        id: 3,
        item: "Duffel Bag",
        placement: "Side panel center Flat area recommended",
        size:
          "W: 6”–10” (15 cm–25 cm)\nH: 4”–7” (10 cm–18 cm)",
        bestFor: "Team logos, company logos",
        notes: "Keep design away from handles.",
      },
      {
        id: 4,
        item: "Pouch / Travel Pouch",
        placement: "Front center area Avoid folds and edges",
        size:
          "W: 3”–6” (7.5 cm–15 cm)\nH: 2.5”–4” (6.5 cm–10 cm)",
        bestFor: "Small logos, initials, monograms",
        notes: "Perfect for minimal embroidery.",
      },
      {
        id: 5,
        item: "Apron",
        placement: "Chest area Center placement",
        size:
          "W: 4”–7” (10 cm–18 cm)\nH: 4”–7” (10 cm–18 cm)",
        bestFor: "Brand logos, names, text",
        notes: "Avoid seams and pocket areas.",
      },
      {
        id: 6,
        item: "Laptop Sleeve",
        placement: "Front center area Flat surface only",
        size:
          "W: 4”–7” (10 cm–18 cm)\nH: 4”–7” (10 cm–18 cm)",
        bestFor: "Company logos, initials",
        notes: "Keep design small for best results.",
      },
      {
        id: 7,
        item: "Cosmetic Bag",
        placement: "Front center area On flat panel",
        size:
          "W: 3”–6” (7.5 cm–15 cm)\nH: 2.5”–4” (6.5 cm–10 cm)",
        bestFor: "Name, text, small logos",
        notes: "Avoid corners and binding areas.",
      },
      {
        id: 8,
        item: "Luggage Tag",
        placement: "Front side center Inside stitched area",
        size:
          "W: 2”–3.5” (5 cm–9 cm)\nH: 1.5”–2.5” (4 cm–6.5 cm)",
        bestFor: "Initials, small logos, name tags",
        notes: "Small area, keep design simple.",
      },
    ],
  },

  /* =========================================================
     03 SHIRT & POLO EMBROIDERY
  ========================================================= */
  {
    id: "shirt-polo",
    title: "Shirt & Polo Embroidery",
    value: "shirt-polo",
    icon: Shirt,

    tableData: [
      {
        id: 1,
        item: "Left Chest",
        placement:
          "Left chest area 3”–4” below shoulder seam above pocket area",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Logos, text, small designs",
        notes: "Best for company logos or name tags.",
        image: image1,
      },
      {
        id: 2,
        item: "Right Chest",
        placement:
          "Right chest area 3”–4” below shoulder seam above pocket area",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Name, text, initials, logo",
        notes: "Ideal for employee names or branding.",
        image: image2,
      },
      {
        id: 3,
        item: "Center Chest",
        placement: "Center chest area 2”–3” below collar centered",
        size:
          "W: 6”–10” (15 cm–25 cm)\nH: 6”–10” (15 cm–25 cm)",
        bestFor: "Large logos, team designs",
        notes: "Perfect for bigger logos and designs.",
        image: image3,
      },
      {
        id: 4,
        item: "Sleeve (Left / Right)",
        placement: "Sleeve area 1”–2” below shoulder seam on sleeve",
        size:
          "W: 2”–3.5” (5 cm–9 cm)\nH: 2”–3.5” (5 cm–9 cm)",
        bestFor: "Patches, icons, sponsor logos",
        notes: "Great for sleeve logos or patches.",
      },
      {
        id: 5,
        item: "Pocket",
        placement: "Pocket area Centered on pocket or above it",
        size:
          "W: 2”–3” (5 cm–7.5 cm)\nH: 2”–3” (5 cm–7.5 cm)",
        bestFor: "Small logos, text, icons",
        notes: "Keep within pocket size for best results.",
      },
      {
        id: 6,
        item: "Collar",
        placement: "Collar area On collar points or above button",
        size:
          "W: 1.5”–2.5” (4 cm–6.5 cm)\nH: 1.5”–2.5” (4 cm–6.5 cm)",
        bestFor: "Initials, small text, brand marks",
        notes: "Keep small for a clean look.",
      },
      {
        id: 7,
        item: "Yoke (Back)",
        placement: "Yoke area Upper back yoke below collar seam",
        size:
          "W: 6”–10” (15 cm–25 cm)\nH: 2”–4” (5 cm–10 cm)",
        bestFor: "Company logos, branding, text",
        notes: "Great for large back branding on shirts.",
        image: image5,
      },
    ],
  },

  /* =========================================================
     04 JACKET & OUTERWEAR
  ========================================================= */
  {
    id: "jacket-outerwear",
    title: "Jacket & Outerwear Embroidery",
    value: "jacket-outerwear",
    icon: BriefcaseBusiness,

    tableData: [
      {
        id: 1,
        item: "Left Chest",
        placement:
          "Left chest area 3”–4” below shoulder seam above pocket",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Logos, text, small designs",
        notes: "Best for company logos or name tags.",
      },
      {
        id: 2,
        item: "Right Chest",
        placement:
          "Right chest area 3”–4” below shoulder seam above pocket",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Name, text, initials, logo",
        notes: "Ideal for employee names or branding.",
      },
      {
        id: 3,
        item: "Full Front",
        placement: "Front area Between chest and waist",
        size:
          "W: 8”–12” (20 cm–30 cm)\nH: 8”–14” (20 cm–35 cm)",
        bestFor: "Large logos, team designs, custom artwork",
        notes: "Best for big logos or detailed designs.",
        image: image4,
      },
      {
        id: 4,
        item: "Back (Upper)",
        placement: "Upper back area 3”–4” below collar",
        size:
          "W: 8”–12” (20 cm–30 cm)\nH: 3”–6” (8 cm–15 cm)",
        bestFor: "Company logos, web address, branding",
        notes: "Great for branding or small back logos.",
        image: image5,
      },
      {
        id: 5,
        item: "Back (Full)",
        placement: "Full back area Between shoulders and waist",
        size:
          "W: 10”–14” (25 cm–35 cm)\nH: 10”–14” (25 cm–35 cm)",
        bestFor: "Large artwork, club logos, custom designs",
        notes: "Best for big, detailed or multi-color designs.",
        image: image6,
      },
      {
        id: 6,
        item: "Sleeve",
        placement: "Upper sleeve area 2”–3” below shoulder",
        size:
          "W: 2”–4” (5 cm–10 cm)\nH: 2”–4” (5 cm–10 cm)",
        bestFor: "Patches, flags, icons, emblems",
        notes: "Great for patches or small branding.",
      },
      {
        id: 7,
        item: "Collar / Hood",
        placement: "Collar or hood area Center placement",
        size:
          "W: 2”–4” (5 cm–10 cm)\nH: 1”–2” (2.5 cm–5 cm)",
        bestFor: "Text, initials, small logos",
        notes: "Ideal for subtle branding.",
      },
    ],
  },

  /* =========================================================
     05 CAP & HAT EMBROIDERY
  ========================================================= */
  {
    id: "cap-hat",
    title: "Cap & Hat Embroidery",
    value: "cap-hat",
    icon: Badge,

    tableData: [
      {
        id: 1,
        item: "Cap Front (Center)",
        placement: "Front center panel Above the brim, centered",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 1.5”–2.5” (4 cm–6.5 cm)",
        bestFor: "Logos, text, brand designs",
        notes: "Keep away from the crown flex for best results.",
      },
      {
        id: 2,
        item: "Cap Side (Left / Right)",
        placement: "Left or right side panel 2”–3” above the brim edge",
        size:
          "W: 2”–3” (5 cm–7.5 cm)\nH: 1.2”–2.2” (3 cm–5.5 cm)",
        bestFor: "Small logos, initials, icons",
        notes: "Ideal for small logos or side branding.",
      },
      {
        id: 3,
        item: "Cap Back (Back Center)",
        placement: "Back center above opening 1”–1.5” above strap opening",
        size:
          "W: 1.5”–3.5” (4 cm–9 cm)\nH: 0.8”–1.5” (2 cm–4 cm)",
        bestFor: "Text, website, team name",
        notes: "Keep it small and clear for readability.",
      },
      {
        id: 4,
        item: "5 Panel Cap (Front Panel)",
        placement: "Front panel Centered (flat embroidery area)",
        size:
          "W: 3”–5” (7.5 cm–12.5 cm)\nH: 1.8”–3” (4.5 cm–7.5 cm)",
        bestFor: "Big logos, patch style designs",
        notes: "More flat area gives more embroidery space.",
      },
      {
        id: 5,
        item: "Trucker Cap (Front Foam)",
        placement: "Front foam panel Centered above the brim",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 1.5”–2.5” (4 cm–6.5 cm)",
        bestFor: "Logos, text, outdoor brands",
        notes: "Foam allows clean and high quality stitching.",
      },
      {
        id: 6,
        item: "Beanie Hat (Cuff Area)",
        placement: "Center of cuff Front side (folded area)",
        size:
          "W: 2”–4” (5 cm–10 cm)\nH: 0.8”–2” (2 cm–5 cm)",
        bestFor: "Text, initials, small logos",
        notes: "Avoid bulk designs on thin knit beanies.",
      },
    ],
  },

  /* =========================================================
     06 EMBROIDERY PLACEMENT ON GARMENTS
  ========================================================= */
  {
    id: "garment-placement",
    title: "Embroidery Placement on Garments",
    value: "garment-placement",
    icon: Layers3,

    tableData: [
      {
        id: 1,
        item: "Left Chest",
        placement: "Left chest area 3”–4” below shoulder seam",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Logos, text, small designs",
        notes: "Best for logos and small text designs.",
        image: image1,
      },
      {
        id: 2,
        item: "Right Chest",
        placement: "Right chest area 3”–4” below shoulder seam",
        size:
          "W: 2.5”–4.5” (6.5 cm–11.5 cm)\nH: 2.5”–4.5” (6.5 cm–11.5 cm)",
        bestFor: "Name, text, or logo",
        notes: "Ideal for name, text or logo.",
        image: image2,
      },
      {
        id: 3,
        item: "Center Chest",
        placement: "Center chest area 2”–3” below collar",
        size:
          "W: 6”–10” (15 cm–25 cm)\nH: 6”–10” (15 cm–25 cm)",
        bestFor: "Large logos, team designs",
        notes: "Perfect for larger logos and designs.",
        image: image3,
      },
      {
        id: 4,
        item: "Full Front",
        placement: "Full front area Between chest and waist",
        size:
          "W: 8”–12” (20 cm–30 cm)\nH: 8”–14” (20 cm–35 cm)",
        bestFor: "Big logos, custom artwork",
        notes: "Best for big logos or custom artwork.",
        image: image4,
      },
      {
        id: 5,
        item: "Back (Upper)",
        placement: "Upper back area 3”–4” below collar seam",
        size:
          "W: 8”–12” (20 cm–30 cm)\nH: 3”–6” (8 cm–15 cm)",
        bestFor: "Company logos, branding",
        notes: "Great for company logos or branding.",
        image: image5,
      },
      {
        id: 6,
        item: "Back (Full)",
        placement: "Full back area Between shoulders and waist",
        size:
          "W: 10”–14” (25 cm–35 cm)\nH: 10”–14” (25 cm–35 cm)",
        bestFor: "Large artwork, detailed designs",
        notes: "Best for large artwork and designs.",
        image: image6,
      },
    ],
  },

  /* =========================================================
     07 TOWELS & HOME TEXTILE
  ========================================================= */
  {
    id: "towels-home-textile",
    title: "Towels & Home Textile Embroidery",
    value: "towels-home-textile",
    icon: Home,

    tableData: [
      {
        id: 1,
        item: "Hand Towel",
        placement: "Border area Lower band or corner",
        size:
          "W: 3”–6” (7.5 cm–15 cm)\nH: 1.5”–3” (4 cm–7.5 cm)",
        bestFor: "Names, initials, monograms, small logos",
        notes: "Keep above the hem and edges.",
      },
      {
        id: 2,
        item: "Bath Towel",
        placement: "Lower border area Center placement",
        size:
          "W: 6”–12” (15 cm–30 cm)\nH: 2”–4” (5 cm–10 cm)",
        bestFor: "Large names, logos, decorative designs",
        notes: "Ideal for more visible embroidery.",
      },
      {
        id: 3,
        item: "Face Towel",
        placement: "Border or corner Lower band or corner",
        size:
          "W: 2.5”–5” (6.5 cm–12.5 cm)\nH: 1”–2.5” (2.5 cm–6.5 cm)",
        bestFor: "Initials, small logos, delicate designs",
        notes: "Perfect for personal use or gifts.",
      },
      {
        id: 4,
        item: "Kitchen Towel",
        placement: "Bottom border Center placement",
        size:
          "W: 3”–7” (7.5 cm–18 cm)\nH: 1.5”–3” (4 cm–7.5 cm)",
        bestFor: "Kitchen themes, text, small logos",
        notes: "Keep design away from folds.",
      },
      {
        id: 5,
        item: "Blanket",
        placement: "Corner area Lower right or left corner",
        size:
          "W: 4”–10” (10 cm–25 cm)\nH: 2”–5” (5 cm–12.5 cm)",
        bestFor: "Monograms, names, decorative logos",
        notes: "Avoid thick seams and stitched edges.",
      },
      {
        id: 6,
        item: "Pillow (Front)",
        placement: "Center area Front panel",
        size:
          "W: 4”–10” (10 cm–25 cm)\nH: 3”–8” (7.5 cm–20 cm)",
        bestFor: "Monograms, quotes, decorative designs",
        notes: "Ensure design is balanced.",
      },
      {
        id: 7,
        item: "Cushion Cover",
        placement: "Center area Front side",
        size:
          "W: 4”–9” (10 cm–23 cm)\nH: 3”–7” (7.5 cm–18 cm)",
        bestFor: "Names, initials, home décor designs",
        notes: "Consider zipper placement.",
      },
      {
        id: 8,
        item: "Table Runner",
        placement: "End panel Center placement",
        size:
          "W: 6”–12” (15 cm–30 cm)\nH: 2”–5” (5 cm–12.5 cm)",
        bestFor: "Decorative motifs, seasonal designs",
        notes: "Keep design proportional.",
      },
    ],
  },
];
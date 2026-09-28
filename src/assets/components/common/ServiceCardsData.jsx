import img1 from '../../icons/Hat.png'
import img2 from '../../icons/Jacket.png'
import img3 from '../../icons/LeftChest.png'
import img4 from '../../icons/Applique.png'
import img5 from '../../icons/3D.png'
import img6 from '../../icons/Patches.png'
import img7 from '../../icons/LogoDigitizing.png'
import img8 from '../../icons/Hat.png'
import img9 from '../../icons/Chenille.png'
import img10 from '../../icons/Shirt.png'
import img11 from '../../icons/DFT.png'
import img12 from '../../icons/Die Cutting.png'
import img13 from '../../icons/Engraving.png'
import img14 from '../../icons/Digital Printing.png'
import img15 from '../../icons/Flexographics.png'
import img16 from '../../icons/Laser Cutting.png'
import img17 from '../../icons/Offset printing.png'
import img18 from '../../icons/Screen Printing.png'
import img19 from '../../icons/Sublimation Design.png'


export const serviceCards = {
  embroidery: [

    /* =========================
       01 CAP DIGITIZING
    ========================= */
    {
      id: 1,
      title: "Cap Digitizing",
      slug: "cap-digitizing",
      // exploreLink: "/services/cap-digitizing",
      description:
        "Professional cap digitizing with accurate stitch angles and optimized stitch paths for clean, sharp embroidery on curved cap surfaces. Every design is carefully prepared to make sure smooth production, excellent coverage, and long lasting embroidery qimagety.",
      image: img1,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",

          title: "Quality Cap Digitizing Services",

          description:
            "Professional Cap Embroidery Digitizing for clean, accurate designs that stitch smoothly on curved and structured caps. We prepare each file with the right stitch direction, density and underlay for a neat finish."
        },

        introSection: {
          title: "Types of Embroidery Cap Digitizing We Offer",

          description1:
            "We create embroidery digitizing files for different cap styles and materials, with each design prepared according to the shape and structure of the headwear. Our cap digitizing service covers everything from everyday caps to detailed and specialised designs.",

          description2:
            "We provide cap digitizing for Baseball Caps, Snapback Caps, Trucker Caps, Dad Hats, Flat Bill / Flat Brim Caps, 5 Panel Caps, 6 Panel Caps, Flexfit / Fitted Caps, Bucket Hats, Visors, and Beanies / Winter.",

          typesToDisplay: [
            "Baseball Caps",
            "Snapback Caps",
            "Trucker Caps",
            "Dad Hats",
            "Flat Bill / Flat Brim Caps",
            "5 Panel Caps",
            "6 Panel Caps",
            "Flexfit / Fitted Caps",
            "Bucket Hats",
            "Visors",
            "Beanies / Winter",
          ]
        },

        capTypes: [
          {
            id: "baseball-caps",
            name: "Baseball Caps",

            description:
              "Baseball caps are one of the most common choices for embroidered logos, team designs and branded headwear. Our logo cap digitizing process takes the curved front panel into account, with careful stitch placement and density to help the design sew smoothly without unnecessary buildup around the center seam."
          },

          {
            id: "snapback-caps",
            name: "Snapback Caps",

            description:
              "Snapback caps have a structured front and adjustable back, making them popular for brands, sportswear and promotional merchandise. We create cap embroidery files with suitable stitch direction, underlay and density for the firm front panel, helping logos and lettering maintain a clean appearance after stitching."
          },

          {
            id: "trucker-caps",
            name: "Trucker Caps",

            description:
              "Trucker caps feature a structured front with a mesh back, so the embroidery is generally placed on the front panel. We adjust the digitizing according to the front material and keep stitch density under control to achieve a neat result without putting unnecessary stress on the fabric."
          },

          {
            id: "dad-hats",
            name: "Dad Hats",

            description:
              "Dad hats have a softer, more relaxed front than structured caps, which means the fabric can move more during embroidery. Our digitizing approach uses suitable density and underlay to help reduce puckering while keeping logos, lettering and smaller artwork clear on the finished hat."
          },

          {
            id: "flat-bill-flat-brim-caps",
            name: "Flat Bill / Flat Brim Caps",

            description:
              "Flat bill caps have a wider, structured front that works well with bold logos, lettering and detailed branding. We plan the stitch sequence around the cap's front panel and create the file at the required size rather than simply resizing an existing design, helping maintain proper stitch quality."
          },

          {
            id: "5-panel-caps",
            name: "5 Panel Caps",

            description:
              "The front panel on a five-panel cap has a different shape and seam arrangement from traditional six-panel styles. We position and build the embroidery with these seams in mind, helping keep the design balanced and avoiding unnecessary stitching directly over areas that may affect the final appearance."
          },

          {
            id: "6-panel-caps",
            name: "6 Panel Caps",

            description:
              "Six panel caps have a centre seam running through the front, which can affect how an embroidered logo sits on the cap. Our structured cap digitizing takes this construction into consideration, with stitch direction and sequencing planned to help the design cross the panel smoothly where required."
          },

          {
            id: "flexfit-fitted-caps",
            name: "Flexfit / Fitted Caps",

            description:
              "Flexfit and fitted caps use stretchable materials that require a different approach from rigid structured headwear. We adjust stitch density, underlay and pull compensation according to the fabric so the finished embroidery can retain its shape without making the cap front look overly tight or distorted."
          },

          {
            id: "bucket-hats",
            name: "Bucket Hats",

            description:
              "Bucket hats have a softer, rounded construction and may use cotton, canvas or other flexible materials. We create embroidery files with the fabric and available stitching area in mind, keeping the design practical for the curved surface while preserving important details in the artwork."
          },

          {
            id: "visors",
            name: "Visors",

            description:
              "Visors have a limited embroidery area compared with a full cap front, so design size and placement need extra attention. Our digitizers prepare the artwork specifically for the visor's available space instead of simply shrinking a larger cap design, helping maintain readable lettering and clean stitch coverage."
          },

          {
            id: "beanies-winter-hats",
            name: "Beanies / Winter Hats",

            description:
              "Beanies and winter hats are made from knitted or stretchy materials that can move considerably during embroidery. We use lighter stitch coverage and suitable underlay where needed to help control fabric movement while keeping the design comfortable and visually clean on the finished headwear."
          }
        ],

        submissionSteps: {
          title: "How to Submit an Order for Custom Cap Digitizing",

          intro:
            "Getting your cap design ready for embroidery is simple. Send us the artwork and some details about the cap and embroidery requirements, and our team can prepare the appropriate digitizing file for production.",

          steps: [
            {
              number: 1,
              title: "Send Your Artwork",

              details:
                "Upload or send us the clearest format you have. Vector files such as AI, EPS and SVG are ideal, while a high resolution PNG can also be used for digitizing."
            },

            {
              number: 2,
              title: "Tell Us Your Cap Style",

              details:
                "Let us know which type of headwear you are using, such as a snapback, baseball cap, trucker cap, dad hat, fitted cap, bucket hat, visor or beanie. This helps us choose the right digitizing approach for the material and construction."
            },

            {
              number: 3,
              title: "Choose Your Embroidery Style",

              details:
                "Tell us whether you need standard flat embroidery or 3d puff cap digitizing. If you're unsure which method will work better for your artwork, we can advise you based on the design and cap type."
            },

            {
              number: 4,
              title: "Provide Your Design Size",

              details:
                "Include the maximum width or height you need for the embroidery. If you already know the cap model or available embroidery area, send those details with your order. If you're not sure about the correct size, our team can help you determine a suitable measurement."
            },

            {
              number: 5,
              title: "Select Your Machine Format",

              details:
                "Tell us which embroidery machine format you need for production. We can provide your final cap embroidery files in the format required by your machine."
            },

            {
              number: 6,
              title: "Share Thread Color Details",

              details:
                "If you have specific brand colors, thread preferences or Pantone references, include them with your artwork. This gives our digitizers a clear reference when preparing the design for embroidery."
            },

            {
              number: 7,
              title: "Submit Your Order",

              details:
                "Send your artwork and requirements to Infinity Digitizing to get started. Once we have the necessary details, our digitizing team will prepare your file according to the cap style, design and production requirements."
            }
          ]
        },

        fileFormatsSection: {
          title:
            "File Formats We Deliver for Custom Cap Digitizing",

          description:
            "We deliver cap embroidery files in the major machine formats, ready for production on different embroidery machines. Choose the format you need, and we'll prepare your custom cap design accordingly.",

          formats: [
            "DST",
            "PES",
            "JEF",
            "EXP",
            "VP3",
            "HUS",
            "XXX",
            "SEW",
            "CSD",
            "TAP",
            "PEC",
            "VIP",
            "EMB",
            "& More"
          ]
        }
      }
    },


    /* =========================
       02 JACKET BACK
    ========================= */
    {
      id: 2,
      title: "Jacket Back Digitizing",
      slug: "jacket-back-digitizing",
      //  exploreLink: "/jacket-back-digitizing",
      description:
        "Large-format jacket back digitizing created for oversized embroidery with balanced stitch density, smooth coverage, and exceptional detail. We produce machine ready files that deliver bold, professional results while maintaining excellent stitch quality across larger designs.",
      image: img2,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Jacket Back Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        jacketTypes: [],

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       03 LEFT CHEST
    ========================= */
    {
      id: 3,
      title: "Left Chest Digitizing",
      slug: "left-chest-digitizing",
      //  exploreLink: "/left-chest-digitizing",
      description:
        "Perfectly balanced left chest embroidery digitizing for business logos, uniforms, corporate apparel, and promotional garments. Every file is carefully optimized to produce clean stitching, sharp details, and a polished finish on smaller embroidery areas.",
      image: img3,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Left Chest Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       04 APPLIQUE
    ========================= */
    {
      id: 4,
      title: "Applique Embroidery Digitizing",
      slug: "applique-embroidery-digitizing",
      // exploreLink: "/applique-embroidery-digitizing",
      description:
        "High quality applique embroidery digitizing with precise placement lines, secure tack down stitches, and smooth satin borders. Our machine ready files ensure clean fabric placement, professional finishing, and consistent embroidery results on every project.",
      image: img4,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Applique Embroidery Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       05 3D PUFF
    ========================= */
    {
      id: 5,
      title: "3D Puff Embroidery",
      slug: "3d-puff-embroidery",
      //  exploreLink: "/3d-puff-embroidery",
      description:
        "Premium 3D puff embroidery digitizing designed to create bold, raised effects with clean edges and excellent stitch support. Every design is optimized to achieve impressive dimension, lasting durability, and a professional embroidered appearance.",
      image: img5,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality 3D Puff Embroidery Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       06 EMBROIDERED PATCHES
    ========================= */
    {
      id: 6,
      title: "Embroidered Patches",
      slug: "embroidered-patches",
      // exploreLink: "/embroidered-patches",
      description:
        "Custom embroidered patch digitizing for woven, merrow, laser cut, and traditional patches with outstanding precision. Every design is prepared to deliver sharp details, clean borders, durable stitching, and production ready embroidery files.",
      image: img6,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Embroidered Patch Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       07 LOGO DIGITIZING
    ========================= */
    {
      id: 7,
      title: "Logo Digitizing",
      slug: "logo-digitizing",
      // exploreLink: "/logo-digitizing",
      description:
        "Convert your logo into a high quality embroidery design with sharp details, clean stitch paths, and balanced density. We create machine ready embroidery files that preserve your brand identity while delivering professional stitching on every garment.",
      image: img7,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Logo Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       08 CUSTOM HAT
    ========================= */
    {
      id: 8,
      title: "Custom Hat Embroidery",
      slug: "custom-hat-embroidery",
        // exploreLink: "/custom-hat-embroidery",
      description:
        "Expert custom hat embroidery digitizing for front, side, and back designs with accurate stitch alignment and optimized stitch sequencing. Every file is created to produce clean embroidery, excellent coverage, and professional results on all hat styles.",
      image: img8,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Custom Hat Embroidery Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       09 CHENILLE
    ========================= */
    {
      id: 9,
      title: "Chenille Digitizing",
      slug: "chenille-digitizing",
      // exploreLink: "/chenille-digitizing",
      description:
        "Professional chenille digitizing is designed to create soft textures, bold lettering, and eye-catching embroidered designs. Our expertly crafted files ensure smooth production, consistent stitch quality, and outstanding visual impact for every chenille project.",
      image: img9,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Chenille Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    },


    /* =========================
       10 SHIRT EMBROIDERY
    ========================= */
    {
      id: 10,
      title: "Shirt Embroidery Digitizing",
      slug: "shirt-embroidery-digitizing",
      // exploreLink: "/shirt-embroidery-digitizing",
      description:
        "Custom shirt embroidery digitizing for polos, uniforms, promotional apparel and branded clothing. Every embroidery file is carefully optimized to deliver sharp stitching, excellent detail, and a clean professional finish across all fabric types.",
      image: img10,

      detail: {
        heroSection: {
          category: "EMBROIDERY DIGITIZING",
          title: "Quality Shirt Embroidery Digitizing Services",
          description: ""
        },

        introSection: {
          title: "",
          description1: "",
          description2: ""
        },

        submissionSteps: {
          title: "",
          intro: "",
          steps: []
        },

        fileFormatsSection: {
          title: "",
          description: "",
          formats: []
        }
      }
    }
  ],


  /* ==========================================
     VECTOR SERVICES
  ========================================== */

  vector: [
    {
      id: 1,
      title: "DTF Design Preparation",
      slug: "dtf-design-preparation",
      description:
        "Production ready DTF artwork with clean layers, vibrant colors, and print perfect precision. Every design is carefully prepared for smooth transfers, accurate color reproduction, and consistent printing results on garments of every size and style.",
      image: img11
    },

    {
      id: 2,
      title: "Engraving Design",
      slug: "engraving-design",
      description:
        "Detailed vector artwork crafted for smooth, accurate engraving on metal, wood, acrylic, glass, and other materials. Every design is optimized to produce sharp lines, fine details, and flawless engraving results across every project.",
      image: img13
    },

    {
      id: 3,
      title: "Screen Printing Design",
      slug: "screen-printing-design",
      description:
        "Print ready vector designs with bold lines, accurate color separations, and clean artwork for flawless screen printing. Every file is professionally prepared to ensure consistent ink coverage, sharp details, and high quality production results.",
      image: img18
    },

    {
      id: 4,
      title: "Laser Cutting Design",
      slug: "laser-cutting-design",
      description:
        "Precision vector files created for clean cuts, smooth edges, and accurate laser production. Every design is optimized with precise cut paths to deliver professional results across acrylic, wood, metal, paper, and other materials.",
      image: img16
    },

    {
      id: 5,
      title: "Sublimation Design",
      slug: "sublimation-design",
      description:
        "High resolution sublimation artwork designed for vibrant, edge to edge print quality with exceptional color accuracy. Every file is carefully prepared to produce sharp graphics, smooth gradients, and long lasting results on a wide range of products.",
      image: img19
    },

    {
      id: 6,
      title: "Digital Printing Design",
      slug: "digital-printing-design",
      description:
        "Sharp, press ready vector designs that deliver vibrant colors, crisp details, and exceptional print clarity. Every artwork file is optimized to ensure consistent quality and professional results across digital printing applications and promotional products.",
      image: img14
    },

    {
      id: 7,
      title: "Die Cutting Design",
      slug: "die-cutting-design",
      description:
        "Custom die cut vector files with accurate cut paths and clean outlines for professional finishing. Every design is carefully prepared to ensure smooth cutting, precise shaping, and reliable production across labels, packaging, and custom products.",
      image: img12
    },

    {
      id: 8,
      title: "Offset Printing Design",
      slug: "offset-printing-design",
      description:
        "Press ready vector artwork optimized for sharp details, accurate colors, and consistent offset printing. Every file is professionally prepared to produce quality prints with clean layouts, clear graphics, and reliable production performance.",
      image: img17
    },

    {
      id: 9,
      title: "Flexographic Printing Design",
      slug: "flexographic-printing-design",
      description:
        "Best quality vector files prepared for smooth, accurate flexographic printing on packaging, labels, and flexible materials. Every design is optimized to ensure clean artwork, precise registration, and consistent printing results throughout the production process.",
      image: img15
    }
  ],


  /* ==========================================
     LOGO SERVICES
  ========================================== */

  logo: [
    {
      id: 1,
      title: "Minimal Logo",
      slug: "minimal-logo",
      description:
        "Simple, clean logo designs created to deliver a modern and timeless brand identity. Every minimal logo is carefully crafted to convey professionalism, improve brand recognition, and leave a lasting impression across print and digital platforms.",
      image: img4
    },

    {
      id: 2,
      title: "Modern Logo",
      slug: "modern-logo",
      description:
        "Fresh and contemporary logo concepts crafted to help your brand stand out in today's competitive market. We design visually striking logos that combine creativity, simplicity, and versatility for a memorable business identity.",
      image: img5
    },

    {
      id: 3,
      title: "Wordmark Logo",
      slug: "wordmark-logo",
      description:
        "Custom text based logos designed to make your brand name bold, memorable, and instantly recognizable. Every wordmark is carefully styled with unique typography that reflects your business personality while maintaining a clean, professional appearance.",
      image: img5
    },

    {
      id: 4,
      title: "Combination Mark Logo",
      slug: "combination-mark-logo",
      description:
        "Perfectly balanced icons and typography combined into one powerful logo design. Our combination marks create a versatile brand identity that looks professional across websites, business cards, packaging, social media, and marketing materials.",
      image: img5
    },

    {
      id: 5,
      title: "Mascot Logo",
      slug: "mascot-logo",
      description:
        "Unique mascot logo designs created to give your brand personality, charm, and a memorable visual identity. Every illustration is customized to connect with your audience while strengthening brand recognition across every platform.",
      image: img5
    },

    {
      id: 6,
      title: "Lettermark Logo",
      slug: "lettermark-logo",
      description:
        "Professional lettermark logos that transform your business initials into sleek, memorable brand symbols. Every design is carefully crafted to create a clean, recognizable identity that works perfectly across print and digital media.",
      image: img5
    },

    {
      id: 7,
      title: "Monogram Logo",
      slug: "monogram-logo",
      description:
        "Elegant monogram logos designed with style, precision, and timeless appeal for businesses and personal brands. We combine initials into sophisticated designs that reflect professionalism while creating a strong and distinctive visual identity.",
      image: img5
    },

    {
      id: 8,
      title: "Abstract Logo",
      slug: "abstract-logo",
      description:
        "Creative abstract logo designs that transform unique shapes and symbols into meaningful brand identities. Every concept is thoughtfully crafted to capture your brand values while delivering a modern, distinctive, and memorable visual presence.",
      image: img5
    },

    {
      id: 9,
      title: "Emblem Logo",
      slug: "emblem-logo",
      description:
        "Classic emblem logos designed to build trust, authority, and a strong brand presence. We combine typography, symbols, and shapes into timeless badge style designs that work beautifully for businesses, organizations, and institutions.",
      image: img5
    },

    {
      id: 10,
      title: "Icon Logo",
      slug: "icon-logo",
      description:
        "Distinctive icon based logos designed for instant recognition across websites, packaging, mobile apps, and social media. Every icon is carefully created to represent your brand with clarity, simplicity, and long lasting visual impact.",
      image: img5
    },

    {
      id: 11,
      title: "Typography Logo",
      slug: "typography-logo",
      description:
        "Custom typography logos featuring stylish lettering that reflects your brand identity and personality. Every design is crafted with carefully selected fonts and balanced layouts to create a memorable and professional business image",
      image: img5
    },

    {
      id: 12,
      title: "Flat Logo",
      slug: "flat-logo",
      description:
        "Clean flat logo designs created with modern simplicity for maximum versatility across print, web, packaging, and digital media. Every logo delivers a timeless, professional appearance while maintaining clarity at every size and application.",
      image: img5
    }
  ]
};
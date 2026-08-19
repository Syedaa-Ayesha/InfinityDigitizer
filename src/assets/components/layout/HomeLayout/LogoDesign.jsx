// import { useState } from "react";
// import {
//   CloudUpload,
//   X,
// } from "lucide-react";

// // import InputFields from "../../auth/InputFields";
// import SelectField from "./SelectField";

// /* =====================================================
//    LOGO SERVICES
// ===================================================== */

// const logoServices = [
//   "Minimal Logo",
//   "Modern Logo",
//   "Wordmark Logo",
//   "Combination Mark Logo",
//   "Mascot Logo",
//   "Lettermark Logo",
//   "Monogram Logo",
//   "Abstract Logo",
//   "Emblem Logo",
//   "Icon Logo",
//   "Typography Logo",
//   "Flat Logo",
// ];

// /* =====================================================
//    BRANDING OPTIONS
// ===================================================== */

// const brandingOptions = [
//   "Brand Identity",
//   "Brand Guidelines",
//   "Business Branding",
//   "Product Branding",
//   "Personal Branding",
// ];

// /* =====================================================
//    SOCIAL MEDIA CHANNELS
// ===================================================== */

// const socialMediaChannels = [
//   "Instagram",
//   "Facebook",
//   "TikTok",
//   "YouTube",
//   "LinkedIn",
//   "Pinterest",
//   "X / Twitter",
// ];

// /* =====================================================
//    RETURN HOURS
// ===================================================== */

// const returnHours = [
//   "4 Hours",
//   "8 Hours",
//   "12 Hours",
//   "24 Hours",
// ];

// /* =====================================================
//    LOGO DESIGN FORM
// ===================================================== */

// const LogoDesign = () => {
//   /* ================= FORM STATES ================= */

//   const [service, setService] = useState("");
//   const [returnTime, setReturnTime] = useState("");
//   const [branding, setBranding] = useState("");
//   const [socialMedia, setSocialMedia] = useState("");
//   const [files, setFiles] = useState([]);

//   /* ================= FILE UPLOAD ================= */

//   const handleFiles = (event) => {
//     const selectedFiles = Array.from(
//       event.target.files || []
//     );

//     if (!selectedFiles.length) return;

//     setFiles((previousFiles) => {
//       const remainingSlots =
//         20 - previousFiles.length;

//       if (remainingSlots <= 0) {
//         return previousFiles;
//       }

//       const newFiles = selectedFiles
//         .slice(0, remainingSlots)
//         .map((file) => ({
//           file,
//           preview: file.type.startsWith("image/")
//             ? URL.createObjectURL(file)
//             : null,
//           id: `${file.name}-${file.lastModified}-${Math.random()}`,
//         }));

//       return [
//         ...previousFiles,
//         ...newFiles,
//       ];
//     });

//     event.target.value = "";
//   };

//   /* ================= REMOVE FILE ================= */

//   const removeFile = (id) => {
//     setFiles((previousFiles) => {
//       const fileToRemove = previousFiles.find(
//         (item) => item.id === id
//       );

//       if (fileToRemove?.preview) {
//         URL.revokeObjectURL(
//           fileToRemove.preview
//         );
//       }

//       return previousFiles.filter(
//         (item) => item.id !== id
//       );
//     });
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(
//       "Logo Design form submitted"
//     );
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="
//         w-full
//         max-w-full
//         overflow-hidden
//         font-inter
//       "
//     >
//       {/* =====================================================
//           LOGO DESIGN SERVICE
//       ====================================================== */}

//       <div className="mb-3">
//         <label
//           htmlFor="logo-service"
//           className="
//             mb-1.5
//             block
//             font-inter
//             text-[9px]
//             font-bold
//             uppercase
//             tracking-[0.3px]
//             text-[#7A7591]
//             sm:text-[10px]
//           "
//         >
//           Logo Design Service
//         </label>

//         <SelectField
//           name="logo-service"
//           value={service}
//           onChange={(e) =>
//             setService(e.target.value)
//           }
//           placeholder="Select Logo Design Service"
//           options={logoServices}
//         />
//       </div>

//       {/* =====================================================
//           DESIGN NAME + RETURN HOURS
//       ====================================================== */}

//       <div
//         className="
//           mb-3
//           grid
//           grid-cols-1
//           gap-2
          
//         "
//       >
//         <SelectField
//           name="returnTime"
//           value={returnTime}
//           onChange={(e) =>
//             setReturnTime(e.target.value)
//           }
//           placeholder="Returns hours"
//           options={returnHours}
//         />
//       </div>

//       {/* =====================================================
//           ADDITIONAL INFORMATION
//       ====================================================== */}

//       <div className="mb-1.5">
//         <span
//           className="
//             block
//             font-inter
//             text-[9px]
//             font-bold
//             uppercase
//             tracking-[0.3px]
//             text-[#7A7591]
//             sm:text-[10px]
//           "
//         >
//           Additional Information
//         </span>
//       </div>

//       {/* =====================================================
//           INSTRUCTIONS
//       ====================================================== */}

//       <div className="mb-2">
//         <textarea
//           id="logo-instructions"
//           name="instructions"
//           placeholder="Text your patches 'White background..."
//           className="
           
//            min-h-26
//             w-full
//             resize-none
//             rounded-[7px]
//             border
//             border-[#E7E3ED]
//             bg-white
//             p-2.5
//             font-inter
//             text-[13px]
//             leading-4
//             text-[#757575]
//             outline-none
//             transition-all
//             duration-200
//             placeholder:text-[#ACB0B9]
//             focus:border-[#7434E5]
//             focus:ring-1
//             focus:ring-[#7434E5]/10
//           "
//         />
//       </div>

//       {/* =====================================================
//           BRANDING + SOCIAL MEDIA
//       ====================================================== */}

//       <div
//         className="
//           mb-3
//           grid
//           grid-cols-1
//           gap-2
//           sm:grid-cols-2
//         "
//       >
//         <SelectField
//           name="branding"
//           value={branding}
//           onChange={(e) =>
//             setBranding(e.target.value)
//           }
//           placeholder="Select Branding"
//           options={brandingOptions}
//         />

//         <SelectField
//           name="socialMedia"
//           value={socialMedia}
//           onChange={(e) =>
//             setSocialMedia(e.target.value)
//           }
//           placeholder="Select social media channel"
//           options={socialMediaChannels}
//         />
//       </div>

//       {/* =====================================================
//           UPLOAD
//       ====================================================== */}

//       <label
//         htmlFor="logo-file-upload"
//         className="
//           mb-2
//           flex
//           h-[72px]
//           w-full
//           cursor-pointer
//           flex-col
//           items-center
//           justify-center
//           rounded-[8px]
//           border
//           border-dashed
//           border-[#DCCEFF]
//           bg-white
//           px-3
//           transition-all
//           duration-200
//           hover:bg-[#FAF8FF]
//           active:scale-[0.995]
//           sm:h-[78px]
//         "
//       >
//         <CloudUpload
//           size={18}
//           strokeWidth={1.7}
//           className="
//             mb-1
//             text-[#7434E5]
//           "
//         />

//         <span
//           className="
//             text-center
//             text-[9px]
//             leading-3
//             text-[#8A8499]
//           "
//         >
//           Drop or select files here
//         </span>

//         <input
//           id="logo-file-upload"
//           type="file"
//           multiple
//           accept="
//             image/*
//             .ai,
//             .eps,
//             .svg,
//             .pdf,
//             .cdr,
//             .png,
//             .jpg,
//           "
//           onChange={handleFiles}
//           className="hidden"
//         />
//       </label>

//       {/* =====================================================
//           FILE PREVIEWS
//       ====================================================== */}

//       {files.length > 0 && (
//         <div className="mb-2">
//           {/* Counter */}

//           <div className="mb-1 text-right">
//             <span
//               className="
//                 font-inter
//                 text-[9px]
//                 font-medium
//                 text-[#7A7591]
//               "
//             >
//               {files.length}/20
//             </span>
//           </div>

//           {/* Preview Grid */}

//           <div
//             className="
//               grid
//               grid-cols-4
//               gap-1.5
//               sm:grid-cols-5
//             "
//           >
//             {files.map((item) => (
//               <div
//                 key={item.id}
//                 className="
//                   group
//                   min-w-0
//                 "
//               >
//                 <div
//                   className="
//                     relative
//                     aspect-square
//                     overflow-hidden
//                     rounded-[5px]
//                     border
//                     border-[#E7E3ED]
//                     bg-[#F7F7F7]
//                   "
//                 >
//                   {item.preview ? (
//                     <img
//                       src={item.preview}
//                       alt={item.file.name}
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                       "
//                     />
//                   ) : (
//                     <div
//                       className="
//                         flex
//                         h-full
//                         w-full
//                         items-center
//                         justify-center
//                         p-1
//                         text-center
//                         text-[7px]
//                         leading-3
//                         text-[#7A7591]
//                       "
//                     >
//                       {item.file.name}
//                     </div>
//                   )}

//                   {/* Remove */}

//                   <button
//                     type="button"
//                     onClick={() =>
//                       removeFile(item.id)
//                     }
//                     aria-label={`Remove ${item.file.name}`}
//                     className="
//                       absolute
//                       right-0.5
//                       top-0.5
//                       flex
//                       h-4
//                       w-4
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-black/60
//                       text-white
//                       opacity-100
//                       transition
//                       sm:opacity-0
//                       sm:group-hover:opacity-100
//                     "
//                   >
//                     <X size={9} />
//                   </button>
//                 </div>

//                 {/* File Name */}

//                 <p
//                   className="
//                     mt-0.5
//                     overflow-hidden
//                     text-ellipsis
//                     whitespace-nowrap
//                     font-inter
//                     text-[7px]
//                     leading-3
//                     text-[#7A7591]
//                   "
//                   title={item.file.name}
//                 >
//                   {item.file.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           ACTION BUTTONS
//       ====================================================== */}

//       <div
//         className="
//           grid
//           grid-cols-2
//           gap-2
//           pt-1
//         "
//       >
//         <button
//           type="button"
//           className="
//             h-[30px]
//             w-full
//             rounded-[7px]
//             border
//             border-[#7434E5]
//             bg-white
//             px-2
//             font-inter
//             text-[9px]
//             font-semibold
//             text-[#000000]
//             transition-all
//             duration-200
//             hover:bg-[#F7F2FF]
//             active:scale-[0.98]
//           "
//         >
//           Add to cart
//         </button>

//         <button
//           type="submit"
//           className="
//             h-[30px]
//             w-full
//             rounded-[7px]
//             bg-gradient-to-r
//             from-[#7434E5]
//             to-[#5420B8]
//             px-2
//             font-inter
//             text-[9px]
//             font-semibold
//             text-white
//             shadow-[0_5px_15px_rgba(116,52,229,0.25)]
//             transition-all
//             duration-200
//             hover:opacity-90
//             active:scale-[0.98]
//           "
//         >
//           Submit order
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LogoDesign;




import { useState } from "react";

import SelectField from "./SelectField";
import FileUpload from "./FileUpload";
import FormActions from "./FormActions";
import TextArea from "../TextArea";

const logoServices = [
  "Minimal Logo",
  "Modern Logo",
  "Wordmark Logo",
  "Combination Mark Logo",
  "Mascot Logo",
  "Lettermark Logo",
  "Monogram Logo",
  "Abstract Logo",
  "Emblem Logo",
  "Icon Logo",
  "Typography Logo",
  "Flat Logo",
];

const brandingOptions = [
  "Brand Identity",
  "Brand Guidelines",
  "Business Branding",
  "Product Branding",
  "Personal Branding",
];

const socialMediaChannels = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Pinterest",
  "X / Twitter",
];

const returnHours = [
  "4 Hours",
  "8 Hours",
  "12 Hours",
  "24 Hours",
];

const LogoDesign = () => {
  const [service, setService] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [branding, setBranding] = useState("");
  const [socialMedia, setSocialMedia] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Logo Design form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-full
        overflow-hidden
        font-inter
      "
    >
      {/* LOGO SERVICE */}

      <div className="mb-3">
        <label
          htmlFor="logo-service"
          className="
            mb-1.5
            block
            font-inter
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3px]
            text-[#7A7591]
            sm:text-[10px]
          "
        >
          Logo Design Service
        </label>

        <SelectField
          name="logo-service"
          value={service}
          onChange={(e) =>
            setService(e.target.value)
          }
          placeholder="Select Logo Design Service"
          options={logoServices}
        />
      </div>

      {/* RETURN HOURS */}

      <div className="mb-3 grid grid-cols-1 gap-2">
        <SelectField
          name="returnTime"
          value={returnTime}
          onChange={(e) =>
            setReturnTime(e.target.value)
          }
          placeholder="Returns hours"
          options={returnHours}
        />
      </div>

      {/* ADDITIONAL INFORMATION */}

      <div className="mb-1.5">
        <span
          className="
            block
            font-inter
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3px]
            text-[#7A7591]
            sm:text-[10px]
          "
        >
          Additional Information
        </span>
      </div>

      {/* INSTRUCTIONS */}

      <div className="mb-2">
       <TextArea placeholder="Text your patches 'White background..." />
      </div>

      {/* BRANDING + SOCIAL */}

      <div
        className="
          mb-3
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-2
        "
      >
        <SelectField
          name="branding"
          value={branding}
          onChange={(e) =>
            setBranding(e.target.value)
          }
          placeholder="Select Branding"
          options={brandingOptions}
        />

        <SelectField
          name="socialMedia"
          value={socialMedia}
          onChange={(e) =>
            setSocialMedia(e.target.value)
          }
          placeholder="Select social media channel"
          options={socialMediaChannels}
        />
      </div>

      {/* FILE UPLOAD */}

      <FileUpload
        id="logo-file-upload"
        accept="image/*,.ai,.eps,.svg,.pdf,.cdr,.png,.jpg"
      />

      {/* ACTIONS */}

      <FormActions />
    </form>
  );
};

export default LogoDesign;
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
import { useState } from "react";
import InputFields from "../../auth/InputFields";
import SelectField from "./SelectField";
import FileUpload from "../HomeLayout/FileUpload";
import FormActions from "../HomeLayout/FormActions";
import TextArea from "../TextArea";

/* EMBROIDERY SERVICES*/

const embroideryServices = [
  "Cap Digitizing",
  "Jacket Back Digitizing",
  "Left Chest Digitizing",
  "3D Puff Embroidery",
];

/*UNITS*/

const units = [
  "Millimeters (mm)",
  "Centimeters (cm)",
  "Inches (in)",
  "Feet (ft)",
  "Yards (yd)",
];

/* LOCATIONS */

const locations = [
  "Sleeve",
  "Left Chest",
  "Right Chest",
  "Cap Front",
  "Jacket Back",
  "Custom",
];

/* FORMATS*/

const formats = [
  "DST",
  "PES",
  "JEF",
  "EXP",
  "XXX",
];

/*RETURN HOURS */

const returnHours = [
  "4 Hours",
  "8 Hours",
  "12 Hours",
  "24 Hours",
];

/*EMBROIDERY DESIGN FORM */

const EmbroideryDesignForm = () => {
  /* ================= FORM STATES ================= */

  const [service, setService] = useState("");
  const [unit, setUnit] = useState("");
  const [location, setLocation] = useState("");
  const [format, setFormat] = useState("");
  const [returnTime, setReturnTime] = useState("");

  /* ================= FILE UPLOAD ================= */

  const {
    files,
    handleFiles,
    removeFile,
  } = FileUpload();

  /* ================= SUBMIT ================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Embroidery Design form submitted");
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
      {/* SERVICE TYPE*/}

      <div className="mb-3">
        <label
          htmlFor="embroidery-service"
          className="
            mb-1.5
            block
            font-inter
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3px]
            text-[#7A7591]
          "
        >
          Embroidery Service Type
        </label>

        <SelectField
          id="embroidery-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Design name"
          options={embroideryServices}
        />
      </div>

      {/*NUMBER OF COLORS*/}

      <InputFields
        name="colors"
        type="number"
        placeholder="Number of colors"
      />

      {/*  FABRIC + RETURN HOURS */}

      <div
        className="
          my-2
          grid
          grid-cols-1
          gap-2
        "
      >
        <InputFields
          name="fabric"
          placeholder="Fabric"
        />

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

      {/*WIDTH + HEIGHT + UNIT */}

      <div
        className="
          mb-2
          grid
          grid-cols-3
          gap-2
        "
      >
        <InputFields
          name="width"
          type="number"
          placeholder="Width"
        />

        <InputFields
          name="height"
          type="number"
          placeholder="Height"
        />

        <SelectField
          name="unit"
          value={unit}
          onChange={(e) =>
            setUnit(e.target.value)
          }
          placeholder="Unit"
          options={units}
        />
      </div>

      {/*LOCATION*/}

      <div className="mb-2">
        <SelectField
          name="location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          placeholder="Select Location"
          options={locations}
        />
      </div>

      {/* CUSTOM LOCATION*/}

      {location === "Custom" && (
        <div className="mb-2">
          <InputFields
            name="customLocation"
            placeholder="Enter custom location"
          />
        </div>
      )}

      {/*FORMAT */}

      <div
        className="
          mb-3
          grid
          grid-cols-2
          gap-2
        "
      >
        <SelectField
          name="format"
          value={format}
          onChange={(e) =>
            setFormat(e.target.value)
          }
          placeholder="Select Format"
          options={formats}
        />

        <InputFields
          name="otherFormat"
          placeholder="Other format"
        />
      </div>

      {/*INSTRUCTIONS*/}

      <div className="mb-2">
        <label
          htmlFor="embroidery-instructions"
          className="
            mb-1.5
            block
            font-inter
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3px]
            text-[#7A7591]
          "
        >
          Instructions
        </label>
        <TextArea placeholder="Text your patches 'White background..." />

      </div>

      {/* FILE UPLOAD*/}

      <FileUpload
        inputId="embroidery-file-upload"
        files={files}
        onFilesChange={handleFiles}
        onRemoveFile={removeFile}
        accept="image/*,.dst,.pes,.jef,.exp,.xxx"
      />

      {/*ACTION BUTTONS*/}

      <FormActions />
    </form>
  );
};

export default EmbroideryDesignForm;
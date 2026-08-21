import { useState } from "react";
import InputFields from "../../auth/InputFields";
import SelectField from "./SelectField";
import FileUpload from "../HomeLayout/FileUpload";
import FormActions from "../HomeLayout/FormActions";
import TextArea from "../TextArea";


/*VECTOR SERVICES*/

const vectorServices = [
  "Vector Design",
  "DTF Design Preparation",
  "Engraving Design",
  "Screen Printing Design",
  "Laser Cutting Design",
  "Sublimation Design",
  "Digital Printing Design",
  "Die Cutting Design",
  "Offset Printing Design",
  "Flexographic Printing Design",
  "High Resolution PNG",
];

/* COLOR MODELS */

const colorModels = [
  "RGB",
  "CMYK",
  "Pantone",
  "Grayscale",
];


/* RETURN HOURS*/

const returnHours = [
  "4 Hours",
  "8 Hours",
  "12 Hours",
  "24 Hours",
];
/* FORMATS*/

const formats = [
  "DST",
  "PES",
  "JEF",
  "EXP",
  "XXX",
];

/* VECTOR ART */

const VectorArt = () => {
  const [service, setService] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [colorModel, setColorModel] = useState("");
  const [format, setFormat] = useState("");

  const {
    files,
    handleFiles,
    removeFile,
  } = FileUpload();

  /* ================= SUBMIT ================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Vector Art form submitted");
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
      {/* VECTOR ART SERVICE*/}

      <div className="mb-3">
        <label
          htmlFor="service"
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
          Vector Art Service
        </label>

        <SelectField
          name="service"
          value={service}
          onChange={(e) =>
            setService(e.target.value)
          }
          placeholder="Select Vector Art Service"
          options={vectorServices}
        />
      </div>

      {/* SIZE + RETURN HOURS*/}

      <div
        className="
          mb-3
          grid
          gap-2
        "
      >
        <InputFields
          name="size"
          placeholder="Size"
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

      {/* ADDITIONAL INFORMATION */}

      <div className="mb-1.5">
        <span
          className="
            block
            font-inter
            text-[10px]
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

      {/* INSTRUCTIONS*/}

      <div className="mb-2">
       <TextArea placeholder="Text your patches 'White background..." />
      </div>

      {/* COLOR MODEL + FORMAT*/}

      <div
        className="
          mb-2
          grid
          gap-2
        "
      >
        <SelectField
          name="colorModel"
          value={colorModel}
          onChange={(e) =>
            setColorModel(e.target.value)
          }
          placeholder="Select color model"
          options={colorModels}
        />
      </div>
      
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
      

      {/* UPLOAD */}

    <FileUpload
  inputId="vector-file-upload"
  files={files}
  onFilesChange={handleFiles}
  onRemoveFile={removeFile}
  accept="image/*,.ai,.eps,.svg,.pdf,.cdr,.png,.jpg"
/>

      {/*ACTION BUTTONS */}

      <FormActions />
    </form>
  );
};

export default VectorArt;
import { useState } from "react";
import DropDown from "../common/DropDown";
import Instruction from "../common/Instruction";
import UploadBox from "../common/UploadBox";
import SubmitButton from "../common/SubmitBtn";

const embroideryServices = [
  "Cap Digitizing",
  "Jacket Back Digitizing",
  "Left Chest Digitizing",
  "3D Puff Embroidery",
];

const units = [
  "Millimeters (mm)",
  "Centimeters (cm)",
  "Inches (in)",
  "Feet (ft)",
  "Yards (yd)",
];

const locations = [
  "Sleeve",
  "Left Chest",
  "Right Chest",
  "Cap Front",
  "Jacket Back",
  "Custom",
];

const EmbroideryDesignForm = () => {
     const [unit, setUnit] = useState("");
  const [location, setLocation] = useState("");
  return (
     <form className="space-y-4 ">

      <label className="font-bold text-sm text-[#7A7591] font-inter">
        Embroidery Service Type
      </label>

      <DropDown
        items={embroideryServices}
        placeholder="Select Embroidery Service"
      />

      <input type="number" placeholder="Number of Colors" className="input" />

      <input type="text" placeholder="Fabric" className="input" />

      <input type="number" placeholder="Width" className="input" />

      <input type="number" placeholder="Height" className="input" />

      <select
        value={unit}
        onChange={(e)=>setUnit(e.target.value)}
        className="input"
      >
        <option value="">Select Unit</option>

        {units.map(item=>(
          <option key={item}>{item}</option>
        ))}

      </select>

      <select
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        className="input"
      >
        <option value="">Select Location</option>

        {locations.map(item=>(
          <option key={item}>{item}</option>
        ))}

      </select>

      {location==="Custom" && (
        <textarea
          className="input h-32"
          placeholder="Write custom location..."
        />
      )}

      <Instruction pholder="Write Instructions..." />

      <UploadBox />

      <SubmitButton />

    </form>
  )
}

export default EmbroideryDesignForm
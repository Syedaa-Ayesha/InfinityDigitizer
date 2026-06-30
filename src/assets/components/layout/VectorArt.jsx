import DropDown from "../common/DropDown";
import Instruction from "../common/Instruction";
import UploadBox from "../common/UploadBox";
import SubmitButton from "../common/SubmitBtn";

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
const VectorArt = () => {

  return (
       <form className="space-y-4">

      <label className="font-bold text-sm text-[#7A7591]">
        Vector Art Service
      </label>

      <DropDown
        items={vectorServices}
        placeholder="Select Vector Art Service"
      />

      <Instruction pholder="Write Instructions..." />

      <UploadBox />

      <SubmitButton />

    </form>
  )
}

export default VectorArt
import DropDown from "../common/DropDown";
import Instruction from "../common/Instruction";
import UploadBox from "../common/UploadBox";
import SubmitButton from "../common/SubmitBtn";

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
const LogoDesign = () => {
   
  return (
     <form className="space-y-4">

      <label className="font-bold text-sm text-[#7A7591]">
        Logo Design Service
      </label>

      <DropDown

        items={logoServices}
        placeholder="Select Logo Design Service"
      />

      <Instruction pholder="Write Instructions..." />

      <UploadBox />

      <SubmitButton />

    </form>
  )
}

export default LogoDesign
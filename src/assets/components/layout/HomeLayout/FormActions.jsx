import { Send, ShoppingCart } from "lucide-react";
import OutlineBtn from "../OutlineBtn";
import SolidButton from "../SolidButton";


const FormActions = () => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        pt-1
      "
    >
        {/* Add to cart */}
<SolidButton title="Add to cart" Icon={ShoppingCart} type="button" classname="rounded-md"/>
     
        {/* Submit order */}
      <OutlineBtn title="Submit order" Icon={Send} type="submit" classname="justify-center lg:text-[15px] rounded-md"/>
    </div>
  );
};

export default FormActions;
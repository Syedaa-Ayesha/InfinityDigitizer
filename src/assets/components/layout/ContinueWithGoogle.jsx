
import { FcGoogle } from "react-icons/fc";
const ContinueWithGoogle = () => {
  return (
    <button
          
           className="
             flex
             h-[56px]
             w-full
             items-center
             justify-center
             gap-3
             rounded-xl
             border
             border-[#E5E7EB]
             bg-white
             text-[#424957]
             font-medium
             transition-all
             duration-300
             hover:border-[#7434E5]
           "
         >
           <FcGoogle size={22} />
   
           Continue with Google
         </button>
  )
}

export default ContinueWithGoogle
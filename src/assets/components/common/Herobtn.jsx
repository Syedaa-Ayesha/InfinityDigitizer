
import { ArrowRight } from "lucide-react"
const Herobtn = ({className, btnText}) => {
  return (
    <>
    <a href=""  className={`text-sm font-medium border-2 tracking-wide py-[10px] px-3 pl-5 mr-[21px] rounded-md ${className}`}>{btnText} <ArrowRight className="inline ml-3 drop-shadow-sm" strokeWidth={2} size={18} /></a>
    </>
  )
}

export default Herobtn
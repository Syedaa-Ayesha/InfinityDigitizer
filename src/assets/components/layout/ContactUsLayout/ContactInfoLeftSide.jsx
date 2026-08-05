import InputFields from "../../auth/InputFields";
import {Phone, Mail, UserRound , MessageSquare, Send, ShieldCheck} from 'lucide-react'
import TextArea from "../../layout/TextArea";
import SolidButton from "../../layout/SolidButton";
import SubTitle from "../../layout/ContactUsLayout/SubTitle";
const ContactInfoLeftSide = () => {
  return (
    <div className="max-w-[772px] pb-7 lg:py-13 lg:px-14 ">
    {/* Small Label */}

<SubTitle  title="Contact Us"/>
    {/* Heading */}

    <h2
      className="
        mt-4
        font-dmSans
        font-extrabold
        text-[#182032]
        text-[38px]
        leading-[100%]
sm:text-[40px]
lg:text-[58px]
      "
    >
      TELL US ABOUT YOUR  PROJECT
      <br />
   
    </h2>

    {/* Description */}

    <p
      className="
        mt-5
       pb-10
      max-w-full
        font-inter
        text-base
        leading-6
        text-[#6B7280]  
        lg:max-w-[520px] 
      "
    >
      Need embroidery digitizing, vector tracing, or a custom logo
      design? Send us your details and our team will review your
      project, answer your questions, and provide the best solution
      for your needs. We respond quickly so you can keep your
      business moving forward.
    </p>

   <form>

  <div className="grid gap-4 md:grid-cols-2 mb-3">

    
<InputFields
  name="name"
  placeholder="Enter your name"
  icon={UserRound}
/>

<InputFields
  name="phone"
  placeholder="Phone Number"
  icon={Phone}
/>
      </div>
<div className="grid gap-4 mb-6">

<InputFields
  name="email"
  type="email"
  placeholder="Email Address"
  icon={Mail}
/>
<TextArea placeholder="Your Message" icon={MessageSquare}/>
</div>
<SolidButton title ="Send Message" Icon ={Send} classname="lg:mx-0 rounded-xl mb-5 mx-auto"/>
   </form>
   <div className="flex gap-2 justify-center lg:justify-start">
   <ShieldCheck stroke="#ACB0B9" size={16}/>
    <span className="text-[#6B7280] text-sm font-inter">Your information is kept confidential</span>
   </div>
  </div>

  )
}

export default ContactInfoLeftSide
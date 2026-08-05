

import ContactInfoLeftSide from "../../layout/ContactUsLayout/ContactInfoLeftSide";
import ContactInfoRightSide from "../../layout/ContactUsLayout/ContactInfoRightSide";

const ContactUsSection = () => {
  return (
    <section
      className="
        mx-auto
        max-w-[1400px]
        p-[22px]
        rounded-[20px]
        lg:py-21
      "
    >
      <div
        className="
          lg:rounded-3xl
        lg:border-[#E7E3ED]
      bg-white
          lg:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]
          overflow-hidden
        "
      >
        <div
          className="
    grid
    grid-cols-1
    lg:grid-cols-[1fr_500px]
    
  "
        >
          {/* Left Side */}
          <ContactInfoLeftSide />

          {/* Right Side */}
         <ContactInfoRightSide />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

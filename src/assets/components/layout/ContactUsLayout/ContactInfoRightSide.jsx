import ContactInfoCard from "../../layout/ContactUsLayout/ContactInfoCard";
import SubTitle from "../../layout/ContactUsLayout/SubTitle";
import { Mail, Phone, Globe, MessageCircleMore } from "lucide-react";
const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    description: "+1 833 878 8344",
    available: "Mon - Sat: 9:00 AM - 6:00 PM (EST)",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "order@infinitydigitizing.com",
    available: "We reply within minutes",
  },
  {
    icon: MessageCircleMore ,
    title: "Live Chat",
    description: "24/7 Live Chat Support",
    available: "Get instant help anytime",
  },
  {
    icon: Globe,
    title: "We Serve Worldwide",
    description: "USA | UK | Canada | Australia",
    available: "And Many More Countries",
  },
];
const ContactInfoRightSide = () => {
  return (
  <div
            className="
        grid
        h-full
        gap-4
        pb-6
        lg:py-12
        lg:px-9
        overflow-hidden
        lg:bg-[#F7F4FA]
       
      "
          >
            {/* small label */}
            <SubTitle title="Contact Information" />
            {/* Cards Call  */}
            {contactInfo.map((item) => (
              <ContactInfoCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                available={item.available}
              />
            ))}
          </div>
  )
}

export default ContactInfoRightSide
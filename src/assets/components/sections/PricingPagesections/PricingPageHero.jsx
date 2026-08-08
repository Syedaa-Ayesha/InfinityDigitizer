import SectionHeading from '../../common/SectionHeading'
import ServiceHighlights from '../../common/ServiceHighlights'
import { Tag, Banknote, ReceiptPoundSterling, BanknoteArrowUp } from 'lucide-react'

const PricingPageHero = () => {
      const highlights =[
        {
icon:Banknote,
title : `Budget Friendly\nPackages`,

        },
        {
icon:BanknoteArrowUp,
title : `Custom Pricing\nOptions`,

        },
        {
icon:    ReceiptPoundSterling,
title : `Bulk Order\nDiscounts`,

        }
    ]
  return (
    <div className=" lg:border-[#E7E3ED] lg:pb-12 lg:border-b">
    
    <SectionHeading
        icon={<Tag size={24} />}
        badge="Transparent Pricing"
        heading="OUR COMPETITIVE PRICES"
        description="Affordable Embroidery, Logo and Vector Art Services. Grab Embroidery, Logo and Vector Designs Now"
        
      />
      <div className='flex flex-col w-fit items-start justify-center gap-7 my-6 mx-auto lg:flex-row lg:gap-11'>
       {highlights.map((highlights, index) => (
        
    <ServiceHighlights
    key ={index}
      Icon={highlights.icon}
      title={highlights.title}
      classname = "text-base font-bold lg:pr-14"
      
     
    />
  ))}
  
  </div>
  {/* Divider */}
  {/* <div className='h-px w-full bg-blue-300 my-5'/> */}
  
  </div>
  )
}

export default PricingPageHero
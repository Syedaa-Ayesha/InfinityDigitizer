import B2BHeading from "../../layout/B2BLayout/B2BHeading";
import PricingSlider from "../../layout/PricingPageLayout/PricingSlider";
import BusinessCard from "../../layout/B2BLayout/BusinessCard";
import { Eye, Mail, Printer, Share2, Shirt, Store } from "lucide-react";
const businessData = [
  { id: 1, title: "Embroidery Shops", icon: Eye },
  { id: 2, title: "Print Shops", icon: Printer },
  { id: 3, title: "Promotional Companies", icon: Shirt },
  { id: 4, title: "Apparel Brands", icon: Store },
  { id: 5, title: "Sign Shops", icon: Mail },
  { id: 6, title: "Design Agencies", icon: Share2 },
];
const BusinessServe = () => {
  return (
    <section className="p-[22px] lg:py-6">
      <div className="mx-auto max-w-[1320px]">
        {/* Heading */}

        <B2BHeading title="Businesses We Serve" />

        {/* Cards */}

        <div className="w-full lg:hidden ">
          <PricingSlider data={businessData} CardComponent={BusinessCard} slidesPerView={1.26}
  spaceBetween={16}/>
        </div>
        <div
          className="
    hidden
    lg:grid
    lg:grid-cols-3
    gap-5
  "
        >
          {businessData.map((item) => (
            <BusinessCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessServe;

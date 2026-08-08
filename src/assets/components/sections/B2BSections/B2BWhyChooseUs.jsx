import {
  Tag,
  Star,
  ShieldCheck,
  Lock,
  UserSquare,
} from "lucide-react";
import B2BHeading from "../../layout/B2BLayout/B2BHeading";
import PricingSlider from "../../layout/PricingPageLayout/PricingSlider";
import ChooseUsCard from "../../layout/B2BLayout/ChooseUsCard";
const chooseUsData = [
  {
    id: 1,
    title: "Skilled Designing Team",
    description:
      "Experienced specialists creating any design ready files with precision.",
    icon: UserSquare,
  },
  {
    id: 2,
    title: "Long Term Partnership",
    description:
      "Your trusted creative partner for long-term business success.",
    icon: Tag,
  },
  {
    id: 3,
    title: "Dedicated Project Support",
    description:
      "Work directly with a responsive team that understands your artwork requirements.",
    icon: Tag,
  },
  {
    id: 4,
    title: "Consistent Brand Standards",
    description:
      "Every design is created to maintain the same quality across all your orders.",
    icon: Star,
  },
  {
    id: 5,
    title: "Scalable Business Solutions",
    description:
      "Whether you have one design or hundreds, we deliver with the same attention to detail.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Rush Order Available",
    description:
      "Need it urgently? Our team prioritizes urgent projects without compromising on quality.",
    icon: Lock,
  },
];


const B2BWhyChooseUs = () => {
  return (
    <section className="p-[22px] lg:py-6">
      <div className="mx-auto max-w-[1330px]">

        {/* Heading */}

<B2BHeading title=" Why Businesses Choose Us?" />


        {/* Cards */}
        <div className="w-full lg:hidden">
  <PricingSlider
    data={chooseUsData}
    CardComponent={ChooseUsCard}
     slidesPerView={1.28}
  spaceBetween={16}
  />
</div>
        <div
  className="
    hidden
    lg:grid
    lg:grid-cols-3
    gap-6
  "
>
  {chooseUsData.map((item) => (
    <ChooseUsCard
      key={item.id}
      item={item}
    />
  ))}
</div>

      </div>
    </section>
  )
}

export default B2BWhyChooseUs
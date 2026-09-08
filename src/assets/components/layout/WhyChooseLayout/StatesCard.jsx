import {
  Headphones,
  ShieldCheck,
  ShoppingBasket,
  Users,
} from "lucide-react";

import StatsItem from "../../layout/WhyChooseLayout/StatItem";

const STATS = [
  {
    icon: Users,
    value: "15K+",
    label: "Projects Successfully Delivered",
  },
  {
    icon: ShoppingBasket,
    value: "65K+",
    label: "Design Files Created",
  },
  {
    icon: ShieldCheck,
    value: "90%",
    label: "Repeated Clients",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Friendly Customer Support",
  },
];

const StatsCard = () => {
  return (
    <div
      className="
       grid w-[calc(100%+80px)] -translate-x-[40px] grid-cols-4 overflow-hidden rounded-[16px] bg-gradient-to-r from-[#6D20E8] to-[#5718C9] py-6 shadow-[0_14px_30px_rgba(91,31,194,0.25)] lg:rounded-[24px]
      "
    >
      {STATS.map((stat, index) => (
        <StatsItem
          key={stat.label}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          showDivider={index !== STATS.length - 1}
        />
      ))}
    </div>
  );
};

export default StatsCard;

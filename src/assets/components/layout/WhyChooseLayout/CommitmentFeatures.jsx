import { Award, Users, ShieldCheck } from "lucide-react";
import FeatureItem from "./FeatureItems";

const features = [
  {
    icon: Award,
    title: "Experienced Design Specialists",
    description:
      "Our skilled team delivers accurate, production-ready artwork every time.",
  },
  {
    icon: Users,
    title: "Reliable Business Partner",
    description:
      "Trusted by apparel brands, print shops, and embroidery businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality Control",
    description:
      "Every file is carefully checked before final delivery.",
  },
];

const CommitmentFeatures = () => {
  return (
    <div className="mt-6 flex w-full flex-col gap-4">
      {features.map((feature) => (
        <FeatureItem
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default CommitmentFeatures;



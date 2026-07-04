
import { ShieldCheck } from "lucide-react"
import SectionHeading from "../common/SectionHeading";
import FeatureCard from "../layout/FeatureCard";
import CTASection from "../layout/CTASection";
import { features } from "../common/CardData";
const ChooseUs = () => {

    return (
        <section className="py-[50px]" style={{
            background:
                "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
        }}>
            <SectionHeading
                icon={<ShieldCheck size={24} />}
                badge="Our Commitment"
                heading="Why Choose Infinity Digitizing?"
                description="Infinity Digitizing is your one stop shop for all your embroidery digitizing needs.Infinity Digitizing is your trusted partner for premium embroidery digitizing, logo designing and vector art services across the USA, UK, Canada, and Australia. We use advanced, industry leading software programs and we have a skilled team to deliver higher quality, affordable design services for every project. "
            />
            <div className="mx-auto my-9 flex max-w-[1275px] flex-col gap-9">
  {features.map((feature) => (
    <FeatureCard
      key={feature.step}
      step={feature.step}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
      image={feature.image}
    />
  ))}
</div>
         <CTASection/>  
    

        </section>
    )
}

export default ChooseUs
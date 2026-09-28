import ServiceHero from "../assets/components/sections/ServiceDetailsPagesSection/ServiceHero";
import capImage from "../assets/images/ServiceHeroImage03.png";

const VectorArtServices = () => {
  return (
     <ServiceHero
      category="EMBROIDERY DIGITIZING"
      title="Quality Cap Digitizing Services"
      description="Professional Cap Embroidery Digitizing for clean, accurate designs that stitch smoothly on curved and structured caps. We prepare each file with the right stitch direction, density and underlay for a neat finish."
      image={capImage}
    />
  )
}

export default VectorArtServices
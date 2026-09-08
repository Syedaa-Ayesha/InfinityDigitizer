import StatsCard from "../../layout/WhyChooseLayout/StatesCard";
import Image from '../../../images/ServiceHeroImage03.png'
const CommitmentImage = () => {
  return (
    <div className="w-full">

      {/* Team Image */}
      <div
        className="
          relative
          aspect-[1.35/1]
          w-full
          overflow-hidden
          rounded-[16px]
          sm:rounded-[18px]
          lg:aspect-[1.38/1]
        "
      >
        <img
          src={Image}
          alt="Creative design team"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Stats */}
      <div className=" mt-5 w-[90%] mx-auto lg:w-full">
        <StatsCard />
      </div>

    </div>
  );
};

export default CommitmentImage;
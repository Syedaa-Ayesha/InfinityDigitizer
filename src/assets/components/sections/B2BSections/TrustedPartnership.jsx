import TrustedHeading from "../../layout/B2BLayout/TrustedHeading";
import ComparisonTable from "../../layout/B2BLayout/ComparisonTable";
import PartnershipInfo from "../../layout/B2BLayout/PartnershipInfo";

const TrustedPartnership = () => {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-8 lg:py-16">
      <div
        className="
          rounded-[24px]
          bg-[linear-gradient(93.97deg,#6C29E0_0%,#5413C3_100%)]
          shadow-[0px_18px_40px_rgba(75,36,143,0.30)]

          px-6
          py-8

          lg:px-[48px]
          lg:py-[48px]
        "
      >
        {/* Heading */}

        <TrustedHeading />

        {/* Content */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-10

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}

          <ComparisonTable />

          {/* Right */}

          <PartnershipInfo />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnership;

import CommitmentFeatures from "../../layout/WhyChooseLayout/CommitmentFeatures";
import CommitmentImage from "../../layout/WhyChooseLayout/CommitmentImage";

const CommitmentSection = () => {
  return (
    <section className="w-full bg-[#FAF9FD]">
      <div className="mx-auto w-full max-w-[1330px] px-5 sm:px-8 lg:px-10 xl:px-0">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[54px]">

          {/* LEFT CONTENT */}
          <div className="w-full max-w-[700px]">

            <span className="text-sm font-bold uppercase font-dmSans tracking-[0.2px] text-[#7434E5]">
              Our Commitment
            </span>

            <h2 className="mt-2 font-dmSans font-extrabold leading-[1.12] tracking-[-0.8px] text-[#111133] sm:text-[29px] lg:text-[36px]">
              The Creative Team Behind Your Best Looking Designs
            </h2>

            <p className="mt-4 max-w-[690px] text-base font-inter leading-[24px] text-[#6B7280]">
              Every design is created with precision and attention to detail.
              Whether you need embroidery digitizing, vector artwork, or custom
              design, our experienced team delivers production-ready files for
              fast, professional results.
            </p>

            <CommitmentFeatures />

          </div>

          {/* RIGHT CONTENT */}
          <CommitmentImage />

        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;

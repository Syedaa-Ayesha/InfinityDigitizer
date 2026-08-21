

import Heading from "../../common/Heading";
import patchPreview from "../../../images/Patch preview with infographic.png";
import FormState from "../../layout/HomeLayout/FormState";
import {
  Zap,
  FileCheck,
  ShieldCheck,
  Clover,
} from "lucide-react";

/* SERVICE BENEFITS DATA*/

const servicePoints = [
  {
    icon: Zap,
    title: "Fast Turnaround Times",
    text: "Get your digitized files delivered within 4–24 hours without compromising quality.",
  },
  {
    icon: FileCheck,
    title: "All Major File Formats Supported",
    text: "We provide DST, PES, EXP, JEF, VP3, EMB, AI, EPS, SVG, PDF, and more.",
  },
  {
    icon: ShieldCheck,
    title: "Unlimited Revisions",
    text: "Need changes? We'll revise your design until it meets your requirements.",
  },
  {
    icon: Clover,
    title: "Perfect Stitching Results",
    text: "Every design is manually digitized to deliver clean, smooth, and accurate embroidery.",
  },
];

const ServiceForm = () => {
  return (
    <section
    id="quote"
      className="
        w-full
        overflow-hidden
        bg-white
        scroll-mt-[80px]
      "
      style={{
        background:
          "linear-gradient(227.68deg, rgba(116,52,229,0.17) 2.34%, rgba(116,52,229,0) 29.5%, rgba(116,52,229,0) 58.71%, rgba(116,52,229,0.17) 97.66%), #FFFFFF",
      }}
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-10
          px-5
          py-10

          sm:px-8

          lg:grid-cols-[minmax(0,1fr)_560px]
          lg:gap-x-14
          lg:gap-y-16
          lg:px-[70px]
          lg:py-16

          xl:grid-cols-[minmax(0,1fr)_560px]
          xl:gap-x-20
        "
      >
        {/* =================================================
            TOP LEFT
        ================================================= */}

        <div
          className="
            min-w-0
            lg:row-start-1
            lg:col-start-1
          "
        >
          <Heading title={`Your Artwork,\nPerfectly Prepared`} />

          <p
            className="
              mt-3
              max-w-[620px]
              font-inter
              text-[15px]
              leading-6
              text-[#0F1729]/80
            "
          >
            Embroidery digitizing, vector art & logo digitizing
            services designed to deliver accurate, reliable,
            and production ready files.
          </p>
        </div>

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            flex
            min-w-0
            items-center
            justify-center

            lg:row-start-2
            lg:col-start-1
            lg:justify-start
            lg:-mt-65
          "
        >
          <img
            src={patchPreview}
            alt="Patch Preview"
            className="
              block
              w-full
              max-w-[500px]
              object-contain
            "
          />
        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <div
          className="
            min-w-0
            w-full

            lg:row-span-2
            lg:row-start-1
            lg:col-start-2
          "
        >
          <FormState />
        </div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div
          className="
            min-w-0

            lg:row-start-3
            lg:col-span-2
          "
        >
          <div
            className="
              max-w-[1100px]
          
              pt-4
              lg:pt-2
            "
          >
            <h2
              className="
                font-dmSans
                text-[26px]
                font-bold
                leading-[1.2]
                text-[#0F1729]
                sm:text-[28px]
                lg:text-[32px]
              "
            >
              What Do You Get with
              <br />
              Infinity Digitizing?
            </h2>

            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-7
                sm:grid-cols-2
                lg:mt-10
                lg:grid-cols-2
                lg:gap-x-8
              "
            >
              {servicePoints.map(
                ({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3
                      sm:gap-4
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E8DBFE]
                        text-[#7434E5]
                        sm:h-[54px]
                        sm:w-[54px]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="min-w-0">
                      <h3
                        className="
                          font-dmSans
                          text-[16px]
                          font-bold
                          leading-[1.3]
                          text-[#0F1729]
                          sm:text-[17px]
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          font-inter
                          text-[12px]
                          leading-5
                          text-[#7A7591]
                          sm:text-[13px]
                        "
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
import { CircleCheck, CircleX } from "lucide-react";
import ComparisonRow from "./ComparisonRow";

const regularClients = [
  "Average Production Quality",
  "Slow Project Updates",
  "Basic Service Offerings",
  "Time-Consuming Revisions",
  "Missed Deadlines",
  "Transaction-Based Service",
];

const b2bPartners = [
  "Exceptional Production Standards",
  "Clear & Responsive Communication",
  "End-to-End Creative Solutions",
  "Accurate Files from Day One",
  "Consistent On-Time Delivery",
  "Long-Term B2B Partnership",
];

const ComparisonTable = () => {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[14px]
        bg-white
        shadow-[0px_12px_35px_rgba(0,0,0,0.12)]
        lg:max-w-[730px]
      "
    >
      {/* DESKTOP */}
      <div className="hidden lg:block">
        {/* Header */}

        <div className="grid grid-cols-2">
          {/* Left */}

          <div
            className="
              bg-[#0C0C30]
              py-4
              px-5
              font-dmSans
              text-center
              text-base
              font-bold
              text-white
            "
          >
            Regular Clients
          </div>

          {/* Right */}

          <div
            className="
              bg-[#7434E5]
              py-4
              px-5
              text-center
              font-dmSans
              text-base
              font-bold
              text-white
            "
          >
            B2B Partners
          </div>
        </div>

        {/* Body */}

        <div>
          {regularClients.map((item, index) => (
            <ComparisonRow
              key={index}
              leftText={item}
              rightText={b2bPartners[index]}
              isLast={index === regularClients.length - 1}
            />
          ))}
        </div>
      </div>

      {/* MOBILE */}

      <div className="lg:hidden">
        {/* Regular Clients Header */}

        <div
          className="
            bg-[#0C0C30]
            px-[18px]
            py-[14px]
            font-dmSans
            text-base
            font-bold
            text-white
          "
        >
          Regular Clients
        </div>

        {/* Regular Clients Rows */}

        <div>
          {regularClients.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                pl-[10px]
                py-[10px]
                min-h-[42px]
               
              "
            >
              <CircleX
                size={16}
                strokeWidth={2.2}
                className="
            shrink-0
            text-[#ACB0B9]
          "
              />
              <p
                className="
                  font-inter
                  text-sm
                  leading-5
                  text-[#6B7280]
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* B2B Partners Header */}

        <div
          className="
            bg-[#7434E5]
            px-[18px]
            py-[14px]

            font-dmSans
            text-base
            font-bold
            text-white
          "
        >
          B2B Partners
        </div>

        {/* B2B Partners Rows */}

        <div>
          {b2bPartners.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                pl-[10px]
                py-[10px]
                min-h-[42px]
              "
            >
              <CircleCheck
                size={16}
                strokeWidth={2.2}
                className="
            shrink-0
            text-[#7434E5]
          "
              />

              <p
                className="
                  font-inter
                  text-sm
                  leading-5
                  font-medium
                  text-[#424957]
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ComparisonTable;

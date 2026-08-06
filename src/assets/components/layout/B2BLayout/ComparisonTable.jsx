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
      {/* Header */}

      <div className="grid grid-cols-2">
        {/* Left */}

        <div
          className="
            bg-[#171338]
            py-4
            text-center

            font-dmSans
            text-sm
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
            text-center

            font-dmSans
            text-sm
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
  );
};

export default ComparisonTable;
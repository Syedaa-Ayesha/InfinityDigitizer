const PricingTab = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-3 rounded-full bg-white p-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.value)}
            className={`
              px-7
              py-3
              rounded-full
              transition-all
              duration-300

              ${
                activeTab === tab.value
                  ? "bg-[#7434E5] text-white"
                  : "text-[#1D2433] hover:bg-[#F5F1FF]"
              }
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingTab;
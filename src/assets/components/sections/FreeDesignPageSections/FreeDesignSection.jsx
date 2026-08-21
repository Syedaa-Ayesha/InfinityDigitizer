// import FreeDesignHeader from "../../layout/FreeDesignLayout/FreeDesignHeader"
// import FreeDesignFreeSection from "./FreeDesignFreeSection"
// import {
//   FreeDesignData,
// } from "../../common/FreeDesignData";
// import DesignCard from "../../layout/FreeDesignLayout/DesignCard";

// const FreeDesignSection = () => {
//   return (
//     <section className="max-w-[1300px] mx-auto lg:py-[54px]">
//         <FreeDesignHeader />
//     <FreeDesignFreeSection data={FreeDesignData}
//   CardComponent={DesignCard}/>
    
//     </section>
//   )
// }

// export default FreeDesignSection

import FreeDesignHeader from "../../layout/FreeDesignLayout/FreeDesignHeader";
import FreeDesignFreeSection from "./FreeDesignFreeSection";

import {
  FreeDesignData,
} from "../../common/FreeDesignData";

import DesignCard from "../../layout/FreeDesignLayout/DesignCard";

const FreeDesignSection = () => {
  return (
    <section className="max-w-[1300px] mx-auto lg:py-[54px] border">

      <FreeDesignHeader />

      <FreeDesignFreeSection
        data={FreeDesignData}
        CardComponent={DesignCard}
        sectionTitle="Free Designs"
        viewAllText="View All Free Designs"
      />

    </section>
  );
};

export default FreeDesignSection;
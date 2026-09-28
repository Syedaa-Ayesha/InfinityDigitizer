

import { termsItems } from "../../common/TermsData";
import TermsRow from "./TermsRow";

const TermsList = () => {
  return (
    <section className="mt-[30px] space-y-[12px]">
      {termsItems.map((item) => (
        <TermsRow
          key={item.number}
          {...item}
        />
      ))}
    </section>
  );
};

export default TermsList;
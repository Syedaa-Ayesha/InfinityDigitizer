import FooterLogo from "../layout/FooterLogo";
import FooterColumn from "../layout/FooterColumn";
import FooterContact from "../layout/FooterContact";
import FooterBottom from "../layout/FooterBottom";

import {
  footerServices,
  footerCompany,
  footerSupport,
} from "../common/FooterData";

const Footer = () => {
  const servicesLinks = footerServices.map((item) => ({
    label: item,
    link: "#",
  }));

  const companyLinks = footerCompany.map((item) => ({
    label: item,
    link: "#",
  }));

  const supportLinks = footerSupport.map((item) => ({
    label: item,
    link: "#",
  }));

  return (
    <footer
      className="
      bg-[#0D0D2B]
      pt-14
      pb-10
      sm:pt-16
      lg:pt-20
      lg:pb-8
      md:pb-6
      "
    >
      <div
        className="
        mx-auto
        max-w-[1320px]
        px-5
        sm:px-6
        lg:px-8
        xl:px-0
        "
      >
        <div
          className="
          grid
          gap-14

          md:grid-cols-2

          lg:grid-cols-[1.45fr_.9fr_.9fr_.9fr_1.2fr]
          lg:gap-12
          "
        >
          <FooterLogo />

          <FooterColumn
            title="Services"
            links={servicesLinks}
          />

          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          <FooterColumn
            title="Support"
            links={supportLinks}
          />

          <FooterContact />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
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
  
    // FooterColumn component label/link format expect karta hai
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
    <footer className="bg-[#0D0D2B] pt-20">

      {/* Main Footer */}

      <div className="mx-auto flex max-w-[1320px] justify-between gap-12">

        {/* Logo */}

        <FooterLogo />

        {/* Services */}

        <FooterColumn
          title="Services"
          links={servicesLinks}
        />

        {/* Company */}

        <FooterColumn
          title="Company"
          links={companyLinks}
        />

        {/* Support */}

        <FooterColumn
          title="Support"
          links={supportLinks}
        />

        {/* Contact */}

        <FooterContact />

      </div>

      {/* Bottom */}

      <FooterBottom />

    </footer>
  )
}

export default Footer
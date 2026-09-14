
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../images/Logo.png";
import MegaMenu from "../layout/MegaMenu";

const resources = [
  { title: "Blogs", path: "/blogsList" },
  { title: "Reviews", path: "/reviews" },
  { title: "Why Choose Us", path: "/whychooseus" },
  { title: "Referral Program", path: "/referral-program" },
  { title: "Size Guideline", path: "/sizes" },
  { title: "FAQs", path: "/faqs" },
  { title: "Documentation", path: "/documentation" },
  { title: "Site Map", path: "/sitemap" },
];

/* =========================================================
   MOBILE SERVICES
========================================================= */

const mobileServices = [
  {
    title: "Embroidery Digitizing",
    path: "/services#embroidery-digitizing",
  },
  {
    title: "Vector Tracing",
    path: "/services#vector-art",
  },
  {
    title: "Logo Designing",
    path: "/services#logo-design",
  },
  {
    title: "All Services",
    path: "/services",
  },
];

const Navbar = () => {
  // Mobile states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // Desktop states
  const [showDesktopServices, setShowDesktopServices] = useState(false);
  const [showDesktopResources, setShowDesktopResources] = useState(false);

  /* =========================
     MOBILE MENU HELPERS
  ========================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prev) => !prev);
    setMobileResourcesOpen(false);
  };

  const openResources = () => {
    setMobileResourcesOpen(true);
    setMobileServicesOpen(false);
  };

  const goBack = () => {
    setMobileResourcesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[1000] w-full max-w-full overflow-x-clip bg-[#7434E5] text-white">

      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <div className="mx-auto hidden w-full max-w-7xl min-w-0 items-center justify-between gap-6 overflow-x-clip px-6 py-4 xl:flex">

        {/* Logo */}

        <Link to="/">
          <img
            src={logo}
            alt="Infinity Digitizing"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}

        <ul className="flex min-w-0 flex-1 items-center justify-center gap-5 font-medium 2xl:gap-8">

          {/* Home */}

          <li>
            <Link
              to="/"
              className="transition hover:text-gray-200"
            >
              Home
            </Link>
          </li>

          {/* Services */}

          <li
            className="relative shrink-0"
            onMouseEnter={() => setShowDesktopServices(true)}
            onMouseLeave={() => setShowDesktopServices(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-2 text-[16px]"
            >
              Services

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showDesktopServices ? "rotate-180" : ""
                }`}
              />
            </Link>

            <div
              className={`
                absolute
                left-1/2
                top-full
                -translate-x-1/2
                pt-6
                transition-all
                duration-300

                ${
                  showDesktopServices
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-3 opacity-0"
                }
              `}
            >
              <MegaMenu />
            </div>
          </li>

          {/* B2B */}

          <li>
            <Link
              to="/b2b"
              className="transition hover:text-gray-200"
            >
              B2B
            </Link>
          </li>

          {/* Free Design */}

          <li>
            <Link
              to="/freedesign"
              className="transition hover:text-gray-200"
            >
              Free Design
            </Link>
          </li>

          {/* Pricing */}

          <li>
            <Link
              to="/pricing"
              className="transition hover:text-gray-200"
            >
              Pricing
            </Link>
          </li>

          {/* Contact */}

          <li>
            <Link
              to="/contactus"
              className="transition hover:text-gray-200"
            >
              Contact Us
            </Link>
          </li>

          {/* Resources */}

          <li
            className="relative shrink-0"
            onMouseEnter={() => setShowDesktopResources(true)}
            onMouseLeave={() => setShowDesktopResources(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1"
            >
              Resources

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showDesktopResources ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Resources Dropdown */}

            <div
              className={`
                absolute
                left-1/2
                top-full
                z-50
                mt-4
                w-[230px]
                -translate-x-1/2
                rounded-xl
                border
                border-[#ECECEC]
                bg-white
                p-3
                shadow-[0px_20px_40px_rgba(0,0,0,0.12)]
                transition-all
                duration-300

                ${
                  showDesktopResources
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              {resources.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setShowDesktopResources(false)
                  }
                  className="
                    block
                    rounded-md
                    px-3
                    py-2
                    text-[15px]
                    text-black
                    transition
                    hover:bg-[#F5F2FF]
                    hover:text-[#7434E5]
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        {/* Login */}

        <Link
          to="/login"
          className="
            shrink-0
            whitespace-nowrap
            rounded-lg
            bg-white
            px-7
            py-2
            font-dmSans
            font-medium
            text-black
            transition
            hover:bg-gray-100
          "
        >
          Login | Sign up
        </Link>
      </div>

      {/* =====================================================
          MOBILE / TABLET HEADER
      ===================================================== */}

      <div className="flex w-full max-w-full items-center justify-between gap-3 overflow-x-clip px-5 py-3 xl:hidden">

        {/* Logo */}

        <Link
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Infinity Digitizing"
            className="h-10 w-auto max-w-[150px] object-contain"
          />
        </Link>

        {/* Right Side */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Login */}

          <Link
            to="/login"
            onClick={closeMobileMenu}
            className="
              rounded-md
              bg-white
              px-4
              py-2
              text-xs
              font-dmSans
              font-medium
              text-black
              transition
              hover:bg-gray-100
            "
          >
            Login | Sign up
          </Link>

          {/* Hamburger */}

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              transition
              duration-200
              hover:bg-white/10
            "
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="transition-transform duration-300">
              {mobileMenuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-x-0
          top-[64px]
          z-[999]
          box-border
          w-auto
          max-w-full
          max-h-[calc(100dvh-64px)]
          overflow-x-clip
          overflow-y-auto
          border-t
          border-white/10
          bg-[#7434E5]
          shadow-[0_20px_40px_rgba(0,0,0,0.18)]
          xl:hidden

          transition-all
          duration-300
          ease-[cubic-bezier(0.4,0,0.2,1)]

          ${
            mobileMenuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >

        {/* ===================================================
            MAIN MOBILE MENU
        =================================================== */}

        <div className="box-border w-full min-w-0 max-w-full overflow-x-clip px-5 py-4">

          {/* Home */}

          <MobileLink
            to="/"
            title="Home"
            onClick={closeMobileMenu}
          />

          {/* =================================================
              SERVICES ACCORDION
          ================================================= */}

          <button
            type="button"
            onClick={toggleMobileServices}
            className="
              flex
              w-full
              items-center
              justify-between
              border-b
              border-white/10
              py-4
              text-left
              text-[15px]
              font-medium
              transition
              duration-200
              hover:text-white/80
            "
          >
            <span>Services</span>

            <ChevronDown
              size={19}
              className={`
                transition-transform
                duration-300
                ${
                  mobileServicesOpen
                    ? "rotate-180"
                    : "rotate-0"
                }
              `}
            />
          </button>

          {/* =================================================
              SERVICES DROPDOWN
          ================================================= */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${
                mobileServicesOpen
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="box-border w-full min-w-0 max-w-full overflow-x-clip border-b border-white/20 pl-6">

              {mobileServices.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="
                    block
                   
                  
                   my-3
                    
                    text-[14px]
                    font-medium
                    text-white
                    transition
                    duration-200
                    hover:text-white
                  "
                >
                  {item.title}
                </Link>
              ))}

            </div>
          </div>

          {/* B2B */}

          <MobileLink
            to="/b2b"
            title="B2B"
            onClick={closeMobileMenu}
          />

          {/* Why Choose Us */}

          <MobileLink
            to="/whychooseus"
            title="Why Choose Us"
            onClick={closeMobileMenu}
          />

          {/* Pricing */}

          <MobileLink
            to="/pricing"
            title="Pricing"
            onClick={closeMobileMenu}
          />

          {/* Contact */}

          <MobileLink
            to="/contactus"
            title="Contact Us"
            onClick={closeMobileMenu}
          />

          {/* =================================================
              RESOURCES
          ================================================= */}

          <button
            type="button"
            onClick={openResources}
            className="
              flex
              w-full
              items-center
              justify-between
              py-4
              text-left
              text-[15px]
              font-medium
              transition
              duration-200
              hover:text-white/80
            "
          >
            <span>Resources</span>

            <ChevronDown
              size={18}
              className="text-white"
            />
          </button>
        </div>

        {/* =================================================
            RESOURCES SUB MENU
            SERVICES IS NO LONGER A SLIDER
        ================================================= */}

        <div
          className={`
            absolute
            inset-x-0
            top-0
            min-h-full
            box-border
            w-auto
            max-w-full
            overflow-x-clip
            bg-[#7434E5]
            px-5
            py-5
            transition-all
            duration-300
            ease-[cubic-bezier(0.4,0,0.2,1)]

            ${
              mobileResourcesOpen
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-full opacity-0"
            }
          `}
        >

          {/* Back */}

          <button
            type="button"
            onClick={goBack}
            className="
              mb-5
              flex
              items-center
              gap-2
              text-sm
              font-medium
              transition
              duration-200
              hover:text-white/80
            "
          >
            <ArrowLeft size={18} />

            <span>Back</span>
          </button>

          <h3 className="mb-3 text-lg font-semibold">
            Resources
          </h3>

          {/* Resource Links */}

          <div>
            {resources.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className="
                  block
                  border-b
                  border-white/10
                  py-3.5
                  text-[15px]
                  font-medium
                  transition
                  duration-200
                  hover:text-white/80
                "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

/* =========================================================
   MOBILE LINK
========================================================= */

const MobileLink = ({ to, title, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        justify-between
        border-b
        border-white/10
        py-4
        text-[15px]
        font-medium
        transition
        duration-200
        hover:text-white/80
      "
    >
      {title}
    </Link>
  );
};

export default Navbar;

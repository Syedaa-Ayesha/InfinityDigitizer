
// import { useState } from "react";

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

  const openServices = () => {
    setMobileServicesOpen(true);
    setMobileResourcesOpen(false);
  };

  const openResources = () => {
    setMobileResourcesOpen(true);
    setMobileServicesOpen(false);
  };

  const goBack = () => {
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[1000] bg-[#7434E5] text-white">

      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <div className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-4 lg:flex">

        {/* Logo */}

        <Link to="/">
          <img
            src={logo}
            alt="Infinity Digitizing"
            className="h-12 w-auto"
          />
        </Link>

        {/* Navigation */}

        <ul className="flex items-center gap-8 font-medium">

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
            className="relative"
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
            className="relative"
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
                  onClick={() => setShowDesktopResources(false)}
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

      <div className="flex items-center justify-between px-5 py-3 lg:hidden">

        {/* Logo */}

        <Link
          to="/"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Infinity Digitizing"
            className="h-10 w-auto"
          />
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-3">

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
            <span
              className="
                transition-transform
                duration-300
              "
            >
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
          Smooth Overlay
      ===================================================== */}

      <div
        className={`
          fixed
          left-0
          right-0
          top-[64px]
          z-[999]
          max-h-[calc(100vh-64px)]
          overflow-y-auto
          border-t
          border-white/10
          bg-[#7434E5]
          shadow-[0_20px_40px_rgba(0,0,0,0.18)]
          lg:hidden

          origin-top
          transform
          transition-all
          duration-300
          ease-out

          ${
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-3 opacity-0"
          }
        `}
      >

        {/* ===================================================
            MAIN MOBILE MENU
        =================================================== */}

        {!mobileServicesOpen && !mobileResourcesOpen && (
          <div className="px-5 py-4">

            {/* Home */}

            <MobileLink
              to="/"
              title="Home"
              onClick={closeMobileMenu}
            />

            {/* Services */}

            <button
              type="button"
              onClick={openServices}
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
              "
            >
              <span>Services</span>

              <ChevronDown size={19} />
            </button>

            {/* B2B */}

            <MobileLink
              to="/b2b"
              title="B2B"
              onClick={closeMobileMenu}
            />

            {/* Free Design */}

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

            {/* Resources */}

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
              "
            >
              <span>Resources</span>

              <ChevronDown size={18} className="text-white"/>
            </button>
          </div>
        )}

        {/* ===================================================
            SERVICES SUB MENU
        =================================================== */}

        {mobileServicesOpen && (
          <div className="px-5 py-5">

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
              "
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>

            <h3 className="mb-4 text-lg font-semibold">
              Our Services
            </h3>

            <MegaMenu
              mobile
              onNavigate={closeMobileMenu}
            />
          </div>
        )}

        {/* ===================================================
            RESOURCES SUB MENU
        =================================================== */}

        {mobileResourcesOpen && (
          <div className="px-5 py-5">

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
                    hover:text-white/80
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
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
        hover:text-white/80
      "
    >
      {title}
    </Link>
  );
};

export default Navbar;


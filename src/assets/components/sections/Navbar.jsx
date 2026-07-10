import { useState } from "react";
import logo from "../../images/Logo.png";
import { ChevronDown } from "lucide-react";
import { Link }from 'react-router-dom'
import MegaMenu from "../layout/MegaMenu";
const Navbar = () => {

  const [showResources, setShowResources] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);


 const resources = [
  { title: "Blogs", path: "/blogs" },
  { title: "Reviews", path: "/reviews" },
  { title: "Free Designs", path: "/free-designs" },
  { title: "Referral Program", path: "/referral-program" },
  { title: "Size Guideline", path: "/size-guideline" },
  { title: "FAQs", path: "/faqs" },
  { title: "Documentation", path: "/documentation" },
];


  return (
    
    <nav className="sticky top-0 z-50 bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
  <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Nav */}
        <ul className="flex items-center gap-8 font-medium">

          <li className="cursor-pointer hover:text-gray-200">
            <Link to="/">Home</Link>
          </li>

          {/* Services */}
          <li
            className="relative"
            // onMouseEnter={() => setShowServices(true)}
          >
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              {/* Services Link */}

              <Link
                to="/services"
                className="
      flex
      items-center
      gap-2
      text-[16px]
      font-medium
      transition
    "
              >
                Services

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${showMegaMenu ? "rotate-180" : ""
                    }`}
                />
              </Link>

              {/* Mega Menu */}

              <div
                className={`
      absolute
      left-1/2
      top-full
      -translate-x-1/2
      pt-6
      transition-all
      duration-300
      ${showMegaMenu
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-3"
                  }
    `}
              >
                <MegaMenu />
              </div>
            </div>

          </li>
          <li className="cursor-pointer hover:text-gray-200"><Link to="/b2b">B2B</Link></li>
          <li className="cursor-pointer hover:text-gray-200"><Link to="/freedesign">Free Design</Link></li>
          <li className="cursor-pointer hover:text-gray-200"><Link to="/pricing">Pricing</Link></li>
          <li className="cursor-pointer hover:text-gray-200"><Link to="/contactus">Contact Us</Link></li>

          {/* Resources */}
          <li
  className="relative"
  onMouseEnter={() => setShowResources(true)}
  onMouseLeave={() => setShowResources(false)}
>
  <div
    className="
      flex
      cursor-pointer
      items-center
      gap-1
    "
  >
    Resources

    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        showResources ? "rotate-180" : ""
      }`}
    />
  </div>

  <div
    className={`
      absolute
      left-1/2
      top-full
      z-50
      mt-4
      w-[230px]
      -translate-x-1/2
      rounded-[12px]
      border
      border-[#ECECEC]
      bg-white
      p-3
      shadow-[0px_20px_40px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      ${
        showResources
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-2"
      }
    `}
  >
    {resources.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        onClick={() => setShowResources(false)}
        className="
          block
          rounded-md
          px-3
          py-1
          text-[16px]
          text-[#000000]
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

        {/* Button */}
        <button className="font-dmSans bg-white text-black px-7 py-2 rounded-lg font-medium hover:bg-gray-100 " style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Login | Sign up
        </button>

      </div>
    </nav>
    
  );
};

export default Navbar;
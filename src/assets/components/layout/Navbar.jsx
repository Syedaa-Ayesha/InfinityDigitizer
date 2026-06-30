import { useState } from "react";
import logo from "../../images/Logo.png";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const services = [
    "Custom Embroidery Digitizing",
    "Vector Tracing",
    "Applique Embroidery Digitizing",
    "3D Puff Embroidery",
    "Embroidered Patches",
    "Logo Designing",
    "Chenille Digitizing",
    "Photo Digitizing",
    "Shirt Embroidery Digitizing",
    "Custom Hat Embroidery",
  ];
  const resource = [
    "Custom Embroidery Digitizing",
    "Vector Tracing",
    "Applique Embroidery Digitizing",
    "3D Puff Embroidery",
    "Embroidered Patches",
    "Logo Designing",
    "Chenille Digitizing",
    "Photo Digitizing",
    "Shirt Embroidery Digitizing",
    "Custom Hat Embroidery",
  ];


  return (
    <nav className="bg-purple-600 text-white sticky">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto pointer" />

        {/* Nav */}
        <ul className="flex items-center gap-8 font-medium">

          <li className="cursor-pointer hover:text-gray-200">
            Home
          </li>

          {/* Services */}
          <li
            className="relative"
             onMouseEnter={() => setShowServices(true)} 
          >
            <button className="flex items-center gap-1 hover:text-gray-200">
              Services
              <ChevronDown size={18} />
            </button>

            {showServices && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white text-black rounded-lg shadow-lg p-2 z-50">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-sm text-[#00030b] px-4 py-1 rounded-md hover:bg-gray-100 font-normal"
                 onClick={() => setShowServices(false)}> 
                    {service}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-gray-200">Free Designs</li>
          <li className="cursor-pointer hover:text-gray-200">Pricing</li>
          <li className="cursor-pointer hover:text-gray-200">Contact Us</li>

          {/* Resources */}
          <li
            className="relative"
            onMouseEnter={() => setShowResources(true)}
      
          >
            <button className="flex items-center gap-1 hover:text-gray-200">
              Resources
              <ChevronDown size={18} />
            </button>

             {showResources && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white text-black rounded-lg shadow-lg p-2 z-50">
                {resource.map((resource, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-sm text-[#00030b] px-4 py-1 rounded-md hover:bg-gray-100 font-normal"
                        onClick={() => setShowResources(false)}>
                    {resource}
                  </a>
                ))}
              </div>
            )}
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
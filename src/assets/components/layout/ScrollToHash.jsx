// ScrollToHash.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    const scrollToSection = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Wait for the new page/components to render
    const timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
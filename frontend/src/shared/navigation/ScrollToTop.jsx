// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Get the element by ID (without '#')
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to element
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash
    }
  }, [pathname, hash]); // Effect runs on pathname or hash change

  return null;
};

export default ScrollToTop;

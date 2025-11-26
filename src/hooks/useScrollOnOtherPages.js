import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollOnOtherPages() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Do not scroll on home page
    if (pathname === "/") return;

    // Scroll only on other pages
    window.scrollTo({
      top: 600,        // Skip the hero section
      behavior: "smooth",
    });

  }, [pathname]);
}

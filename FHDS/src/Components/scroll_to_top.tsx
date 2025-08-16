import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navHeight, navSpacing, nHeight } from "../variables";

function tailwindHeightToPx(className = "") {
  const num = parseInt(className.replace("h-", ""), 10); // 20
  const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize); // usually 16
  return num * remSize * 0.25; // tailwind's scale: 1 = 0.25rem
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
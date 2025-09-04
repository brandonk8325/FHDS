import { useEffect, useState, useCallback } from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function Component({ page = "" }) {
  const [navHeight, setNavHeight] = useState("h-nav-height");
  const [imgH, setImgH] = useState("h-12");
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Background presets (override Flowbite + dark:)
  const SOLID = "!bg-[#1C4436] dark:!bg-[#1C4436]";
  const SOLID_BLUR = "!bg-[#1C4436]/90 dark:!bg-[#1C4436]/90 backdrop-blur-lg";
  const TRANSPARENT = "!bg-transparent dark:!bg-transparent";
  const [navBg, setNavBg] = useState(page === "home" ? TRANSPARENT : SOLID);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavBg(page === "home" ? TRANSPARENT : SOLID);
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setNavBg(SOLID_BLUR);
        setNavHeight("h-16");
        setImgH("h-8");
      } else {
        setNavBg(page === "home" ? TRANSPARENT : SOLID);
        setNavHeight("h-nav-height");
        setImgH("h-12");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  // Overlay UX
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [overlayOpen]);

  useEffect(() => setOverlayOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOverlayOpen(false);
    if (overlayOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlayOpen]);

  const openOverlay = useCallback(() => setOverlayOpen(true), []);
  const closeOverlay = useCallback(() => setOverlayOpen(false), []);

  return (
    <>
      <Navbar
        fluid
        className={`
          fixed top-0 left-0 w-full z-[90]
          border-b border-gray-200/50 dark:border-gray-600/50
          ${navBg} ${navHeight}
          !px-0 !py-0
          [&>div]:max-w-none [&>div]:mx-0 [&>div]:h-full
        `}
      >
        {/* MOBILE: logo + hamburger */}
        <div className="flex md:hidden w-full items-center justify-between">
          <Link to="/" className="pl-4 h-full flex items-center">
            <img src="/static/navbar_logo.png" className={`${imgH} block`} alt="Logo" />
          </Link>

          <button
            type="button"
            className="me-4 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Open menu"
            aria-controls="mobile-fullscreen-menu"
            aria-expanded={overlayOpen}
            onClick={openOverlay}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="white" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {/* DESKTOP: absolute-centered nav */}
        <div className="hidden md:block relative w-full h-full">
          {/* Left: logo (normal flow, pinned left) */}
          <Link to="/" className="absolute inset-y-0 left-0 pl-4 flex items-center">
            <img src="/static/navbar_logo.png" className={`${imgH} block`} alt="Logo" />
          </Link>

          {/* Center: links (true viewport center) */}
          <nav className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center">
            <ul className="flex flex-row items-center gap-8">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
              <li><Link to="/events" className="text-white">Events</Link></li>
              <li><Link to="/donate" className="text-white">Donate</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </nav>

          {/* Optional right-side area (keep empty or add CTA) */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center" />
        </div>
      </Navbar>

      {/* MOBILE: full-screen overlay menu */}
      <div
        id="mobile-fullscreen-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!overlayOpen}
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-200
                    ${overlayOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-[#1C4436]" />
        <div className="relative h-full flex flex-col text-white">
          <div className="h-nav-height flex items-center justify-between px-5">
            <Link to="/" onClick={closeOverlay} className="flex items-center">
              <img src="/static/navbar_logo.png" className="h-10" alt="Logo" />
            </Link>
            <button
              onClick={closeOverlay}
              aria-label="Close menu"
              className="p-3 -m-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 pb-10 pt-6">
            <ul className="space-y-4 text-2xl font-medium tracking-wide">
              <li><Link to="/" onClick={closeOverlay} className="block py-2">Home</Link></li>
              <li><Link to="/about" onClick={closeOverlay} className="block py-2">About</Link></li>
              <li><Link to="/events" onClick={closeOverlay} className="block py-2">Events</Link></li>
              <li><Link to="/donate" onClick={closeOverlay} className="block py-2">Donate</Link></li>
              <li><Link to="/contact" onClick={closeOverlay} className="block py-2">Contact</Link></li>
            </ul>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/80">
              <p>Furever Home Dog Sanctuary</p>
              <p>Richmond, Illinois</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

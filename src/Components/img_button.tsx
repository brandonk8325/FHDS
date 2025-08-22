import { useState, useEffect } from "react";

export function ImagePopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC + lock body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.classList.add("overflow-hidden"); // prevent body scroll
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-lg bg-darkgreen text-white hover:bg-green-700"
      >
        Sponsor Us!
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-150 flex items-center justify-center h-screen">
          {/* Full-viewport blurred/dimmed backdrop */}
          <button
            aria-label="Close"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm"
          />

          {/* Centered image container; px-5 lives here, not on the img */}
          <div className="relative z-10 px-5">
            <img
              src="/static/Event_1_more.jpeg"
              alt="Popup"
              className="w-120 h-auto rounded-lg shadow-xl block"
            />

            {/* Close button pinned to the image’s top-right INSIDE the padding */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close image"
              className="absolute top-2 right-6 bg-black rounded-full p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {/* Your SVG, tinted white */}
              <svg
                viewBox="0 0 232.468 232.468"
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M171.204,3.192l-42.697,42.702c-4.248,4.248-11.134,4.248-15.382,0L73.475,6.244
                  c-4.248-4.248-11.134-4.248-15.382,0L6.237,58.105c-4.248,4.248-4.248,11.134,0,15.382l39.656,39.651
                  c4.248,4.248,4.248,11.134,0,15.382L3.186,171.227c-4.248,4.248-4.248,11.134,0,15.382l42.691,42.669
                  c4.248,4.248,11.134,4.248,15.382,0l42.691-42.691c4.248-4.248,11.134-4.248,15.382,0l39.645,39.634
                  c4.248,4.248,11.134,4.248,15.382,0l51.861-51.861c4.248-4.248,4.248-11.134,0-15.387l-39.629-39.645
                  c-4.248-4.248-4.248-11.139,0-15.387l42.691-42.691c4.248-4.248,4.248-11.134,0-15.382L186.591,3.176
                  C182.338-1.056,175.457-1.056,171.204,3.192z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

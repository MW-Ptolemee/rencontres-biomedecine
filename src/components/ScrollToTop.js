import React, { useEffect, useState } from "react";

const ScrollToTop = ({ handleScroll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) setIsVisible(true);
      if (window.pageYOffset < 300) setIsVisible(false);
    };

    // Register the scroll event listener
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={handleScroll}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed right-1 md:right-8 bottom-52`}
    >
      <div className="rounded-full border-2 border-[#b3b3b3] hover:border-secondary p-3 md:p-4 text-[#b3b3b3] hover:text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </button>
  );
};

export default ScrollToTop;

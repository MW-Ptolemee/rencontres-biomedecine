import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-[400px] container py-28 md:py-40">
      <h1 className="text-4xl md:text-8xl text-center font-bold mb-4">404</h1>
      <p className="text-2xl md:text-4xl text-center mb-4">No page found</p>
      <Link className="flex justify-center items-center space-x-2 text-center" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        <span className="text-lg md:text-xl"> Go back home</span>
      </Link>
    </div>
  );
};

export default NoPage;

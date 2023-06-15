import React from "react";
import Menu from "./Menu";
import alogo from "../assets/icon2.png";
import alogoB from "../assets/icon2 black.png";

const Navbar = ({ handleMenu, toggleMode, darkMode, handleText }) => {
  return (
    <div
      className={`sticky top-0 ${
        darkMode === "dark" ? "bg__grd" : "bg__grd__bw"
      } shadow__navbar`}
    >
      <div className="relative container flex justify-between items-center">
        <Menu />

        <button onClick={handleMenu} className="block md:hidden text-white">
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <div className="bg-white xl:w-[35%] flex justify-between items-center md:px-8">
          <button
            onClick={toggleMode}
            className="w-max bg-white mr-2 xl:-mr-1 md:mr-0 flex space-x-2 items-center pl-5 p-3 md:p-2.5 md:pl-0 font-semibold text-secondary dark:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-12 md:h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="hidden xl:block text-left text-sm md:text-lg  xl:text-base">
              Optimiser
              <br /> les contrastes
            </span>
          </button>
          
          <hr className="border border-secondary h-8 md:mx-2" />

          <button
            onClick={handleText}
            className="w-max bg-white flex items-center -mr-1 md:-mr-0 py-3 md:p-2.5 pl-8 font-semibold text-secondary dark:text-black"
          >
            <img
              className="w-16 md:w-16 -ml-4 md:-ml-1 xl:-ml-1"
              src={darkMode === "light" ? alogoB : alogo}
              alt="alogo"
            />{" "}
            <span className="hidden xl:block ml-1 text-left text-sm md:text-lg xl:text-base">
              Taille <br />
              de la police
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

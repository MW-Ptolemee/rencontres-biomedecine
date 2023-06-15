import React from "react";
import { menu } from "./Data";
import { NavLink } from "react-router-dom";
import logoRB from "../assets/LOGO-RB-NOIR.png";
import logoRB2 from "../assets/LOGO-RB-BLANC.png";

const MobileMenu = ({ darkMode, handleMenu, isOpen }) => {
  if (!isOpen) return null;

  // console.log(darkMode);
  return (
    <div className="fixed top-0 z-50 bg-secondary dark:bg-black h-screen w-[70%] p-8">
      <div className="flex items-center justify-between mb-8">
        <img
          className="-ml-[20px] md:-ml-0 xl:-ml-12 w-[250px] md:w-[400px] xl:w-[800px] h-[70px] md:h-[110px] xl:h-[250px] object-cover"
          src={darkMode === "light" ? logoRB : logoRB2}
          alt="logo"
        />
        <button onClick={handleMenu} className=" text-white">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="relative z-50 md:hidden grid space-y-4">
        {menu.map((item, i) => {
          return (
            <li onClick={handleMenu} key={i} className="w-max text-white">
              <NavLink
                className={`pb-1 hover:border-b-2 text-sm md:text-xl hover:border-primary dark:hover:border-white`}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;

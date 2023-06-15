import React from "react";
import logoW from "../assets/LOGO-ABM-BLANC.png";
import logoB from "../assets/LOGO-ABM-NOIR.png";
import logo from "../assets/BLOC-DATE-RB.png";
import logo2 from "../assets/BLOC-DATE-RB-NOIR.png";
import logoRB from "../assets/LOGO-RB-NOIR.png";
import logoRB2 from "../assets/LOGO-RB-BLANC.png";

const Header = ({ darkMode }) => {
  return (
    <div className="relative bg-primary dark:bg-white py-8 md:pt-14 xl:py-8">
      <div className="absolute top-0 right-0 w-[40%] md:w-96 border-[4px] md:border-[8px] border-[#00556c] dark:border-black"></div>
      <div className="absolute top-0 right-0 h-24 md:h-52 border-[4px] md:border-[8px] border-[#00556c] dark:border-black"></div>
      <div className="absolute bottom-0 left-0 w-[40%] md:w-96 border-[4px] md:border-[8px] border-white"></div>
      <div className="absolute bottom-0 left-0 h-24 md:h-52 border-[4px] md:border-[8px] border-white"></div>
      <div className="mx-4 md:container ">
        <h1 className="text-white dark:text-black mr-0 md:mr-4 xl:mr-0 xl:text-xl gotham-bold text-right -mb-2 md:-mb-3 xl:-mb-8">
          <span className="text-secondary dark:text-black text-right">#</span>
          RBM2023
        </h1>

        <div className="flex justify-between items-center md:mb-4">
          <img
            className="-ml-[20px] md:-ml-0 xl:-ml-12 w-[250px] md:w-[400px] xl:w-[800px] h-[70px] md:h-[110px] xl:h-[250px] object-cover"
            src={darkMode === "light" ? logoRB : logoRB2}
            alt="logo"
          />

          <hr className="hidden md:block border-[1px] border-secondary dark:border-black h-[100px] md:h-[120px] xl:h-[180px]" />

          <div className="flex flex-col md:flex-row items-center md:items-center">
            <a href="https://www.agence-biomedecine.fr/" target="_blank">
              <img
                className="hidden md:block w-36 md:w-[200px] xl:w-[400px] order-2 md:order-1"
                src={darkMode === "light" ? logoB : logoW}
                alt="logo"
              />
            </a>
            <div className="-mr-2 md:-mr-0 xl:-mr-8 order-1 md:order-2">
              <img
                className="w-[150px] md:w-[200px] xl:w-[430px]"
                src={darkMode === "light" ? logo2 : logo}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import FooterMenu from "./FooterMenu";
import logoW from "../assets/LOGO-ABM-BLANC.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-primary dark:bg-black overflow-hidden py-8">
      <div className="absolute bottom-0 left-0 w-[40%] md:w-96 border-[4px] md:border-[8px] border-secondary dark:border-white"></div>
      <div className="absolute bottom-0 left-0 h-24 md:h-52 border-[4px] md:border-[8px] border-secondary dark:border-white"></div>

      <div className="mx-4 md:container flex flex-row justify-between items-start md:items-center">
        <FooterMenu />{" "}
        <a href="https://www.agence-biomedecine.fr/" target="_blank">
          <img
            className="h-14 -mt-3 md:mt-0 md:h-[110px] object-cover xl:w-[300px]"
            src={logoW}
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

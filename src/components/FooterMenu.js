import React from "react";
import { footerMenu as fMenu } from "./Data";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <ul className="w-[70%] flex flex-wrap flex-row items-center md:mr-4">
      {fMenu.map((item, i) => {
        return (
          <li key={i} className="text-white pr-1 md:p-4 font-bold">
            {item.title === "© Agence de la biomédecine - 2023" ? (
              <div
                className={`${
                  i !== 3 ? `border-r-2` : ``
                } border-secondary dark:border-white pr-1 md:pr-4 text-[12px] xl:text-base`}
              >
                {" "}
                {item.title}
              </div>
            ) : (
              <Link
                className={`${
                  i !== 3 ? `border-r-2` : ``
                } border-secondary dark:border-white pr-1 md:pr-4 text-[10px] sm:text-xs xl:text-base hover:underline`}
                to={item.link}
              >
                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenu;

import React, { useEffect } from "react";
import { menu } from "../components/Data";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation()?.pathname;
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <ul className="hidden md:flex xl:w-[70%] space-x-8 items-center mr-4">
      {menu.map((item, i) => {
        return (
          <li key={i} className="w-max text-white">
            <NavLink
              className={`${
                (location.match("/session") && item.title == "Programme") ||
                (location.match("/friday-october-13") &&
                  item.title == "Programme")
                  ? "active"
                  : null
              } pb-1 hover:border-b-2 text-sm md:text-lg hover:border-primary dark:hover:border-white`}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

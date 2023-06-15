import React from "react";
import { Link } from "react-router-dom";

const Session = ({ data, handleText, textSize }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-4">
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className="md:h-[300px] bg-white flex flex-col justify-between"
          >
            <h1
              className={`${
                textSize === "text-xl md:text-2xl" ? `gotham-bold` : ``
              } text-white text-[10px] md:text-[14px] py-1.5 px-4 font-bold dark:bg-black ${
                item?.color
              }`}
            >
              {item.title}
            </h1>

            <h2
              className={`gotham-bold text-xs md:text-xl ${item.textColor} dark:text-black p-4`}
            >
              {item.desc}
            </h2>

            <Link
              to={item.link}
              className={`w-max self-center text-[10px] md:text-base border-2 ${item?.borderColor} dark:border-black font-bold px-3 py-2 m-4 ${item?.clr} hover:text-white dark:hover:bg-black dark:hover:text-white`}
            >
              {item.btnText}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Session;

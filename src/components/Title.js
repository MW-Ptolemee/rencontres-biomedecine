import React from "react";

const Title = ({ title, textLight, textSize }) => {
  return (
    <h1
      className={`gotham-bold mb-4 text-[18px] ${
        textSize ? textSize : "md:text-3xl"
      } font-bold text-secondary dark:text-black`}
    >
      {title} <span className="gotham-thin">{textLight}</span>
    </h1>
  );
};

export default Title;

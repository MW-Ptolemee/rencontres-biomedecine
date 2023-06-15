import React from "react";

const Overlay = ({ handleMenu, isOpen }) => {
  if (isOpen) {
    return (
      <div
        onClick={handleMenu}
        className="absolute z-40 top-0 h-full w-full bg-black bg-opacity-40"
      ></div>
    );
  }
};

export default Overlay;

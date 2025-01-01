import React from "react";

const CarouselButton = ({ direction, onClick, Icon }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-0" : "right-0"
    } top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg`}
  >
    <Icon size={24} />
  </button>
);

export default CarouselButton;

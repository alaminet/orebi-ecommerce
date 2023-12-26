import React from "react";

const ButtonAlt = ({ className, title }) => {
  return (
    <button
      className={`py-2 px-6 border border-solid border-primary-black text-sm bg-primary-black text-white hover:bg-white hover:text-primary-black transition-all duration-300 ease-linear delay-75 ${className}`}
    >
      {title}
    </button>
  );
};

export default ButtonAlt;

import React from "react";

const Button = ({ className, title }) => {
  return (
    <button
      className={`py-2 px-6 border border-solid border-primary-black text-sm hover:bg-primary-black hover:text-white transition-all duration-300 ease-linear delay-75 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;

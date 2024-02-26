import React from "react";
import Link from "../Link";

const Button = ({ className, title,href }) => {
  return (
    <Link href={href}>
        <button
        className={`py-2 px-6 border border-solid border-primary-black text-sm hover:bg-primary-black hover:text-white transition-all duration-300 ease-linear delay-75 ${className}`}
      >
        {title}
      </button>
    </Link>
    
  );
};

export default Button;

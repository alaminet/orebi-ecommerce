import React from "react";

const Link = ({ children, className, href }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;

import React from "react";

const Lists = ({ children, className }) => {
  return <div className={`list-none ${className}`}>{children}</div>;
};

export default Lists;

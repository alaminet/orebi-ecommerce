import React from "react";

const Image = ({ src, alt, className }) => {
  return (
    <picture>
      <img className={className} src={src} alt={alt} />
    </picture>
  );
};

export default Image;

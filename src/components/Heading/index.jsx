import React from 'react'

const Heading = ({title,className}) => {
  return (
    <h2 className={`font-bold text-lg lg:text-[36px] text-primary-black font-dmsans ${className}`}>{title}</h2>
  )
}

export default Heading
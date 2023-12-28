import React from 'react'

const Badge = ({title,className}) => {
  return (
    <div
      className={`bg-black text-base py-1 px-2 text-white top-3 left-3 absolute z-10 ${className}`}
    >
      {title}
    </div>
  )
}

export default Badge
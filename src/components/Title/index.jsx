import React from 'react'

const Title = ({ className, title }) => {
  return (
    <div className={`text-[#262626] text-xl font-bold ${className}`}>
      {title}
    </div>
  )
}

export default Title
import React from 'react'
import Flex from '../Flex'

const ColorPallet = ({color, className}) => {

  return (
   <>
   <div>
    <Flex className="gap-2 items-center pb-1 leading-8 text-sm">
        <div><div className={`w-4 h-4 rounded-full ${className}`}></div></div>
        <div className='capitalize'>{color}</div>
    </Flex>
   </div>
   </>
  )
}

export default ColorPallet
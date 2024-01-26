import React, { useState } from 'react'
import Flex from '../Flex'

const Quantity = ({className}) => {
    const [qty, setQty] = useState(1);
    const handleMinus = ()=>{
        if (qty >= 1) {
            setQty(qty - 1);
        }
    }
    const handlePlus = ()=>{
        if (qty <= 10) {
            setQty(qty + 1);
        }
    }
  return (
    <>
        <Flex className={`gap-3 my-4 items-center ${className}`}>
            <div className='text-base font-bold uppercase'>Quantity</div>
            <Flex className="gap-4 font-dmsans border border-gray-300 py-1 px-2">
                <div onClick={handleMinus} className='cursor-pointer'>-</div>
                <div>{qty}</div>
                <div onClick={handlePlus} className='cursor-pointer'>+</div>
            </Flex>
        </Flex>
    </>
  )
}

export default Quantity
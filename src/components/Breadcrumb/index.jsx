import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import Flex from '../Flex'

const Breadcrumb = () => {
    const bread = window.location.pathname.split("/");
  return (
    <>
    <Flex className="items-center gap-1 text-xs font-dmsans capitalize">
    <p>Home</p>
    {
        bread.slice(1).map((item,i)=>(
            <div key={i} className='flex items-center gap-1'>
            <FaAngleRight/>
            <p>{item}</p>
            </div>
        ))
    }
    </Flex>
    </>
  )
}

export default Breadcrumb
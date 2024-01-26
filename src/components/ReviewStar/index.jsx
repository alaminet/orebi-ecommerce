import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import Flex from '../Flex'

const ReviewStar = ({reviewStarCount}) => {
    const reviewArry = [...Array(reviewStarCount).keys()];
    
  return (
    <>
    <div className='relative my-4'>
        <Flex className="gap-1">
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
        </Flex>
        <div className='absolute left-0 top-0'>
            <Flex className="gap-1">
                {
                    reviewArry?.map((item,i)=>(
                    <div key={i}><FaStar className='text-yellow-400'/></div>
                    ))
                }
            </Flex>
        </div>
    </div>
    </>
  )
}

export default ReviewStar
import React, { useState } from 'react'
import Title from '../Title'
import Flex from '../Flex'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import ButtonAlt from '../ButtonAlt'

const ReviewForm = () => {
    const [reviewCount,SetReviewCount] = useState(0)
    const reviewArry = [...Array(reviewCount).keys()];
  return (
    <>
        <div className='my-6'>
            <Title title="Add a Review"/>
            <form action="">
                <div className='my-4'>
                    <label className='block text-base font-bold'>Name</label>
                    <input type="text" placeholder='Your name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                </div>
                <div className='my-4'>
                    <label className='block text-base font-bold'>Email</label>
                    <input type="email" placeholder='Your email here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                </div>
                <div className='my-4'>
                    <label className='block text-base font-bold'>Review</label>
                    <div className='relative my-4 z-10'>
                        <Flex className="gap-1">
                            <FaRegStar onClick={()=> SetReviewCount(1)} className='cursor-pointer'/>
                            <FaRegStar onClick={()=> SetReviewCount(2)} className='cursor-pointer'/>
                            <FaRegStar onClick={()=> SetReviewCount(3)} className='cursor-pointer'/>
                            <FaRegStar onClick={()=> SetReviewCount(4)} className='cursor-pointer'/>
                            <FaRegStar onClick={()=> SetReviewCount(5)} className='cursor-pointer'/>
                        </Flex>
                        <div className='absolute left-0 top-0 z-0'>
                            <Flex className="gap-1">
                                {
                                    reviewArry?.map((item,i)=>(
                                    <div key={i} onClick={()=> SetReviewCount(i + 1)}><FaStar className='text-yellow-400 cursor-pointer'/></div>
                                    ))
                                }
                            </Flex>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <label className='block text-base font-bold'>Comments</label>
                    <textarea rows={5} placeholder='Your comments here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                </div>
                <div>
                    <ButtonAlt title="Post"/>
                </div>
            </form>
        </div>
    
    </>
  )
}

export default ReviewForm
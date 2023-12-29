import React from 'react'
import Heading from '../Heading'
import Container from '../Container'
import Product from '../Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBtns from '../SliderBtns'
import { bestSellerData } from './bestSellerData'

const BestSeller = () => {
  return (
    <>
    <Container className="mt-20">
    <Heading className="pb-4" title="Best Seller"/>
    <div>
    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {
            
            bestSellerData?.map((item,i)=>(
                <SwiperSlide key={i}>
                <Product badge={item?.badge} title={item?.title} image={item?.image} price={item?.price} varient={item?.color}/>
                </SwiperSlide>
            ))
        }
        <SliderBtns />
        </Swiper>
    </div>
    </Container>
    </>
  )
}

export default BestSeller
import React from 'react'
import Heading from '../Heading'
import Container from '../Container'
import Product from '../Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBtns from '../SliderBtns'
import { SpecialOfferData } from './specialOfferData';

const SpecialOffer = () => {
  return (
    <>
    <Container className="mt-20">
    <Heading className="pb-4" title="Special Offer"/>
    <div>
    <Swiper
        breakpoints={{
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            1024: {
                spaceBetween: 40,
                slidesPerView: 4,
            },  }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {
            
            SpecialOfferData?.map((item,i)=>(
                <SwiperSlide key={i}>
                <Product badge={item?.badge} title={item?.title} link="/product" image={item?.image} price={item?.price} varient={item?.color}/>
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

export default SpecialOffer
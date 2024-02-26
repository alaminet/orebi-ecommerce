import React from 'react'
import Heading from '../Heading'
import Container from '../Container'
import Product from '../Product'
import { newArrivalData } from './newArrivalData'
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBtns from '../SliderBtns'


const NewArrival = () => {
  return (
    <>
    <Container className="lg:mt-20">
    <Heading className="pb-2 lg:pb-4" title="New Arrivals"/>
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
            
            newArrivalData?.map((item,i)=>(
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

export default NewArrival
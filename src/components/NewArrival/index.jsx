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
    <Container className="mt-20">
    <Heading className="pb-12" title="New Arrivals"/>
    <div>
    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            
            newArrivalData.map((item,i)=>(
                <SwiperSlide key={i}>
                <Product badge={item.badge} title={item.title} image={item.image} price={item.price} varient={item.color}/>
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
import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SliderBtns = () => {
    const swiper = useSwiper();
  return (
    <>
    <button
      className="w-10 h-10 bg-neutral-300 text-white rounded-[50%] flex justify-center items-center absolute top-1/3 z-10"
      onClick={() => swiper.slidePrev()}
    >
      <FaLongArrowAltLeft />
    </button>
    <button
      className="w-10 h-10 bg-neutral-300 text-white rounded-[50%] flex justify-center items-center absolute top-1/3 right-0 z-10"
      onClick={() => swiper.slideNext()}
    >
      <FaLongArrowAltRight />
    </button>
  </>
  )
}

export default SliderBtns
import React from 'react'
import Slider from 'react-slick';
import { bannerData } from './bannerData';
import Image from '../Image';
import BannerBottom from './BannerBottom';
import { Link } from 'react-router-dom';


const Banner = () => {
    const settings = {
        fade: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        // cssEase: "linear",
      };

  return (
    <>
    <div className="overflow-hidden">
        <Slider {...settings}>
          {bannerData.map((item, i) => (
            <Link key={i} to={item.link}><Image src={item.image} alt={i} /></Link>
          ))}
        </Slider>
      </div>
      <BannerBottom />
    </>
  )
}

export default Banner
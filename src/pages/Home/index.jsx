import React from 'react'
import Banner from '../../components/Banner'
import Offers from '../../components/Offers'
import NewArrival from '../../components/NewArrival'
import BestSeller from '../../components/BestSeller'
import Promotional from '../../components/Promotional'
import SpecialOffer from '../../components/SpecialOffer'

const Home = () => {
  return (
    <>
    <Banner/>
    <Offers/>
    <NewArrival/>
    <BestSeller/>
    <Promotional/>
    <SpecialOffer/>
    </>
  )
}

export default Home
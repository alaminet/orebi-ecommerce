import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from '../Banner'
import Offers from '../Offers'
import NewArrival from '../NewArrival'
import BestSeller from '../BestSeller'
import Promotional from '../Promotional'
import SpecialOffer from '../SpecialOffer'
import Footer from '../Footer'



const RootLayout = () => {
  return (
   <>
    <Navbar/>
    <Topbar/>
    <Banner/>
    <Offers/>
    <NewArrival/>
    <BestSeller/>
    <Promotional/>
    <SpecialOffer/>
    <Footer/>
   </>
  )
}

export default RootLayout
import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from '../Banner'
import Offers from '../Offers'
import NewArrival from '../NewArrival'
import BestSeller from '../BestSeller'
import Promotional from '../Promotional'



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
   </>
  )
}

export default RootLayout
import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from '../Banner'
import Offers from '../Offers'
import NewArrival from '../NewArrival'
import BestSeller from '../BestSeller'

const RootLayout = () => {
  return (
   <>
    <Navbar/>
    <Topbar/>
    <Banner/>
    <Offers/>
    <NewArrival/>
    <BestSeller/>
   </>
  )
}

export default RootLayout
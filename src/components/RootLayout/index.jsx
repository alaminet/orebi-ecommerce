import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Banner from '../Banner'
import Offers from '../Offers'
import NewArrival from '../NewArrival'

const RootLayout = () => {
  return (
   <>
    <Navbar/>
    <Topbar/>
    <Banner/>
    <Offers/>
    <NewArrival/>
   </>
  )
}

export default RootLayout
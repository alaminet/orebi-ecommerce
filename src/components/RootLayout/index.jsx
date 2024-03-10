import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import Footer from '../Footer'
import Copyrigts from '../Copyrights'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
   <>
    <Navbar/>
    <Topbar/>
    <Outlet/>
    <Footer/>
    <Copyrigts/>
   </>
  )
}

export default RootLayout
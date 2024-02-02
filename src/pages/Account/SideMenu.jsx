import React, { useState } from 'react'

const SideMenu = ({selected}) => {
    const [active, setActive] = useState("")
    const handleSideClick = (e)=>{
        selected(e.target.innerText);
        setActive(e.target.innerText);
    }
   console.log(active);
  return (
    <>
        <div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`pb-5 border-b cursor-pointer ${active === "Dashboard" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Dashboard</h6>
            </div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`py-5 border-b cursor-pointer ${active === "Others" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Others</h6>
            </div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`py-5 border-b cursor-pointer ${active === "Downloads" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Downloads</h6>
            </div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`py-5 border-b cursor-pointer ${active === "Address" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Address</h6>
            </div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`py-5 border-b cursor-pointer ${active === "Account Details" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Account Details</h6>
            </div>
            <div onClick={(e)=> handleSideClick(e)}>
                <h6 className={`py-5 border-b cursor-pointer ${active === "Log Out" ? 'text-primary-black font-bold' : 'text-[#767676]'}`}>Log Out</h6>
            </div>
        </div>
    </>
  )
}

export default SideMenu
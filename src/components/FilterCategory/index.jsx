import React, { useState } from 'react'
import Title from '../Title'
import { HiOutlinePlusSm } from 'react-icons/hi'
import MainCategory from './MainCategory'
import ColorPallet from './ColorPallet'

const FilterCategory = ({title,data,type}) => {
    const [catShow, setCatShow] = useState(true);
  return (
    <>
      <div className='mb-7'>
        <div onClick={()=> setCatShow(!catShow)} className='flex items-center justify-between cursor-pointer'>
            <Title className="mb-2" title={title}/>
            {
                !catShow && <div><HiOutlinePlusSm /></div>
            }
        </div>
        {
            type === "category" ? (
            data?.map((item,i)=>(
                <MainCategory key={i} title={item?.name} icon={item?.icon} CatShow={catShow} subData={item?.subCategorey}/>
            )))
            : type === "color" && catShow ? (

                <>
                <ColorPallet color="red" className="bg-[#ff0000]"/>
                <ColorPallet color="Yellow" className="bg-[#FFFF00]"/>
                <ColorPallet color="Pink" className="bg-[#FFC0CB]"/>
                <ColorPallet color="Green" className="bg-[#008000]"/>
                <ColorPallet color="Grey" className="bg-[#808080]"/>
                <ColorPallet color="Blue" className="bg-[#0000FF]"/>
                <ColorPallet color="black" className="bg-[#000000]"/>
                </>

            )
            : type === "brand" && catShow ? (
                data?.map((item,i)=>(
                    <MainCategory key={i} title={item?.name} CatShow={catShow}/>
                ))
            )
            : type === "price" && catShow ? (
                data?.map((item,i)=>(
                    <MainCategory key={i} title={item?.name} CatShow={catShow}/>
                ))
            )
            :("")
        }
      </div>
         
    </>
  )
}

export default FilterCategory
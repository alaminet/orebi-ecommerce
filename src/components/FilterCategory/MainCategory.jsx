import React, { useState } from 'react'
import Flex from '../Flex'
import { HiOutlinePlusSm } from 'react-icons/hi'
import SubCategory from './SubCategory'

const MainCategory = ({CatShow, title, subData, icon}) => {
    const [subCatShow, setSubCatShow] = useState(false)
  return (
   <>
   {
        CatShow && (
            <div>
                <Flex className="items-center justify-between border-b">
                    <Flex className="gap-1 items-center text-sm">
                        {
                            icon && <div className='rounded-lg bg-light-gray p-1'>{icon}</div>
                        }
                        <p className='leading-8 pb-1 block'>{title}</p>
                    </Flex>
                    {
                        subData && (
                            <div onClick={()=> setSubCatShow(!subCatShow)} className='cursor-pointer'><HiOutlinePlusSm /></div>
                        )
                    }
                </Flex>
                {
                    subCatShow && (
                        <div>
                            {
                                subData?.map((sub,k)=>(
                                    <SubCategory key={k} title={sub?.name} subCatShow={subCatShow}/>
                                ))
                            }
                        </div>
                    )
                }
                
            </div>
        )
    }
   </>
  )
}

export default MainCategory
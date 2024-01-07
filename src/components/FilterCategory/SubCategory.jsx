import React, { useState } from 'react'
import Flex from '../Flex';

const SubCategory = ({title, subCatShow}) => {
  return (
    <>
    {
        subCatShow && (
            <div>
            <div >
                <Flex className="gap-1 items-center text-sm ml-6 border-b">
                    <p className=' leading-8 pb-1 block'>{title}</p>
                </Flex>
            </div>
        </div>
        )
    }
    </>
  )
}

export default SubCategory
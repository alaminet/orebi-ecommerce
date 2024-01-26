import React, { useState } from 'react'
import Flex from '../Flex'
import Title from '../Title'
import { FaAngleDown, FaPlus } from 'react-icons/fa6'

const Accordion = ({title,details}) => {
    const [accordionShow, SetAccordionShow] = useState(false)

  return (
    <>
        <div className='border-b p-2 cursor-pointer' onClick={()=> SetAccordionShow(!accordionShow)}>
            <Flex className="justify-between items-center">
                <div>
                    <Title className="uppercase" title={title}/>
                </div>
                <div>
                    {
                        accordionShow ? <FaAngleDown/> : <FaPlus/>
                    }
                    </div>
            </Flex>
            {
                accordionShow && (
                    <div>
                        <p className='py-3'>{details}</p>
                    </div>
                )
            }
        </div>

    </>

  )
}

export default Accordion
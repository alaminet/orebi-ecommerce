import React from 'react'
import Flex from '../Flex'
import { PiNumberTwoBold } from 'react-icons/pi'
import { BiSolidTruck } from 'react-icons/bi'
import { TfiReload } from 'react-icons/tfi'

const BannerBottom = () => {
  return (
    <>
    <div className="container lg:py-7">
        <Flex className="justify-between">
          <div>
            <Flex className="items-center gap-2 text-sm lg:text-3xl">
              <PiNumberTwoBold />
              years warranty
            </Flex>
          </div>
          <div>
            <Flex className="items-center gap-2 text-sm lg:text-3xl">
              <BiSolidTruck />
              Free shipping
            </Flex>
          </div>
          <div>
            <Flex className="items-center gap-2 text-sm lg:text-3xl">
              <TfiReload />
              30 days Return
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  )
}

export default BannerBottom
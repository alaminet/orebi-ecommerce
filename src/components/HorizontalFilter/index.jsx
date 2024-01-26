import React, { useState } from 'react'
import Flex from '../Flex'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const HorizontalFilter = ({perpage, itemSort}) => {

  return (
   <>
    <div className="mb-12">
        <Flex className="justify-between">
            <Flex className="gap-3 items-center">
                <div className='text-base p-2 bg-primary-black text-white'><BsGrid3X3GapFill /></div>
                <div className='text-base p-2'><FaThList /></div>
            </Flex>
            <Flex className="gap-5 justify-end">
                <Flex className="items-center gap-3">
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Sort by:</label>
                    <select onChange={(e)=> itemSort(e.target.value)} id="countries" class="font-dmsans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="Featured">Featured</option>
                        <option value="AtoZ">A to Z Name</option>
                        <option value="ZtoA">Z to A Name</option>
                        <option value="HighLow">High to Low Price</option>
                        <option value="LowHigh">Low to High Price</option>
                    </select>
                </Flex>
                <Flex className="items-center gap-3">
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Show:</label>
                    <select onChange={(e)=> perpage(e.target.value)} class="font-dmsans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="6">6</option>
                        <option selected value="9">9</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                        <option value="30">30</option>
                    </select>
                </Flex>
            </Flex>
        </Flex>
    </div>
   </>
  )
}

export default HorizontalFilter
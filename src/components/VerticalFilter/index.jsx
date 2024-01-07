import React, { useState } from 'react'
import FilterCategory from '../FilterCategory'
import { CategoreyData, brandData, priceData } from './filterData'

const VerticalFilter = () => {
  return (
    <>
    <FilterCategory type="category" title="Shop by Category" data={CategoreyData}/>
    <FilterCategory type="color" title="Shop by Color" />
    <FilterCategory type="brand" title="Shop by Brand" data={brandData}/>
    <FilterCategory type="price" title="Shop by Price" data={priceData}/>
    </>
  )
}

export default VerticalFilter
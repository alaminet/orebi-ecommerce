import React from 'react'
import Heading from '../Heading'
import Container from '../Container'
import Product from '../Product'
import { newArrivalData } from './newArrivalData'

const NewArrival = () => {
  return (
    <>
    <Container className="mt-20">
    <Heading className="pb-12" title="New Arrivals"/>
    <div>
        {
            newArrivalData.map((item,i)=>(
                <Product key={i} badge={item.badge} title={item.title} image={item.image} price={item.price} varient={item.color}/>
            ))
        }
    </div>
    </Container>
    </>
  )
}

export default NewArrival
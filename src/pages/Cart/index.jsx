import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'

const Cart = () => {
  return (
        <>
            <Container className="font-dmsans my-12">
                <div>
                    <Title className="mb-3 text-5xl" title="Cart"/>
                    <Breadcrumb/>
                </div>
                <div className='py-12'>
                    <table className='table-fixed w-full'>
                        <thead className='bg-light-gray h-12'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='h-12'>
                                <td>mula</td>
                                <td>2.00$</td>
                                <td>1</td>
                                <td>2.00$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
  )
}

export default Cart
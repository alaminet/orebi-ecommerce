import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Image from '../../components/Image'
import defaultImg from '../../assets/images/productImg.webp'
import { AiOutlineCloseSquare } from "react-icons/ai";
import Quantity from '../../components/Quantity'
import ButtonAlt from '../../components/ButtonAlt'


const Cart = () => {
  return (
        <>
            <Container className="font-dmsans my-12">
                <div>
                    <Title className="mb-3 text-5xl" title="Cart"/>
                    <Breadcrumb/>
                </div>
                <div className='py-12'>
                    <table className='min-w-full border-collapse rounded border-light-gray shadow'>
                        <thead className='bg-primary-black text-light-gray'>
                            <tr>
                                <th className='text-left pl-4 py-3'>Product</th>
                                <th className='text-left pl-4 py-3'>Priec</th>
                                <th className='text-left pl-4 py-3'>Quantity</th>
                                <th className='text-left pl-4 py-3'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b last:border-none odd:text-[#6b7280] even:bg-light-gray'>
                                <td className='text-left pl-4 py-3'>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-black cursor-pointer'><AiOutlineCloseSquare/></div>
                                        <div><Image src={defaultImg} alt="" className="h-28"/></div>
                                        <div><h6>Product Title</h6></div>
                                    </div>
                                </td>
                                <td className='text-left pl-4 py-3'>$40.99</td>
                                <td className='text-left pl-4 py-3'><Quantity qunatity={5}/></td>
                                <td className='text-left pl-4 py-3'>$205.50</td>
                            </tr>
                            <tr className='border-b last:border-none odd:text-[#6b7280] even:bg-light-gray'>
                                <td className='text-left pl-4 py-3'>
                                    <div className='flex items-center gap-2'>
                                        <div className='text-black cursor-pointer'><AiOutlineCloseSquare/></div>
                                        <div><Image src={defaultImg} alt="" className="h-28"/></div>
                                        <div><h6>Product Title</h6></div>
                                    </div>
                                </td>
                                <td className='text-left pl-4 py-3'>$40.99</td>
                                <td className='text-left pl-4 py-3'><Quantity qunatity={5}/></td>
                                <td className='text-left pl-4 py-3'>$205.50</td>
                            </tr>
                                               
                        </tbody>
                        <tfoot className='bg-primary-black text-light-gray font-bold'>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className='text-right pl-4 py-3'>Total=</td>
                                <td className='text-left pl-4 py-3'>1000.00</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='flex justify-end py-8'>
                        <div>
                            <h2 className='text-end font-bold'>Billing Details</h2>
                            <div className='pt-5 '>
                                <table className='border'>
                                    <tbody>
                                        <tr>
                                            <td className='border text-left px-4 py-3'>Product Price</td>
                                            <td className='border text-right px-4 py-3'>$100.00</td>
                                        </tr>
                                        <tr>
                                            <td className='border text-left px-4 py-3'>TAX & VAT</td>
                                            <td className='border text-right px-4 py-3'>$10.00</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className=' text-primary-black font-bold'>
                                        <tr>
                                            <td className='text-right pl-4 py-3'>Total=</td>
                                            <td className='text-right pr-4 py-3'>$110.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='text-right'>
                        <ButtonAlt className="py-4" title="Proceed to Checkout"/>
                    </div>
                </div>
            </Container>
        </>
  )
}

export default Cart
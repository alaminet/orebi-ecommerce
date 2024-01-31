import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import ButtonAlt from '../../components/ButtonAlt'
import mapImg from '../../assets/images/map.webp'
import Image from '../../components/Image'

const Contact = () => {
  return (
    <>
        <Container className="font-dmsans mt-12">
            <Title className="mb-3 text-5xl" title="Contact"/>
            <Breadcrumb/>
            <div className='mt-12'>
                <h1 className='text-5xl font-bold'>Fill up a Form</h1>
            </div>
            <div className='w-1/3'>
                <form action="">
                    <div className='my-4'>
                        <label className='block text-base font-bold'>Name</label>
                        <input type="text" placeholder='Your name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                    </div>
                    <div className='my-4'>
                        <label className='block text-base font-bold'>Email</label>
                        <input type="email" placeholder='Your email here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                    </div>
                    <div className='my-4'>
                        <label className='block text-base font-bold'>Message</label>
                        <textarea rows={5} placeholder='Your message here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                    </div>
                    <div>
                        <ButtonAlt title="Send"/>
                    </div>
                </form>
            </div>
            <div className='my-12'>
                <Image src={mapImg}/>
            </div>
            

        </Container>
    
    </>
  )
}

export default Contact
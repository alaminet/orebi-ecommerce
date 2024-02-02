import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import ButtonAlt from '../../components/ButtonAlt'
import mapImg from '../../assets/images/map.webp'
import Image from '../../components/Image'
import Accordion from '../../components/Accordion'

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
            <div className='my-12 relative'>
                <Image src={mapImg}/>
                <div className='absolute left-12 top-12 z-10 bg-white p-5 rounded-sm w-[450px]'>
                    <Accordion title="Headquater" show={true} details={
                        <>
                        <div className='text-[#767676]'>
                            <p>575 Crescent Ave. Quakertown, PA 18951</p>
                            <p>+432 533 12 523</p>
                            <p>info@domain.com</p>
                            <p>Mon - Fri: 9am - 6pm</p>
                        </div>
                        </>
                    }/>
                    <Accordion title="Factory" show={true} details={
                        <>
                        <div className='text-[#767676]'>
                            <p>575 Crescent Ave. Quakertown, PA 18951</p>
                            <p>+432 533 12 523</p>
                            <p>info@domain.com</p>
                            <p>Mon - Fri: 9am - 6pm</p>
                        </div>
                        </>
                    }/>
                    
                </div>
            </div>
            

        </Container>
    
    </>
  )
}

export default Contact
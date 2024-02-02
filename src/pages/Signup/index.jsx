import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Grid from '../../components/Grid'
import ButtonAlt from '../../components/ButtonAlt'

const Signup = () => {
  return (
    <>
        <Container className="font-dmsans my-12">
            <div>
                <Title className="mb-3 text-5xl" title="Sign Up"/>
                <Breadcrumb/>
            </div>
            <div>
                <div className='border-b pb-12 pt-8 grid grid-cols-2 text-[#767676]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus, est mollitia commodi ex enim laborum aut ratione facere molestiae repellendus explicabo neque, quos quas adipisci tempore aspernatur nobis beatae!</p>
                </div>
            </div>
            <div>
                <form action="">
                    <div className='py-5 border-b'>
                        <Title className="text-5xl" title="Your Personal Details"/>
                        <Grid className="grid-cols-3 gap-5 py-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>First Name</label>
                                <input type="text" placeholder='Your first name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Last Name</label>
                                <input type="text" placeholder='Your last name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                        <Grid className="grid-cols-3 gap-5 py-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Email Address</label>
                                <input type="email" placeholder='Your email here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Telephon Number</label>
                                <input type="text" placeholder='Your telephon number here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                    </div>
                    <div className='py-5 border-b'>
                        <Title className="text-5xl" title="Your Billing Details"/>
                        <Grid className="grid-cols-3 gap-5 py-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Address</label>
                                <input type="text" placeholder='Your address details here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                            <div className='my-4'>
                                <label className='block text-base font-bold'>District/City</label>
                                <input type="text" placeholder='Your city/district name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                        <Grid className="grid-cols-3 gap-5 py-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Division Code</label>
                                <input type="email" placeholder='Your division name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Countery</label>
                                <input type="text" placeholder='Your countery name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                        <Grid className="grid-cols-3 gap-5 py-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Post Code</label>
                                <input type="email" placeholder='Your post code here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                    </div>
                    <div className='py-5 border-b'>
                        <Title className="text-5xl" title="Your Password Details"/>
                        <Grid className="grid-cols-3 gap-5">
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Password</label>
                                <input type="password" placeholder='Your password here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                            <div className='my-4'>
                                <label className='block text-base font-bold'>Confirm Password</label>
                                <input type="password" placeholder='Repeat password here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                            </div>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="grid-cols-3 gap-5 pb-5 mt-5">
                            <div className='flex gap-3 items-center'>
                                <input type="checkbox"/>
                                <span>I have read and agree to the Privacy Policy</span>
                            </div>
                        </Grid>
                        <Grid className="grid-cols-3 gap-5 pb-5">
                            <div className='flex gap-3 items-center'>
                                <span>Subscribe Newsletter ?</span>
                               <div> <input type="radio" name='newsletter'/> Yes</div>
                               <div> <input type="radio" name='newsletter'/> No</div>
                            </div>
                        </Grid>
                    </div>
                    <ButtonAlt title="Sign Up"/>
                </form>
            </div>
        </Container>
    
    </>
  )
}

export default Signup
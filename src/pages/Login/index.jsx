import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Breadcrumb from '../../components/Breadcrumb'
import Grid from '../../components/Grid'
import Button from '../../components/Button'
import ButtonAlt from '../../components/ButtonAlt'

const Login = () => {
  return (
    <>
        <Container className="font-dmsans mt-12">
            <Title className="mb-3 text-5xl" title="Login"/>
            <Breadcrumb/>
            <div>
                <div className='border-b pb-12 pt-8 grid grid-cols-2 text-[#767676]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus, est mollitia commodi ex enim laborum aut ratione facere molestiae repellendus explicabo neque, quos quas adipisci tempore aspernatur nobis beatae!</p>
                </div>
                <div className='py-8 border-b'>
                    <Title title='Returning Customer' className="text-3xl"/>
                    <div>
                        <form action="">
                            <Grid className="grid-cols-3 gap-5 py-5">
                                <div className='my-4'>
                                    <label className='block text-base font-bold'>Email Address</label>
                                    <input type="email" placeholder='Your name here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                                </div>
                                <div className='my-4'>
                                    <label className='block text-base font-bold'>Password</label>
                                    <input type="password" placeholder='Your email here' className='w-full border-1 outline-0 mt-2 placeholder:text-sm'/>
                                </div>
                            </Grid>
                            <Button title="Log in"/>
                        </form>
                    </div>
                </div>
                <div className='py-8'>
                    <Title title='New Customer' className="text-3xl"/>
                    <Grid className="grid-cols-3 py-5">
                        <div>
                            <p className='text-base text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatum reprehenderit dolorem fugiat facere error. Quam soluta perspiciatis vero iusto.</p>
                        </div>
                    </Grid>
                    <ButtonAlt title="Continue"/>
                </div>
            </div>

        </Container>
    
    </>
  )
}

export default Login
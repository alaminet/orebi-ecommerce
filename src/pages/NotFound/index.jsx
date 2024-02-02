import React from 'react'
import Container from '../../components/Container'
import Grid from '../../components/Grid'
import ButtonAlt from '../../components/ButtonAlt'

const NotFound = () => {
  return (
    <>
      <Container className="font-dmsans my-12">
        <div>
          <h1 className='text-[200px] font-bold'>404</h1>
          <Grid className="grid-cols-2 mb-5">
            <div>
              <p className='text-base text-[#767676]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur velit cupiditate minima voluptatum fugiat architecto impedit ipsam aspernatur aliquid sit.</p>
            </div>
          </Grid>
          <ButtonAlt title="Go to Home"/>
        </div>

      </Container>
    </>
  )
}

export default NotFound
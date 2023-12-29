import React from 'react'
import Container from '../Container'
import Grid from '../Grid'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
   <>
   <Container className="mt-8">
    <Grid className="grid-cols-5 gap-5">
        <FooterMenu/>
        <div>Col-2</div>
        <div>Col-3</div>
        <div>Col-4</div>
        <div>Col-5</div>
    </Grid>
   </Container>
   </>
  )
}

export default Footer
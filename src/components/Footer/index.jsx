import React from 'react'
import Container from '../Container'
import Grid from '../Grid'
import FooterMenu from './FooterMenu'
import FooterCategory from './FooterCategory'
import FooterHelp from './FooterHelp'
import FooterContact from './FooterContact'
import FooterSiteInfo from './FooterSiteInfo'

const Footer = () => {
  return (
   <>
   <Container className="mt-12">
    <Grid className="grid-cols-5 gap-5">
        <FooterMenu/>
       <FooterCategory/>
        <FooterHelp/>
        <FooterContact/>
        <FooterSiteInfo/>
    </Grid>
   </Container>
   </>
  )
}

export default Footer
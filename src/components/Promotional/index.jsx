import React from 'react'
import Container from '../Container'
import Link from '../Link'
import Image from '../Image'
import srcImg from '../../assets/images/Ad_4.webp'

const Promotional = () => {
  return (
   <>
   <Container className="my-14">
    <Link href="#">
    <Image src={srcImg} alt="adds" />
    </Link>
   </Container>
   </>
  )
}

export default Promotional
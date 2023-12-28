import React from 'react'
import Container from '../Container'
import Grid from '../Grid'
import Link from '../Link'
import Image from '../Image'
import ads1 from "../../assets/images/Ad_1.webp";
import ads2 from "../../assets/images/Ad_2.webp";
import ads3 from "../../assets/images/Ad_3.webp";

const Offers = () => {
  return (
    <>
      <Container className="">
        <Grid className="grid-rows-2 grid-flow-col gap-4">
          <div className="row-span-2">
            <Link href="#">
              <Image src={ads1} alt="offer Ads" />
            </Link>
          </div>
          <div className="row-span-1">
            <Link href="#">
              <Image src={ads2} alt="offer Ads" />
            </Link>
          </div>
          <div className="row-span-1">
            <Link href="#">
              <Image src={ads3} alt="offer Ads" />
            </Link>
          </div>
        </Grid>
      </Container>
    </>
  )
}

export default Offers
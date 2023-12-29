import React from 'react'
import Grid from '../Grid'
import Lists from '../Lists'
import { footerSocialData } from '../Footer/footerData'
import ListItem from '../ListItem'
import Link from '../Link'
import Container from '../Container'

const Copyrigts = () => {
  return (
    <>
     <Container>
     <Grid className="grid-cols-2 gap-5 py-5">
        <div>
          <Lists className="flex gap-3">
            {footerSocialData.map((item, i) => (
              <ListItem key={i}>
                <Link href={item.link}>{item.icon}</Link>
              </ListItem>
            ))}
          </Lists>
        </div>
        <div>
          <p className="text-right text-xs text-gray">
            2023 Orebi Minimal eCommerce Developed by{" "}
            <Link href="#" className="text-black">
              Al Amin
            </Link>
          </p>
        </div>
      </Grid>
     </Container>
    </>
  )
}

export default Copyrigts
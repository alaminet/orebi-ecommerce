import React from 'react'
import Title from '../Title'
import Lists from '../Lists'
import { footerMenuData } from './footerData'
import ListItem from '../ListItem'
import Link from '../Link'

const FooterMenu = () => {
  return (
    <>
    <div>
        <Title title="Menu" className="text-[16px]" />
        <Lists>
          {footerMenuData?.map((item, i) => (
            <ListItem
              key={i}
              className="font-primaryFont last:border-b-0 font-normal text-[14px] text-black py-2 px-3 lg:py-2 lg:px-3 border-b border-solid hover:pl-2 transition-all duration-150 ease-in border-white-100"
            >
              <Link href={item.link}>{item.title}</Link>
            </ListItem>
          ))}
        </Lists>
      </div>
    </>
  )
}

export default FooterMenu
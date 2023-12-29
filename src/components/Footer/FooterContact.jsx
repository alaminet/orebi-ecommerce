import React from 'react'
import Title from '../Title'

const FooterContact = () => {
  return (
    <>
    <div>
      <Title title="Contacts" className="text-[16px]" />
      <div className="pl-3">
        <p className="text-xs leading-7 font-bold">(+880) 1234 567 890</p>
        <p className="text-xs leading-7 font-bold">mail@mail.com</p>
        <p className="text-xs">
          233/1, Chougachha, Jashore, Dhaka, Bangladesh
        </p>
      </div>
    </div>
  </>
  )
}

export default FooterContact
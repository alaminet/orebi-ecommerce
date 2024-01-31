import React from 'react'
import Title from '../Title'
import Image from '../Image'
import defaultPic from '../../assets/images/productImg.webp'
import Flex from '../Flex'

const Card = ({title,cardImg,postedBy,postTime,children}) => {

    console.log(title);
  return (
    <>
        <div>
            <Image className="w-full object-cover" src={cardImg ?? defaultPic}/>
            <Title className="my-3" title={title}/>
            <Flex className='text-xs justify-between'>
                <p>{postedBy}</p>
                <p>{postTime}</p>
            </Flex>
            <div>
                {children}
            </div>
        </div>    
    </>
  )
}

export default Card
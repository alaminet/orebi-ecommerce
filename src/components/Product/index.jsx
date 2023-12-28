import React from 'react';
import defaultImg from"../../assets/images/productImg.webp";
import Badge from '../Badge';
import Link from '../Link';
import Image from '../Image';
import { MdFavoriteBorder, MdOutlineCompareArrows, MdOutlineShoppingCart } from 'react-icons/md';
import Flex from '../Flex';
import Title from '../Title';

const Product = ({badge,link,image,title,price,varient}) => {
  return (
    <>
    <div className="max-w-[370px]">
        <div className="relative overflow-y-hidden group">
          <Badge title={badge ?? "badge"} />
          <Link href={link ?? "#"}>
            <Image
              src={image ?? defaultImg}
              alt={title ?? "Product Image"}
              className="w-[370px] h-[370px] object-cover"
            />
          </Link>
          <div className="bg-white absolute z-20 w-full bottom-[-32%] group-hover:bottom-0 ease-in-out delay-300 transition-all">
      <Flex className="justify-end p-5 flex-col gap-3">
        <Flex className="justify-end gap-2 items-center">
          <h6>Add to Wish List</h6>
          <MdFavoriteBorder />
        </Flex>
        <Flex className="justify-end gap-2 items-center">
          <h6>Compare</h6>
          <MdOutlineCompareArrows />
        </Flex>
        <Flex className="justify-end gap-2 items-center">
          <h6>Add to cart</h6>
          <MdOutlineShoppingCart />
        </Flex>
      </Flex>
    </div>
        </div>
        <Flex className="justify-between align-middle mt-6">
          <Title title={title ?? "Product Title"} />
          <div className="text-[#767676] text-base">{price ?? "$0.00"}</div>
        </Flex>
        <Flex className="gap-2 pt-3 ps-1">
                {varient?.map(vari => {
                    return <div key={vari} className="text-[#767676] text-sm px-2 border rounded-sm uppercase">{vari?.value}</div>;
                  })}          
        </Flex>
      </div>
    </>
  )
}

export default Product
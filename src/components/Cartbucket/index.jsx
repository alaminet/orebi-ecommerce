import React, { useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import Flex from "../Flex";
import Image from "../Image";
import Button from "../Button";
import ButtonAlt from "../ButtonAlt";
import { cartData } from "./cartData";
import { Link } from 'react-router-dom';
import useClickOutside from "../../helpers/clickOutside";

const Cartbucket = () => {
  const [cartShow, setCartShow] = useState(false);
  const clickCartOutside = useRef(null);


  const handleCartClick = () => {
    setCartShow(true);
  };

  useClickOutside(clickCartOutside, () => {
    setCartShow(false);
  });
  return (
    <>
      <div className="relative">
        <div className="cursor-pointer" onClick={handleCartClick}>
          <FaCartShopping />
        </div>

        {cartShow && (
          <div
            className="absolute right-0 z-10 p-3 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg "
            ref={clickCartOutside}
          >
            {cartData.map((item, i) => (
              <div key={i}>
                <Flex className="items-center gap-2 mb-2 p-2 bg-light-gray hover:bg-white transition-all duration-300 ease-linear">
                  <div>
                    <Image
                      className="w-[50px] h-[50px] object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <Flex className="justify-between w-full">
                    <div>
                      <Link to={item.link}>
                        <h6 className="capitalize font-bold">{item.title}</h6>
                        <p className="text-sm">{item.price}</p>
                      </Link>
                    </div>
                    <div className="self-center">
                      <IoIosClose className="cursor-pointer transition transform hover:scale-150 duration-700 ease-in-out" />
                    </div>
                  </Flex>
                </Flex>
              </div>
            ))}

            <div>
              <div className="mt-2">
                <p className="text-primary-black text-sm">
                  Subtotal: <span className="font-bold text-black">$55.5</span>
                </p>
              </div>
              <Flex className="gap-3 mt-2">
                <Button title="View Cart" href="/cart"/>
                <ButtonAlt title="Checkout" />
              </Flex>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cartbucket;

import React, { useRef, useState } from "react";
import Flex from "../Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import ListItem from "../ListItem";
import Link from "../Link";
import Lists from "../Lists";
import { categoryData } from "./categoryData";
import useClickOutside from "../../helpers/clickOutside";

const CategoryMenu = () => {
  const [dropdownCatShow, setdropdownCatShow] = useState(false);
  const clickCatOutside = useRef(null);

  const handleDropdownShow = () => {
    setdropdownCatShow(true);
  };

  useClickOutside(clickCatOutside, () => {
    setdropdownCatShow(false);
  });

  console.log(dropdownCatShow);
  return (
    <>
      <div className="relative">
        <div onClick={handleDropdownShow}>
          <Flex className="items-center gap-2 text-primary-black cursor-pointer">
            <div>
              <FaBarsStaggered />
            </div>
            <div className="hidden lg:block text-sm">Shop by Category</div>
          </Flex>
        </div>

        {dropdownCatShow && (
          <div
            className="lg:w-full w-fit shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[155%] left-0 z-10 bg-white"
            ref={clickCatOutside}
          >
            <Lists className="pl-2 py-2 w-[200px]">
              {categoryData?.map((item, i) => (
                <ListItem
                  key={i}
                  className="font-primaryFont last:border-b-0 font-normal text-sm text-black py-2 px-3 border-b border-solid hover:pl-6 transition-all duration-300 ease-in border-white-100"
                >
                  <Link className="capitalize" href={item.link}>
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </Lists>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryMenu;

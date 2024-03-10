import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import Lists from "../Lists";
import ListItem from "../ListItem";
import Flex from "../Flex";
import { Link } from 'react-router-dom';
import useClickOutside from "../../helpers/clickOutside";
import { userData } from "./userData";

const UserSetting = () => {
  const [profileShow, setProfileShow] = useState(false);
  const clickProfileOutside = useRef(null);

  const handleProfileClick = () => {
    setProfileShow(true);
  };
  useClickOutside(clickProfileOutside, () => {
    setProfileShow(false);
  });
  return (
    <>
      <div className="relative">
        <div onClick={handleProfileClick} className="cursor-pointer flex">
          <FaUser />
          <MdArrowDropDown />
        </div>
        {profileShow && (
          <div
            className="absolute right-0 z-10 mt-2 w-fit lg:w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            ref={clickProfileOutside}
          >
            <Lists className="py-1 last:border-none">
              {userData.map((item, i) => (
                <ListItem key={i}>
                  <Link
                    to={item.link}
                    className="text-gray-700 block px-4 py-2 text-sm last:border-b-0 border-b border-solid border-light-gray hover:pl-6 transition-all duration-300 ease-in cursor-pointer"
                  >
                    <Flex className="gap-2 items-center">
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </Flex>
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

export default UserSetting;

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "../../assets/svg/logo";
import Lists from "../Lists";
import ListItem from "../ListItem";
import { MenuData } from "./MenuData";
import Link from "../Link";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [screen, setScreen] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    let scrollWidth = (e) => {
      if (window.innerWidth < 992) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    scrollWidth();
    setScreen(window.innerWidth);
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <>
      <Container className="py-8 font-dmsans">
        <nav>
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="w-[20%]">
              <Logo />
            </div>

            <div className="relative">
              <FaBars
                onClick={() => setShow(!show)}
                className="block lg:hidden absolute -top-4 right-0 text-lg"
              />
              {show && (
                <Lists className="lg:flex lg:justify-center lg:gap-4 lg:static absolute right-0 z-10 bg-white p-5 lg:p-0">
                  {MenuData.map((item, i) => (
                    <ListItem className="p-2 lg:px-4 lg:py-2" key={i}>
                      <Link
                        className="text-sm hover:font-bold"
                        href={item.link}
                        
                      >
                        {item.title}
                      </Link>
                    </ListItem>
                  ))}
                </Lists>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;

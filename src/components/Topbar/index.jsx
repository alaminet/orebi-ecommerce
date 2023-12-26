import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import CategoryMenu from "../CategoryMenu";
import SearchBar from "../SearchBar";
import UserSetting from "../UserSetting";
import Cartbucket from "../Cartbucket";

const Topbar = () => {
  return (
    <>
      <div className="bg-light-gray font-dmsans">
        <Container className="py-6">
          <Flex className="justify-between items-center">
            <CategoryMenu />
            <div className="w-3/5">
              <SearchBar />
            </div>
            <Flex className="gap-5 items-center">
              <UserSetting />
              <Cartbucket />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Topbar;

import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Topbar = () => {
  return (
    <>
      <Container className="py-9">
        <Flex className="justify-between items-center">
          <div>Category</div>
          <div>Searchbar</div>
          <div>UserIcon</div>
        </Flex>
      </Container>
    </>
  );
};

export default Topbar;

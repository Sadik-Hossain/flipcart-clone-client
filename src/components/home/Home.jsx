import { Box, styled } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Component = styled(Box)`
  padding: 10px;
  background: #dedede;
`;
const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;

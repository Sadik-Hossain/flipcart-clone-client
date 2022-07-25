import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Component = styled(Box)`
  padding: 10px;
  background: #dedede;
`;
const Home = () => {
  //* The useDispatch hook is used to dispatch an action while useSelector hook is used to get the state from the redux store.
  // const getProducts = useSelector((state) => state.getProducts);
  // const {products}  = getProducts;
  const products = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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

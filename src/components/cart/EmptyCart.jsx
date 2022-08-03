import React from "react";
import { Typography, Box, styled } from "@mui/material";
const Component = styled(Box)`
  height: 65vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")({
  width: "50%",
  margin: "0 auto",
});
const imgurl =
  "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const EmptyCart = () => {
  return (
    <Component>
      <Container>
        <Image src={imgurl} />
        <Typography variant="h4" sx={{ margin: "1rem 0" }}>
          Your cart is empty!
        </Typography>
        <Typography variant="h5" component="span">
          Add items to it now.
        </Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;

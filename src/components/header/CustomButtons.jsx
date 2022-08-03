import React, { useState, useContext } from "react";
import { Typography, Box, Button, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  &: hover {
    color: #fff;
    background: #2874f0;
    outline: 2px solid #fff;
  }
`;

const boxSX = {
  textAlign: "center",
  cursor: "pointer",
  padding: "0 5px",

  "&:hover": {
    outline: "2px solid #fff",
    borderRadius: "2px",
  },
};

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItem } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }} sx={boxSX}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, padding: "0 5px" }} sx={boxSX}>
        More
      </Typography>

      <Container to="/cart" sx={boxSX}>
        <Badge
          badgeContent={cartItem?.length}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          color="warning"
        >
          <ShoppingCart />
        </Badge>
        <Typography>&nbsp;&nbsp;Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;

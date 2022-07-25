import React, { useState, useContext } from "react";

import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { authenticatesLogin, authenticatesSignUp } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 45%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  &:hover {
    background-color: #000;
  }
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreatedAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const accountInitialValues = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const SignupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(SignupInitialValues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
    console.log(signup);
  };

  const signupUser = async () => {
    let res = await authenticatesSignUp(signup);
    // console.log(res);
    if (!res) {
      return;
    }
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let res = await authenticatesLogin(login);
    // console.log(res);
    if (res.status === 200) {
      handleClose();
      setAccount(res.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            {account.view === "login" ? (
              <Typography variant="h5">Login</Typography>
            ) : (
              <Typography variant="h5">Looks like you're new here!</Typography>
            )}
            {account.view === "login" ? (
              <Typography style={{ marginTop: 20 }}>
                Get access to your orders, wishlist and Recommended
              </Typography>
            ) : (
              <Typography style={{ marginTop: 20 }}>
                signup to get started
              </Typography>
            )}
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter username"
              />
              {error && (
                <Typography style={{ color: "red" }}>
                  Please enter valid username/password
                </Typography>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter password"
              />
              <Text>By continuing, you agree to terms and service</Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreatedAccount
                onClick={() => {
                  toggleSignUp();
                }}
              >
                New to flipcart? Create an account
              </CreatedAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter firstname"
                onChange={(e) => onInputChange(e)}
                name="firstname"
              />
              <TextField
                variant="standard"
                label="Enter lastname"
                onChange={(e) => onInputChange(e)}
                name="lastname"
              />
              <TextField
                variant="standard"
                label="Enter username"
                onChange={(e) => onInputChange(e)}
                name="username"
              />
              <TextField
                variant="standard"
                label="Enter email"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
              <TextField
                variant="standard"
                label="Enter password"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
              <TextField
                variant="standard"
                label="Enter phone"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />

              <LoginButton onClick={() => signupUser()}>continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

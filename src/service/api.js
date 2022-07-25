import axios from "axios";

const URL = `http://localhost:5001`;
export const authenticatesSignUp = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup", error);
  }
};
export const authenticatesLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("error while calling login", error);
    return error.response;
  }
};

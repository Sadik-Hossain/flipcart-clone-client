import axios from "axios";

const URL = `http://localhost:5001`;

export const authenticatesSignUp = async (data) => {
  try {
    await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup", error);
  }
};

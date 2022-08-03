import axios from "axios";
import * as actionType from "../constants/cartConstants";
// const URL = `http://localhost:5001`;
const URL = `https://flipcart-clone-server.herokuapp.com`;
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    // ------------ api call -------------------
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};
export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};

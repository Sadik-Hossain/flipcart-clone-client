import axios from "axios";
import * as actionTypes from "../constants/productConstant";

//* An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.type

// const URL = `http://localhost:5001`;
const URL = `https://flipcart-clone-server.herokuapp.com`;

export const getProducts = () => async (dispatch) => {
  //* action can also be used for api calls,
  try {
    const { data } = await axios.get(`${URL}/products`);
    //    console.log(res)
    //    dispatch fn internally calls reducer
    //* we dispatch values in useReducer hook
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error while calling api", error.message);
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};
/**
 * obj={
 * data:
 * status:
 * header:
 * }
 * obj.data
 * {data} = obj
 */

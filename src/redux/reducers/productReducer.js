import * as actionTypes from "../constants/productConstant";

//* A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.

//*Pure functions are functions that do not have any side effects and will return the same results if the same arguments are passed in.
// (state=default/initial value,action)
export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case actionTypes.GET_PRODUCT_DETAILS_FAILED:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return { product: {} };

    default:
      return state;
  }
};

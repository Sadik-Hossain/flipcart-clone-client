import * as actionType from "../constants/cartConstants";
export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      //* 1ta item 1 bar i add krbo, bar bar noy
      const item = action.payload;
      //* state er vitor se jinista thake jeta already ase, and action er vitor seta thake jeta piche theke ase
      const exist = state.cartItem.find((pd) => pd.id === item.id);
      if (exist) {
        return {
          ...state,
          cartItem: state.cartItem.map((data) =>
            data.product === exist.product ? item : data
          ),
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, item],
        };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter((pd) => pd.id !== action.payload),
      };
    default:
      return state;
  }
};

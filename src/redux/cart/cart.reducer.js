import { CartActionTypes } from "./cart.type";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  carItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        carItems: addItemToCart(state.carItems, action.payload)
      };
    case CartActionTypes.ADD_ALL:
      return {
        ...state,
        carItems: action.payload
      };
    case CartActionTypes.CLEAR_ITEMS_FROM_CART:
      return {
        ...state,
        carItems: clearItemFromCart(state.carItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        carItems: removeItemFromCart(state.carItems, action.payload)
      };
    default:
      return INITIAL_STATE;
  }
};

export default cartReducer;

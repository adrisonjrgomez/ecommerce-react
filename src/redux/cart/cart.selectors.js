import { createSelector } from "reselect";

//InputSelector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.carItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsPrices = createSelector(
  [selectCartItems],
  carItems =>
    carItems.reduce(
      (accumalatedPrice, item) => accumalatedPrice + item.quantity * item.price,
      0
    )
);


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  carItems =>
    carItems.reduce(
      (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
      0
    )
);

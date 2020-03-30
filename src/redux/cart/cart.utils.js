export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToDelete) =>
  cartItems.filter(item => item.id !== itemToDelete.id);

export const removeItemFromCart = (carItems, itemToRemove) => {
  const existingCartItem = carItems.find(item => item.id === itemToRemove.id);
  if (existingCartItem.quantity === 1)
    return clearItemFromCart(carItems, itemToRemove);
  else
    return carItems.map(item =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
};

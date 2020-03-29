export const addItemToCart = (cartItemsOld, cartItemToAdd) => {

    const existingCartItem = cartItemsOld.find((value, idx) => value.id ===cartItemToAdd.id);
    if(existingCartItem){
        return cartItemsOld.map(item => 
            item.id === cartItemsOld.id
                ? {...item, quantity: item.quantity + 1 }
                : item
            )
    }
    return [...cartItemsOld, {...cartItemToAdd, quantity: + 1}]
} 
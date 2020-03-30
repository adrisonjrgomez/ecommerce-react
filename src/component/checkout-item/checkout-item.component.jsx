import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, removeItemFromCart, addItemToCart } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, description, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="description">{description}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItem(item)}>&#10095;</div>
      </span>
      <span className="price">USD$ {price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

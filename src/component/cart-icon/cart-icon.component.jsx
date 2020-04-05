import React from "react";
import { connect, useSelector } from "react-redux";

//asset
import { ReactComponent as ShopCart } from "../../assets/card.svg";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../button/button.component";

import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ carItems, dispatch }) => {
  let history = useHistory();
  return (
    <div className={"cart-dropdown"}>
      <div className={"cart-items"}>
        {carItems.length ? (
          carItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message"> The cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  carItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

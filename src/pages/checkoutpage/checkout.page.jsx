import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartItemsPrices,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";

const CheckoutPage = () => {
  const carItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsPrices);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICES</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {carItems.length ? (
        carItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className="empty-message">
          Empty Cart. Please select something from shop page
        </div>
      )}

      <div className="total">
        <span>TOTAL USD$ {total}</span>
      </div>
      <div className="warning-text">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - EXP: 10/20 - CW:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;

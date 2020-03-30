import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsPrices
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ carItems, total }) => (
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
      carItems.map(item => <CheckoutItem key={item.id} item={item} />)
    ) : (
      <div className="empty-message">
        Empty Cart. Please select something from shop page
      </div>
    )}

    <div className="total">
      <span>TOTAL USD$ {total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  carItems: selectCartItems,
  total: selectCartItemsPrices
});

export default connect(mapStateToProps)(CheckoutPage);

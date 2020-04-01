import React from "react";
import StripeCheckout from "react-stripe-checkout";
import key from "./config";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = key;
  const onToken = token => {
      console.log(token);
      alert('Payment Successfully')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is USD$${price}`}
      amount={priceForStripe}
      panelLabel={'Pay now'}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

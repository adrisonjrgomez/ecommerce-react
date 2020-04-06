import React from "react";
import StripeCheckout from "react-stripe-checkout";
import key from "./config";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = key;
  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((resp) => {
        alert("Payment successfully");
      })
      .catch((error) => {
        console.log("Payment Error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is USD$${price}`}
      amount={priceForStripe}
      panelLabel={"Pay now"}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

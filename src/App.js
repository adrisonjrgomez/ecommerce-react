import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { checkUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCartItems } from "./redux/cart/cart.selectors";
import { addAllItem } from "./redux/cart/cart.action";

import Header from "./component/header/header.component";
import HomePage from "./pages/homepage/hompage.page";
import ShopPage from "./pages/shop/shop.page";
import CheckoutPage from "./pages/checkoutpage/checkout.page";
import SignInAndSingUpPage from "./pages/sign-in/sign-page.component";

import "./App.css";

const App = ({ checkUser, addCarts }) => {
  const currentUser = useSelector(selectCurrentUser);
  const carts = useSelector(selectCartItems);
  useEffect(() => {
    console.log("reproduce");
    checkUser();
  }, [checkUser]);

  if (carts) addCarts(carts);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact key="/" path="/" component={HomePage} />
        <Route key="/shop" path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSingUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch(checkUser()),
  addCarts: (item) => dispatch(addAllItem(item)),
});

export default connect(null, mapDispatchToProps)(App);

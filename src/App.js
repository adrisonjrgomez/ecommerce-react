import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./component/header/header.component";
import HomePage from "./pages/homepage/hompage.page";
import ShopPage from "./pages/shop/shop.page";
import CheckoutPage from "./pages/checkoutpage/checkout.page";
import SignInAndSingUpPage from "./pages/sign-in/sign-page.component";

import "./App.css";
import { selectCartItems } from "./redux/cart/cart.selectors";
import { addAllItem } from "./redux/cart/cart.action";
import { selectShopDataArray } from "./redux/shop/shop.selectors";

class App extends React.Component {
  componentDidMount() {
    const { checkUser, carts, addCarts } = this.props;
    checkUser();
    if (carts) addCarts(carts);
    // createCollectionsAndListItems("collections", shopData);
  }

  render = () => (
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
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSingUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  carts: selectCartItems,
  shopData: selectShopDataArray,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: () => dispatch(checkUser()),
  addCarts: (item) => dispatch(addAllItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

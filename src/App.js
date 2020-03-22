import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./component/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in/sign-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;

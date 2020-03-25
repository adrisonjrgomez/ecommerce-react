import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./component/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in/sign-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render = () => (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact key="/" path="/" component={HomePage} />
        <Route exact key="/shop" path="/shop" component={ShopPage} />
        <Route exact key="/sign" path="/sign" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;

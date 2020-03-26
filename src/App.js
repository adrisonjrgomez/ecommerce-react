import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./component/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in/sign-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render = () => (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/sign"
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

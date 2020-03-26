import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../card-icon/card-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <Link className="option" onClick={() => auth.signOut()} to="/sign">
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/sign">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
      {
        !hidden ? <CartDropdown/> : null
      }

  </div>
);

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden,
});

export default connect(mapStateToProps)(Header);

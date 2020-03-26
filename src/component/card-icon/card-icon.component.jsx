import React from "react";
import {connect} from "react-redux";
import {ReactComponent as ShopCart} from "../../assets/card.svg";
import './card-icon.styles.scss';
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartIcon = ({toggleCartHidden}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopCart className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default  connect(null, mapDispatchToProps)(CartIcon);
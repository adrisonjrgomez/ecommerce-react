import React from "react";
import {connect} from 'react-redux'
import CustomButton from "../button/button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) =>(
    <div className={"cart-dropdown"}>
        <div className={"cart-items"}>
            {
                console.log(cartItems)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems,
})

export default connect(mapStateToProps)(CartDropdown);
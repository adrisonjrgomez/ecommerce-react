import React from "react";
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../button/button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({carItems}) =>(
    <div className={"cart-dropdown"}>
        <div className={"cart-items"}>
            {console.log(carItems)}
            {
                carItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart:{ carItems } }) => ({
    carItems,
})

export default connect(mapStateToProps)(CartDropdown);
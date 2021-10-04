import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total=0;
    for(const member of cart){
       total = total + member.price;
    }
    return (
        <div className="cart p-3">
            <h1 className="mb-5"> Your Cart <FontAwesomeIcon icon={faShoppingCart} /></h1>
            <h3>Total Courses: {cart.length}</h3>
            <p>Total : ${total} </p>
            {props.children}
           
        </div>
    );
};

export default Cart;
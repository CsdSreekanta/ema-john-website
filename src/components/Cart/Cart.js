import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  let total =0;
  let shipping =0;
  let tax =0
  let grandTotal =0
    for(const product of cart){
       total = total + product.price;
       shipping =shipping +product.shipping;

    }
    tax = parseFloat((total*0.1).toFixed(2));
    grandTotal = total + shipping +tax;
    return (
        <div className='cart'>
            <h1>Order summary</h1>
            <p>Selected Item:{cart.length}</p>
            <p>Total: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;
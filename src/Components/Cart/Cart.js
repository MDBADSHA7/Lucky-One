import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let Image;
    for (const product of cart) {
        total = total + product.price;
        Image = product.img;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const finalTotalPrice = total + tax;
    return (
        <div className='fixed-cart'>
            <h3>Show-order</h3>
            <img src={Image} alt="" srcset="" />
            <p>Selected Item: {cart.length}</p>
            <p>Total price : $ {total}</p>
            <p>Tax : $ {tax}</p>
            <p>Final price : $ {finalTotalPrice.toFixed(2)}</p>

        </div>
    );
};

export default Cart;
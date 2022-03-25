import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


import './Mobile.css'

const Mobile = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const addClick = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='main-container'>
            <div className="mobile-container">
                {products.map(product => <Product key={product.id}
                    addClick={addClick}
                    product={product}>
                </Product>)}
            </div>
            <div className="cart-container">
                <h3>Show-order</h3>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Mobile;
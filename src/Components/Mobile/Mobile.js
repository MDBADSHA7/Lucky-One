import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


import './Mobile.css'

const Mobile = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);
    return (
        <div className='main-container'>
            <div className="mobile-container">
                {products.map(product => <Product key={product.id}
                    product={product}>
                </Product>)}
            </div>
            <div className="cart-container">Cart</div>
        </div>
    );
};

export default Mobile;
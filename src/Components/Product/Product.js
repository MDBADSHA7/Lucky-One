import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='mobile-info'>
                <h2 className='mobile-name'>{name}</h2>
                <p>Price: $ {price}</p>
                <p>Seller: {seller}</p>
            </div>
            <button className='btn-cart'>
                <h2>Add to here</h2>
            </button>
        </div>
    );
};

export default Product;
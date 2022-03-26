import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
            <button onClick={() => props.addClick(props.product)} className='btn-cart'>
                <h2 className='btn-text'>Add to here</h2>
                <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
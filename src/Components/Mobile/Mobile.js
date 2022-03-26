import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        <div className="main-container">
            <div className="mobile-container">
                {products.map(product => <Product key={product.id}
                    addClick={addClick}
                    product={product}>
                </Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            {/* <div className='bonas-question'>
                <h1>1.Question:How react work?</h1>
                <h2>Ans:React is not a freamwowk .It is just a libray devloped by Facebook to solve some problems that they were facing earlier. It designs simple views for each state in our application, and React will efficiently update and render just the right component when we data changes. The declarative view makes our code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</h2>
            </div> */}
        </div>
    );
};


export default Mobile;
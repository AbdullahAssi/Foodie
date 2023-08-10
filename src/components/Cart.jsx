import React from 'react'
import './Styles/Cart.css'
import {  useRecoilValue ,useSetRecoilState } from 'recoil'
import { CartState, cartStateWithRemove } from './Shop'
import { food } from '../constants'
import { dec, del, emptycart, inc } from '../assets'


function Cart() {
    const [quantity, setquantity] = React.useState({});
    const cart = useRecoilValue(CartState)
    const setCartState = useSetRecoilState(cartStateWithRemove);


    if(Object.keys(cart).length === 0){
        return( <div className='empty-cart'>
                <h1>Oops! Your Cart is Empty</h1>
                <div className='empty-cart-gif'>
                    <img src={emptycart} width="200px" />
                </div>
            </div>
        );
    }
    
    
    const handleRemoveItem = (itemId) => {
        const updatedCart = { ...cart };
        delete updatedCart[itemId];
        setCartState(updatedCart);
    };

    const IncrementQuantity = (itemId) => {
    setCartState((prevCart) => ({
        ...prevCart,
        [itemId]: (prevCart[itemId] || 1) + 1,
    }));

    setquantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
};

    const DecrementQuantity = (itemId) => {
        if (quantity[itemId] > 1) {
            setCartState((prevCart) => ({
                ...prevCart,
                [itemId]: prevCart[itemId] - 1,
            }));

            setquantity((prevQuantities) => ({
                ...prevQuantities,
                [itemId]: prevQuantities[itemId] - 1,
            }));
        }
    };

    function calculateSubtotal(id, quantity) {
        return food[id].Price * (quantity || 1);
    }
    
    function calculateTotalPrice(cart) {
        let total = 0;
        for (const [id, quantity] of Object.entries(cart)) {
            total += calculateSubtotal(id, quantity);
        }
        return total;
    }
    

    const total = calculateTotalPrice(cart);

    console.log(Object.keys(cart).length);

    return (
        <div className='cart-container'>
            <div className='cart-list-container'>
                {Object.entries(cart).map(([id]) => (
                    <div key={id} className='cart-list'>
                        <div className='cart-item-details'>
                            <img  src={food[id].pic} width="120px" />
                            <div className='cart-item-info'>
                                <p className='cart-item-name'>
                                    {food[id].Name}
                                </p>
                                <p>Price:{food[id].Price}$</p>
                                    <button class="Btn" onClick={() => handleRemoveItem(id)}>
                                            <img src={del} className='sign' width="15px" />
                                        <div class="text">Remove</div>
                                    </button>

                            </div>
                        </div>
                        <div className='quantity-controls'>
                            <button  className='qty-button'
                                onClick={() => DecrementQuantity(id)}
                            > <img src={dec} width="20px" /></button>
                            <p>{quantity[id] || 1}</p>
                            <button className='qty-button'
                                onClick={() => IncrementQuantity(id)}
                            > <img src={inc} width="20px" /> </button>
                        </div>

                        <p className='cart-item-price'>
                            SubTotal: {calculateSubtotal(id, quantity[id])}$
                        </p>
                    </div>
                ))}
            </div>

            <div className='divider'></div>

            <div className="total-price">
                <h2>Total Price </h2>
                <h2>{total}$</h2>
            </div>
            <div className='checkout-btn'>
                <button className='cart-button'>Check Out</button>
            </div>
        </div>
    )
}

export default Cart
import React from 'react'
import './Styles/Cart.css'
import {  useRecoilValue ,useSetRecoilState } from 'recoil'
import { CartState, cartStateWithRemove } from './Shop'
import { food } from '../constants'
import { dec, del, inc } from '../assets'


function Cart() {
    const [quantity, setquantity] = React.useState({});
    const cart = useRecoilValue(CartState)
    const setCartState = useSetRecoilState(cartStateWithRemove);


    if(Object.keys(cart).length === 0){
        return <h1 className='empty-cart'>Cart is Empty</h1>
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
            <h1>This is cart</h1>
            <nav className='cart-nav'>
                <p className='product'>Product</p>
                <p>Quantity</p>
                <p>SubTotal</p>
            </nav>
            <div className='cart-list-container'>
                {Object.entries(cart).map(([id]) => (
                    <div key={id} className='cart-list'>
                        <div className='cart-item-details'>
                            <img  src={food[id].pic} width="150px" />
                            <div className='cart-item-info'>
                                <p className='cart-item-name'>
                                    {food[id].Name}
                                </p>
                                    <button class="Btn" onClick={() => handleRemoveItem(id)}>
                                            <img src={del} className='sign' width="15px" />
                                        <div class="text">Remove</div>
                                    </button>

                                <p>Price:{food[id].Price}$</p>
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
                            {calculateSubtotal(id, quantity[id])}$
                        </p>
                    </div>
                ))}
            </div>

            <div className="total-price">
                <h2>Total Price: {total}$</h2>
            </div>
        </div>
    )
}

export default Cart
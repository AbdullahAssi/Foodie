import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { food } from '../constants';
import './Styles/shop.css';
import { carticon } from '../assets';
import { atom, useRecoilState , selector } from 'recoil';


export const CartState = atom({
    key: "CartState",
    default : {},
})

export const cartStateWithRemove = selector({
    key: 'cartStateWithRemove',
    get: ({ get }) => get(CartState),
    set: ({ set }, updatedCart) => {
    set(CartState, updatedCart);
    },
});

export function addToCart(item, cart, setCart) {
    const updatedCart = { ...cart, [item.id]: (cart[item.id] || 0) + 1 };
    setCart(updatedCart);
}

function Shop() {
    const [cart , setCart] = useRecoilState(CartState);
    const [visible, setVisible] = React.useState(8);
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = React.useState([]);

    console.log(Object.keys(cart).length);

    if(!cart) {
        console.log("Cart is undefined")
    }

    React.useEffect(() => {
        setItems(food);
    }, []);

    const typeFilter = searchParams.get('catagory');
    const displayedItems = typeFilter ? items.filter((items) => items.catagory === typeFilter) : items;

    const showMoreItems = () => {
        setVisible(prevState => prevState + 4);
    };

    const ItemsElements = displayedItems.slice(0, visible).map((item) => (
        <div className='item-card' key={item.id}>
            <div className='item-discount'>-{item.discount}%</div>
        <div className='item-pic'>
            <img className="item-pic" src={item.pic} alt="burger" />
        </div>
        <div className='item-info'>
            <h2 className='name'>{item.Name}</h2>
            <p className='price'>{item.Price}$ <span className='original-price'>{item.O_price}$</span></p>
            <button className='cart-button'
                onClick={() => {
                    addToCart(item, cart, setCart);
                }}
                >Add to Cart <img src={carticon} width="20px" /></button>
        </div>
        </div>
    ));

    return (
        <div className='shop-container'>
        <h1>Explore Our Items</h1>

        <nav className='filter-nav'>
            <Link className='item-type' to='.'>All</Link>
            <Link
                className={`item-type pizza ${typeFilter === 'Pizza' ? 'selected' : ''}`}
                to='?catagory=Pizza'
            >
            Pizza
            </Link>

            <Link
                className={`item-type pizza ${typeFilter === 'Drink' ? 'selected' : ''}`}
                to='?catagory=Drink'
            >
            Drink
            </Link>

            <Link
                className={`item-type burger ${typeFilter === 'Burger' ? 'selected' : ''}`}
                to='?catagory=Burger'
            >
            Burger
            </Link>

            <Link
                className={`item-type sandwich ${typeFilter === 'Sandwich' ? 'selected' : ''}`}
                to='?catagory=Sandwich'
            >
            Sandwich
            </Link>

        </nav>

        <div className='item-container'>{ItemsElements}
        </div>
        <div className='shop-button'>
            <button className='button' onClick={showMoreItems}>Explore More</button>
        </div>
        </div>
    );
}

export default Shop;

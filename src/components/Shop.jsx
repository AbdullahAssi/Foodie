import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { food } from '../constants';
import './Styles/shop.css';

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems(food);
    }, []);

    const typeFilter = searchParams.get('catagory');
    const displayedItems = typeFilter
        ? items.filter((item) => item.catagory === typeFilter)
        : items;

    const ItemsElements = displayedItems.map((item) => (
        <div className='item-card' key={item.id}>
            <div>{item.discount}</div>
        <div className='item-pic'>
            <img src={item.pic} width='200px' alt='burger' />
        </div>
        <div className='item-info'>
            <h2 className='price'>{item.Name}</h2>
            <p>{item.Price}$</p>
            <button className='button'>Add to Cart</button>
        </div>
        </div>
    ));

    return (
        <div className='shop-container'>
        <h1>Explore Our Items</h1>

        <nav className='filter-nav'>
            <Link
                className={`item-type pizza ${typeFilter === 'Pizza' ? 'selected' : ''}`}
                to='?catagory=Pizza'
            >
            Pizza
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

            {typeFilter ? <Link className='item-type' to='.'>Clear</Link> : null}
        </nav>

        <div className='item-container'>{ItemsElements}</div>
        </div>
    );
}

export default Shop;

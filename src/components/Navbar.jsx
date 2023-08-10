import React, { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import {  useRecoilValue } from 'recoil';
import { CartState } from './Shop';
import { carticon } from '../assets';
import { FaTimes } from 'react-icons/fa';
import './Styles/Navbar.css'
import './Styles/Cart.css'
import Cart from './Cart';


const Navbar = () => {
    const cart = useRecoilValue(CartState)
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false); 

    const toggleNav = () => {
        setIsOpen(prevstate => !prevstate);
    }

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    }

    return (
        <header>
        <div className="nav-container container">
            <h2  className="logo">Foodie.</h2>
            <div className='nav-container'>
                <nav className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}>
                <ul>
                    {navLinks.map((nav,index)=>(
                        <li key={nav.id}>
                                <Link to={nav.link}>
                                    {nav.title}
                                </Link>
                        </li>
                    ))}
                </ul>
                </nav>
                <div>
                    <div>
                        <button onClick={toggleSidebar} className='cart-btn'>
                            <div className='cart'>
                                <img src={carticon} alt="" width="30px" />
                                <p className='cart-value'>{Object.keys(cart).length}</p>
                            </div>
                        </button>
                        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar hide-sidebar'}`}>
                            <div className='sidebar-header'>
                                <h1>Cart</h1>
                                <button className='close-btn' onClick={toggleSidebar}>
                                    <FaTimes />
                                </button>
                            </div>
                            <Cart />
                        </aside>
                    </div>
                </div>

            </div>

            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
            <div className="hamburger"></div>
            </div>
        </div>
        </header>
    );
};

export default Navbar;

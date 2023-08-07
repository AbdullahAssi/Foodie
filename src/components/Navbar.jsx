import React, { useState } from 'react';
import './Styles/Navbar.css'
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import {  useRecoilValue } from 'recoil';
import { CartState } from './Shop';
import { carticon } from '../assets';

const Navbar = () => {

    const cart = useRecoilValue(CartState)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(prevstate => !prevstate);
    };


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
                <div className='cart'>
                    <Link to='./cart'>
                        <img src={carticon} alt="" width="30px" />
                        <p className='cart-value'>{Object.keys(cart).length}</p>
                    </Link>
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

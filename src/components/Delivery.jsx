import React, { useState, useEffect } from 'react';
import { deliverybg, deliveryboy } from '../assets'
import './Styles/Delivery.css'

function Delivery() {
    const clouds = {
        backgroundImage: `url(${deliverybg})`,
        backgroundSize: 'contain',
    }

    const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const deliveryBoyElement = document.querySelector("[data-delivery-boy]");
            const deliveryBoyTopPos = deliveryBoyElement.getBoundingClientRect().top;

            if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
                const activeScrollPos = window.scrollY;

                if (lastScrollPos < activeScrollPos) {
                    setDeliveryBoyMove((prevMove) => prevMove + 1);
                } else {
                    setDeliveryBoyMove((prevMove) => prevMove - 1);
                }

                setLastScrollPos(activeScrollPos);
            }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <div className='delivery-container'>
            <div className='delivery-content'>
                <h1>A Moments Of Delivered On <span id='span'>Right Time</span>  & Place</h1>
                <p>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
                <button className='button'>Order Now</button>
            </div>
            <div className='delivery-imgs' style={clouds} >
                <img data-delivery-boy style={{ transform: `translateX(${deliveryBoyMove}px)` }} src={deliveryboy} alt="not found" width="350px" />
            </div>
        </div>
    )
}

export default Delivery
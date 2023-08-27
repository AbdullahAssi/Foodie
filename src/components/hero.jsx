import React from 'react'
import { herobg,herobannerbg, burger6 } from '../assets'

import './Styles/Hero.css'
function Hero() {

    const containerStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
    };
    const burgerstyle = {
        backgroundImage: `url(${herobannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='hero-container' style={containerStyle}>
            <div className='hero-info'>
                <h6>Eat Sleep And</h6>
                <h1 className='hero-heading'>Supper delicious Burger in town!</h1>
                <p className='hero-discription'>Food is any substance consumed to provide nutritional support for an organism.</p>
                <button className='button'>Order Now</button>
            </div>
            <div  className='burger' style={burgerstyle}>
                <img  src={burger6} width={550} />
            </div>
        </div>
    )
}

export default Hero
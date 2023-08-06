import React from 'react'
import { about_banner, shapewhite, verified } from '../assets'
import './Styles/Features.css'

function Features() {

    const containerImg = {
        backgroundImage: `url(${about_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vh'
    };

    return (
        <div>
            <img src={shapewhite}  />
            <div className='feature-container'>
            <div className='container-img'>
                <div style={containerImg} className='banner-img' />
            </div>

                <div className='feature-info'>
                    <h1 className='feature-heading'>Caferio, Burgers, and Best Pizzas <span className='span'>in Town!</span></h1>
                    <p className='feature-info'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
                    <h5> <img src={verified} width="15px"/> Delicious & Healthy Foods</h5>
                    <h5><img src={verified}width="15px"/> Spacific Family And Kids Zone</h5>
                    <h5><img src={verified}width="15px"/> Music & Other Facilities</h5>
                    <h5><img src={verified}width="15px"/> Fastest Food Home Delivery</h5>
                    <button className='button feature-button'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Features
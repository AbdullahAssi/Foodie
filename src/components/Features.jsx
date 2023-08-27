import React from 'react'
import { about_banner, shapered, verified } from '../assets'
import './Styles/Features.css'

function Features() {


    return (
        <div>
            <div className='feature-container'>
            <div className='container-img'>
                <img src={about_banner} className='banner-img' />
                <img src={shapered} className='sale-icon' />
            </div>

                <div className='feature-info'>
                    <h1 className='feature-heading'>Caferio, Burgers, and Best Pizzas <span id='span'>in Town!</span></h1>
                    <p className='feature-info-desc'>The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
                    <div className='features'>
                        <p> <img src={verified} width="15px"/> Delicious & Healthy Foods</p>
                        <p><img src={verified}width="15px"/> Spacific Family And Kids Zone</p>
                        <p><img src={verified}width="15px"/> Music & Other Facilities</p>
                        <p><img src={verified}width="15px"/> Fastest Food Home Delivery</p>
                    </div>
                    <button className='button feature-button'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Features
import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { LuConstruction } from 'react-icons/lu'
import { MdBoy, MdConstruction } from 'react-icons/md'
import { deliveryboy, footer } from '../assets'
import './Styles/Footer.css'
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className='footer'>

                <div className='footer-list list-1'>
                    <h2  className="logo">Foodie.</h2>
                    <p>Financial experts support or help you to to find out which way you can raise your funds more.</p>
                    <div className='icons'>
                        <h1><FaFacebookSquare /></h1>
                        <h1><FaInstagram /></h1>
                        <h1><FaTwitter /></h1>
                        <h1><FaPinterest /></h1>
                    </div>
                </div>

                <div className='footer-list'>
                    <h2>Contact Info</h2>
                    <p>+92 062 109-9222</p>
                    <p>Info@YourGmail24.com</p>
                    <p>153 Williamson Plaza, Maggieberg, MT 09514</p>
                </div>

                <div className='footer-list'>
                    <h2>Opening Hours</h2>
                    <p>Monday-Friday: 08:00-22:00</p>
                    <p>Tuesday 4PM: Till Mid Night</p>
                    <p>Saturday: 10:00-16:00</p>
                </div>

                <div className='footer-list'>
                    <h2>Branches </h2>
                    <p>Monday-Friday: 08:00-22:00</p>
                    <p>Tuesday 4PM: Till Mid Night</p>
                    <p>Saturday: 10:00-16:00</p>
                </div>

            </div>
                <div className='footer-imgs'>
                    <img className='img-1' src={footer} />
                    <div className='footer-line'></div>
                    <img className='cycle' src={deliveryboy} height="200px" />
                </div>

                <div className='credit'>
                <MdConstruction />  Website Under Construction! <LuConstruction />
                </div>
        </div>
    )
}

export default Footer
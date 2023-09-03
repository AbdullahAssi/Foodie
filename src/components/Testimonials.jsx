import React, { useState, useEffect } from "react";
import "./Styles/testimonials.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaStar } from "react-icons/fa";
import { people } from "../constants/index";

function Testimonials() {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
            return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
    setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextPerson();
        }, 5000);
    
        return () => {
            clearInterval(interval);
        };
    }, [index]);
    
    


return (
    <div className="testmonial">
            <h1 className="testmonial-heading">Our Customers <span id="span">Reviews</span> </h1>
        <div className="testimonial-container">
            <div className="testmonial-details">
                <h1>We Got The <span id="span">Trust</span> Along with Taste .</h1>
                <p>At our restaurant, we take immense pride in our diverse and loyal clientele. Our valued customers are at the heart of everything we do, and their trust is what fuels our passion for serving exceptional food. With over 1000+ satisfied clients and a legacy spanning more than 15 years, we've become a beloved culinary destination in the community.</p>
                <h2><span id="span">100+</span> Satisfied Clients</h2>
                <h2><span id="span">1000+</span> Foods Delivered</h2>
                <h2><span id="span">15+</span> Years of Legacy</h2>    
            </div>

            <div className="review-container">
                <article className="review">
                    <div className="img-container">
                        <img src={image} alt={name} className="person-img" />
                        <span className="quote-icon">
                        <FaQuoteRight />
                        </span>
                    </div>

                    <h4 className="author">{name}</h4>
                    <p className="job"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                    <p className="info">{text}</p>

                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                        </button>
                    </div>

                    <button className="random-btn" onClick={randomPerson}>
                        surprise me
                    </button>
                </article>
            </div>
        </div>
    </div>
  );
}

export default Testimonials;

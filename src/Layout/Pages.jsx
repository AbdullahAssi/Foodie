import React, { useState, useEffect } from 'react';
import Hero from '../components/hero';
import Promo from '../components/Promo';
import Features from '../components/Features';
import Deals from '../components/Deals';
import Testimonials from '../components/Testimonials';
import Delivery from '../components/Delivery';
import BlogCards from '../components/BlogCards';
import { MdBoy, MdConstruction } from 'react-icons/md';
import { LuConstruction } from 'react-icons/lu';
import Transition from '../components/Transition';

function Pages() {
    const [showTransition, setShowTransition] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hide the Transition component after 3 seconds
        const timeout = setTimeout(() => {
        setShowTransition(false);
        }, 3000);

        // Cleanup the timeout when the component unmounts
        return () => {
        clearTimeout(timeout);
        };
    }, []);

  return (
      <div>
            {showTransition && <Transition />}
        <Hero />
        <Promo />
        <Features />
        <Delivery />
        <Deals />
        <BlogCards />
        <Testimonials />
        </div>
  );
}

export default Pages;

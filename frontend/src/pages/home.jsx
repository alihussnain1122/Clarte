import React from 'react';
import '../components/hero.jsx'
import Hero from '../components/hero.jsx';
import FeaturedProduct from '../components/featuredProduct.jsx';
import BrandPromise from '../components/BrandPromise.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/Newsletter.jsx';
function Home() {
    return (
        <>
        
            <Hero />
            <FeaturedProduct/>
            <BrandPromise/>
            <Testimonials/>
            <Newsletter/>
                
        </>
    );
}

export default Home;

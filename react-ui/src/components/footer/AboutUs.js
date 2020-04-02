import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h4 className='about-us-header'>About Us</h4>

            <p className='about-us-body'>We are a network of Maine developers, business analysts,
            UI/UX designers, entrepreneurs, government officials, and
            public health professionals rapidly developing high impact
            innovations to flatten the curve of <strong>COVID-19</strong> and save maine lives.</p>

            <div className="about-us-links-container">
                <Link className='about-us-links' to="/privacy">Privacy</Link>
                <Link className='about-us-links' to="/terms-and-conditions">Terms and Conditions</Link>
            </div>
        </div>
    );
};

export default AboutUs;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => (
    <div className="about-us">
        <h2 className="about-us-header">About Us</h2>

        <p className="about-us-body">
            We are a network of Maine professionals spanning healthcare, government, developers, business, marketing
            and more who are sprint-speeding product ideas to help prevent further COVID-19 spread in Maine.
        </p>

        <div className="about-us-links-container">
            <Link className="about-us-links" to="/privacy">Privacy</Link>
            <Link className="about-us-links" to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
    </div>
);

export default AboutUs;

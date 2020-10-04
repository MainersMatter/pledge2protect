import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => (
    <div className="about-us">
        <h2 className="about-us-header">About Us</h2>

        <p className="about-us-body">
            Started in March of 2020 by a network of Maine professionals spanning healthcare, government, developers,
            business, marketing, and more, sprint-speeding product ideas to help prevent further COVID-19 spread in
            Maine, the PledgePort project is a partnership of this original network, the GetWell Network, Maine Office
            of Tourism and Maine DECD. The State of Maine authorizes that taking the pledge serves as digital
            certification that you meet the requirements of the Keep Maine Healthy plan, so Pledge and Loop today!
        </p>

        <div className="about-us-links-container">
            <Link className="about-us-links" to="/privacy">Privacy</Link>
            <Link className="about-us-links" to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
    </div>
);

export default AboutUs;

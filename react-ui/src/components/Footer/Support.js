import React from 'react';
// import { Link } from 'react-router-dom';


const Support = () => (
    <div className="support">
        <h4 className="about-us-header">Support</h4>
        <p className="about-us-body">
            <a
                className="about-us-links"
                href="mailto:dave@pledgetoprotectme.org"
                aria-label="Contact Us"
            >
                Email: dave@pledgetoprotectme.org
            </a>
        </p>
        { /*  <Link className='about-us-links' to="/news">News</Link> */ }
    </div>
);

export default Support;

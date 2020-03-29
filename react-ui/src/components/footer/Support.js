import React from 'react';
import './footer.css';

const Support = () => {
    return (
        <div className='support'>
            <h4 className='about-us-header'>Support</h4>
            <p className='about-us-body'>
                <a className='about-us-links' href="/contact-us">Contact Us</a>
            </p>
            <a className='about-us-links' href="/news">News</a>
        </div>
    );
};

export default Support;

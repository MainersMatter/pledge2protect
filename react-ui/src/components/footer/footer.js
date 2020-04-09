import React from 'react'
import AboutUs from './AboutUs';
import Support from './Support';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <AboutUs/>
            <Support/>
        </footer>
    )
};

export default Footer;

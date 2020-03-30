import React from 'react'
import AboutUs from './AboutUs';
import Support from './Support';

import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <AboutUs/>
            <Support/>
        </div>
    )
};

export default Footer;

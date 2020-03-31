import React from 'react';
import { Link } from "react-router-dom";



const Support = () => {
    return (
        <div className='support'>
            <h4 className='about-us-header'>Support</h4>
            <p className='about-us-body'>
                <a
                	className='about-us-links'
                	href="mailto:dave@pledgetoprotectme.org">
                		Email: <email>dave@pledgetoprotectme.org</email>
                </a>
            </p>
            { /*
            <Link 
            	className='about-us-links'
            	to="/news">
            	News
            </Link>
          */ }
        </div>
    );
};

export default Support;

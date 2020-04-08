import React from 'react';

import './resources-section.scss';
import SocialIcons from '../SocialIcons/social-icons';
import chevronRight from '../../assets/chevron-right.svg';


const ResourcesSection = () => (
    <div className="resources-section">
        { /*
        <a className="resource-box connections" href="/">
            <span>
                COVID-19: Connections &amp; Resources
            </span>
            <div className="chevron">
                <img src={chevronRight} aria-hidden="true" alt="" />
            </div>
        </a>
    */ }
        <div className="resource-box social">
            <p>Follow us on social media:</p>
            <SocialIcons mode="follow" />
        </div>
    </div>
);

export default ResourcesSection;

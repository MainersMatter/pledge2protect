import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './main-content-block.scss';
import SocialIcons from '../SocialIcons/social-icons';

const MainContentBlock = () => (
    <div className="main-content-block">
        <div className="call-to-action">
            <p className="call-to-action-blurb">
                Take the Pledge to Keep Yourself and Your Visit to Maine Healthy!
            </p>
        </div>
    </div>
);

export default MainContentBlock;

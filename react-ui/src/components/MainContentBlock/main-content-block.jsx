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
            <div className="call-to-action-actions">
                <Link
                    to="/#pledge"
                    className="btn"
                >
                    Take the Pledge
                </Link>
                <div className="social-share">
                    <p>Share this pledge on:</p>
                    <SocialIcons mode="share" variant="white" />
                </div>
            </div>
        </div>
    </div>
);

export default MainContentBlock;

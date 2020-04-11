import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './main-content-block.scss';

const MainContentBlock = () => (
    <div className="main-content-block">
        <div className="call-to-action">
            <p className="call-to-action-blurb">
                Take the Pledge to Stay Home to Reduce COVID-19 Spread in Maine!
            </p>
            <Link
                to="/#why-take-pledge"
                className="btn"
            >
                Take the Pledge
            </Link>
        </div>
    </div>
);

export default MainContentBlock;

import React from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import './styles.main-content-block.scss';
// import flattenCurveGraph from '../assets/flatten-curve-graph.png';
// import pledgeToProtectBannerImg from '../assets/pledgetoprotect-banner-image-nature-mobile.jfif';

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
        { /*
        <img
            src={flattenCurveGraph}
            alt="A graph depicting the reduced load on our healthcare system resulting from protective measures like staying home"
            width="1280"
            height="520"
        />


                <img
            src={pledgeToProtectBannerImg}
            alt=""
            width="1280"
            height="520"
        />
        */ }


    </div>
);

export default MainContentBlock;

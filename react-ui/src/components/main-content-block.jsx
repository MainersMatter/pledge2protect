import React from 'react';
import { Link } from "react-router-dom";

import './styles.main-content-block.scss';
import flattenCurveGraph from '../assets/flatten-curve-graph.png';

const MainContentBlock = () => (
    <div className="main-content-block">
        <div className="call-to-action">
            <p className="call-to-action-blurb">
                Take the Pledge to Physically Distance to Reduce COVID-19 Spread in Maine!
            </p>
            <button type="button" className="btn">
                <Link to="/why-take-pledge">
                    Take the Pledge
                </Link>
            </button>
        </div>
        <img
            src={flattenCurveGraph}
            alt="A graph depicting the reduced load on our healthcare system resulting from protective measures like physical distancing"
            width="1280"
            height="520"
        />
    </div>
);

export default MainContentBlock;

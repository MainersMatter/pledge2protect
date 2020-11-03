import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './base.scss';
import './buttons.scss';
import './utils.scss';


if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}

function browserSupportsMostRequiredFeatures(){
    let featuresSupported = true;
    featuresSupported = featuresSupported && typeof Object.assign === 'function';
    featuresSupported = featuresSupported && typeof Array.prototype.fill === 'function';
    featuresSupported = featuresSupported && typeof Promise !== 'undefined';
    featuresSupported = featuresSupported && typeof Object.values === 'function';
    featuresSupported = featuresSupported && typeof Object.entries === 'function';
    featuresSupported = featuresSupported && typeof Array.prototype.find === 'function';
    return featuresSupported;
}

if (!browserSupportsMostRequiredFeatures()) {
    const notSupportedDiv = document.getElementById("browser-not-supported");
    notSupportedDiv.style.display = "block";
} else {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

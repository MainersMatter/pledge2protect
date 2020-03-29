import React, { useState } from 'react';

import './styles.pledge-code-of-conduct.scss';
import chevronDown from '../assets/chevron-down.svg';
import chevronUp from '../assets/chevron-up.svg';


const PledgeCodeOfConduct = () => {
    const [isCodeExpanded, setCodeExpanded] = useState(false);

    return (
        <div className="pledge-code-of-conduct">
            <button
                type="button"
                className="code-toggle"
                onClick={() => setCodeExpanded(!isCodeExpanded)}
                aria-expanded={isCodeExpanded}
                aria-controls="code-content"
            >
                <span className="toggle-text">
                    Full Pledge Code of Conduct
                </span>
                <span className="chevron">
                    <img
                        src={(isCodeExpanded
                            ? chevronUp
                            : chevronDown
                        )}
                        aria-hidden="true"
                        alt=""
                    />
                </span>
            </button>
            <div className={`code-container ${(isCodeExpanded ? 'is-expanded' : 'is-collapsed')}`}>
                <div className="code-content" id="code-content">
                    <h2>Code of Conduct</h2>
                    <p className="pledge-preamble">
                        I pledge to:
                    </p>
                    <ol>
                        <li>
                            Stay home. Work from home, and encourage others in my household to do
                            the same.
                        </li>
                        <li>
                            Keep a 6’ distance from people who do not live in my household, at all
                            times.
                        </li>
                        <li>
                            Go out only for <strong>essential</strong> trips (grocery, pharmacy,
                            etc).
                        </li>
                        <li>
                            Avoid public gatherings.
                        </li>
                        <li>
                            Avoid non-essential visits to hospitals, nursing homes or long-term care
                            facilities.
                        </li>
                        <li>
                            Not eat out at restaurants, bars and choose drive-thru, pickup and
                            delivery instead.
                        </li>
                        <li>
                            <a href="/">Wash my hands</a> for a minimum of 20 seconds, multiple
                            times per day.
                        </li>
                        <li>
                            Call my doctor or 211 if I have fever or other <a href="/">symptoms</a>.
                            Emergency? dial 911.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default PledgeCodeOfConduct;

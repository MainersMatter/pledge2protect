import React, { useState } from 'react';

import './styles.header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isNavigationExpanded, setNavigationExpanded] = useState(false);

    return (
        <header className="global-header">
            <div className="logo-hamburger">
                <a href="/">
                    <h1>
                        <span className="sr-only">
                            PledgetoProtectME
                        </span>
                    </h1>
                </a>
                <button
                    type="button"
                    className="hamburger"
                    onClick={() => setNavigationExpanded(!isNavigationExpanded)}
                    title={isNavigationExpanded ? 'Hide navigation' : 'Show navigation'}
                >
                    <FontAwesomeIcon icon={isNavigationExpanded ? faChevronUp : faBars} />
                    <span className="sr-only">
                        { isNavigationExpanded ? 'Hide ' : 'Show ' }
                        navigation
                    </span>
                </button>
            </div>
            <nav aria-expanded={isNavigationExpanded} className={isNavigationExpanded ? 'is-expanded' : 'is-collapsed'}>
                <ul>
                    <li>
                        <a href="/why">
                            Why Take The Pledge
                        </a>
                    </li>
                    <li>
                        <a href="/news">
                            News
                        </a>
                    </li>
                    <li>
                        <a href="/resources">
                            Resources
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

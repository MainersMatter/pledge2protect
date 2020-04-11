import React, { useState } from 'react';
import { Link } from "react-router-dom";


import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isNavigationExpanded, setNavigationExpanded] = useState(false);

    return (
        <header className="global-header">
            <div className="logo-hamburger">
                <Link to="/">
                    <h1>
                        <span className="sr-only">
                            PledgetoProtectME
                        </span>
                    </h1>
                </Link>
                {/* Hiding for now since there's no links to show yet */}
                {/*<button
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
                </button>*/}
            </div>
          { /*
          <nav aria-expanded={isNavigationExpanded} className={isNavigationExpanded ? 'is-expanded' : 'is-collapsed'}>
              <ul>
                  <li>
                      <Link to="/why-take-pledge">
                          Why Take The Pledge
                      </Link>
                  </li>
                  <li>
                      <Link to="/news">
                          News
                      </Link>
                  </li>
                  <li>
                      <Link to="/resources">
                          Resources
                      </Link>
                  </li>
              </ul>
          </nav>
        */ }
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/PPME_Opt2_Horiz_green-01.svg';

import './header.scss';


const StyledLink = ({ to, children }) => {
    const match = useRouteMatch({ path: to, exact: true });

    return (
        <Link
            className={`nav-link ${match ? 'nav-link-active' : ''}`}
            to={to}
        >
            {children}
        </Link>
    );
};

StyledLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};


const Header = () => {
    const [isNavigationExpanded, setNavigationExpanded] = useState(false);

    return (
        <header className="global-header">
            <div className="logo-hamburger">
                <h1 className="sr-only">Pledge To Protect ME</h1>
                <Link to="/" aria-label="Pledge To Protect ME home page">
                    <img src={logo} alt="" />
                </Link>
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
                        <StyledLink to="/">
                            The Pledge
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/challenges">
                            Challenges
                        </StyledLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

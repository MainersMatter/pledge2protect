import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/PPME_Opt2_Horiz_White-01 1.png';

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
                    <img src={logo} alt="" width="261" height="55" />
                </Link>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './breadcrumbs.scss';


const Breadcrumbs = ({ crumbs }) => (
    <div className="breadcrumbs-container">
        {
            crumbs.map((crumb, index) => (
                <div className="breadcrumb-link">
                    {index > 0 && ' > '}
                    <Link to={crumb.path}>{crumb.label}</Link>
                </div>
            ))
        }
    </div>
);

Breadcrumbs.propTypes = {
    crumbs: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
};


export default Breadcrumbs;

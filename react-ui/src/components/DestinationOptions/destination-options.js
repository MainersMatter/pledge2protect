import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './destination-options.scss';

const OPTIONS = [
    ['Four Points Bangor', 'reservations@fourpointsbangor.com'],
    ['Sugarloaf Inn', 'stay@sugarloafinn.com'],
    ['Bear Mt Inn', 'concierge@bearmtinn.com'],
    ['Seaside Rentals', 'info@seasiderentals.com'],
    ['Inn at the Agora', 'innattheagora@yahoo.com'],
    ['Harraseeket Inn', 'info@harraseeketinn.com'],
    ['Down East Getaway', 'downeastgetaway@gmail.com'],
    ['Sadler House Maine', 'sadlerhousemaine@gmail.com'],
    ['Sunday River', 'mharrop@sundayriver.com'],
];

const DestinationOptions = ({ handleSelect }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const filteredOptions = OPTIONS.filter(([name, email]) => {
        if (searchQuery === '') {
            return true;
        }
        if (name.includes(searchQuery) || email.includes(searchQuery)) {
            return true;
        }
        return false;
    });

    return (
        <div className="destination-options">
            <div className="search">
                <label className="sr-only" htmlFor="destinations-search">
                    Search destinations
                </label>
                <input
                    type="search"
                    id="destinations-search"
                    onChange={(evt) => { setSearchQuery(evt.target.value); }}
                    value={searchQuery}
                    placeholder="Search destinations"
                />
            </div>
            <ul className="search-results">
                { filteredOptions.map(([name, email]) => {
                    return (
                        <li>
                            <button type="button" onClick={() => { handleSelect(email) }}>
                                <span className="name">{ name }</span>
                            </button>
                        </li>
                    );
                } ) }
                { filteredOptions.length === 0 && <div className="no-results">No results</div> }
            </ul>
        </div>
    );
};

DestinationOptions.propTypes = {
    handleSelect: PropTypes.func.isRequired,
};

export default DestinationOptions;

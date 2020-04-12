import React from 'react';
import PropTypes from 'prop-types';

import './why-pledge.scss';

const WhyPledge = ({ handleAddYourName }) => (
    <div id="why-take-pledge" className="why-pledge-content">
        <h2 className="why-pledge-header">Why Pledge?</h2>
        <p className="why-pledge-body">
            <strong>COVID-19</strong> is spreading fast in Maine. Anyone can get it, anyone
            can spread it and it can be deadly. <strong>Staying home</strong> is the strongest way to reduce the spread
            of the virus and protect yourself, your family and your neighbors. <strong>Together</strong>, we can stop
            COVID-19 in its tracks. <strong>You can make a difference.</strong>
        </p>
        <button
            type="button"
            className="btn-link add-your-name-link"
            onClick={handleAddYourName}
            aria-label="Add your name to Pledge to Protect Maine"
        >
            Add your name to Pledge to Protect Maine &gt;
        </button>
    </div>
);

WhyPledge.propTypes = {
    handleAddYourName: PropTypes.func.isRequired,
};

export default WhyPledge;

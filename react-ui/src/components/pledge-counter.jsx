import React from 'react';
import PropTypes from 'prop-types';

import './styles.pledge-counter.scss';


const PledgeCounter = ({ pledgesCount, pledgesGoal }) => (
    <div className="pledge-counter">
        <span className="pledges-label">
            Pledged
        </span>
        <span className="pledges-count">
            { pledgesCount.toLocaleString() }
        </span>
        <progress className="pledges-progress" value={pledgesCount} max={pledgesGoal}>
            {Math.round((pledgesCount / pledgesGoal) * 100)}
            %
        </progress>
    </div>
);

PledgeCounter.propTypes = {
    pledgesCount: PropTypes.number.isRequired,
    pledgesGoal: PropTypes.number.isRequired,
};

export default PledgeCounter;

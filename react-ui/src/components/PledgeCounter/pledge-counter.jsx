import React from 'react';
import PropTypes from 'prop-types';

import './styles.pledge-counter.scss';


const PledgeCounter = ({ pledgesCount, pledgesGoal }) => (
    <div className="pledge-counter">
        <span className="pledges-label" aria-hidden="true">
            Pledged
        </span>
        <span
            className="pledges-count"
            aria-live="polite"
            aria-label={`${pledgesCount.toLocaleString()} people have taken the pledge!`}
        >
            { pledgesCount.toLocaleString() }
        </span>
        <progress
            className="pledges-progress"
            value={pledgesCount}
            max={pledgesGoal}
            aria-hidden="true"
        />
    </div>
);

PledgeCounter.propTypes = {
    pledgesCount: PropTypes.number.isRequired,
    pledgesGoal: PropTypes.number.isRequired,
};

export default PledgeCounter;

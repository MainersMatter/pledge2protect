import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PledgeCounter from './pledge-counter';


const PLEDGE_GOAL = 1338404;

const DynamicPledgeCounter = () => {
    const [pledgeCount, setPledgeCount] = useState(0);

    useEffect( () => {
        async function getPledgeCount() {
            const response = await axios.get('/pledge/count');
            if (response && response.data && response.data.pledges) {
                setPledgeCount(response.data.pledges);
            }
        }
        getPledgeCount();
    });

    return (
        <PledgeCounter pledgesCount={pledgeCount} pledgesGoal={PLEDGE_GOAL} />
    );
};

export default DynamicPledgeCounter;

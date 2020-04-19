import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PledgeCounter from './pledge-counter';


const PLEDGE_GOAL = 1000;

const DynamicPledgeCounter = () => {
    const [pledgeCount, setPledgeCount] = useState(0);

    useEffect(() => {
        const getPledgeCount = async () => {
            try {
                const response = await axios.get('/pledge/count');
                if (response && response.data && response.data.pledges) {
                    setPledgeCount(response.data.pledges);
                }
            } catch (error) {
                // swallow the error, it will try again anyway
            }
        };

        // fetch the pledges on mount
        getPledgeCount();

        // then keep fetching them on an interval after that
        const timer = setInterval(getPledgeCount, 5000);

        return () => clearInterval(timer);
    }, [setPledgeCount]);

    return (
        <PledgeCounter pledgesCount={237} pledgesGoal={PLEDGE_GOAL} />
    );
};

export default DynamicPledgeCounter;

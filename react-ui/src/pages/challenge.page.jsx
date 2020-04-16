import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs';


const ChallengePage = () => (
    <div className="page-content">
        <Breadcrumbs
            crumbs={[
                { label: 'Home', path: '/' },
                { label: 'Social Challenges', path: '/challenges' },
            ]}
        />
        <h2>Challenges</h2>
        <p>Coming soon</p>
    </div>
);


export default ChallengePage;

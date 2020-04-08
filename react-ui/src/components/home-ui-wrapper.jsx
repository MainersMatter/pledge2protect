import React from 'react';

import MainContentBlock from './main-content-block';
import DynamicPledgeCounter from './PledgeCounter/dynamic-pledge-counter';
import PledgeCodeOfConduct from './pledge-code-of-conduct';
import PledgeForm from './Pledge/PledgeForm';
import WhyPledge from './why-pledge';
import ResourcesSection from './ResourcesSection/resources-section';
import TwitterWidget from './twitter-widget';

import './styles.home-ui-wrapper.scss';


function HomeUIWrapper() {
    return (
        <div className="home-ui-wrapper">
            <MainContentBlock />

            <DynamicPledgeCounter />
            <div className="why-and-form">
                <WhyPledge />
                <PledgeForm />
            </div>
            <PledgeCodeOfConduct />
            <TwitterWidget />
            <ResourcesSection />
        </div>
    );
}

export default HomeUIWrapper;

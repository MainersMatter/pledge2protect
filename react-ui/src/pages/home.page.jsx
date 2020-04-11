import React from 'react';

import MainContentBlock from '../components/MainContentBlock/main-content-block';
import DynamicPledgeCounter from '../components/PledgeCounter/dynamic-pledge-counter';
import PledgeCodeOfConduct from '../components/PledgeCodeOfConduct/pledge-code-of-conduct';
import PledgeForm from '../components/PledgeForm/pledge-form';
import WhyPledge from '../components/WhyPledge/why-pledge';
import ResourcesSection from '../components/ResourcesSection/resources-section';
import TwitterWidget from '../components/TwitterWidget/twitter-widget';

import './home-page.scss';


function HomePage() {
    return (
        <div className="home-page">
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

export default HomePage;

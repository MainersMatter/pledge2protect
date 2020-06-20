import React, {} from 'react';

import MainContentBlock from '../components/MainContentBlock/main-content-block';
import DynamicPledgeCounter from '../components/PledgeCounter/dynamic-pledge-counter';
import PledgeCodeOfConduct from '../components/PledgeCodeOfConduct/pledge-code-of-conduct';
import PledgeForm from '../components/PledgeForm/pledge-form';
import WhyPledge from '../components/WhyPledge/why-pledge';
import ResourcesSection from '../components/ResourcesSection/resources-section';
import TwitterWidget from '../components/TwitterWidget/twitter-widget';

import './home-page.scss';


function HomePage() {
    const formRef = React.createRef();
    const handleAddYourName = React.useCallback(() => {
        if (formRef && formRef.current) {
            formRef.current.focus();
        }
    }, [formRef]);

    return (
        <div className="home-page">
            <MainContentBlock />
            <DynamicPledgeCounter />
            <PledgeForm ref={formRef} />
            <PledgeCodeOfConduct />
            <TwitterWidget />
            <ResourcesSection />
        </div>
    );
}

export default HomePage;

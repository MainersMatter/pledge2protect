import React, { useState } from 'react';

import MainContentBlock from '../components/MainContentBlock/main-content-block';
import WelcomeToMaine from '../components/WelcomeToMaine/welcome-to-maine';
import PledgeCodeOfConduct from '../components/PledgeCodeOfConduct/pledge-code-of-conduct';
import PledgeForm from '../components/PledgeForm/pledge-form';
import BusinessOwner from '../components/BusinessOwner/business-owner';
import TwitterWidget from '../components/TwitterWidget/twitter-widget';

import './home-page.scss';


function HomePage() {
    const formRef = React.createRef();

    const [visitIntention, setVisitIntention] = useState(undefined);

    return (
        <div className="home-page">
            <MainContentBlock />
            <WelcomeToMaine visitIntention={visitIntention} setVisitIntention={setVisitIntention} />
            <PledgeForm ref={formRef} visitIntention={visitIntention} />
            <BusinessOwner />
        </div>
    );
}

export default HomePage;

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import DynamicPledgeCounter from '../components/PledgeCounter/dynamic-pledge-counter';
import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs';
import SpreadChallenge from '../components/Challenges/spread-challenge';
import LikeAndFollowChallenge from '../components/Challenges/like-and-follow-challenge';
import ShowOffChallenge from '../components/Challenges/show-off-challenge';
import twitterIcon from '../assets/twitter-icon.svg';
import SocialIcons from '../components/SocialIcons/social-icons';
import SelfMonitor from '../components/Challenges/self-monitor';

import './challenge-page.scss';


const ChallengePage = () => (
    <div className="page-content">
        <DynamicPledgeCounter />
        <Breadcrumbs
            crumbs={[
                { label: 'Home', path: '/' },
                { label: 'Social Challenges', path: '/challenges' },
            ]}
        />
        <div className="challenges-page">
            <div className="challenges-container">
                <h2>Challenges</h2>
                <SpreadChallenge />
                <LikeAndFollowChallenge />
                <ShowOffChallenge />
                <SelfMonitor />
            </div>
            <div className="twitter-container">
                <div className="twitter-widget-frame" aria-hidden="true">
                    <div className="twitter-widget-header">
                        <div className="twitter-icon">
                            <img src={twitterIcon} alt="" />
                        </div>
                        <span>@PledgeToProtectME</span>
                    </div>
                    <div className="twitter-widget-body">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="PledgeProtectME"
                            options={{ height: 400 }}
                        />
                    </div>
                </div>
                <div className="share-container">
                    <span>SHARE ON:</span>
                    <SocialIcons mode="share" />
                </div>
            </div>
        </div>
    </div>
);


export default ChallengePage;

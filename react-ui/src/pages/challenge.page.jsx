import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs';
import SpreadChallenge from '../components/Challenges/spread-challenge';
import LikeAndFollowChallenge from '../components/Challenges/like-and-follow-challenge';
import ShowOffChallenge from '../components/Challenges/show-off-challenge';

import './challenge-page.scss';


const ChallengePage = () => (
    <div className="page-content">
        <Breadcrumbs
            crumbs={[
                { label: 'Home', path: '/' },
                { label: 'Social Challenges', path: '/challenges' },
            ]}
        />
        <h2>Challenges</h2>
        <div className="challenges-page">
            <div className="challenges-container">
                <SpreadChallenge />
                <LikeAndFollowChallenge />
                <ShowOffChallenge />
            </div>
            <div className="twitter-container">
                <div className="twitter-widget-content" aria-hidden="true">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="PledgeProtectME"
                        options={{ height: 400 }}
                    />
                </div>
            </div>
        </div>
    </div>
);


export default ChallengePage;

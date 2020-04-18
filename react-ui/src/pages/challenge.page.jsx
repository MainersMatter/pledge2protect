import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs';
import SpreadChallenge from '../components/Challenges/spread-challenge';
import LikeAndFollowChallenge from '../components/Challenges/like-and-follow-challenge';
import ShowOffChallenge from '../components/Challenges/show-off-challenge';
import twitterIcon from '../assets/twitter-icon.svg';

import './challenge-page.scss';
import SocialIcons from '../components/SocialIcons/social-icons';


const ChallengePage = () => (
    <div className="page-content">
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
            </div>
            <div className="twitter-container">
                <div className="twitter-widget-frame" aria-hidden="true">
                    <div className="twitter-widget-header">
                        <div className="twitter-icon">
                            <img src={twitterIcon} alt="" />
                        </div>
                        @PledgeToProtectME
                    </div>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="PledgeProtectME"
                        options={{ height: 400 }}
                    />
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

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './styles.home-ui-wrapper.scss';

const TwitterWidget = () => {
    return (
        <div className='twitter-widget'>
            <div className='twitter-widget-content'>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="PledgeProtectME"
                  options={{height: 400}}
                />
            </div>
            <div className='twitter-widget-content'>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="MEPublicHealth"
                  options={{height: 400}}
                />
            </div>
            <div className='twitter-widget-content'>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="CDCgov"
                  options={{height: 400}}
                />
            </div>
        </div>
    )
};

export default TwitterWidget;

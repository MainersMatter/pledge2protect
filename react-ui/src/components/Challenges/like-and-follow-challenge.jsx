import React from 'react';

import Accordion from '../Accordion/accordion';
import SocialIcons from '../SocialIcons/social-icons';

import icon from '../../assets/like-and-follow-challenge-icon.svg';


const LikeAndFollowChallenge = () => (
    <Accordion
        id="like-follow-challenge"
        title="Like & Follow Us!"
        icon={icon}
    >
        <p>Let's stay connected. Like and follow up on social media for more updates!</p>
        <div className="share-container">
            <SocialIcons mode="share" />
        </div>
    </Accordion>
);


export default LikeAndFollowChallenge;

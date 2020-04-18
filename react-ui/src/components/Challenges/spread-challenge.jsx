import React from 'react';

import Accordion from '../Accordion/accordion';
import SocialIcons from '../SocialIcons/social-icons';
import icon from '../../assets/spread-challenge-icon.svg';


const SpreadChallenge = () => (
    <Accordion
        id="spread-challenge"
        title="Spread the Pledge, Not the Virus!"
        icon={icon}
    >
        <p>
            Let's make "spread" mean something else! Instead of spreading the virus, spread the pledge.
            <b>Tag three people to join you</b> and include <b>#pledgetoprotectme</b> and a link to the pledge.
        </p>
        <SocialIcons mode="share" />
    </Accordion>
);


export default SpreadChallenge;

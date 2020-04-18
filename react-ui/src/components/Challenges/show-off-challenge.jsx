import React from 'react';

import Accordion from '../Accordion/accordion';

import icon from '../../assets/show-off-challenge-icon.svg';


const ShowOffChallenge = () => (
    <Accordion
        id="show-off-challenge"
        title="Show Off Your Pledge"
        icon={icon}
    >
        <p>
            Post your pledge in your window.  Print this placard and display it in
            your front window or car.
        </p>
        <a
            href="../../assets/PPME_placard.pdf"
            className="btn"
            download="PledgeToProtectME_Placard.pdf"
            aria-label="Download the Pledge To Protect ME Placard"
        >
            Download
        </a>
    </Accordion>
);


export default ShowOffChallenge;

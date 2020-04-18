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
        <button type="button" className="btn">Download</button>
    </Accordion>
);


export default ShowOffChallenge;

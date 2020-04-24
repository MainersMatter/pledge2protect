import React from 'react';

import Accordion from '../Accordion/accordion';
import SocialIcons from '../SocialIcons/social-icons';
import icon from '../../assets/Vitals.svg';


const SelfMonitor = () => (
    <Accordion
        id="self-monitor"
        title="Self-Monitor"
        icon={icon}
    >
        <p>
            Take care of yourself and reduce anxiety by using the PledgeToProtectME and GetWellNetwork COVID-19 Self-Monitoring Tool.
        </p>
        <p>
            <b>It's simple, interactive, and sophisticated!</b>
        </p>
        
        <a
            href="https://apps.getwellnetwork.com/loop-enroll/pledgetoprotectme-covid/"
            className="btn"
            aria-label="Sign Up Here"
        >
            Sign Up Here
        </a>
    </Accordion>
);

export default SelfMonitor;

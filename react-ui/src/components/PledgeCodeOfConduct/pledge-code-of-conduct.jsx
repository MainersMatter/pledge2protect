import React, { useState } from 'react';

import Accordion from '../Accordion/accordion';
import SymptomsDialog from '../SymptomsDialog/symptoms-dialog';

import './pledge-code-of-conduct.scss';


const PledgeCodeOfConduct = () => {
    const [isSymptomsDialogOpen, setSymptomsDialogOpen] = useState(false);

    return (
        <div className="pledge-code-of-conduct">
            <Accordion
                id="code"
                title="Full Pledge Code of Conduct"
            >
                <h2>Code of Conduct</h2>
                <p className="pledge-preamble">
                    I pledge to:
                </p>
                <ol>
                    <li>
                        Stay home. Work from home, and encourage others in my household to do
                        the same.
                    </li>
                    <li>
                        Keep a distance of <strong>six feet</strong> from people who do not live in my household,
                        at all times.
                    </li>
                    <li>
                        Go out only for <strong>essential</strong> trips (grocery, pharmacy,
                        etc).
                    </li>
                    <li>
                        Avoid public gatherings.
                    </li>
                    <li>
                        Avoid non-essential visits to hospitals, nursing homes or long-term care
                        facilities.
                    </li>
                    <li>
                        Not eat out at restaurants, bars and choose drive-thru, pickup and
                        delivery instead.
                    </li>
                    <li>
                        <span id="wash-hands-instr" aria-labelledby="wash-my-hands-link wash-hands-instr">
                            <a
                                id="wash-my-hands-link"
                                href="https://www.cdc.gov/healthywater/hygiene/hand/handwashing.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wash my hands
                            </a> for a minimum of 20 seconds, multiple times per day.
                        </span>
                    </li>
                    <li>
                        <span id="who-to-call" aria-labelledby="who-to-call symptoms-list-btn">
                            Call my doctor or 211 if I have fever or other&nbsp;
                            <button
                                id="symptoms-list-btn"
                                className="btn-link"
                                type="button"
                                onClick={() => setSymptomsDialogOpen(true)}
                            >
                                symptoms
                            </button>. Emergency? Dial 911.
                        </span>
                    </li>
                </ol>
                { isSymptomsDialogOpen && (
                    <SymptomsDialog closeHandler={() => setSymptomsDialogOpen(false)} />
                ) }
            </Accordion>
        </div>
    );
};

export default PledgeCodeOfConduct;

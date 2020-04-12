import React from 'react';
import PropTypes from 'prop-types';

import './symptoms-dialog.scss';
import Dialog from '../Dialog/dialog';


const SymptomsDialog = ({ closeHandler }) => (
    <Dialog
        closeHandler={closeHandler}
        classNames="symptoms-dialog"
        title="Symptoms"
    >
        <div>
            <h2>Symptoms</h2>

            <p aria-describedby="asterisk-note1">
                The following symptoms may appear <strong>2-14 days after exposure<span aria-hidden="true">*</span></strong>
            </p>
            <ul>
                <li>Fever</li>
                <li>Cough</li>
                <li>Shortness of breath</li>
            </ul>

            <p>
                If you develop <i>EMERGENCY WARNING SIGNS</i> for COVID-19 get medical attention immediately.
            </p>
            <h3 aria-describedby="asterisk-note1">Emergency warning signs include<span aria-hidden="true">*</span>:</h3>
            <ul>
                <li>Difficulty breathing or shortness of breath</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish lips or face</li>
            </ul>

            <p id="asterisk-note1" aria-hidden="true">
                <span aria-hidden="true">*</span>This list is not all inclusive. Please consult your medical provider
                for any other symptoms that are severe or concerning.
            </p>
            <h3>Source:</h3>
            <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CDC list of Coronavirus Symptoms"
            >
                https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html
            </a>
        </div>
    </Dialog>
);

SymptomsDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};

export default SymptomsDialog;

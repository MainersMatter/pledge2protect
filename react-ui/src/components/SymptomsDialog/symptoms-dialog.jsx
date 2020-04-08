import React from 'react';
import PropTypes from 'prop-types';

import './symptoms-dialog.scss';
import Dialog from '../Dialog/dialog';


const SymptomsDialog = ({ closeHandler }) => (
    <Dialog closeHandler={closeHandler} classNames="symptoms-dialog">
        <div>
            <h2>Symptoms</h2>

            <p>The following symptoms may appear <strong>2-14 days after exposure*</strong></p>
            <ul>
                <li>Fever</li>
                <li>Cough</li>
                <li>Shortness of breath</li>
            </ul>

            <p>
                If you develop <i>EMERGENCY WARNING SIGNS</i> for COVID-19 get medical attention immediately.
            </p>
            <h4>Emergency warning signs include*:</h4>
            <ul>
                <li>Difficulty breathing or shortness of breath</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish lips or face</li>
            </ul>

            <p>
                *This list is not all inclusive. Please consult your medical provider for any other
                symptoms that are severe or concerning.
            </p>
            <div>
                <h4>Source:</h4>
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html" target="_blank">
                    https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html
                </a>
            </div>
        </div>
    </Dialog>
);

SymptomsDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};

export default SymptomsDialog;

import React from 'react';
import PropTypes from 'prop-types';

import './symptoms-dialog.scss';
import Dialog from '../Dialog/dialog';


const SymptomsDialog = ({ closeHandler }) => (
    <Dialog closeHandler={closeHandler} classNames="symptoms-dialog">
        <h2>Symptoms</h2>

        <ul>
            <li>Fever</li>
            <li>Cough</li>
            <li>Shortness of breath</li>
        </ul>

        <p>
            If you develop EMERGENCY WARNING SIGNS for COVID-19 get medical attention immediately.
            Emergency warning signs include*:
        </p>
        <ul>
            <li>Difficulty breathing or shortness of breath</li>
            <li>Persistent pain or pressure in the chest</li>
            <li>New confusion or inability to arouse</li>
            <li>Bluish lips or face</li>
        </ul>

        <p>
            *This list is not all inclusive. Please consult your medical provider for any other
            symptoms that are severe or concerning. Source:
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
                https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html
            </a>
        </p>
    </Dialog>
);

SymptomsDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};

export default SymptomsDialog;

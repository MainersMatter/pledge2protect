import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '../Dialog/dialog';

import PrivacyPolicyContent from './privacy-policy-content';
import './privacy-terms-dialog.scss';


const PrivacyTermsDialog = ({ closeHandler }) => (
    <Dialog closeHandler={closeHandler} classNames="privacy-terms-dialog">
        <div>
            <PrivacyPolicyContent/>
        </div>
    </Dialog>
);

PrivacyTermsDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired
};

export default PrivacyTermsDialog;

import React from 'react';
import PropTypes from 'prop-types';

import './confirmation-dialog.scss';
import Dialog from '../Dialog/dialog';
import SocialIcons from '../SocialIcons/social-icons';


const ConfirmationDialog = ({ closeHandler }) => (
    <Dialog
        closeHandler={closeHandler}
        classNames="confirmation-dialog"
        title="Thanks for pledging to help stop community spread."
    >
        <div className="upper">
            <h2>You are a vector for good!</h2>
            <p>Thanks for doing your part to stop community spread.</p>
        </div>
        <div className="lower">
            <p>Share this pledge on:</p>
            <SocialIcons mode="share" variant="white" />
        </div>
    </Dialog>
);

ConfirmationDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired,
};

export default ConfirmationDialog;

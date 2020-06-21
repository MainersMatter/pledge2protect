import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './confirmation-dialog.scss';
import Dialog from '../Dialog/dialog';
import SocialIcons from '../SocialIcons/social-icons';


const ConfirmationDialog = ({ closeHandler }) => (
    <Dialog
        closeHandler={closeHandler}
        classNames="confirmation-dialog"
        title="Thanks for pledging to protect Maine."
    >
        <div className="upper">
            <h2>Welcome to Maine!</h2>
            <p>Please print a copy of this pledge and keep it with you.</p>
            <p>We are happy to see you and wish you a healthy and relaxing visit!</p>
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

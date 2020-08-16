import React from 'react';
import PropTypes from 'prop-types';

import './welcome-dialog.scss';
import Dialog from '../Dialog/dialog';


const WelcomeDialog = ({ setVisitIntention, closeHandler }) => (
    <Dialog
        closeHandler={closeHandler}
        classNames="welcome-dialog"
        title="Please let us know the reason for your visit"
    >
        <div className="text">
            <h2>Welcome to Maine!</h2>
            <p>We are excited to have you here! Please let us know the reason for your visit.</p>
        </div>
        <div className="buttons">
            <button
                type="button"
                className="btn squarish"
                onClick={() => {
                    setVisitIntention('return');
                    closeHandler();
                    setTimeout(() => { window.location.href='#pledge'; }, 1);
                }}
            >
                Returning from Vacation
            </button>
            <button
                type="button"
                className="btn squarish"
                onClick={() => {
                    setVisitIntention('vacation');
                    closeHandler();
                    setTimeout(() => { window.location.href='#pledge'; }, 1);
                }}
            >
                Coming to Vacation
            </button>
        </div>
    </Dialog>
);

WelcomeDialog.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    setVisitIntention: PropTypes.func.isRequired,
};

export default WelcomeDialog;

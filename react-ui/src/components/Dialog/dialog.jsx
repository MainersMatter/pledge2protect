import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './dialog.scss';


const Dialog = ({ children, closeHandler, classNames }) => {
    useEffect(() => {
        // Close the dialog on Escape
        const keydownHandler = (evt) => {
            if (evt.which === 27) {
                closeHandler();
            }
        };
        document.addEventListener('keydown', keydownHandler);

        const cleanup = () => {
            document.removeEventListener('keydown', keydownHandler);
        };
        return cleanup;
    });

    return (
        <>
            <div className="dialog-backdrop" />
            <div className={`dialog ${classNames}`} role="dialog" aria-modal="true">
                <div className="inner">
                    <button
                        type="button"
                        className="close-button"
                        onClick={closeHandler}
                        title="Close"
                    >
                        <span className="sr-only">Close</span>
                    </button>
                    { children }
                </div>
            </div>
        </>
    );
};

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    closeHandler: PropTypes.func.isRequired,
    classNames: PropTypes.string,
};

Dialog.defaultProps = {
    classNames: '',
};

export default Dialog;

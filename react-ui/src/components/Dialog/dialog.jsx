import React from 'react';
import PropTypes from 'prop-types';
import AriaDialog from 'react-aria-modal';

import './dialog.scss';


const Dialog = ({
    children,
    closeHandler,
    title,
    classNames,
}) => {
    const appNode = document.getElementById('root');

    return (
        <AriaDialog
            onExit={closeHandler}
            titleText={title}
            applicationNode={appNode}
            dialogClass={`react-aria-modal-dialog ${classNames}`}
            underlayClass="react-aria-modal-underlay"
            includeDefaultStyles={false}
        >
            <button
                type="button"
                className="close-button"
                onClick={closeHandler}
                title="Close"
                aria-label="Close"
            />
            { children }
        </AriaDialog>
    );
};

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    closeHandler: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    classNames: PropTypes.string,
};

Dialog.defaultProps = {
    classNames: '',
};

export default Dialog;

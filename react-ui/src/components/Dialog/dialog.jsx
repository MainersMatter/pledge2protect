import React from 'react';
import PropTypes from 'prop-types';
import AriaDialog from 'react-aria-modal';

import closeIcon from '../../assets/close.svg'

import './dialog.scss';


const Dialog = ({
    children,
    closeHandler,
    title,
    classNames,
}) => {
    const appNode = document.getElementById('root');

    return (
        <main>
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
                >
                    <img src={closeIcon} alt="" />
                </button>
                <h1 className="sr-only">{title}</h1>
                { children }
            </AriaDialog>
        </main>
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

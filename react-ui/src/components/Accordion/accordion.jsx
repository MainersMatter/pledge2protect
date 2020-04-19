import React, { useState } from 'react';
import PropTypes from 'prop-types';

import chevronDown from '../../assets/chevron-down.svg';
import chevronUp from '../../assets/chevron-up.svg';

import './accordion.scss';


const Accordion = ({
    id, icon, title, children,
}) => {
    const [isCodeExpanded, setCodeExpanded] = useState(false);

    return (
        <div className="accordion">
            <button
                type="button"
                className="accordion-toggle"
                onClick={() => setCodeExpanded(!isCodeExpanded)}
                aria-expanded={isCodeExpanded}
                aria-controls={`${id}-content`}
            >
                { icon && <img src={icon} alt="" /> }
                <span className="toggle-text">
                    {title}
                </span>
                <span className="chevron">
                    <img
                        src={(isCodeExpanded
                            ? chevronUp
                            : chevronDown
                        )}
                        alt=""
                    />
                </span>
            </button>
            <div className={`accordion-container ${(isCodeExpanded ? 'is-expanded' : 'is-collapsed')}`}>
                <div className="accordion-content" id={`${id}-content`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

Accordion.defaultProps = {
    icon: null,
};

Accordion.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Accordion;

import React from 'react';
import PropTypes from 'prop-types';
import './Callout.scss';

const Callout = ({ type, children, icon }) => {
    const calloutStyles = {
        callout: {
            borderLeft: '3px solid #DFA305',
            backgroundColor: '#FFFCF3',
        },
        info: {
            borderLeft: '3px solid #227EE1',
            backgroundColor: '#ECF3FA',
        },
        success: {
            borderLeft: '3px solid #1ABE3B',
            backgroundColor: '#F4FFF7',
        },
        error: {
            borderLeft: '3px solid #EB534E',
            backgroundColor: '#FFF5F5',
        },
    };

    const selectedStyle = calloutStyles[type] || calloutStyles.callout;

    return (
        <div className="about__content-call-out" style={selectedStyle}>
            {icon && <img src={icon} alt="Callout icon" />}
            <p>{children}</p>
        </div>
    );
};

Callout.propTypes = {
    type: PropTypes.oneOf(['callout', 'info', 'success', 'error']),
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
};

Callout.defaultProps = {
    type: 'callout',
    icon: null,
};

export default Callout;

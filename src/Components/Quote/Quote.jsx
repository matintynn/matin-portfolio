import React from 'react';
import './Quote.scss';
import PropTypes from 'prop-types';
import quotePattern from '../../assets/patterns/quote-pattern.svg';

const Quote = ({ quote, children, person }) => {
    return (
        <div className="quote">
            <div className="quote__container">
                <img src={quotePattern} alt="quote pattern" />
                <p>{children || quote}</p> {/* Displays children if available, otherwise uses quote */}
                {person && <div className="divider"></div>} {/* Conditionally render divider */}
                {person && <p className="person">{person}</p>} {/* Conditionally render person */}
            </div>
        </div>
    );
};

Quote.propTypes = {
    quote: PropTypes.string,
    children: PropTypes.node,
    person: PropTypes.string,
};

Quote.defaultProps = {
    quote: 'My quote or someone will go here',
    person: '',
};

export default Quote;

import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './Button.styled';

const Button = ({ grade, onClick }) => {
    return (
        <FeedbackButton type="button" data-grade={grade} onClick={onClick}>
            {grade === "good"}
            {grade === "neutral"}
            {grade === "bad"}
            {grade}
        </FeedbackButton>
    );
};
Button.propTypes = {
  grade: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
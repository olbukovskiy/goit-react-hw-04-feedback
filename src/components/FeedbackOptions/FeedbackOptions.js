import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button, Wrapper } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Button
            key={nanoid()}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {capitalizeWord(option)}
          </Button>
        );
      })}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

function capitalizeWord(word) {
  return word.split('')[0].toUpperCase() + word.slice(1);
}

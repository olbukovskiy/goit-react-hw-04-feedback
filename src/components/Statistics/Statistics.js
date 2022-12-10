import React from 'react';
import PropTypes from 'prop-types';
import { PropertyName, PropertyValue } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>
        <PropertyName>Good:</PropertyName>
        <PropertyValue>{good}</PropertyValue>
      </p>
      <p>
        <PropertyName>Neutral:</PropertyName>
        <PropertyValue>{neutral}</PropertyValue>
      </p>
      <p>
        <PropertyName>Bad:</PropertyName>
        <PropertyValue>{bad}</PropertyValue>
      </p>
      <p>
        <PropertyName>Total:</PropertyName>
        <PropertyValue> {total}</PropertyValue>
      </p>
      <p>
        <PropertyName>Positive feedback:</PropertyName>
        <PropertyValue>{positivePercentage}</PropertyValue>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

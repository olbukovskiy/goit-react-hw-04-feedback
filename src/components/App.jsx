import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateHandler = item => {
    this.setState(prevState => {
      return { [item]: prevState[item] + 1 };
    });
  };

  countTotalFeedback = keysArray => {
    return keysArray.reduce((total, item) => {
      return total + this.state[item];
    }, 0);
  };

  countPositiveFeedbackPercentage = (total = 0) => {
    if (!total) {
      return `0`;
    }

    return `${Math.floor((this.state.good / total) * 100)}%`;
  };

  render() {
    const feedbackKeysArray = Object.keys(this.state);
    const total = this.countTotalFeedback(feedbackKeysArray);
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={feedbackKeysArray}
            onLeaveFeedback={this.stateHandler}
          />
        </Section>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

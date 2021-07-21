import './App.css';
import React from 'react';
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
       state = {
        good: 0,
        neutral: 0,
        bad:0
    };

    handleFeedbackOptions = (e) => {
    const grade = e.currentTarget.dataset.grade;

    this.setState((prevState) => {
      return { [grade]: prevState[grade] + 1 };
    });
  };

    countTotalFeedback() {
    const feedbacksAmount = Object.values(this.state);

    return feedbacksAmount.reduce((acc, value) => acc + value);
  }
    
countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good * 100) / total);
  }

  render() {
       const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
      return (
          <>
            <Section title="Please leave feedback">
          <Container>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedbackOptions}
            />
          </Container>
        </Section>

        <Section title="Statistics">
          <Container>
            {totalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given"></Notification>
            )}
          </Container>
          </Section>
          </>
        );
    }
}

export default App;

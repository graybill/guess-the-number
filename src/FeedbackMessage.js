import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

class FeedbackMessage extends Component {

  render() {
    let message;
    let bsStyle = 'warning';
    let currentGuessIs = this.props.currentGuessIs;

    if (currentGuessIs === 'correct') { message = "You got it!"; bsStyle = "success" }
    if (currentGuessIs === 'low') { message = "Too low, try again." }
    if (currentGuessIs === 'high') { message = "Too high, try again." }
    return (
      <Alert bsStyle={ bsStyle }>
        { message }
      </Alert>
    )
  }
}
const mapStateToProps = state => {
  return {
    currentGuessIs: state.gameVals.currentGuessIs
  }
}
const FeedbackMessageStore = connect(
  mapStateToProps
)(FeedbackMessage);
export default FeedbackMessageStore;

import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackMessage extends Component {

  render() {
    let message;
    let bsStyle = 'bg-warning';
    let cg = this.props.currentGuessIs;

    // TODO: Add visual transition so this pops up and goes away in between guesses
    // to indicate a new guess has been received and processed

    if (!cg) {
      return null;
    }

    if (cg === 'correct') { message = "You got it!"; bsStyle = "bg-success" }
    if (cg === 'low') { message = "Too low, try again." }
    if (cg === 'high') { message = "Too high, try again." }
    return (
      <p className={ bsStyle }>
        { message }
      </p>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import GuessNumber from './GuessNumber';
import FeedbackMessage from './FeedbackMessage';

class PlayContainer extends Component {
  render() {
    console.log('numberToGuess -> ' + this.props.gameVals.numberToGuess);
    return (
      <div>
        <p>Instructions: Guess the number between {this.props.gameVals.lowerBound} and {this.props.gameVals.upperBound}</p>

        <FeedbackMessage />

        <GuessNumber />

        <Row>
          <div className="col-xs-5">Last guess: {this.props.gameVals.lastGuess}</div>
          <div className="col-xs-5">Current guess: {this.props.gameVals.currentGuess}</div>
        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameVals: state.gameVals
  }
}

const PlayContainerStore = connect(
  mapStateToProps
)(PlayContainer)

export default PlayContainerStore;

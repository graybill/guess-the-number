import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessNumber from './GuessNumber';

class PlayContainer extends Component {
  render() {
    console.log('numberToGuess -> ' + this.props.gameVals.numberToGuess);
    return (
      <div>
        <p>Instructions: Guess the number between {this.props.gameVals.lowerBound} and {this.props.gameVals.upperBound}</p>
        <div>Last guess: {this.props.gameVals.lastGuess}</div>
        <div>Current guess: {this.props.gameVals.currentGuess}</div>
        <GuessNumber />
        <div className="message">{ this.props.gameVals.gameState }</div>
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

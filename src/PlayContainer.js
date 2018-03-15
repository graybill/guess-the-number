import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessNumber from './GuessNumber';


class PlayContainer extends Component {

  render() {
    console.log('numberToGuess -> ' + this.props.gameVals.numberToGuess);
    return (
      <div>
        <div>Guess the number between {this.props.gameVals.lowerBound} and {this.props.gameVals.upperBound}</div>
        <div>Last guess: {this.props.gameVals.lastGuess}</div>
        <div>Current guess: {this.props.gameVals.currentGuess}</div>
        <GuessNumber />
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

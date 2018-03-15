import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers'

import PlayContainer from './PlayContainer';
import ConfigContainer from './ConfigContainer';

import './App.css';

// TODO:
// Ensure there's no +1 issue
// Ensure accessible from actions
// Does this belong here in this file?
const generateNumber = (upperBound=10, lowerBound=0) => {
  return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
}

// TODO: Does initialState belong here or in the reducers?
const initialState = {
  gameVals:
    {
      lowerBound: 0,
      upperBound: 10,
      currentGuess: null,
      lastGuess: null,
      numberToGuess: generateNumber()
    }
};

const store = createStore(rootReducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Play Guess the Number!</h1>
          <PlayContainer />
          <ConfigContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

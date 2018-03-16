import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Panel } from 'react-bootstrap';

import { generateNumber } from './helpers';

import PlayContainer from './PlayContainer';
import ConfigContainer from './ConfigContainer';

import './App.css';


// TODO: Does initialState belong here or in the reducers?
export const initialState = {
  gameVals:
    {
      lowerBound: 0,
      upperBound: 10,
      currentGuess: null,
      lastGuess: 'none',
      numberToGuess: generateNumber()
    }
};

const store = createStore(rootReducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Panel className="App">
          <Panel.Heading>
            Play Guess the Number!
          </Panel.Heading>
          <Panel.Body>
            <PlayContainer />
            <ConfigContainer />
          </Panel.Body>

        </Panel>
      </Provider>
    );
  }
}

export default App;

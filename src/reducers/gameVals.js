import { generateNumber } from '../helpers';
import initialState from '../App';

const gameVals = (state = [], action) => {
  switch (action.type) {

    // Start new game, optionally updating the boundaries
    case 'START_NEW_GAME':
      return Object.assign({}, initialState, {
        lowerBound: action.lowerBound,
        upperBound: action.upperBound,
        numberToGuess: generateNumber(action.upperBound, action.lowerBound)
      })

    case 'SET_LAST_GUESS':
      return Object.assign({}, state, {
        lastGuess: state.currentGuess
      })

    case 'GUESS_NUMBER':
      let guess = parseInt(action.value, 0);
      let currentGuessIs;

      if (guess === state.numberToGuess) {
        currentGuessIs = "correct";
      }
      if (guess < state.numberToGuess) {
        currentGuessIs = "low";
      }
      if (guess > state.numberToGuess) {
        currentGuessIs = "high";
      }

      return Object.assign({}, state, {
        currentGuessIs: currentGuessIs,
        currentGuess: guess
      })

    default:
      return state
  }
}
 
export default gameVals

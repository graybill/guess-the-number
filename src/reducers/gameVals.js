
const gameVals = (state = [], action) => {
  switch (action.type) {

    case 'START_NEW_GAME':
      // reset initial state with new boundaries?
      return Object.assign({}, state, {
        lowerBound: action.lowerBound,
        upperBound: action.upperBound,
        //TODO: how to access this generateNumber helper function across files
        //numberToGuess: generateNumber(action.lowerBound, action.upperBound)
      })


    case 'SET_LAST_GUESS':
      return Object.assign({}, state, {
        lastGuess: state.currentGuess
      })

    case 'GUESS_NUMBER':
      let guess = parseInt(action.value, 0);
      let gameState;

      if (guess === state.numberToGuess) {
        gameState = "correct"
      }
      if (guess < state.numberToGuess) {
        gameState = "too low"
      }
      if (guess > state.numberToGuess) {
        gameState = "too high"
      }

      return Object.assign({}, state, {
        gameState: gameState,
        currentGuess: guess
      })

    default:
      return state
  }
}
 
export default gameVals

const gameVals = (state = [], action) => {
  switch (action.type) {

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
      console.log('gameStatte = %s', gameState);
      return Object.assign({}, state, {
        gameState: gameState,
        currentGuess: guess
      })

    default:
      return state
  }
}
 
export default gameVals

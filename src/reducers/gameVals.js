const gameVals = (state = [], action) => {
  switch (action.type) {
    case 'GUESS_NUMBER':
      return Object.assign({}, state,
      {
        currentGuess: action.value
      })
    case 'SET_NUMBER_ANSWER':
        return [
          ...state,
          {
            numberAnswer: 10
          }
        ]
    default:
      return state
  }
}
 
export default gameVals

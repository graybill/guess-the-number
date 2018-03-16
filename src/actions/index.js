export const guessNumber = number => ({
  type: 'GUESS_NUMBER',
  value: number // TODO: Ensure typeof number
})

export const startNewGame = (low, high) => ({
  type: 'START_NEW_GAME',
  lowerBound: low,
  upperBound: high
})

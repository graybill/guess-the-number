export const guessNumber = number => ({
  type: 'GUESS_NUMBER',
  value: number // TODO: Ensure typeof number
})

export const setLastGuess = () => ({
  type: 'SET_LAST_GUESS'
})

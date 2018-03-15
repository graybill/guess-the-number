import React from 'react'
import { connect } from 'react-redux'
import { guessNumber, setLastGuess } from './actions'

const GuessNumber = ({ dispatch }) => {
  let input; // references the input field in the form via "ref/node/input"

  return(
    <div>
      <form
        onSubmit = {e => {
          e.preventDefault();
          // TODO: Check for empty value

          // TODO: Should these be two actions? Seems like should be contained in one func
          dispatch(setLastGuess());
          dispatch(guessNumber(input.value));
        }}
      >
        <input type="text" placeholder="guess" ref={node => input = node} />
        <button type="submit">Make a guess</button>
      </form>
    </div>
  )
}

export default connect()(GuessNumber);

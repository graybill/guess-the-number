import React from 'react'
import { connect } from 'react-redux'
import { guessNumber, setLastGuess } from './actions'

const GuessNumber = ({ dispatch }) => {
  let guessInput;

  return(
    <div>
      <form
        onSubmit = {e => {
          e.preventDefault();

          // TODO: How did we pass this check with an empty input?
          if (isNaN(guessInput.value)) {
            window.alert('please use a number for guessing');
            return;
          }

          // If number is higher than upperbound, we could alert
          // If number is lower than lowerbound, we could alert

          // NB>: Should these be two actions? Seems like should be contained in one func
          dispatch(setLastGuess());
          dispatch(guessNumber(guessInput.value));
        }}
      >
        <div>
          <label>Make a guess:</label>
          <input type="text" placeholder="guess" ref={node => guessInput = node} />
        </div>

        <button type="submit">Make a guess</button>
      </form>
    </div>
  )
}

export default connect()(GuessNumber);

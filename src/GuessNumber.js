import React from 'react'
import { connect } from 'react-redux'
import { guessNumber } from './actions'

const GuessNumber = ({ dispatch }) => {
  let input; // references the input field in the form via "ref/node/input"

  return(
    <div>Guess:
      <form
        onSubmit = {e => {
          e.preventDefault();
          console.log('submitted');
          dispatch(guessNumber(input.value));
        }}
      >
        <input type="text" placeholder="guess" ref={node => input = node} />
        <button type="submit">Make guess</button>
      </form>
    </div>
  )
}

export default connect()(GuessNumber);

import React from 'react'
import { connect } from 'react-redux'
import { guessNumber } from './actions'
import { Button } from 'react-bootstrap';

const GuessNumber = ({ dispatch }) => {
  let guessInput;

  return(
    <div>
      <form
        className="form-inline"
        onSubmit = {e => {
          e.preventDefault();

          let guess = guessInput.value;

          if (isNaN(guess) || guess.trim() === '') {
            window.alert('please use a number for guessing');
            return;
          }

          // If number is higher than upperbound, we could alert
          // If number is lower than lowerbound, we could alert

          dispatch(guessNumber(guess));

          guessInput.value = ''; // empty out input field
          guessInput.focus();

        }}
      >
        <div className="form-group col-xs-6">
          <input
            className="form-control"
            type="text"
            placeholder="guess"
            ref={node => guessInput = node}
          />
        </div>

        <Button type="submit" bsStyle="primary">Make a guess</Button>

      </form>
    </div>
  )
}

export default connect()(GuessNumber);

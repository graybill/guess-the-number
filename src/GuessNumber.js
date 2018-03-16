import React from 'react'
import { connect } from 'react-redux'
import { guessNumber, setLastGuess } from './actions'
import { FormGroup, Button } from 'react-bootstrap';

const GuessNumber = ({ dispatch }) => {
  let guessInput;

  return(
    <div>
      <form
        className="form-inline"
        onSubmit = {e => {
          e.preventDefault();

          let guess = guessInput.value;

          // TODO: How did we pass this check with an empty input?
          if (isNaN(guess)) {
            window.alert('please use a number for guessing');
            return;
          }

          // If number is higher than upperbound, we could alert
          // If number is lower than lowerbound, we could alert

          // NB>: Should these be two actions? Seems like should be contained in one func
          dispatch(setLastGuess());
          dispatch(guessNumber(guess));
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

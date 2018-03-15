import React from 'react'
import { connect } from 'react-redux'
//import { guessNumber, setLastGuess } from './actions'

const SetBoundaries = ({ dispatch }) => {
  let input; // references the input field in the form via "ref/node/input"

  return(
    <div>
      <form
        onSubmit = {e => {
          e.preventDefault();
          // TODO: Check for empty value
          //dispatch(setLastGuess());
          //dispatch(guessNumber(input.value));
        }}
      >
        <input type="text" placeholder="Lower bound"  />
        <input type="text" placeholder="Upper bound"  />
        <button type="submit">Reset</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gameVals: state.gameVals
  }
}

const SetBoundariesStore = connect(
  mapStateToProps
)(SetBoundaries)

export default SetBoundariesStore;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { startNewGame } from './actions'

//const SetBoundaries = ({ dispatch }, props) => {
class SetBoundaries extends Component {

  render() {
    let lbInput; // references the input field in the form via "ref/node/input"
    let ubInput;

    console.log(this);
    return(
      <div>
        <form
          onSubmit = {e => {
            e.preventDefault();
            // TODO: Check for empty values

            console.log('ibInput => %o', lbInput.value)

            // TODO: lower needs to be less than higher
            this.props.startNewGame(lbInput.value, ubInput.value);
          }}
        >
          <input type="text"
            placeholder="Lower bound"
            defaultValue={ this.props.gameVals.lowerBound }
            ref={node => lbInput = node}
          />

          <input type="text"
            placeholder="Upper bound"
            defaultValue={ this.props.gameVals.upperBound }
            ref={node => ubInput = node}
          />

          <button type="submit">Reset</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    gameVals: state.gameVals
  }
}

const mapDispatchToProps = dispatch => {
 return bindActionCreators({ startNewGame }, dispatch)
}

const SetBoundariesStore = connect(
  mapStateToProps, mapDispatchToProps
)(SetBoundaries)

export default SetBoundariesStore;

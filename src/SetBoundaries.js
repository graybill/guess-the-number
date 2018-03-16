import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { startNewGame } from './actions'
import { Button, ControlLabel } from 'react-bootstrap';

class SetBoundaries extends Component {

  render() {
    let lbInput;
    let ubInput;

    return(
      <form

        onSubmit = {e => {
          e.preventDefault();

          // NB> We could also check for empty; this is just some quick and dirty validation
          let lower = parseInt(lbInput.value) || 0;
          let higher = parseInt(ubInput.value) || 0;

          if (lower > higher) {
            window.alert('the lower number needs to be lower than the higher number');
            return;
          }
          if (lower === higher) {
            window.alert('where is the fun in that?');
            return;
          }

          this.props.startNewGame(lower, higher);
        }}
      >
        <div className="form-group col-xs-6">
          <ControlLabel>Lower bound:</ControlLabel>
          <input type="text"
            className="form-control"
            placeholder="Lower bound"
            defaultValue={ this.props.gameVals.lowerBound }
            ref={node => lbInput = node}
          />
        </div>

        <div className="form-group col-xs-6">
          <ControlLabel>Upper bound:</ControlLabel>
          <input type="text"
            className="form-control"
            placeholder="Upper bound"
            defaultValue={ this.props.gameVals.upperBound }
            ref={node => ubInput = node}
          />
        </div>

        <div className="form-group">
          <Button type="submit">Start new game</Button>
        </div>

      </form>
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

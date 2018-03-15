import React, { Component } from 'react';
import { connect } from 'react-redux';


class ConfigContainer extends Component {
  render() {
    return (
      <div>
        <p>Config Container</p>
        <input type="text" placeholder="Lower bound" defaultValue={ this.props.gameVals.lowerBound } />
        <input type="text" placeholder="Upper bound" defaultValue={ this.props.gameVals.upperBound } />
        <button>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameVals: state.gameVals
  }
}

const ConfigContainerStore = connect(
  mapStateToProps
)(ConfigContainer)

export default ConfigContainerStore;

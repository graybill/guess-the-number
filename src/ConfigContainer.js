import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetBoundaries from './SetBoundaries';

class ConfigContainer extends Component {
  render() {
    return (
      <div>
        <hr />
        <SetBoundaries />
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

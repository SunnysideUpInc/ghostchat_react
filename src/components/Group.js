import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

class Group extends Component {

  render() {
    return (
      <div className="Group">
        Group
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

const ConnectedGroup = connect(mapStateToProps, mapDispatchToProps)(Group)

export default ConnectedGroup

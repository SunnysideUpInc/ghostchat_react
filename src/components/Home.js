import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        Home
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

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome

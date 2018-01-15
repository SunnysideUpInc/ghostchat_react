import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { push } from 'react-router-redux'
import RouteHandler from './RouteHandler'

class App extends Component {

  render() {
    return (
      <div className="App">
        <RouteHandler location={this.props.location} />
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

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Group from './components/Group'

export default class RouteHandler extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  render() {
    return (
      <div className='RouteHandler'>
        <Switch>
          <Route exact path='/:title' component={Group} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

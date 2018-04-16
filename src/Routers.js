import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Couter from './pages/Couter';
import Test from './pages/Test';

class Routers extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/couter" component={Couter}/>
          <Route exact path="/test" component={Test}/>
        </Switch>
      </div>
    );
  }
}

export default Routers

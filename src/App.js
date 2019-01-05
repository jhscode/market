import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Signin from './components/Signin';
import PostAd from './components/PostAd';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/postad" component={PostAd} />
          <Route path="/signin" component={Signin} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import PostAd from './PostAd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;

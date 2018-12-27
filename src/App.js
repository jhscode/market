import React, { Component, Fragment } from 'react';
import PostAd from './PostAd';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <button>Sign Up</button>
        <button>Login</button>
        <button>Post Ad</button>
      </Fragment>
    );
  }
}

export default App;

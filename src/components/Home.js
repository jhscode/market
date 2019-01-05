import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Header from './Header';
import ListAd from './ListAd';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <ListAd></ListAd>
      </Fragment>
    );
  }
}

export default Home;
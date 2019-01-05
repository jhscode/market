import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Header = (props) => {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Button> Sign Up </Button>
          <Button> Log Up </Button>
          <Button> Post Ad </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;
import React, { Fragment } from 'react';

const Header = (props) => {
  return (
    <Fragment>
        <h1 classNamme="headerTitle">Market</h1>
        <button className="signup">Sign Up</button>
        <button className="login">Login</button>
        <button className="ad">Post Ad</button>
    </Fragment>
  );
}

export default Header;
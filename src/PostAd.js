import React, { Component, Fragment } from 'react';

class PostAd extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    return (
      <Fragment>
        <form onSubmit={ this.handleSubmit }>
          <input name="title" type="text" placeholder="Title" />
          <input name="email" type="text" placeholder="Email" />
          <input name="desc" type="text" placeholder="Description" />
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default PostAd;
import '../assets/base.scss';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    )
  }
});

export default Hello;

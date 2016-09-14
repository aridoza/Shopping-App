import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const App = React.createClass({
  render() {

    let navStyle = {
      backgroundColor: 'white',
      borderTop: '2px solid #B8860B',
      color: '#B8860B',
      textDecoration: 'none',
      zIndex: '1'
    }

    let pageStyle = {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      background: 'white'
    }

    return(
      <div className="app-container" style={pageStyle}>
        <h1>Hello from React!</h1>
        <ul style={navStyle}>
          <Nav bsStyle="pills">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
          </Nav>
        </ul>
      </div>
    )
  }
});

export default App;

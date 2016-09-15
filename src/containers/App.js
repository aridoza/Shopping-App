import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';

import Footer from '../components/Footer';

const App = React.createClass({
  render() {

    let navStyle = {
      backgroundColor: 'white',
      borderTop: '2px solid #B8860B',
      borderBottom: '2px solid #B8806B',
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
        <ul style={navStyle}>
          <Nav bsStyle="pills">
            <li>Home</li>
            <li><Link to="/about">About</Link></li>
            <li>Contact</li>
            <li>Products</li>
          </Nav>
        </ul>
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

export default App;

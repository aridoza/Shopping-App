import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import helpers from '../utils/ajaxHelpers';

import Footer from '../components/Footer';

const App = React.createClass({

  getInitialState: function() {
    return {
      axiosReturn: [],
      products: [],
      childVisible: true
    };
  },

  componentWillMount: function() {
    helpers.getProducts()
    .then(function(response){
      this.setState({
        axiosReturn: response.data,
        products: response.data
      });
    }.bind(this))
  },

  componentDidMount: function() {
    helpers.getProducts()
    .then(function(response){
      this.setState({
        axiosReturn: response.data,
        products: response.data
      });
    }.bind(this))
  },

  getAllProductsCall: function() {
    console.log("Get all products React component");

    helpers.getProducts()
    .then(function(response){
      console.log("response.data frontend", response.data);
      this.setState({
        axiosReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.warn("Error");
      return err;
    })
  },

  isClicked: function() {
    const clicky = false;
    if (this.Nav.clicked == true) {
      return
    }
  },

  onClick: function() {
    this.setState({
      childVisible: false
    });
  },

  homeClick: function() {
      this.setState({
        childVisible: true
      });
  },

  getAppropriateFormComponent: function() {
    switch (this.state.axiosReturn) {
      case 'products-page':
      console.log('products-page case');
      return(
        <ProductDetail homeClick={this.homeClick} products={this.state.axiosReturn} />
      );
      break;

      case 'about-page':
      console.log('about-page case');
      return(
        <About />
      );
      break;

      default:
      return <div>
        {
          this.state.childVisible
          ? <Products products={this.state.axiosReturn} />
          : null
        }
      </div>
    }
  },


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
            <li onClick={this.homeClick} childVisible={true}><Link to="/">Home</Link></li>
            <li><Link to="/about" onClick={this.onClick}>About</Link></li>
            <li><Link to="/contact" onClick={this.onClick}>Contact</Link></li>
            <li><Link to="/pdetail" onClick={this.onClick} products={this.state.axiosReturn}>Products</Link></li>
          </Nav>
        </ul>
        {this.props.children}
        {this.getAppropriateFormComponent()}
        <Footer />
      </div>
    )
  }
});

export default App;

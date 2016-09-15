import React from 'react';
import { Link } from 'react-router';

const Footer = React.createClass({
  render() {

    let footerStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      listStyleType: 'none',
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '100%',
      fontFamily: 'Roboto Slab',
      backgroundColor: 'white',
      borderTop: '2px solid #B8860B',
      borderBottom: '2px solid #B8806B',
      color: 'black'
    }

    return(
      <div>
        <ul style={footerStyle}>
          <li><a href="http://www.google.com"><img width="35px" height="35px" src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-128.png"/></a></li>
          <li><a href="http://www.instagram.com"><img width="35px" height="35px" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/instagram_icon-128.png"/></a></li>
          <li><a href="http://www.facebook.com"><img width="35px" height="35px" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/facebook_icon-128.png"/></a></li>
          <li><a href="http://www.twitter.com"><img width="35px" height="35px" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Twitter_icon-128.png"/></a></li>
        </ul>
      </div>
    )
  }
})


export default Footer;

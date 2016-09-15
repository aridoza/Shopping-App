import React from 'react';

const About = React.createClass({
  render() {

    let aboutStyle = {
      fontFamily: 'Roboto Slab',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center'
    }

    let aboutImgStyle = {
      display: 'block',
      width: '90%',
      height: '90%'
    }

    return(
      <div className="about-page" style={aboutStyle}>
        <h3>About Us</h3>
        <img src="http://14871-presscdn-0-39.pagely.netdna-cdn.com/wp-content/uploads/2014/11/about-us.jpg" style={aboutImgStyle}/>
      </div>
    )
  }
});

export default About;

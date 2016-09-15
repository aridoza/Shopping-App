import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

function Contact() {

  let contactStyle = {
    fontFamily: 'Roboto Slab',
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '88vh',
    margin: '10px'
  }

  let listStyle = {
    listStyleType: 'none'
  }

  return(
    <div>
      <Grid style={contactStyle}>
        <Row className="show-grid">
          <Col xs={6} mdpull={6}><img src="https://media.npr.org/assets/img/2016/08/18/contacts-1895842f7342fa43e99c7d99bff8d20fbb6c6d5e.jpg?s=4" /></Col>
          <Col xs={6} mdpush={4}>
            <ul style={listStyle}>
              <li><a href="http://www.facebook.com">Facebook</a></li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Customer Service Email</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}


export default Contact;

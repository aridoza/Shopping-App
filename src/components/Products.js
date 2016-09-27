import React from 'react';
import { Button, Image, Shape, Shapes, Grid, Row, Col, circle, OverlayTrigger, Overlay, Tooltip, ButtonToolbar, Popover, Carousel } from 'react-bootstrap';

const Products = React.createClass({
  render() {
    console.log(this.props.products);
    return(
      <div>
        <h3>Latest Arrivals</h3>
        <ul>

        </ul>
      </div>
    );
  }
})

export default Products;

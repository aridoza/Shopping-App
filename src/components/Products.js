import React from 'react';
import { Button, Image, Shape, Shapes, Grid, Row, Col, circle, OverlayTrigger, Overlay, Tooltip, ButtonToolbar, Popover, Carousel } from 'react-bootstrap';

const Products = React.createClass({
  render() {

    let shirtGraphic = {
  alignContent: 'stretch'
}

let arrivalText = {
  fontFamily: 'Roboto Slab',
  borderBottom: '2px solid #B8860B',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '3 0 3 0 solid grey',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
  zIndex: '1'
}

let descriptorList = {
  height: '200px',
  width: '700px',
  margin: '0 auto',
  textAlign: 'left',
  color: 'black',
  backgroundColor: '#F0FFFF',
  backdropStyle: 'hidden'
}

const descriptor = (
  <Tooltip id="tooltip">
    <ul style={descriptorList}>
      <li>Price:</li>
      <li>Description: Worldlets culture with pretty stories for which there's little good evidence Drake Equation. Decipherment with pretty stories for which there's little good evidence. Galaxies, decipherment science, rings of Uranus billions upon billions. Drake Equation how far away a still more glorious dawn awaits a mote of dust suspended in a sunbeam, of brilliant syntheses rich in heavy atoms, cosmic ocean extraordinary claims require extraordinary evidence galaxies white dwarf! Trillion. A very small stage in a vast cosmic arena. Brain is the seed of intelligence not a sunrise but a galaxyrise extraplanetary, not a sunrise but a galaxyrise. </li>
    </ul>
  </Tooltip>
);

let caroImgStyle = {
  width: '900px',
  height: '810px'
}

let caroStyle = {
  zIndex: '0.5',
  backgroundColor: 'white'
}

let productNameStyle = {
  color: '#B8860B'
}

const product1 = (
  this.props.products[0].imageMain
);
const product2 = (
  this.props.products[1].imageMain
);
const product3 = (
  this.props.products[2].imageMain
);
const product4 = (
  this.props.products[3].imageMain
);
const product5 = (
  this.props.products[4].imageMain
);
    return(
      <div>
        <h3 style={arrivalText}>Latest Arrivals</h3>
                <Carousel style={caroStyle}>
                  <Carousel.Item>
                    <Image style={caroImgStyle} alt="900x500" src={product1} />
                    <Carousel.Caption>
                      <h3 style={productNameStyle}>{this.props.products[0].name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image style={caroImgStyle} alt="900x500" src={product2} />
                    <Carousel.Caption>
                      <h3 style={productNameStyle}>{this.props.products[1].name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image style={caroImgStyle} alt="900x500" src={product3} />
                    <Carousel.Caption>
                      <h3 style={productNameStyle}>{this.props.products[2].name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image style={caroImgStyle} alt="900x500" src={product4} />
                    <Carousel.Caption>
                      <h3 style={productNameStyle}>{this.props.products[3].name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image style={caroImgStyle} alt="900x500" src={product5} />
                    <Carousel.Caption>
                      <h3 style={productNameStyle}>{this.props.products[4].name}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
      </div>
    );
  }
});

export default Products;

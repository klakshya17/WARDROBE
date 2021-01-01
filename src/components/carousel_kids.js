import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Wall_Carousel(props){ 
return(<Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1526834527924-83a042ea7711?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Explore the store!</h3>
      <p>Discover the widest collection of wardrobe collections</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Discover Men's Collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1541580621-cb65cc53084b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Discover Women's Collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
)};
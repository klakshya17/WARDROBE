import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Wall_Carousel(props){ 
return(<Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
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
      src="https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
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
      src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80om/2016/10/201609-omag-4-things-in-every-womans-closet-promo-r2-949x534.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Discover Women's Collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
)};
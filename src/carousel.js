import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Wall_Carousel(){ 
return(<Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://envato-shoebox-0.imgix.net/16f6/4940-b57e-4c90-8e4f-23d632c46f11/847p-1.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=12cc48588b03960f8b81b4c57dacc98d"
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
      src="https://cdn.vox-cdn.com/thumbor/NAIBeN0yZTu_JsdblTjszWLi0eA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19490489/closets_x_1.jpg"
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
      src="https://static.oprah.com/2016/10/201609-omag-4-things-in-every-womans-closet-promo-r2-949x534.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Discover Women's Collection</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
)};
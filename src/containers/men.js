import React from 'react'
import './home.css'
import {tshirts} from '../components/t-shirts.js'
import Cardlist from '../components/cardlist'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../components/carousel_men.js'

const Men = () => {
  return (
    <div>
     <Carousel  /> 
     <br></br>
    < Cardlist tshirt={tshirts}/>
     <br></br>    
      </div>
  );
}

export default Men;

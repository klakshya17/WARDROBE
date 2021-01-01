import React from 'react'
import './home.css'
import {tshirts} from '../components/t-shirts.js'
import Cardlist from '../components/cardlist'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from '../components/carousel.js'
import SecCard from '../components/sec_card_list.js'
import { secdata } from '../components/sec_card_data.js'
const Home = () => {
  return (
    <div>
     <Carousel  /> 
     <br></br>
     <SecCard secdata={secdata}/>  
     < Cardlist tshirt={tshirts}/>
     <br></br>    
      </div>
  );
}

export default Home;

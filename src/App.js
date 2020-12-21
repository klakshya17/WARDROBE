import React from 'react'
import Navbar from './navbar.js'
import './App.css'
import {tshirts} from './t-shirts.js'
import Cardlist from './cardlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './carousel.js'
import Footer from './footer.js'
import MenSec from './sec_card_list.js'
import { secdata } from './sec_card_data.js'
const App = () => {
  return (
    <div>
      < Navbar />
      <Carousel  /> 
     <br></br>
     <MenSec secdata={secdata}/>  
     < Cardlist tshirt={tshirts}/>
     <br></br>
      <Footer/>
     
      </div>
  );
}

export default App;

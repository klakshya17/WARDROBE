import React from 'react'
import Navbar from './navbar.js'
import './App.css'
import {tshirts} from './t-shirts.js'
import Cardlist from './cardlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './carousel.js'
const App = () => {
  return (
    <div>
      < Navbar />
      <Carousel /> 
     <br></br>  
     < Cardlist tshirt={tshirts}/>
      </div>
  );
}

export default App;

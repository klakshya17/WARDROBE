import React from 'react'
import Navbar from './navbar.js'
import './App.css'
import {tshirts} from './t-shirts.js'
import Cardlist from './cardlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselList from './carousel_list.js'
import Footer from './footer.js'
import MenSec from './sec_card_list.js'
import { secdata } from './sec_card_data.js'
import {carList} from './data_carousel_list_men.js'
const App = () => {
  return (
    <div>
      < Navbar />
      <CarouselList  carList={carList}/> 
     <br></br>
     <MenSec secdata={secdata}/>  
     < Cardlist tshirt={tshirts}/>
     <br></br>
      <Footer/>
     
      </div>
  );
}

export default App;

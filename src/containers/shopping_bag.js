import React from 'react';
import Cardlist from '../components/cardlist'
import {shopping_bag} from '../components/shopping_bag'

export default function MediaCard(props) {
  

  return (
    <div>
   <br></br>
< Cardlist tshirt={shopping_bag}/>
<br></br>
<a href='/checkout'><button>Checkout</button></a>
<br></br>
</div>
  );
}
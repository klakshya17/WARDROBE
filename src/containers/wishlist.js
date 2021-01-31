import React from 'react';
import Cardlist from '../components/cardlist'
import {wishlist} from '../components/wishlist'

export default function MediaCard(props) {
  

  return (
   <div>
     <br></br>
< Cardlist tshirt={wishlist}/>
<br></br>
</div>
  );
}
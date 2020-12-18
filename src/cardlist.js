import React from 'react'
import Card from './card'
import { tshirts } from './t-shirts';
import Grid from '@material-ui/core/Grid';

const Cardlist=({tshirt})=>
{
	const card_array =tshirt.map((user,i)=>
    {return(<Card id={tshirt[i].id} price={tshirt[i].price} brand={tshirt[i].brand} for={tshirt[i].for} color={tshirt[i].color} material={tshirts[i].material} />);}
    )
	return(
    <div>
        <Grid container justify='center' spacing={5} >
       {card_array};
       </Grid>
    </div>
    );
}
export default Cardlist;
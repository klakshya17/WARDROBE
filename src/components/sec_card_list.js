import React from 'react'
import SecCard from './sec_card'
import Grid from '@material-ui/core/Grid'

const Cardlist=({secdata})=>
{
	const card_array =secdata.map((user,i)=>
    {return(<SecCard title={secdata[i].title} description={secdata[i].description} link={secdata[i].link} />);}
    )
	return(
    <div >
        <Grid container justify='center' spacing={5} >
       {card_array};
       </Grid>
    </div>
    );
}
export default Cardlist;
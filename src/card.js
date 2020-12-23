import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    // <Grid container justify='center' spacing={5}>
    
        <Grid item justify='center'  xs={0}>
         <div className='grow '>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10360837/2020/2/10/edcecaa0-cec8-48cf-9c2f-47e35d077f7e1581326307871-HM-Men-Black-Solid-Cotton-T-shirt-Regular-Fit-77515813263072-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
            {props.brand} {props.color} {props.material} {props.id} 
            
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            
           Rs. {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Wishlist
        </Button>
        <Button size="small" color="primary">
          Add to bag
        </Button>
      </CardActions>
    </Card>
    </div>
    
    </Grid> 
//  </Grid>
   
  );
}
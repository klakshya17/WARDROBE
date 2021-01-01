import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 250,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    
    <Grid item justify='center'  xs={0}>
    <div className=' tc' >
    <Card className={classes.root}>
      
      <CardActionArea>
        <div className='tc grow'>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="500"
          width="600"
          image="https://envato-shoebox-0.imgix.net/16f6/4940-b57e-4c90-8e4f-23d632c46f11/847p-1.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=12cc48588b03960f8b81b4c57dacc98d"
          title="Contemplative Reptile"
        />
        </div>
        <div className='tc grow'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        </div>
      </CardActionArea>
      
      
    </Card>
    </div>
   </Grid>
   
  );
}

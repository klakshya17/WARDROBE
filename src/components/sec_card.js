import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

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
      <Link to={props.link}>
    <div className=' tc' >
    <Card className={classes.root}>
      
      <CardActionArea>
        <div className='tc grow'>
      <CardMedia
          component="img"
          height="500"
          width="600"
          image= {props.src}
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
    </div></Link>
   </Grid>
   
  );
}

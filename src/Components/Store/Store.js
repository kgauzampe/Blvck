import React from 'react';
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Store = () => {
    const classes = useStyles();
    return (
        <div className='Store-head'>
            <Navbar/>
            <div className='Store-con'>
                <Typography>Welcome to the Market</Typography>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               this will hold a basic product description, that will lay out all specs od the certain product
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Purchase
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
            </div>

        </div>
    )
}

export default Store



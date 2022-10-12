import React from 'react';
import { Container,Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Navbar from '../NavBar/Navbar';
import './Auction.css'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const Auction = () => {
    const classes = useStyles();

    return(
        <div className='AuctContainer'>
            <Navbar/>
            <Container>
                <div className='cards'>
                    <Typography variant='h3' className='AuctTypo'>Place your Bid</Typography>
                   
                </div>
            </Container>
        </div>
    )

}
export default Auction
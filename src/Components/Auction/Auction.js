import React from 'react';
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image1 from "../../Img/1.jpg";
import image2 from "../../Img/2.jpg";
import image3 from "../../Img/3.jpg";
import image4 from "../../Img/4.jpg";
import image5 from "../../Img/5.jpg";
import image6 from "../../Img/6.jpg";
import image7 from "../../Img/7.jpg";
import image8 from "../../Img/8.jpg";
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
                    <div className='productList'>
                    <div className='list1'>
                    <div className='item1'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image1}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               project description and the current bid price
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
                    <div className='item2'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image2}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                    <div className='item3'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image3}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                    <div className='item4'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image4}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                 <div className='list2'>
                 <div className='item1'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image5}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                    <div className='item2'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image6}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                    <div className='item3'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image7}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                    <div className='item4'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={image8}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Product Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                project description and the current bid price
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
                
                </div>
                </div>
            </Container>
        </div>
    )

}
export default Auction
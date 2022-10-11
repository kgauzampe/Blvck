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
import './Store.css'

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
                <Typography fontStyle="oblique" fontWeight="fontWeightBold" variant="h3" className="storeType">Welcome to the Market</Typography>

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
                
                </div>
                   
            </div>

        </div>
    )
}

export default Store



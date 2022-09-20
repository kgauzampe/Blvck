import React from "react";
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/NavBar";
import image1 from "../../Img/1.jpg";
import image2 from "../../Img/2.jpg";
import image3 from "../../Img/3.jpg";
import image4 from "../../Img/4.jpg";
import image5 from "../../Img/5.jpg";
import image6 from "../../Img/6.jpg";
import image7 from "../../Img/7.jpg";
import image8 from "../../Img/8.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import './Home.css';
const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 },
    { url: image8 },
  ]

const Home = () => {
    return(
        <div className="home-Container">
            <Navbar/>
            <Container>
                <div className="header">
                    <Typography variant="h3" className="head1">The</Typography>
                    <Typography variant="h3" className="head2">BLVCK</Typography>
                    <Typography variant="h3" className="head1">market</Typography>
                </div>
           

            <div className="home-grid">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" className="home-typo">
                            You do not need to be a major store inorder to have major reach
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <SimpleImageSlider
                            width={496}
                            height={504}
                            className="slider"
                            images={images}
                            showBullets={false}
                            autoPlay={true}
                            showNavs={false}
                />  
                    </Grid>
                </Grid>

            </div>

            </Container>
        </div>
        
    )
}
export default Home
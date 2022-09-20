import React from "react";
import { Container,Typography, Button } from '@material-ui/core';
import Navbar from "../NavBar/NavBar";


const Home = () => {
    return(
        <div className="home-Container">
            <Navbar/>
            <Container>
            <Typography variant="h3">Buy and Sell Goods</Typography>

            </Container>
        </div>
        
    )
}
export default Home
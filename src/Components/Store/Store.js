import React from 'react';
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";



const Store = () => {

    return (
        <div className='Store-head'>
            <Navbar/>
            <div className='Store-con'>
                <Typography>Welcome to the Market</Typography>
            </div>

        </div>
    )
}
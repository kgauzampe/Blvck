import React from 'react';
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";



const Login = () => {

    return(
        <div className='login-con'>
            <Navbar/>
            <Container>
                <div className='login-content'>
                    <Typography>Welcome Please Sign In</Typography>
                </div>
            </Container>

        </div>
    )

}

export default Login
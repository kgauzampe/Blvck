import React from 'react';
import { Container,Typography, Button, Grid } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";



const Register = () => {

    return(
        <div className='login-con'>
            <Navbar/>
            <Container>
                <div className='login-content'>
                    <Typography>Fill in the form to Register</Typography>
                </div>
            </Container>

        </div>
    )

}

export default Register
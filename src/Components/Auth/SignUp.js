import React from 'react';
import { Container,Typography, Button, Grid, TextField } from '@material-ui/core';
import Navbar from "../NavBar/Navbar";
import image1 from "../../Img/1.jpg";
import './Login.css'



const Register = () => {

    return(
        <div className='login-con'>
            <Navbar/>
            <Container>
                <div className='login-content'>
                    <Typography variant='h2'>Fill in the form to Register</Typography>
                    <form className="RegForm" noValidate autoComplete="off">
                        <div className='formFields'>
                            <div>
                                <TextField 
                                    id="standard-basic" 
                                    label="Name" 
                                />
                            </div>
                            <div>
                                <TextField  
                                    id="standard-basic"
                                    label="Surname" 
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="standard-basic" 
                                    label="Email" 
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="standard-basic"
                                    type="password" 
                                    label="Password" 
                                />
                            </div>
                            <div>
                                <TextField 
                                    id="standard-basic"
                                    type="password" 
                                    label="Confirm Password" 
                                />
                            </div>        
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )

}

export default Register
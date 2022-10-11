import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Button } from '@material-ui/core';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        cursor: 'pointer'
    };

    window.addEventListener('scroll', changeColor)

    const logout = async () => {
        console.log("POO0")
    
        navigate('/login')
    }

    return (
 
        <div className={color ? 'header header-bg' : 'navheader'}>
            <ul style={linkStyle} className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/Post'  >Blog</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/Store'>Store</Link>
                </li>
                <li>
                    <Link to='/Store'>Auction</Link>
                </li>       
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: '#2d9ca2' }} />) : (<FaBars size={25} style={{ color: '#2d9ca2' }} />)}

            </div>
        </div>
    )
}

export default Navbar
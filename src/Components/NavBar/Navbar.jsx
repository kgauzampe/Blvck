import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Button } from '@material-ui/core';
import './Navbar.css';


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",

};


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
        // <div className='nv'></div>
        <div className={color ? 'header header-bg' : 'navheader'}>
            {/* <div className='nav-logo'><Link to='/'><img src={logo} alt="Logo" width='230px' height='auto' /></Link></div> */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/Post'  >Blog</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                 {/* <li>
                    {!supabase.auth.user() ? <Link to='/login' style={linkStyle}>Sign In</Link> : <a onClick={() => logout()} style={linkStyle}>Sign Out</a>}
                </li>
                 */}
               
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: '#2d9ca2' }} />) : (<FaBars size={25} style={{ color: '#2d9ca2' }} />)}

            </div>
            {/* disableRipple 
        {!supabase.auth.user && } */}
        </div>
    )
}

export default Navbar
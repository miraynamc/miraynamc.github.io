import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components"
import { Typography} from '@material-ui/core';
import Logo from './logo';


const Linkcont = styled(Link)`
    background-color: transparent ;
    text-align: center;
    padding: 50 px;
    background-image: '';
    color: ${props => props.theme.tagLineColor};
`

function Navbar(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <CgSun size={30} color='black' className='nav-link'/> : < HiMoon size={30} color='white' className='nav-link'/>;
    return (
        <Typography className='navbar-container'>
            <Linkcont to='/' className='nav-link' ><Logo theme={props.theme}/></Linkcont>
            <Linkcont to='/resume' className='nav-link'>
                Skills
            </Linkcont>
            <Linkcont to='/contact' className='nav-link' >
                Contact Me
            </Linkcont>
            <div onClick={changeTheme} style={{ position: 'sticky' }}>
                {icon}
            </div>
            
        </Typography>

    )
}

export default Navbar;
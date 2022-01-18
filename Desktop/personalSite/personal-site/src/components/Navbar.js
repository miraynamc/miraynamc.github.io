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
`

function Navbar(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <CgSun size={30} color='black' /> : < HiMoon size={30} color='white'  />;
    return (
        <Typography className='navbar-container'>
            <a href='/' style={{textDecoration: 'none'}}><Logo/></a>
            <Linkcont to='/resume' style={{ textDecoration: 'none'}}>
                Skills
            </Linkcont>
            <Linkcont to='/contact' style={{ textDecoration: 'none'}}>
                Contact Me
            </Linkcont>
            <div onClick={changeTheme} style={{ position: 'sticky' }}>
                {icon}
            </div>
        </Typography>

    )
}

export default Navbar;
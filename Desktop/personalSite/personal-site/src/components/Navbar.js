import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components"
import { Page } from "../pages/Styled"
import { Button, Typography, Grid } from '@material-ui/core';


const Linkcont = styled(Link)`
    background-color: transparent ;
    text-align: center;
    padding: 50 px;
    background-image: '';
`

const NavContents = styled.nav`
    font-size: 20px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    align:center;
    justify-content: space-between;`;

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
        <Typography style={{ marginRight: 100, marginLeft: 100, justifyContent: 'space-between', display: 'flex', paddingLeft:150, paddingRight:150, alignItems: 'center' }}>
            <div onClick={changeTheme} style={{ position: 'sticky' }}>
                {icon}
            </div>
            <Linkcont to='/' style={{ textDecoration: 'none'}}>
                Home
            </Linkcont>
            <Linkcont to='/resume' style={{ textDecoration: 'none'}}>
                Skills
            </Linkcont>
            <Linkcont to='/contact' style={{ textDecoration: 'none'}}>
                Contact Me
            </Linkcont>
        </Typography>
    )
}

export default Navbar;
import React from 'react';
import '../components/components.css'
import { TagLine, Title, Container } from "./Styled"
import styled from 'styled-components';
import Slider from '../components/projectslider';

const Aboutme = styled.div`
    font-size: 10px;
    padding:5px;
    color: ${props => props.theme.tagLineColor};
    justify-content:center;
    width: 300px;
`;

function Skills(props) {
    return (
        <Container>
            <Title>About Me</Title>
            <div style={{ display: 'flex' }}>

                <div style={{ justifyContent: 'center', padding: 30, marginTop: 20, whiteSpace: 'pre-line' }}>
                         Hello! My name is Mirayna Mckinney. I am in my 3rd and final year in my pursuit of a Bachelor's in Linguistics and Computer Science Major from UCLA.
                    I have always been fascinated with communication, the behind-the-sceens of computers and programs, and the combination of the two.
                    {"\n"}
                         When it comes to Computer Science, I am most interested in
                    web and app development and NLPs, but I am open to trying my hand in all fields.
                    {"\n"}
                         I am experienced with Node.js, React.js, Flutter, Git, C++, Python,
                    Java and more (check out my Skills page).

                    I spend my free time working on applications I've had ideas for or other projects. Outside the world of computers, I love running, surfing, playing soccer and playing guitar.
                </div>
            </div>

            <div style={{ justifyContent: 'center' }}>
                <Title>Projects</Title>
                <TagLine>Check Out Some of the Projects I've Worked on!</TagLine>
                <div style={{ padding: 30 }}>
                    <Slider theme={props.theme} />
                </div>
            </div>
        </Container>
    )
}

export default Skills
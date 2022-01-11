import { Component } from 'react';
import Skillscloud from '../components/wordcloud';
import {Title} from './Styled';
import styled from 'styled-components';

const Skilldiv = styled.div`
    background-color: ${props => props.theme.pageBackground};
    padding: 20px;
`

class Resume extends Component {
    render (){
    return (
        <div>
        <Title>Skills</Title>
        <Skilldiv>
            <Skillscloud/>
        </Skilldiv>
        </div>
    );
    }
}

export default Resume;
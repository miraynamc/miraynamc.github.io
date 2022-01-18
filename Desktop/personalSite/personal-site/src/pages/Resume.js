import { Component } from 'react';
import Skillscloud from '../components/wordcloud';
import { TagLine, Title } from './Styled';
import styled from 'styled-components';
import Slider from '../components/projectslider';
import { BiDownArrow } from 'react-icons/bi';


class Resume extends Component {
    render() {
        const scroll = () => {
            document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
            console.log('called')
        }
        return (
            <div className="pages" id='scroller'>
                <div>
                    <Title>Skills</Title>
                    <div style={{width: '50%', height: '50%', justifyContent:'center', alignItems:'center'}}>
                    <Skillscloud/>
                    </div>
                        <h6 >Check out some of my projects</h6>
                        <BiDownArrow onClick={scroll} />
                </div>
                <div style={{ justifyContent: 'center' }}>
                    <Title>Projects</Title>
                    <TagLine>Check Out Some of the Projects I've Worked on!</TagLine>
                    <div >
                        <Slider theme={this.props.theme} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
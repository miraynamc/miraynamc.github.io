import { BiDownArrow } from 'react-icons/bi';
import React, { useRef } from 'react';
import '../components/components.css';
import { TagLine, Title } from "./Styled";
import { useRive } from 'rive-react';
import Typing from './typing.riv';
import { Link } from 'react-router-dom';
import Skills from './Skills';


function Home(props) {

    const { rive, RiveComponent } = useRive({
        src: Typing,
        animations: "Type",
        autoplay: true
    });
    const scroll = () => {
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
        console.log('called')
    }

    return (
        <div className="pages" id='scroller'>
            <div>
                <TagLine>Hello! My name is</TagLine>
                <Title>Mirayna Mckinney</Title>
                <TagLine>UCLA Linguistics and Computer Science</TagLine>
                <RiveComponent src={Typing} animations="Type" style={{ height: '50%', backgroundColor: 'transparent', margin: 0, justifyContent: 'center' }} />
                <div>
                    <h6 >Learn More About Me</h6>
                    <BiDownArrow onClick={scroll} />
                </div>
            </div>
            <div>
                <Skills />
            </div>
        </div>
    )
}


export default Home;
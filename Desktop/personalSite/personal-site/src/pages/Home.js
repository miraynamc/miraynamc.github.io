import { BiDownArrow } from 'react-icons/bi';
import React from 'react';
import '../components/components.css';
import { Container, TagLine, Title, Links} from "./Styled";
import { useRive} from 'rive-react';
import Typing from './typing.riv';
import { Link } from 'react-router-dom';


function Home(props) {

    const STATE_MACHINE = "State Machine 1";
    const INPUT_NAME = "Type"

    const {rive, RiveComponent} = useRive({
        src: Typing,
        animations: "Type",
        autoplay: true
    });

    return (
        <div style={{ justifyContent:'center'}}>
            <TagLine>Hello! My name is</TagLine>
            <Title>Mirayna Mckinney</Title>
            <TagLine>UCLA Linguistics and Computer Science</TagLine>
            <RiveComponent src={Typing} animations="Type" style={{width:300, height:300, backgroundColor: 'transparent', margin: 0, justifyContent: 'center'}}/>
            <Container>
            <Link to='/skills' style={{textDecoration: 'none'}}>
                <h6 >Learn More About Me</h6>
                {<BiDownArrow style={{justifyItems:'center'}}/>}
            </Link>
            </Container>
        </div>
    )
}


export default Home;
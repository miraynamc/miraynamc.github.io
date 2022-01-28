import { BiDownArrow } from 'react-icons/bi';
import React from 'react';
import '../components/components.css';
import { TagLine, Title} from "./Styled";
import Skills from './Skills';
import './Home.css';
import profile from '../assets/profile.png'


function Home(props) {

    const scroll = () => {
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
        console.log('called')
    }
    return (
        <div className="pages" id='scroller'>
            <div className='page'>

                <div style={{display:'flex', height: '100vh'}}>
                    <div className='leftmain'>
                        <div className='profileContainer' > <img src={profile} style={{  height: '50vw', padding: '10vw', float:'right', paddingBottom: 100 }}/> </div>
                    </div>
                    <div className='rightmain'>
                    <Title style={{marginTop: '30vh'}}>Mirayna Mckinney</Title>
                <TagLine style={{fontSize:10}}>UCLA Linguistics and Computer Science</TagLine>
                    </div>
                </div>

                <div className='bounce' style={{textAlign: 'center', position: 'absolute', top:'90%', width: '100vw'}}>
                    <TagLine style={{fontSize:10}}>Learn More About Me</TagLine>
                    <BiDownArrow onClick= {scroll} color={props.theme.opposite}/>
                </div>
            </div>
            <div className='page'>
                <Skills />
            </div>
        </div>
    )
}


export default Home;
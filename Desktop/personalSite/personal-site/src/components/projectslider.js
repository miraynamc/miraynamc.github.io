import React, {useState} from "react";
import './projectslider.css'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import WW1 from '../assets/WW1.png'


const Slides = [
    {
        image: WW1,
        source:'https://github.com/guilhermetco/CS97---WestWoodWalks',
        text:'',

    },
    {
        image:'https://ychef.files.bbci.co.uk/976x549/p09g169z.jpg',
        source:'',
        text:''
    }
]



export default function Slider(props){
    const [current, setCurrent] = useState(0);
    const slidesNum = Slides.length;
    let slides = Slides;
    if(!Array.isArray(Slides) || Slides.length <= 0){
        return null;
    }
    const prevSlide = () => {
        setCurrent(current === 0? slidesNum-1: current-1);
    }
    const nextSlide = () => {
        setCurrent(current === slidesNum - 1 ? 0: current+1 );
    }
    const licon = props.theme === "light" ? <BiLeftArrow color='black' /> : < BiLeftArrow  color='white' />;
    const ricon = props.theme === "light" ? <BiRightArrow  color='black' /> : < BiRightArrow  color='white' />;
    const handleClick = (link) => {
        console.log(props.theme);
    }
    return(
        <section className='slider'>
            < section className="left" onClick={prevSlide}> {licon}</section>
            < section className="right" onClick={nextSlide}> {ricon}</section>
            {
                slides.map((project,index)=>{
                    return(
                        <div className={index===current? 'slide active' : 'slide'} key={index}>
                            {index=== current && <img src={project.image} alt= "travel image" className="image" onClick={handleClick(project.source)}/>}
                        </div>
                    )
                })
            }
        </section>
    )
}
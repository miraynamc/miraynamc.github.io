import React from 'react'
import './logo.css'
import whitelogo from '../assets/whitelogo.png'
import blacklogo from '../assets/blacklogo.png'

export default function Logo(props) {
    const background = props.theme === 'light' ? 'darklogo': 'lightlogo';
    const bwlogo = props.theme === 'light' ? blacklogo: whitelogo ;
    return (
        <div>
            <img src={bwlogo} className='logoimg'/>
        </div>
    )
}

import React from 'react'
import './logo.css'

export default function Logo(props) {
    const background = props.theme === "light" ? 'black' : 'white';

    return (
        <div id='circle'>
            <div>MM</div>
        </div>
    )
}

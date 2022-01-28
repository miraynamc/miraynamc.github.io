import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width
  };
}
 
const words = [
  {
    text: 'Python',
    value: Math.random(15),
  },
  {
    text: 'Java',
    value: Math.random(15),
  },
  {
    text: 'OCaml',
    value: Math.random(15),
  },
  {
    text: 'JavaScript',
    value: Math.random(15),
  },
  {
    text: 'C++',
    value: Math.random(15),
  },
  {
    text: 'C',
    value: Math.random(15),
  },
  {
    text: 'Flutter',
    value: Math.random(15),
  },
  {
    text: 'Dart',
    value: Math.random(15),
  },
  {
    text: 'Node.js',
    value: Math.random(15),
  },
  {
    text: 'React Native Expo',
    value: Math.random(15),
  },
  {
    text: 'Google APIs',
    value: Math.random(15),
  },
  {
    text: 'React',
    value: Math.random(15),
  },
  {
    text: 'Git',
    value: Math.random(15)
  }
]
 
function SimpleWordcloud() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const  { height, width } = windowDimensions;
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
  deterministic: false,
  fontFamily: "impact",
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 2,
  rotations: 2,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
  fontSizes: [height/20, height/30, height/45]
};
  
  return <ReactWordcloud options = {options} words={words}/>
}

export default SimpleWordcloud;
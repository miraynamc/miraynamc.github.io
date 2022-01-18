import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
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
    value: Math.random(15),
  }
]
 
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
  deterministic: false,
  fontFamily: "impact",
  fontSizes: ['10', '20', '70'],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 2,
  rotations: 2,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

function SimpleWordcloud() {
  return <ReactWordcloud options = {options} words={words}/>
}

export default SimpleWordcloud;
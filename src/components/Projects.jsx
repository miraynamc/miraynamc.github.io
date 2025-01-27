import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import BPS from "../assets/img/BPS.png";
import flappy from "../assets/img/flappy.png";
import LetterBoxed from "../assets/img/LetterBoxed.png";
import MorseCode from "../assets/img/MorseCode.png";
import MyToDos from "../assets/img/MyToDos.png";
import Wordle from "../assets/img/Wordle.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Wordle Recreation",
      description: "JSX, React, CSS",
      imgUrl: Wordle,
    },
    {
      title: "Bruin Polyglot Society Webpage",
      description: "HTML, CSS, JS",
      imgUrl: BPS,
    },
    {
      title: "My To-Dos",
      description: "React, Tailwind CSS",
      imgUrl: MyToDos,
    },
    {
      title: "Morsecode translator",
      description: "HTML, CSS",
      imgUrl: MorseCode,
    },
    {
      title: "NYT Letterboxed",
      description: "JSX, React, CSS",
      imgUrl: LetterBoxed,
    },
    {
      title: "Flappy Bird Knockoff",
      description: "HTML, CSS, JS",
      imgUrl: flappy,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are a few of the projects I've worked on recently!</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
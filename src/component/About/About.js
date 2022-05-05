import React from 'react'
import './index.scss'
import Animatetext from '../animate/Animatetext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const a = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  return (
    <>
      <div className="container about-page">
        <div className="text-zone ">
          <h1>
            <Animatetext P={a} />
          </h1>
          <p>
            I'm very curious and dedicated to my work ,I am very ambitious
            Front-end and back-end developer looking for in Role in establish IT
            comapny with the opportunity work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I am confident , naturally curious , and prepetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            if i need to define myself in one sentence that would be a Explorer,
            gammer, Designer, photography.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon
                icon={faReact}
                color="#5ed4f4"
                className="abouticon"
              />
            </div>
            <div className="face2">
              <FontAwesomeIcon
                icon={faHtml5}
                color="#f06529"
                className="abouticon"
              />
            </div>
            <div className="face3">
              <FontAwesomeIcon
                icon={faCss3}
                color="#28A4D9"
                className="abouticon"
              />
            </div>
            <div className="face4">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="#efd81d"
                className="abouticon"
              />
            </div>
            <div className="face5">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#ec4d28"
                className="abouticon"
              />
            </div>
            <div className="face6">
              <FontAwesomeIcon
                icon={faNode}
                color="#68a063"
                className="abouticon"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" color="rgb(255,0,140)" />
    </>
  )
}

export default About

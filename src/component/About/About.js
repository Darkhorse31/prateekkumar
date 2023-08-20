import React from 'react'
import './index.scss'
import Animatetext from '../animate/Animatetext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const a = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  const topics = [
    'C++ , C , SQL ,HTML ,CSS',
    "Data Structures and Algorithms",
    "Bootstrap",
    "JavaScript",
    "Object-Oriented Programming",
    "Database Management System",
    "Operating System",
    "Computer Networks",
    "ReactJS"
  ];
  

  
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone asas">
          <h1>
            <Animatetext P={a} />
          </h1>
          <p>
          <h3 className="skill">Skills</h3>
          <ul>
            {topics.map((p) => {
              return (
                <li>
                 {p}
                </li>
              )
            })}
          </ul>
          </p>
          <p>
            <h2 className="skill">HONORS & AWARDS</h2>
            <ul class="awards-list">
              <li>Highest rating of 1947 on LeetCode (Knight).</li>
              <li>
                Secured global rank of 780 out of 19621 in Weekly Contest 342 on
                LeetCode.
              </li>
              <li>3 Star at CodeChef (1785).</li>
              <li>
                Scored global rank of 24 in April Long Two 2022 Division 4
                (Rated) on CodeChef.
              </li>
              <li>
                Scored a global rank of 99 in May Long One 2022 Division 3
                (Rated) on CodeChef.
              </li>
              <li>Solved 1500+ problems across various platforms.</li>
              <li>
                Secured 1278 Global Rank in Google Kick Start 2022 Round H.
              </li>
              <li>
                Secured a spot in the top 25 rank among 700 participants in the
                Neo Codeathon.
              </li>
            </ul>
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
                icon={faBootstrap}
                color="#146aff"
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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import resume from '../../assets/images/resume.pdf'
import Prateek from '../../assets/images/prateek.svg'
import Animatetext from '../animate/Animatetext.js'
import Loader from 'react-loaders'
const Home = () => {
  const arr = ['D','i','v','y','a','n','s','h','u', 'Y','a','d','a','v']
  const job = ['A student wants to be a software ', 'E','n','g','i','n','e','e','r','.']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            <span>
              I'm
              <br></br>
              <Animatetext P={arr} className="img" />
            </span>
            <br></br>
            <Animatetext P={job} />
          </h1>

          <a href={resume} className="flat_button" download="resume.pdf">
            Download Resume
          </a>
        </div>
        <div className="Logoimage">
          {/* <img
            src={Prateek}
            className="pimage"
            alt="This is Prateek image"
          ></img> */}
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" color="rgb(255,0,140)" />
    </>
  )
}

export default Home

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoImge from '../../assets/images/logo.png'
import Prateek from '../../assets/images/prateek.svg'
import Animatetext from '../animate/Animatetext.js'
import Loader from 'react-loaders'
const Home = () => {
  const arr = ['P', 'r', 'a', 't', 'e', 'e', 'k']
  const job = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

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
          <h2>FullStack Developer / React Expert / UX Designer</h2>
          <Link to="/contact" className="flat_button">
            CONTACT ME
          </Link>
        </div>
        <div className="Logoimage">
          <img
            src={Prateek}
            className="pimage"
            alt="This is Prateek image"
          ></img>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" color="rgb(255,0,140)" />
    </>
  )
}

export default Home

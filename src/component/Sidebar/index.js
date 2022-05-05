import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHockeyPuck,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import './index.scss'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={Logo} className="logo"></img>
      </Link>
      {/* NavbarLink */}
      <nav className="snav">
        <NavLink
          to="/"
          activeclassname="active"
          exact="ture"
          className={'icon'}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          to="/about"
          activeclassname="about-link"
          exact="ture"
          className={'icon'}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="contact-link"
          exact="ture"
          className={'icon'}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <div className="icon_list">
        <a href="" className={'icon new'} exact="true">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="" className={'icon new'}>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  )
}

export default Sidebar

import React, {  useRef } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import Animatetext from '../animate/Animatetext'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x2pbnet',
        'template_x9b6tj7',
        form.current,
        'user_EbExIXI2KNLwbpT1LbVBg'
      )
      .then(
        (result) => {
          alert('Message is Send')
        },
        (error) => {
          alert('Failed to send the meassage')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animatetext
              P={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
            ></Animatetext>
          </h1>
          <p>
            I'm very curious and dedicated to my work ,I am very ambitious
            Front-end and back-end developer looking for in Role in establish IT
            comapny with the opportunity work with the latest technologies on
            challenging and diverse projects.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" placeholder="Name" name="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="Message" required />
                </li>

                <button type="submit" className="flat-button">
                  Send
                </button>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Prateek Kumar
          <br />
          India,
          <br />
          Lucknow 226022
          <br />
          <span>prateek1234569@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Prateek live here,come over for a cup of coffee:</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" color="rgb(255,0,140)" />
    </>
  )
}

export default Contact

import React from 'react'
import './Hero.css'
import my from '../../Assets/imagee.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='my' src={my}alt="" />
        <h1><span  className='text'>I'am Subodh Manjrekar, </span> Web <p/> Developer based in India</h1>
        <div className="hero-action">
             <div className="resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
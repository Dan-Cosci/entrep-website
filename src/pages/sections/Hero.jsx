import React from 'react'

import HeroImg from '../../assets/images/hero-pl.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="hero" className="hero-img" />
    </div>
  )
}

export default Hero
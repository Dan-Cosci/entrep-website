import React from 'react'

import ImgHandler from '../../utils/ImgHandler'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img src={ImgHandler.hero} alt="hero" className="hero-img" />
      <div className="hero-content">
        <h1>A BITE OF HOME</h1>
        <p>a classic filipino food wrapped in lumpia wrappers forming a bite sized delign with classic tastes</p>
      </div>
    </div>
  )
}

export default Hero
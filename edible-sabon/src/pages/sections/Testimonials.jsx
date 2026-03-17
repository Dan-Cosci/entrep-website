import React from 'react'

import ImgHandler from '../../utils/ImgHandler'

import './Testimonials.css'


const Testimonials = () => {
  return (
    <section className="testimonial">
      {Object.entries(ImgHandler.testimonials).map(([key, value]) => (
        <img key={key} src={value} alt={key} height={100}/>
      ))}
    </section>
  )
}

export default Testimonials
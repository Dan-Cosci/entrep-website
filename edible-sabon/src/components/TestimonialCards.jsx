import React from 'react'
import { FaStar } from 'react-icons/fa'

import './TestimonialCards.css'

const TestimonialCards = ({title, imgText, profImge, name, rating = 5, ...props}) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        className={`star-icon ${i < rating ? 'star-filled' : 'star-empty'}`}
      />
    ))
  }

  return (
    <div className="testimonial-card" {...props}>
      <div className="card-header">
        <div className="card-profile">
          <img src={profImge} alt={name} className="profile-img" />
          <div className="profile-info">
            <p className="profile-name">{name}</p>
            <div className="star-rating">
              {renderStars(rating)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{imgText}</p>
      </div>
      
      <div className="card-quote">"</div>
    </div>
  )
}

export default TestimonialCards

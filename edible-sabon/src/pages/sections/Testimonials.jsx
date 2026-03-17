import React from 'react'
import { FaStar } from 'react-icons/fa'

import ImgHandler from '../../utils/ImgHandler'

import './Testimonials.css'
import TestimonialCards from '../../components/TestimonialCards'


const Testimonials = () => {
  const testimonialsData = [
    {
      title: "Amazing Taste!",
      imgText: "Adobites completely changed how I snack. It's flavorful and authentic.",
      profImg: ImgHandler.testimonials.p1,
      name: "Juan Dela Cruz",
      rating: 5
    },
    {
      title: "Perfect for Sharing",
      imgText: "My family loved it. Definitely something I'd buy again.",
      profImg: ImgHandler.testimonials.p2,
      name: "Maria Santos",
      rating: 5
    },
    {
      title: "Super Convenient",
      imgText: "Quick, delicious, and satisfying. Great for busy days.",
      profImg: ImgHandler.testimonials.p3,
      name: "Carlos Reyes",
      rating: 4
    },
    {
      title: "Highly Recommended",
      imgText: "A modern twist on adobo that actually works!",
      profImg: ImgHandler.testimonials.p4,
      name: "Ana Lopez",
      rating: 5
    }
  ];

  return (
    <section className="testimonial">
      <div className="testimonial-header">
        <h2>What Our Customers Say</h2>
        <p>Don't just take our word for it - hear from our satisfied customers</p>
      </div>
      
      <div className="testimonial-grid">
        {testimonialsData.map((item, idx) => (
          <TestimonialCards 
            key={idx}
            imgText={item.imgText} 
            profImge={item.profImg} 
            name={item.name} 
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials

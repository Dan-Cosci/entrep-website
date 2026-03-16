import React from 'react'

import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'
import Product from './sections/Product'
import Navbar from '../components/Navbar'

import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='content'>
      <Navbar />
      <Hero />
      <Product />
      <Testimonials />
    </div>
  )
}

export default AppLayout
import React from 'react'

import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'
import Product from './sections/Product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='content'>
      <Navbar />
      <Hero />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default AppLayout
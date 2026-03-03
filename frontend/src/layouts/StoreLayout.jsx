import React from 'react'

import './StoreLayout.css'

import Navbar from '../features/Store/components/Navbar'
import Banner from '../features/Store/components/Banner'
import Footer from '../features/Store/components/Footer'
import ItemPane from '../features/Store/components/ItemPane'
import CartPane from '../features/Store/components/CartPane'

const StoreLayout = () => {
  return (
    <>
      <header className='header'>
        <Navbar />
        <Banner />
      </header>
        
      <main className='main'>
        <div className="content">
          <ItemPane />
          <CartPane />
        </div>
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}

export default StoreLayout
import React from 'react'

import Navbar from '../features/Store/components/Navbar'
import Footer from '../features/Store/components/Footer'
import ItemPane from '../features/Store/components/ItemPane'
import CartPane from '../features/Store/components/CartPane'

const StoreLayout = () => {
  return (
    <main className='main'>
      <Navbar />
      <ItemPane />
      <CartPane />
      <Footer />
    </main>
  )
}

export default StoreLayout
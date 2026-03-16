import React from 'react'
import './Page404.css'

import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='page-404'>
      <h1 className='title'>404 - Page Not Found</h1>
      <p className='text'>The page you are looking for does not exist.</p>
      <Link to="/" className='link'>
        Go to Home Page
      </Link>
    </div>
  )
}

export default Page404
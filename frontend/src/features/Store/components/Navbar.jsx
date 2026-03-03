import React, { useState } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {

  const [search,setSearch] = useState('')

  return (
    <nav className='nav'>
      <div className="logo">
        logo
      </div>

      <div className="search">
        <input 
        type="text" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search'
      />
      </div>

      <div className="link">
        <ul>
          <li>Home</li>
          <li>Sale</li>
          <li>Latest</li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
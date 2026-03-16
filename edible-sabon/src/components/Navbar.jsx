import React from 'react'

import './Navbar.css'
import Icon from '../assets/images/icon.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={Icon} alt="adobites icon" height={60}/>
        <h1>Adobites</h1>
      </div>

      <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Preorder</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
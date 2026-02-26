import React from 'react'
import './AuthButton.css'


const AuthButton = ({type = 'button',onClick, children}) => {
  return (
    <button className='AuthButton' type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default AuthButton
import React from 'react'
import './AuthProviderButton.css'

const AuthProviderButton = ({type = 'button',onClick, children}) => {
  return (
    <button className='AuthProviderButton' type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default AuthProviderButton
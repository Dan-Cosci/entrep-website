import React from 'react'
import './AuthInput.css'

const AuthInput = ({type,placeholder,value,onChange}) => {
  return (
    <div className="wrapper">
      <input
        className='AuthInput'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default AuthInput
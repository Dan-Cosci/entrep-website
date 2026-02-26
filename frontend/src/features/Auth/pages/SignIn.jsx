import React, { useState } from 'react'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'

import './SignIn.css'

const SignIn = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
  }

  return (
    <div className="SignIn-card">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthInput type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <AuthButton type="submit">Sign Up</AuthButton>
      </form>
    </div>
  )
}

export default SignIn
import React, { useState } from 'react'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'

import './SignUp.css'

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password,confirmPassword);
  }

  return (
    <div className="SignUp-card">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <AuthInput type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthInput type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <AuthInput type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <AuthButton type="submit">Sign Up</AuthButton>
      </form>
    </div>
  )
}

export default SignUp
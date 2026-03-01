import React, { useState } from 'react'

import './SignIn.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa' 

import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import AuthProviderButton from '../components/AuthProviderButton'

import { googleSignIn } from '../services/auth.service'

const SignIn = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
  }

  const handleGoogle = async () => {
    const res = await googleSignIn();
    console.log(res.user.displayName)
  }
  
  const handleFacebook = async () => {
    const res = await googleSignIn();
    console.log(res.user.displayName)
  }
  


  return (
    <div className="SignIn-card">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthInput type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <AuthButton type="submit">Sign Up</AuthButton>
      </form>
      <div className="ProviderContainer">
        <AuthProviderButton onClick={handleGoogle}><FaGoogle /></AuthProviderButton>
        <AuthProviderButton onClick={handleFacebook}><FaFacebook /></AuthProviderButton>

      </div>
    </div>
  )
}

export default SignIn
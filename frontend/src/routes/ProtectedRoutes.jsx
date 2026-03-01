import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import useAuthStore from '../features/Auth/AuthStore'

const ProtectedRoutes = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) return navigate('/auth/sign-in')

  return (
    <Outlet />
  ) 
}

export default ProtectedRoutes
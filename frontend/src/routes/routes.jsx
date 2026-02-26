import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import AuthLayout from '../layouts/AuthLayout'
import SignIn from '../features/Auth/pages/SignIn'
import SignUp from '../features/Auth/pages/SignUp'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {}
    ],  
  },
  {
    path:'/auth',
    element:<AuthLayout />,
    children:[
      {index:true, path:'/auth/sign-in', element:<SignIn />, },
      {path:'/auth/sign-up', element:<SignUp />, },
    ]
  }
])


export default Router
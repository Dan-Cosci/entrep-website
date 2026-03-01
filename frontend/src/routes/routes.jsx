import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import AuthLayout from '../layouts/AuthLayout'
import SignIn from '../features/Auth/pages/SignIn'
import SignUp from '../features/Auth/pages/SignUp'

import StoreLayout from '../layouts/StoreLayout'
import Product from '../features/Store/pages/Product'
import Cart from '../features/Store/pages/Cart'
import Checkout from '../features/Store/pages/Checkout'

import Page404 from '../shared/pages/Page404'
import Store from '../features/Store/pages/Store'

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
      { index:true , element:<SignIn />, },
      { path:'/auth/sign-up', element:<SignUp />, },
    ]
  },
  {
    path:'/store',
    element:<StoreLayout />,
    children:[
      { index:true, element:<Store /> },
      { path:'product/:id', element:< Product/>}
    ]
  },
  {
    path:'*',
    element:<Page404 />,
  }
])


export default Router
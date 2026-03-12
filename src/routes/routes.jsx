import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import Page404 from '../pages/util/Page404'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {}
    ],  
  },
  
  {
    path:'*',
    element:<Page404 />,
  }
])


export default Router
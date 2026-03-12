import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import App from './App.jsx'
import './assets/css/main.css'

import { RouterProvider} from 'react-router-dom'
import Router from './routes/routes'

createRoot(document.getElementById('root')).render(
  <>
    {/* <StrictMode> */}
      <RouterProvider router={Router} />
      <Toaster />
    {/* </StrictMode> */}
  </>
)
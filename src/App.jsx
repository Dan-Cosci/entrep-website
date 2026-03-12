import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Loading from './pages/util/Loading'
import Page404 from './pages/util/Page404'
import AppLayout from './pages/AppLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
        <AppLayout/>
        <Loading />
        
        </>
        } />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
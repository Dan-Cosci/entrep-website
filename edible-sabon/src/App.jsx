import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Loading from './pages/util/Loading'
import Page404 from './pages/util/Page404'
import AppLayout from './pages/AppLayout'

const App = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
      console.log('Everything is fully loaded!');
    };

    // Add load listener
    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Routes>
      <Route path="/" element={ loaded ? <AppLayout/> : <Loading /> } />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
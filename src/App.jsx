import React from 'react'
import Loading from './pages/util/Loading'
import Page404 from './pages/util/Page404'
import Page500 from './pages/util/Page500'


const App = () => {
  return (
    <>
      <h1>this is the base app</h1>
      <Loading />
      <Page404 />
      <Page500 />
    </>
  )
}

export default App
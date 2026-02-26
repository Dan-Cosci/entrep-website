import React from 'react'
import Loading from './shared/pages/Loading'
import Page404 from './shared/pages/Page404'
import Page500 from './shared/pages/Page500'

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
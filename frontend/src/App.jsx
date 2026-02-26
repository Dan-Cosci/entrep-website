import React from 'react'
import Loading from './shared/pages/Loading'
import Page404 from './shared/pages/Page404'
import Page500 from './shared/pages/Page500'
import SignIn from './features/Auth/pages/SignIn'
import SignUp from './features/Auth/pages/SignUp'


const App = () => {
  return (
    <>
      <h1>this is the base app</h1>
      <Loading />
      <Page404 />
      <Page500 />
      <SignIn />
      <SignUp />
    </>
  )
}

export default App
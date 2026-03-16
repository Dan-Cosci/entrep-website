import React from 'react'
import './Loading.css'

import adobites from '../../assets/images/main-logo.png'

const Loading = () => {
  return (
    <div className='loading'>
      <img src={adobites} alt="adobites logo" width={300} className='loading-img'/>
    </div>    
  )
}

export default Loading
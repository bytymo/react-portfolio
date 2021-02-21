import React from 'react'
import glitch from '../images/glitch.mp4'

const Header = () => {
  return (
    <div className='jumbotron header component m-0 p-0' id='home'>
      <video className='m-0 p-0' src={glitch} muted loop autoPlay={true} playsInline={true} style={{width: '100%', objectFit: 'cover'}}></video>
    </div>
  )
}

export default Header

import React, {useEffect, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  let rgba = ''
  const bgNav = {
    backgroundColor: rgba
  }

  const [scrollY, setScrollY] = useState(0)
  function logScroll(){
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll(){
      window.addEventListener("scroll", logScroll)
    }
    watchScroll()
  })

  scrollY > 600 ? rgba = '255, 255, 255, 0' : rgba = 'rgba(51, 51, 51, 0.8)'

  return (
    <div className="nav">
      <nav className={'navbar navbar-expand-lg navbar-dark text-light fixed-top'} style={{bgNav}}>
        <h1 className='text-light position-absolute'>ByRon <span className="gold">M</span>osley</h1>
        <button className="navbar-toggler navbar-right ml-auto m-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Link to='/#home' className="nav-item pb-2 mr-lg-4 gold">Home</Link>
            <Link to='/#about' className="nav-item pb-2 mr-lg-4 gold">About</Link>
            <Link to='/#portfolio' className="nav-item pb-2 mr-lg-4 gold">Portfolio</Link>
            <Link to='/#contact' className="nav-item pb-2 gold">Contact</Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

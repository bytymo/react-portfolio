import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className='text-light'>ByRon <span className="gold">M</span>osley</h1>
      <nav className='navbar navbar-expand-lg navbar-dark text-light fixed-top'>
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

import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuHandler = () => {
    setIsOpen(prev => (prev = !prev))
  }

const menu = (
  <div className='collapse navbar-collapse'>
    <ul className="navbar-nav ml-auto">
      <Link to='' className="nav-item mr-4 gold">Home</Link>
      <Link to='' className="nav-item mr-4 gold">About</Link>
      <Link to='' className="nav-item mr-4 gold">Portfolio</Link>
      <Link to='' className="nav-item gold">Contact</Link>
    </ul>
  </div>
)

  return (
    <nav className='navbar navbar-expand-lg navbar-dark text-light'>
      <h1> <span className='gold'>B</span>yRon <span className="gold">M</span>osley</h1>
        <button className="navbar-toggler" type="button"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={menuHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>
      
      {menu}
    </nav>
    
  )
}

export default Navbar

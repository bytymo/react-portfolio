import React from 'react'

const Footer = () => {
  return (
  <footer className="text-light">
    <p className="gold initials">BM</p>
    <div className>
      {/* GitHub */}
      <a className="icon mr-4" href="https://github.com/bytymo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      {/* LinkedIn */}
      <a className="icon mr-4" href="https://www.linkedin.com/in/byron-mosley/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      {/* Spotify */}
      <a className="icon" href="https://open.spotify.com/user/i25kqerpk6ch0w70tt6rnrxje" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
    </div>
    <p className='small mb-0 py-2'>&copy; Copyright Byron Mosley 2021. All Rights Reserved.</p>
  </footer>
  )
}

export default Footer

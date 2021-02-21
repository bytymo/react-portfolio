import React from 'react'

const ContactButtons = () => {
  return (
    < div className="card-group">
        {/* Phone */}
        <div className="card contact-cards">
          <a href="tel:+15203443681" className='card-body contact-card'>
            <i className="fas fa-phone-alt card-title"></i>
            <p className='card-text'>(520) 344-3681</p>
          </a>
        </div>

        {/* Email */}
        <div className="card contact-cards">
          <a href="mailto:mosleyb91@gmail.com" className='card-body contact-card'>
            <i className="fas fa-envelope card-title"></i>
            <p className="card-text">mosleyb91@gmail.com</p>
          </a>
        </div>

        {/* Location */}
        <div className="card contact-cards">
          <a href="https://www.google.com/maps/dir//Phoenix,+AZ/@33.6054149,-112.125051,10z/data=!4m6!4m5!1m0!1m2!1m1!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!3e0?hl=en" target="blank" className='card-body contact-card'>
            <i className="fas fa-map-marker-alt card-title"></i>
            <p className="card-text">Phoenix, AZ</p>
          </a>
        </div>
        
        
        
        
      </div>
  )
}

export default ContactButtons

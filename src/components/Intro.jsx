import React from 'react'

const Intro = () => {
  return (
    <div className='component' id='about'>
      <h2 className='text-light'>Who I am</h2><hr />
      <div className="card-deck text-light">
          <div className="card definition">
            <div className="card-body">
              <h4 className="card-title">de·vel·op·er</h4>
              <h6 className="card-subtitle mb-2 text-muted">/dəˈveləpər/<br/><em>a person or thing that develops or innovates; a person or company that creates new products, especially software, or devices.</em></h6>
              <p className="card-text">Full Stack Development concerns itself with both the front end and back end of web development. Using HTML, CSS, and Javascript for front end development with React, PostrgreSQL, and Express for back end development, I build fast, efficient websites.</p>
            </div>
          </div>
          <div className="card definition">
            <div className="card-body">
              <h4 className="card-title">de·sign·er</h4>
              <h6 className="card-subtitle mb-2 text-muted">/dəˈzīnər/<br/><em>a person who plans the form, look, or workings of something before its being made or built, typically by drawing it in detail.</em></h6>
              <p className="card-text">It is my mission to provide the respect and attention the client deserves as well as understand the clients needs when designing the site, while respecting the clients time and budget.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Intro

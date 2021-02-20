import React from 'react'

const Contact = () => {
  return (
    <div className='component'>
      <h2 className='text-light'>Contact Me</h2><hr/>
      <div className="row" id='contact'>
        <form action="" className='col-md-6 p-3'>
        <h6 className='text-left'>Looking for a quote? Wanting to collaborate? Or simply wishing to say hello? Fill out the form below!</h6>
        <div className="form-group">
          <input className='form-control' type="text" name="name" id="name" placeholder='Name' />
        </div>
        <div className="form-group">
          <input className='form-control' type="email" name="email" id="email" placeholder='Email' />
        </div>
        <div className="form-group">
          <textarea className='form-control' name="message" id="message" rows="3" placeholder='Message' />
        </div>
        <button type="submit" className='btn btn-outline-warning float-left'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact

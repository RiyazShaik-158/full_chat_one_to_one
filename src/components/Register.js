import React from 'react'

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
  return (
    <div className='register'>
        <form onSubmit={handleSubmit} className='register_form'>
            <input placeholder='Enter Username'/>
            <input placeholder='Enter Email'/>
            <input type='password' placeholder='Enter Password'/>
            <input type='file' accept='images/*'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register;
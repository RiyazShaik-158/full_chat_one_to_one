import React from 'react'

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        console.log(event.target[3].value)
        const displayName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const imgFile = event.target[3].files[0];
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

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
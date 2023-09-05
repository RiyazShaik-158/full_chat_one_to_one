import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from './firebase';

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const displayName = event.target[0].value;
        
        const email = event.target[1].value;
        const password = event.target[2].value;
        const imgFile = event.target[3].files[0];

        // console.log(displayName,email,password,imgFile)


        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("user: ",user);
            console.log("email :",email,"password :",password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
        });
        

    }

  return (
    <div className='register'>
        <h1>SignUp</h1>
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
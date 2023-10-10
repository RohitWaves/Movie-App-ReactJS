import React from 'react';

const Register = () => {

    return (
        <div>
           <input type='text' name="username" placeholder='Name' />
           <input type='email' name="email" placeholder='email' />
           <input type="password"  name="password" placeholder='Password' />
           <button>Register</button>

        </div>
    )
}

export default Register;
import React, { useState } from 'react'
import './register.css'
export default function Register() {
    const [user,setUser] = useState({
        name: '',
        email: '',
        password:'',
        reEnterPassword:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

  return (
    <div className="register">
        {/* {console.log('User',user)} */}
        <h1>Register</h1>
        <input type="text" name='name' value={user.name} placeholder='Your Name' onChange={handleChange} ></input>
        <input type="email" name='email' value={user.email} placeholder='Your Email' onChange={handleChange} ></input>
        <input type="password" name='password' value={user.password} placeholder='Enter your Password' onChange={handleChange} ></input>
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-Enter your Password' onChange={handleChange} ></input>
        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
    </div>
  )
}

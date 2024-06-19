import React, { useState } from 'react'
import '../styles/Login.css'


const Login = () => {
  const [ formData, setFormData ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  };

  const handleClick = (e) => {
   
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="email-label">Email</label>
        <input 
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email..."
          className="email-input"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="password-label">Password</label>
        <input 
          type="text"
          name="password"
          id="password"
          placeholder="Enter your password..."
          className="password-input"
          value={formData.password}
          onChange={handleChange}
        />
        <button className='button' onClick={handleClick}>Submit</button>
      </form>
    </div>
    
  )
}

export default Login
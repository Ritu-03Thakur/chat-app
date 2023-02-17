import React from 'react' ; 
import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../firebase.js" ;
const Login = () => {

  const [err , setErr] = useState(false) ; 
  const navigate = useNavigate()
  
    const handleSubmit = async (e) =>{
     e.preventDefault()
     const email = e.target[0].value ; 
     const password = e.target[1].value ; 
  
     try {
      
    await  signInWithEmailAndPassword(auth, email, password)
      navigate("/")
   
     } catch (err) {
      setErr(true); 
     }
  
    };
  return (
    <div>
     <div className='formContainer'>
     <div className="formWrapper">
        <span>Ritz Chat</span>
        <span>SIGN IN</span>
        <form onSubmit={handleSubmit}>
            
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
           
            <button>SIGN IN</button>
            {err && <span>Something went Wrong !</span>}
        </form>
        <p> Don't have an account ? <Link to="/register">Register</Link> </p>
     </div>
    </div>
    </div>
  )
}

export default Login ; 

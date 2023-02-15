import React from 'react'

const Login = () => {
  return (
    <div>
     <div className='formContainer'>
     <div className="formWrapper">
        <span>Ritz Chat</span>
        <span>SIGN IN</span>
        <form action="">
            
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
           
            <button>SIGN IN</button>
        </form>
        <p> Don't have an account ?  Register </p>
     </div>
    </div>
    </div>
  )
}

export default Login ; 

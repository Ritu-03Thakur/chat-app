import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
     <div className="formWrapper">
        <span>Ritz Chat</span>
        <span>SIGN UP</span>
        <form action="">
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input style={{display : "none"}} type="file" />
            <label htmlFor="file">
                <img src="logo.jpeg" alt="" height={20}  width={20}/>
                <span>Add dp</span>
            </label>
            <button>SIGN UP</button>
        </form>
        <p>have an account ?  Login </p>
     </div>
    </div>
  )
}

export default Register

import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
     <span className='logo'>Ritz </span>
     <div className="user">
      <img src= {currentUser.photoURL} alt="" height={30} width = {30}/>
      <span>{currentUser.displayName}</span>
      <button onClick={() =>signOut(auth)}>LOG OUT </button>
     </div>
    </div>
  )
}

export default Navbar ; 

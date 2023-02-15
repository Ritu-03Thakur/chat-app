import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
     <span className='logo'>Ritz </span>
     <div className="user">
      <img src="logo.jpeg" alt="" height={30} width = {30}/>
      <span>Ritu Thakur</span>
      <button>LOG OUT </button>
     </div>
    </div>
  )
}

export default Navbar ; 

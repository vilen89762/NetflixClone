import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
function Navbar() {
  const{user,logOut} = UserAuth()
  console.log(user)
  return (
    <div className='flex p-4 absolute  w-full items-center z-[100] justify-between'>
    <Link to='/'>
    
    <h1 className="text-red-600 font-poppins text-4xl font-bold cursor-pointer">NETFLIX</h1>
  
    </Link>
    
  
    <div>
    <Link to='/login'>
    <button className="text-white font-poppins pr-4">Sign In</button>
    </Link>
    <Link to='/signup'>
    <button className="bg-red-600 font-poppins text-white cursor-pointer px-6 py-2 rounded">Sign Up</button>
    </Link>
  </div>
      
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from './context/AuthContext'



const SignUp = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const{user,signUp} = UserAuth()

  const navigate = useNavigate()


const handleSubmit = async () =>{
e.preventDefault()
try{
  await signUp(email,password)
 navigate('/')
}
catch(error){
  console.log(error)
}
}


  return (
    <div className='w-full h-screen'>
    <img
    className='hidden sm:block absolute w-full h-full object-cover'
    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
    alt='/'
  />
  <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen  '>
  <div className='fixed w-full px-4 py-24 z-50 '>
  <div className='max-w-[450px] text-white h-[660px] mx-auto bg-black/75 '>
  
  <div className='max-w-[320px] mx-auto py-16 '>
  <h1 className='text-3xl font-bold'>Sign Up</h1>
  <form onSubmit={handleSubmit} className='w-full flex py-4 flex-col'>
  <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' autoComplete='email' type='email' placeholder='Email' name='' id=''/>
  <input  onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' autoComplete='current-password' type='password' placeholder='Password' name='' id=''/>
  <button className='bg-red-600
   my-3 rounded font-bold font-poppins py-3'>Sign Up</button>
  <div className='flex text-sm text-gray-600 items-center justify-between'>
  <p><input className='mr-2' type='checkbox' name='' id=''/> Remember </p>

  <p>Need Help?</p>
  
  
  </div>
  <p className='py-4'><span className='text-gray-600'>Already subscribe to Netflix?</span>
  
  <Link to='/login'>
  
  Sign In
  </Link>
  </p>
  </form>
  
  </div>
  </div>
  
  </div>
  
  
  </div>
    </div>
  )
}

export default SignUp

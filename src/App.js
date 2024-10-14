import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Account from './Account';
import Login from './Login';
import SignUp from './SignUp';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <AuthContextProvider>
    
    
    <Navbar/>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/account' element={<Account/>}/>
    
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App

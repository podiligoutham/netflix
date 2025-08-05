import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_small.jpg'
        alt='logo'/>
        </div>
        <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-500' />}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500' />
            
            <input type='password' placeholder='Password' className='p-4 my-4 w-full  bg-gray-500' />
            <button className='p-4 my-6 bg-red-700 w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
        
    </div>
  )
}

export default Login
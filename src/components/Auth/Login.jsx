import React, { useState } from 'react';

const Login =({handleLogin})=> {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)

    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
          onSubmit={(e)=>{submitHandler(e)}}
          
          className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-400' type='email' placeholder='Enter your email' required />
          
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-4 placeholder:text-grey-400' type='password' placeholder='Enter password' required  />
          
          <button className='text-white outline-none bg-emerald-600 border-none py-3 px-5 text-xl mt-4 rounded-full placeholder:text-white'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login;


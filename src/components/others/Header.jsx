import React, { useState } from 'react'
import TaskListNumbers from './TaskListNumbers'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logoutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold '>{props.data?.firstName ? `${props.data.firstName} 👋` : 'User 👋'}</span></h1>
      <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-small '>Log Out</button>
    </div>
    
  )
}

export default Header;


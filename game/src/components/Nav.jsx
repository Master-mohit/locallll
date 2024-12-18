import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-zinc-300 bg-black w-screen h-full p-8 flex items-center justify-between '>
    <div className='text-[2vw] '>
    WELCOME
    </div>

    <div className='flex justify-between gap-5 text-[20px] '>
       <Link to="/home"><h1>Home</h1></Link>
      <Link to="/about"><h1>About</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
    </div>
  </div>
  )
}

export default Nav

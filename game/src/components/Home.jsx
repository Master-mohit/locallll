
import React, { useState } from 'react'
import Counterrr from './Counterrr';

const Home = () => {
  const [count, setcount] = useState(0)
  const countHandler = () => {
   setcount(count+1);
  }
  return (
    <div className=' flex-col flex items-center justify-center h-screen w-screen bg-black text-white '>
      <Counterrr pass = {count}/> 
     <div onClick={countHandler} className='mt-7 rounede border p-4'>
      CleanUp❕
     </div>
    </div>
  )
}

export default Home

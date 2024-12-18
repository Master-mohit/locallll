import React, { useContext } from 'react'
import { mycontext } from '../contextStore/Context';

const Contact = () => {
   const {plus, setplus} = useContext(mycontext)
  const plusHandler = () => {
    setplus(plus+1);
   }
  return (
    <div className=' flex-col text-[2vw] flex items-center justify-center h-screen w-screen bg-black text-white'>
      <div className='text-[3vw] border p-10 text-white bg-zinc-600 font-black '>
       {plus}
      </div>
      <div onClick={plusHandler} className='border rounded p-4 mt-10 text-[30px] text-white '>
        plus❕
      </div>
    </div>
  )
}

export default Contact

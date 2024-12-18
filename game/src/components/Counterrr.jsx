import React from 'react'

const Counterrr = ({pass}) => {
  return (
    <div>
      <h1 className='mb-5 text-[30px]'>Props drilling...</h1>
      <div className='rounded border p-[4vw] flex items-center text-[3vw]'>
     {pass}
     </div>
    </div>
  )
}

export default Counterrr

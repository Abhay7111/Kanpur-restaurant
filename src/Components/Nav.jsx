import React from 'react'

function Nav() {
  return (
    <div className='bg-green-500 h-14 flex items-center justify-between px-5'>
      <div className='flex  items-center justify-center gap-3'>
        <a href="#" className='text-white '>About</a>
        <a href="#" className='text-white '>Customer support</a>
      </div>
      <div>
      <div className='flex flex-col gap-4 py-3'>
        <p className='font-bold text-lg text-white text-center'>Use Code FIRSTORDER to get 10% OFF !!!</p>
        <p className='font-bold text-lg text-white text-center'>Refer Your Friends & Earn !!!</p>
      </div>
      </div>
    </div>
  )
}

export default Nav
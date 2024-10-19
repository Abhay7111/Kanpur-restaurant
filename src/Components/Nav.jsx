import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {

  const [opennotification, setOpennotification] = useState(false)

  
  return (
  <div className='flex relative flex-col items-center justify-center w-full z-50 bg-white'>
    <div className='w-full bg-blue-500 h-14 flex items-center justify-between px-5'>
      <div className='hidden sm:block'>
      <div className='flex items-center justify-center gap-3'>
        <a href="#about" className='text-white '>About</a>
        <a href="#" className='text-white '>Customer support</a>
      </div>
      </div>
      <div className='relative overflow-y-auto h-10'>
        <div className='flex flex-col py-3 relative auto-slider'>
          <p className='font-bold text-lg text-white sm:text-center'>Use Code FIRSTORDER to get 10% OFF !!!</p>
          <p className='font-bold text-lg text-white sm:text-center'>Refer Your Friends & Earn !!!</p>
        </div>
      </div>
      <div className='hidden sm:block'>
      <div className='flex items-center justify-center gap-3'>
        <div className=' size-8 rounded-md relative flex items-center justify-center'>
          <i className="ri-notification-2-fill text-xl text-white cursor-pointer"></i>
        </div>
        <div>
          <i class="ri-user-6-fill ri-notification-2-fill text-xl text-white cursor-pointer"></i>
        </div>
      </div>
      </div>
        <i onClick={()=>setOpennotification(true)} className={` ${opennotification ? '' : ''} text-white text-3xl ri-menu-5-line cursor-pointer sm:hidden block`}></i>
      <div className={` ${opennotification ? 'w-[100vw]' : 'w-0'} z-50 sm:hidden transition-all duration-700 bg-black/40 fixed top-0 right-0  h-screen flex`}>
      <i onClick={()=>setOpennotification(false)} className="ri-close-fill text-4xl text-white font-medium"></i>
      </div>
    </div>
    <div className='hidden sm:block'>  
    <div className='flex flex-col sm:flex-row items-center justify-between gap-10 py-5'>
      <img src="https://static.wixstatic.com/media/5f9826_c4ac955f26474d21b36483761974f0b0~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Since%202023%20(1).png" alt="Logo" />
      <ul className='flex flex-col sm:flex-row items-center gap-[1px] NavLinkUl '>
        <NavLink to={'/'} className={'NavLink'} >Home</NavLink>
        <NavLink to={''} className={'NavLink'} >Online orders</NavLink>
        <NavLink to={''} className={'NavLink'} >Table Reservation</NavLink>
        <NavLink to={'about'} className={'NavLink'} >About Us</NavLink>
        <NavLink to={''} className={'NavLink'} >Contact Us</NavLink>
        <NavLink to={''} className={'NavLink'} >My Acount</NavLink>
        <NavLink to={''} className={'NavLink'} >More</NavLink>
      </ul>
      <p className='flex items-center justify-center gap-2'><i class="ri-shopping-cart-2-line text-5xl text-zinc-400 cursor-pointer hover:text-blue-500/50 transition-all">0</i> </p>
    </div>
    </div>
  </div>
  )
}

export default Nav
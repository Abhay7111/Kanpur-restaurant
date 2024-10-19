import React from 'react'
import { NavLink } from 'react-router-dom'

function Aboutmin() {
  return (
    <div className='w-full min-h-screen overflow-hidden bg-transparent flex items-center justify-center relative'>
          <img src="https://cdn.pixabay.com/photo/2023/06/20/10/05/tacos-8076612_1280.jpg" alt="bgimg" className='fixed top-0 left-0 w-full h-full scale-100 z-[-5] object-cover' />
          <div className='w-full min-h-screen py-8 bg-zinc-950/60 flex items-center justify-center'>
               <div className='py-10 px-3 bg-white w-[90%] sm:w-[40%] rounded-2xl flex flex-col items-center gap-5'>
                    <h1 className='text-center w-full text-5xl font-bold py-5'>About Us</h1>
                    <p className='px-5 w-[70%] text-start opacity-70'>At Four Brothers Cafe, our passion for food and family is reflected in each and every one of our homemade dishes. Each recipe has been passed down generation to generation, and we use only the freshest ingredients to create memorable meals that you will want to share with your own family. Whether you're looking for a place to go out with your loved ones or just want a comfortable and welcoming atmosphere to enjoy good food, Four Brothers Cafe is the perfect place to be...</p>
                    <NavLink to={'about'} className={'px-3 py-1.5 bg-blue-500 border-2 border-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium rounded-md transition-all duration-500'}>About us</NavLink>
               </div>
          </div>
    </div>
  )
}

export default Aboutmin
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Error() {
     const navigate = useNavigate();

     const handleGoBack = () => {
       navigate(-1); // Go back to the previous page
     };
   
     return (
       <div className='flex flex-col items-center justify-center w-full h-[85vh] bg-white text-100'>
         <img src='https://file.aiquickdraw.com/m/1729353468_1733fa48200a406e82eeabc72afea91a.png' alt='Not Found' className='mb-4 rocket-animation' />
         <h1 className='text-4xl font-bold'>404 - Not Found</h1>
         <p className='mt-2 text-lg'>Oops! The page you are looking for does not exist.</p>
         <div className='mt-4 flex items-center justify-center gap-[1px]'>
         <button onClick={handleGoBack} className=' flex items-center px-4 py-2 text-black before:bg-zinc-600 hover-before hover:text-zinc-100 text-sm overflow-hidden relative z-10'> Go Back</button>
           <NavLink to='/' className='px-4 py-2 text-black before:bg-zinc-600 hover-before hover:text-zinc-100 text-sm overflow-hidden relative z-10'>Home</NavLink>
           <NavLink to='/contact us' className='px-4 py-2 text-black before:bg-zinc-600 hover-before hover:text-zinc-100 text-sm overflow-hidden relative z-10'>Contact us</NavLink>
         </div>
       </div>
     )
}

export default Error
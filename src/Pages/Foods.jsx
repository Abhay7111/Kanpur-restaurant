import React from 'react';
import Food01 from '../assets/Foods/01.png';
import Food02 from '../assets/Foods/02.png';
import Food03 from '../assets/Foods/03.png';
import Food04 from '../assets/Foods/04.png';
import Food05 from '../assets/Foods/05.png';
import Food06 from '../assets/Foods/06.png';
import Food07 from '../assets/Foods/07.png';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: '', image: Food01 },
  { name: '', image: Food02 },
  { name: '', image: Food03 },
  { name: '', image: Food04 },
  { name: '', image: Food05 },
  { name: '', image: Food06 },
  { name: '', image: Food07 },
];

const Foods = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-950/60 overflow-y-auto py-20 '>
      <img 
        src="https://cdn.pixabay.com/photo/2023/06/20/10/05/tacos-8076612_1280.jpg" 
        alt="Food Background" 
        className='fixed top-0 left-0 w-full h-full object-cover z-[-5]' 
      />
      <div className='relative min-w-[60vw] z-10 py-10 px-5 bg-white rounded-2xl shadow-lg'>
        <h1 className='text-center text-5xl font-bold mb-5'>Food Showcase</h1>
        <h2 className='text-center text-xl font-medium mb-5'>Total Foods Available: {categories.length}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {categories.map(({ name, image }, index) => (
            <div key={index} className='flex flex-col items-center bg-gray-100 p-5 rounded-lg shadow-md'>
              <NavLink to={`../contact us`}><img src={image} alt={name} className='w-52 h-52 mb-2 rounded-lg' /></NavLink>
              <h2 className='text-lg font-semibold'>{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foods;
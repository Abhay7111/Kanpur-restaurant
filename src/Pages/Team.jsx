import React from 'react'

function Team() {
  return (
    <div id='ourteam' className=' relative flex sm:flex-row flex-col gap-3 items-center sm:items-start justify-center min-h-screen w-full pt-16'>
          <img src="https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg" className='absolute z-[0] top-0 left-0 w-full h-full object-cover object-center opacity-15' />

          <div className='scale-0-5 w-96 min-h-[350px] flex flex-col gap-3 items-center justify-start rounded-xl cursor-pointer z-10 p-5 flex-wrap'>
               <img src="https://cdn.pixabay.com/photo/2024/07/26/01/48/men-8922497_1280.jpg" alt="profile image" className='size-40 border border-zinc-500 rounded-full object-cover object-center' />
               <h2 className='text-3xl font-bold'>Praveen</h2>
               <p className='w-[80%] text-center opacity-65 hover:opacity-100 transition-opacity duration-500'>I really liked the service of this cafe and food was also amazing. I loved the ambiance. The food was fresh and taste was very good.</p>
               <i class="ri-double-quotes-r text-6xl py-6"></i>
          </div>
          <div className='scale-0-5 w-96 min-h-[350px] flex flex-col gap-3 items-center justify-start rounded-xl cursor-pointer z-10 p-5'>
               <img src="https://cdn.pixabay.com/photo/2024/06/13/05/31/men-8826710_1280.jpg" alt="profile image" className='size-40 border border-zinc-500 rounded-full object-cover object-center' />
               <h2 className='text-3xl font-bold'>Shivam</h2>
               <p className='w-[80%] text-center opacity-65 hover:opacity-100 transition-opacity duration-500'>Perfect place to dine in with your favorite ones. Had an amazing experience here. The food was on top plus the service is also very good.</p>
               <i class="ri-double-quotes-r text-6xl py-6"></i>
          </div>
          <div className='scale-0-5 w-96 min-h-[350px] flex flex-col gap-3 items-center justify-start rounded-xl cursor-pointer z-10 p-5'>
               <img src="https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_960_720.jpg" alt="profile image" className='size-40 border border-zinc-500 rounded-full object-cover object-center' />
               <h2 className='text-3xl font-bold'>Tarika</h2>
               <p className='w-[80%] text-center opacity-65 hover:opacity-100 transition-opacity duration-500'>When I visted my hometown Kanpur, I came across this restaurant called Four Brothers Cafe and I am so glad to share that their service and food was on par with any other good quality restaurant.</p>
               <i class="ri-double-quotes-r text-6xl py-6"></i>
          </div>
    </div>
  )
}

export default Team
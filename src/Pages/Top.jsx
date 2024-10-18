import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
function Top() {
  return (
    <div>
     <Swiper
        spaceBetween={30}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" "
      >
        <SwiperSlide>
          <div className=''>
               <img src="https://static.wixstatic.com/media/bc48c8_39ae927c25b1410294cd9ea2b882586d~mv2.jpg/v1/fill/w_1343,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc48c8_39ae927c25b1410294cd9ea2b882586d~mv2.jpg" alt="img1" className='w-full h-[80vh] object-cover' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
               <img src="https://static.wixstatic.com/media/bc48c8_80b02bfcdce440a98a4d119831a496ab~mv2.jpg/v1/fill/w_1343,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc48c8_80b02bfcdce440a98a4d119831a496ab~mv2.jpg" alt="img2" className='w-full h-[80vh] object-cover hidden sm:block z-0' />
               <div className='relative sm:absolute z-10 top-0 right-0 w-full sm:w-1/2 h-full px-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-wrap text-[9vw] md:text-6xl font-bold leading-tight my-10 text-center sm:text-end'>Tastier & Healthier Foods, Now at your Doorstep.</h1>
                    <div className='w-full flex items-center justify-center sm:justify-end px-10'>
                         <NavLink to={'order'} className={'px-7 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-full text-white'}>Order</NavLink>
                    </div>
               </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
               <img src="https://static.wixstatic.com/media/5f9826_2e1325aad7a84795b8aabec9b9365810~mv2.png/v1/fill/w_1343,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5f9826_2e1325aad7a84795b8aabec9b9365810~mv2.png" alt="img3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Top
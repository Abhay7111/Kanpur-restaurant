import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
function Top() {
  return (
    <div>
     <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
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
      <div className='py-10 w-full px-5 '>
          <h2 className='text-4xl w-full text-center'>Choose from a Wide Range of Delicious Foods</h2>
          <div className='p-5 cursor-pointer'>
          <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        modules={[Autoplay, Pagination]}
        className=""
      >
          <SwiperSlide className=''>
               <img src='https://static.wixstatic.com/media/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2014/09/13/21/30/dinner-table-444434_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/06/20/21/15/taco-4288033_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full bg-red-400 object-cover'/>
          </SwiperSlide>
      </Swiper>
          </div>
      </div>
    </div>
  )
}

export default Top
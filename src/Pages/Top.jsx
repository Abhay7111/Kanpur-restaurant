import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import Aboutmin from '../Components/Aboutmin';
function Top() {
  return (
    <div className=''>
     <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className=" bg-white"
      >
        <SwiperSlide>
          <div className=''>
               <img src="https://static.wixstatic.com/media/bc48c8_39ae927c25b1410294cd9ea2b882586d~mv2.jpg/v1/fill/w_1343,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc48c8_39ae927c25b1410294cd9ea2b882586d~mv2.jpg" alt="img1" className='w-full h-[80vh] object-cover object-right sm:object-center' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
               <img src="https://static.wixstatic.com/media/bc48c8_80b02bfcdce440a98a4d119831a496ab~mv2.jpg/v1/fill/w_1343,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc48c8_80b02bfcdce440a98a4d119831a496ab~mv2.jpg" alt="img2" className='w-full h-[80vh] object-cover z-0 object-left sm:object-center' />
               <div className='absolute z-10 top-0 right-0 w-full sm:w-1/2 h-full px-5 flex flex-col items-center justify-center bg-black/40 sm:bg-transparent'>
                    <h1 className=' text-wrap text-[9vw] md:text-6xl font-bold ubuntu-medium leading-tight my-10 text-center sm:text-end text-white sm:text-black '>Tastier & Healthier Foods, Now at your Doorstep.</h1>
                    <div className='w-full flex items-center justify-center sm:justify-end px-10'>
                         <NavLink to={'order'} className={'px-7 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-full text-white'}>Order</NavLink>
                    </div>
               </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
               <img src="https://static.wixstatic.com/media/bc48c8_3bfc48ec598c4f4c863eb577cf80e671~mv2.jpg/v1/fill/w_1343,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc48c8_3bfc48ec598c4f4c863eb577cf80e671~mv2.jpg" alt="img2" className='w-full h-[80vh] object-cover object-right' />
               <div className='absolute z-10 top-0 left-0 w-full sm:w-1/2 h-full px-5 flex flex-col items-center justify-center bg-black/50 sm:bg-transparent'>
                    <h1 className=' text-wrap text-[9vw] md:text-6xl font-semibold ubuntu-medium leading-tight my-10 text-center sm:text-start text-white sm:text-black flex flex-col sm:gap-10'><span className='text-xl'>Easy, Fresh & Convenient</span> Order From Four Brother's Cafe <span className='text-4xl'>And Get it Delivered <br /> at your Doorstep.</span></h1>
                    <div className='w-full flex items-center justify-center sm:justify-start px-10'>
                         <NavLink to={'order'} className={'px-7 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-full text-white'}>Order</NavLink>
                    </div>
               </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
               <img src="https://static.wixstatic.com/media/5f9826_2e1325aad7a84795b8aabec9b9365810~mv2.png/v1/fill/w_1343,h_650,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5f9826_2e1325aad7a84795b8aabec9b9365810~mv2.png" alt="img2" className='w-full h-[80vh] object-cover ' />
               <div className='absolute z-10 top-0 right-0 w-full sm:w-1/2 h-full px-5 flex flex-col items-center justify-center bg-black/40 sm:bg-transparent'>
                    <h1 className=' text-wrap text-[9vw] md:text-6xl font-semibold ubuntu-medium leading-tight my-10 text-center sm:text-end text-white'>Try Four Brothers Cafe Veg Thali, now more affordable !!</h1>
                    <div className='w-full flex items-center justify-center sm:justify-end px-10'>
                         <NavLink to={'order'} className={'px-7 py-2 bg-green-500 hover:bg-green-600 transition-all rounded-full text-white'}>Order</NavLink>
                    </div>
               </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='py-10 w-full px-5 hidden sm:block bg-white '>
          <h2 className='text-4xl w-full text-center font-bold pt-5 pb-10'>Choose from a Wide Range of Delicious Foods</h2>
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
               <img src='https://static.wixstatic.com/media/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2014/09/13/21/30/dinner-table-444434_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
          <SwiperSlide className=''>
               <img src='https://cdn.pixabay.com/photo/2019/06/20/21/15/taco-4288033_960_720.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500'/>
          </SwiperSlide>
      </Swiper>
          </div>
      </div>
      <div className='py-10 w-full sm:hidden bg-white'>
          <h2 className='text-4xl w-full text-center font-medium ubuntu-medium'>Choose from a Wide Range of Delicious Foods</h2>
          <div className='py-5 px-1 cursor-pointer'>
          <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        modules={[Autoplay, Pagination]}
        className=""
      >
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://static.wixstatic.com/media/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg/v1/fill/w_237,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bc48c8_1a90be5ddb4940bba7eb827d3c739e83~mv2.jpg' className='h-56 w-56 mx-10 my-5 rounded-full object-cover'/></NavLink> hover:opacity-55 transition-all duration-500
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2023/10/05/11/47/sweet-potatoes-8295778_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_960_720.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2014/09/13/21/30/dinner-table-444434_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2020/02/01/06/13/vegan-4809593_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2019/07/21/01/36/tacos-al-pastor-4351813_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2021/04/05/14/48/cheese-platter-6153716_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2020/09/21/05/58/coffee-5589038_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_1280.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
          <SwiperSlide className=''>
               <NavLink to={'order'}><img src='https://cdn.pixabay.com/photo/2019/06/20/21/15/taco-4288033_960_720.jpg' className='size-48 mx-10 my-5 rounded-full object-cover hover:opacity-55 transition-all duration-500 '/></NavLink>
          </SwiperSlide>
      </Swiper>
          </div>
      </div>
      <div className='bg-blue-600 rounded-3xl sm:rounded-none w-[90vw] m-[5%] sm:m-0 sm:w-full py-16 sm:p-0 sm:h-40 flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-14'>
        <div className='flex items-center gap-3'>
          <i className="ri-takeaway-fill text-5xl text-white"></i>
          <p className='text-sm flex flex-col text-white'><span className='text-xl font-semibold'>Fast Delivery</span> To Your Door</p>
        </div>
        <div className='flex items-center gap-3'>
          <i className="ri-handbag-fill text-5xl text-white"></i>
          <p className='text-sm flex flex-col text-white'><span className='text-xl font-semibold'>Table Reservation</span> At our Restaurant</p>
        </div>
        <div className='flex items-center gap-3'>
          <i className="ri-customer-service-2-fill text-5xl text-white"></i>
          <p className='text-sm flex flex-col text-white'><span className='text-xl font-semibold'>Available for You</span> <NavLink to={'support'} className={'underline underline-offset-4'}>Online Support </NavLink></p>
        </div>
        <div className='flex items-center gap-3'>
          <i className="ri-smartphone-line text-5xl text-white"></i>
          <p className='text-sm flex flex-col text-white'><span className='text-xl font-semibold'>Order on the Go</span> From the Website</p>
        </div>
      </div>
          <h1 className='text-center text-2xl pb-5 pt-16 bg-white'>Order By Categories</h1>
      <div className='sm:h-[75vh] w-full flex flex-col gap-5 items-center justify-center bg-white'>
          <div className='flex flex-col sm:flex-row items-center justify-center border rounded-lg border-zinc-500 sm:h-96 my-10 sm:my-0'>
               <div className=' border-b sm:border-r border-zinc-500 w-80 h-full flex flex-col items-center justify-center gap-5 py-5 sm:py-0'>
                    <img className='h-[70%]' src="https://static.wixstatic.com/media/5f9826_8470ef89a7db4145a950db1dbdc66548~mv2.png/v1/fill/w_279,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="Img no." />
                    <NavLink to={'order'} className={'px-3 py-1.5 rounded-full bg-blue-500 hover:bg-white border-2 border-blue-500 hover:text-blue-500 font-medium transition-all duration-500 text-white'}>Starters</NavLink>
               </div>
               <div className=' border-b sm:border-r border-zinc-500 w-80 h-full flex flex-col items-center justify-center gap-5 py-5 sm:py-0'>
                    <img className='h-[70%]' src="https://static.wixstatic.com/media/5f9826_c8a8d4f37fbd441dabf300bafa91c1b3~mv2.png/v1/fill/w_293,h_293,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3.png" alt="Img no." />
                    <NavLink to={'order'} className={'px-3 py-1.5 rounded-full bg-blue-500 hover:bg-white border-2 border-blue-500 hover:text-blue-500 font-medium transition-all duration-500 text-white'}>Main Course</NavLink>
               </div>
               <div className='w-80 h-full flex flex-col items-center justify-center gap-5 py-5 sm:py-0'>
                    <img className='h-[70%]' src="https://static.wixstatic.com/media/5f9826_53a8525fcaa34ad7846fa6c993743677~mv2.png/v1/fill/w_244,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png" alt="Img no." />
                    <NavLink to={'order'} className={'px-3 py-1.5 rounded-full bg-blue-500 hover:bg-white border-2 border-blue-500 hover:text-blue-500 font-medium transition-all duration-500 text-white'}>Beverages</NavLink>
               </div>
          </div>
      </div>
      <Aboutmin/>
    </div>
  )
}

export default Top
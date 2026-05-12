

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full"
    >
      {/* Hero 1 */}
      <SwiperSlide>
        <section className="min-h-[500px] bg-[#faf7ef] ">
       <div className="flex flex-col md:flex-row item center justify-between gap-14 md:gap-8">
         <div className="md:wd w-[55%] items-center">
          <div className="mt-8">
         <img
            src="/clutch.png"
            alt="Clutch"
            className="w-[180px]"
            />
            </div>

            <h5 className='text-3xl text-teal-950 font-sans py-5'>“I find it comforting that they follow the schedule they provided me with. It establishes trust between us.”</h5>
         <div className="w-40 h-[1px] bg-black"></div>
         <p className="mt-3">6sense HQ consistently delivers what they promise and often more. From sprint planning to weekly reviews, their managed offshore team kept us aligned and on track. We never felt out of the loop. Their process made collaboration feel effortless, and their team felt like a natural extension of ours.</p>
         <div className="flex items-center gap-4 mt-10">
  <img
    src="/mugshot1.webp"
    alt="person"
    className="w-[50px] h-[50px] rounded-full object-cover"
  />

  <div>
    <h4 className="text-[18px] font-bold text-black">Alex d costa</h4>
    <p className="text-[14px] text-gray-600">
      Senior Product Manager at 6sense
    </p>
  </div>
</div>
         </div>
         <div className="bg-[#f7f1e3] text-black w-[450px] h-[450px] mx-auto my-8 p-8 rounded-lg">
            <div className="mt-3">
         <img
            src="/logo4.png"
            alt="logo4"
            className="w-[150px]"
            />
            </div>
            <div>
                <h1 className="font-sans text-4xl mt-5">Project</h1>
                <p className="mt-5 font-sans text-2xl">
                   Web-based employee management platform built by 6sense HQ with ongoing support.

                </p>
                <p className="mt-4">
                    Country
                </p>
                 <div className="flex items-center gap-4 mt-5">
  <img
    src="/americaya.webp"
    alt="Khaet"
    className="w-[50px] h-[50px] rounded-full object-cover"
  />

  <div>
    
    <p className="text-[14px] text-gray-600">
      America
    </p>
    
  </div>

  
</div>
<div>
    <p className="underline mt-8">Read More</p>
  </div>
                

            </div>
            </div>
            

         
         
         
          </div>


        
        </section>
      </SwiperSlide>

      {/* Hero 2 */}
      <SwiperSlide>
        <section className="min-h-[500px] bg-[#faf7ef] ">
       <div className="flex flex-col md:flex-row item center justify-between gap-14 md:gap-8">
         <div className="md:wd w-[55%] items-center">
          <div className="mt-8">
         <img
            src="/clutch.png"
            alt="Clutch"
            className="w-[180px]"
            />
            </div>

            <h5 className='text-3xl text-teal-950 font-sans py-5'>“Their strong technical skills and speed of development are super impressive.”</h5>
         <div className="w-40 h-[1px] bg-black"></div>
         <p className="mt-8">6sense HQ gives startups what they need most: fast, structured development with excellent technical skills. Their Agile process, clear communication, and flexibility made them a dependable partner for delivering features on time.</p>
         <div className="flex items-center gap-4 mt-15">
  <img
    src="/mugshot2.webp"
    alt="person"
    className="w-[50px] h-[50px] rounded-full object-cover"
  />

  <div>
    <h4 className="text-[18px] font-bold text-black">Kareem Abdur jobbar</h4>
    <p className="text-[14px] text-gray-600">
      Senior Product Manager at Meta
    </p>
  </div>
</div>
         </div>
         <div className="bg-[#f7f1e3] text-black w-[450px] h-[450px] mx-auto my-8 p-8 rounded-lg">
            <div className="mt-3">
         <img
            src="/logo3.png"
            alt="logo3"
            className="w-[150px]"
            />
            </div>
            <div>
                <h1 className="font-sans text-4xl mt-5">Project</h1>
                <p className="mt-5 font-sans text-2xl">
                    Custom sports marketplace built by 6sense HQ to connect athletes and coaches.

                </p>
                <p className="mt-3">
                    Country
                </p>
                 <div className="flex items-center gap-4 mt-5">
  <img
    src="/swiss.webp"
    alt="Khaet"
    className="w-[50px] h-[50px] rounded-full object-cover"
  />
  <div>   
    <p className="text-[14px] text-gray-600">
      Switzerland
    </p>   
  </div> 
</div>
<div>
    <p className="underline mt-8">Read More</p>
  </div>
            </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

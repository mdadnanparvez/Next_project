
import Banner1 from "./components/Banner1";
import Hero1 from "./components/Hero1";
import HeroSwiper from "./components/HeroSwiper";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
  <div className="bg-white text-black w-[90%] mx-auto my-8 p-8 rounded-lg border border-amber-400">
    
    <div >
      <Hero1 />
    </div>
    
  </div>
  <div className="mt-10">
      <Banner1/>

    </div>
    <div className='mt-15 text-center pb-5'>
      <p className='text-2xl font-serif text-[#c89b47]'>Testimonials</p>
      <h5 className='text-5xl text-teal-950 font-bold py-5'>
        Words from Our <span className='text-[#c89b47] font-bold'>Clients</span> 
        </h5>

    </div>

    <div className="bg-[#faf7ef] text-black w-[90%] mx-auto my-8 p-8 rounded-lg border border-b-gray-400">
    
    <div >
      <HeroSwiper/>
      
    </div>
    
  </div>
</main>
  );
}


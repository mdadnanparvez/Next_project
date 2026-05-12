import Marquee from "react-fast-marquee";

export default function Banner1() {
  return (
    <>
    <div className="text-center bg-[#faf7ef] min-h-[200px] pb-10">
        
        <h5 className='text-5xl text-teal-950 font-bold py-5'>Trusted by <span className='text-[#c89b47] font-bold'>50+ companies</span> Worldwide</h5>
        <p className='text-xl font-serif mt-5'>We’re an industry-leading team of software developers dedicated to transforming creative leaders’ revolutionary ideas into </p>
        <p className='text-xl font-serif'>reality.</p>
    <Marquee >
    <img src="/logo1.png"
    className="w-[220px] py-2 px-6 mt-5 mix-blend-multiply" />
    <img src="/logo2.png " 
    className="w-[220px] py-2 px-6 mt-5 mix-blend-multiply" />
    <img src="/logo3.png"
    className="w-[220px] py-2 px-6 mt-5 mix-blend-multiply" />
    <img src="/logo4.png"
    className="w-[220px] py-2 px-6 mt-5 mix-blend-multiply" />
    <img src="/logo5.png"
    className="w-[240px] py-2 px-6 mt-5 mix-blend-multiply" />
    <img src="/logo6.png"
    className="w-[220px] py-2 px-6 mt-5 mix-blend-multiply" />
    </Marquee>

         
    
    
    </div>
    

    </>

    

  )
}

import { BadgeCheck } from "lucide-react";
    
 
export default function Hero1() {
  return (
    <div className="flex flex-col md:flex-row item center justify-between gap-14 md:gap-8">
        
      
      <div className="md:wd w-[45%] items-center">
        <span className="inline-flex items-center bg-amber-50 border border-amber-300 rounded-full px-5 py-2 text-sm font-medium text-amber-700">
        Offshore Software Company
        </span>
        <h5 className='text-5xl text-teal-950 font-bold py-5'>
        Launch <span className='text-[#c89b47] font-bold'>2x Faster</span> with Vetted Offshore Team
        </h5>
        <p className="py-5">
            We help non-technical and early-stage founders build and scale products with structured offshore teams.
    </p>
    <div className="flex items-center gap-3">
    <BadgeCheck
    size={28}
    color="#0f4c4c"
    strokeWidth={2}
     />
     <p>Top 0.5% devs at <span className="font-bold"> 1/10th cost. </span></p>
     </div>
     <div className="flex items-center gap-3 py-2">
    <BadgeCheck
    size={28}
    color="#0f4c4c"
    strokeWidth={2}
     />
     <p>Onboard in about <span className="font-bold">7 days.</span></p>
     </div>
     <div className="flex items-center gap-3 ">
    <BadgeCheck
    size={28}
    color="#0f4c4c"
    strokeWidth={2}
     />
     <p> <span className="font-bold">We manage ops;</span> you lead direction.</p>
     </div>
     <div className="flex items-center gap-6">
    

  
  <button className="bg-[#c89b47] text-white px-4 py-2 rounded-md text-2xl font-bold hover:opacity-90 transition mt-5">
    Schedule a Call
  </button>

  
  <button className="border border-[#c89b47] text-[#c89b47] px-4 py-2 rounded-md text-2xl font-bold bg-white hover:bg-[#faf6ee] transition mt-5">
    Get Cost Estimate
  </button>

</div>
     <div className="mt-8">
  <img
    src="/clutch.png"
    alt="Clutch"
    className="w-[180px]"
  />
</div>
</div>
   
     <div className="mt-8">
  <img
    src="/heroImage.webp"
    alt="Clutch"
    className="w-[500px]"
  />
</div>
      
      
    </div>
  );
}
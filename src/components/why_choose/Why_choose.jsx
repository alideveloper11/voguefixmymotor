
import KeyIcon from '@mui/icons-material/Key';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarIcon from '@mui/icons-material/Star';


import Link from "next/link";
export default function why_choose(){
    return(
 <div className="flex flex-wrap m-6 md:mx-16 text-left text-black bg-white" style={{colorScheme:"light"}}>

         <div className="w-full md:w-1/2">
                <h2 className="font-bold text-3xl md:text-4xl">
                    Why Choose Vogue Fix My Motor?
                </h2>
                <p className="text-[14px] mt-4 text-[#6B7280]">Based in Grays, Essex, our mission is to provide expert engine repair and diagnostics with a focus on quality, reliability, and
                    customer satisfaction. Here&apos;s why drivers across Grays, Tilbury, Purfleet and surrounding areas trust us:
                    </p>

          <div className=" text-left flex flex-wrap gap-6 ">
               <div className="w-full md:w-11/24 mt-5">

<KeyIcon sx={{ transform: "rotate(300deg) scaleX(-1)", fontSize: 30 }} className="text-[#028D53]" />
               <p className="font-bold text-[20px] mt-2">Comprehensive Engine Diagnostics</p>
               <p className="mt-2 text-[14px]">
                We use state-of-the-art scanning tools to perform
                precise engine diagnostics, identifying faults fast and
                ensuring your car runs at its best.
               </p>
               </div>
               <div className="w-full lg:w-11/24 mt-5">
                    <SecurityIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
                    <p className="font-bold text-[20px] mt-2">Experienced Technicians</p>
               <p className="mt-2 text-[14px]">
               Our team brings years of hands-on experience in engine repair
                    and motor vehicle servicing, tackling even the most
                    complex engine problems with confidence.
               </p>
               </div>
                 <div className="w-full lg:w-11/24 mt-5">


                    <WatchLaterIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
               <p className="font-bold text-[20px] mt-2">Fast Turnaround Times</p>
               <p className="mt-2 text-[14px]">
                We understand your time matters. Our efficient
                workflow means most repairs are completed quickly
                so you&apos;re back on the road with minimal disruption.
               </p>
               </div>

               <div className="w-full lg:w-11/24 mt-5">

                    <StarIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />

               <p className="font-bold text-[20px] mt-2">Honest & Transparent Service</p>
               <p className="mt-2 text-[14px]">
                No hidden charges, no unnecessary work. We provide
                honest assessments, clear pricing, and top-quality
                repairs that customers across Essex rely on.
               </p>
               </div>

               </div> 
               </div>
               
<div className="w-full md:w-1/2">
  <div className="flex justify-start">
    
    <div className="w-full flex justify-center mt-5 md:mt-0">
    <div className="w-full"  style={{width:"100%"}}>
      <img src="/explore/1.jpg" alt="Engine repair technician at Vogue Fix My Motor, Grays Essex" className="w-full h-[400px] object-cover rounded  rounded-[10px]"/>
    </div>
    </div>
    
  </div>
  <div className="w-full mt-3 text-left">
            <p className="text-[20px]">Ready to Book Your Engine Diagnostic?</p>
            <p className='text-[12px] text-[#4B5563]'>Book a diagnostic or get expert advice from our highly trained technicians in Grays, Essex.
                Trust Vogue Fix My Motor for reliable engine repair every time.</p>

            <div className="w-full flex justify-start items-left ">
              <Link href="contact/">
          <button
            className="
            block
            mt-5
            bg-[#088751]
            text-white
            px-12
            py-3
            rounded-lg
            font-bold
            hover:bg-green-800
            "
            >
            Get a Free Quote
            </button>
            </Link>
        </div>
        </div>
        
</div>
          </div>
        
    )
}


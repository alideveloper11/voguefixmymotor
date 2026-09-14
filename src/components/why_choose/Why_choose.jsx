
import KeyIcon from '@mui/icons-material/Key';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from "@mui/icons-material/Speed";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Link from "next/link";
export default function why_choose(){
    return(
 <div className="flex flex-wrap mx-6 lg:mx-16 pt-5 pb-10  text-left text-black bg-white" style={{colorScheme:"light"}}>

         <div className="w-full pt-5 lg:w-1/2">
                <h2 className="font-bold text-2xl md:text-3xl">
                    Why Grays Drivers Choose Us
                </h2>
                <h3 className=" mt-5 text-[#6B7280] leading-7 tracking-[0.04em] text-[16px] font-normal max-w-[700px]">
 Independent, straightforward, and genuinely knowledgeable, we've built our reputation on honest diagnostics and workmanship customers can rely on across Grays and Essex.
</h3>

          <div className=" text-left flex flex-wrap gap-6 ">
               <div className="w-full lg:w-11/24 mt-5">

<WorkspacePremiumIcon sx={{ transform: "rotate(300deg) scaleX(-1)", fontSize: 30 }} className="text-[#028D53]" />
               <p className="font-bold text-[20px] leading-7 tracking-[0.01em]  mt-2">Specialist Knowledge</p>
               <p className="mt-2 text-[14px] leading-7 tracking-[0.01em] ">
                Genuine expertise across Range Rover, Land Rover, and mainstream vehicle brands alike.
               </p>
               </div>
               <div className="w-full lg:w-11/24 mt-5">
                    <FactCheckIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
                    <p className="font-bold text-[20px] leading-7 tracking-[0.01em]  mt-2">Honest Diagnostics</p>
               <p className="mt-2 text-[14px] leading-7 tracking-[0.01em] ">
               Faults confirmed through proper testing, not guesswork, before any repair quote is given.
               </p>
               </div>
                 <div className="w-full lg:w-11/24 mt-5">


                    <ReceiptLongIcon  sx={{fontSize: 30 }}  className="text-[#028D53]"  />
               <p className="font-bold text-[20px] leading-7 tracking-[0.01em]  mt-2">Transparent Pricing</p>
               <p className="mt-2 leading-7 tracking-[0.01em]  text-[14px]">
          Clear, itemised quotes before work begins, with no hidden charges added afterward.
               </p>
               </div>

               <div className="w-full lg:w-11/24 mt-5">

                    <SpeedIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />

               <p className="font-bold text-[20px] leading-7 tracking-[0.01em]  mt-2">Fast Turnaround</p>
               <p className="mt-2 text-[14px] leading-7 tracking-[0.01em] ">
              Efficient scheduling and same-day repairs wherever possible, minimising your time off the road
               </p>
               </div>

               </div> 
               </div>
               
<div className="w-full pt-5 lg:w-1/2">
  <div className="flex justify-start">
    
    <div className="w-full flex justify-center mt-5 md:mt-0">
    <div className="w-full"  style={{width:"100%"}}>
      <img src="/explore/1.webp" alt="Engine repair technician at Vogue Fix My Motor, Grays Essex" className="w-full h-full lg:h-[500px] object-cover rounded  rounded-[10px]"/>
    </div>
    </div>
    
  </div>
  <div className="w-full mt-5 text-left">
            <p className="text-[20px] leading-7 tracking-[0.01em] ">Ready to Book Your Engine Diagnostic?</p>
            <p className='text-[12px] leading-7 tracking-[0.01em] text-[#4B5563]'>Book a diagnostic or get expert advice from our highly trained technicians in Grays, Essex.
                Trust Vogue Fix My Motor for reliable engine repair every time.</p>

            <div className="w-full flex justify-center lg:justify-start items-left ">
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


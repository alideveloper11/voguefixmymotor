import KeyIcon from '@mui/icons-material/Key';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarIcon from '@mui/icons-material/Star';


export default function why_choose(){
    return(
        <div className="flex flex-wrap  m-10 text-left">

         <div className="w-full md:w-1/2">
                <h1 className="font-bold text-[20px]">
                    Why Choose Vogue Fix My Motor?
                </h1>
                <p className="text-[14px] text-[#6B7280]">Our mission is to provide excellent auto services with a focus on quality, reliability, and
                    customer satisfaction. Heres why we stand out:
                    </p>
                    
          <div className=" text-left flex flex-wrap gap-6 ">
               <div className="w-full md:w-11/24 mt-5">

<KeyIcon sx={{ transform: "rotate(300deg) scaleX(-1)", fontSize: 30 }} className="text-[#028D53]" />
               <p className="font-bold text-[20px] mt-2">Comprehensive Diagnostics</p>
               <p className="mt-2 text-[14px]">
                We use state-of-the-art tools to perform
                precise engine diagnostics, ensuring
                your car runs optimally.
               </p>
               </div>  
               <div className="w-full lg:w-11/24 mt-5">
                    <SecurityIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
                    <p className="font-bold text-[20px] mt-2">Experienced Technicians</p>
               <p className="mt-2 text-[14px]">
               With years of experience in motor vehicle
                    service, we tackle even the most
                    complex engine issues.
               </p>
               </div>    
                 <div className="w-full lg:w-11/24 mt-5">


                    <WatchLaterIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
               <p className="font-bold text-[20px] mt-2">Trustworthy Repairs</p>
               <p className="mt-2 text-[14px]">
                Our customers trust us because we
                always provide honest assessments and
                top quality repairs.
               </p>
               </div>  

               <div className="w-full lg:w-11/24 mt-5">

                    <StarIcon sx={{fontSize: 30 }}  className="text-[#028D53]"  />
                 
               <p className="font-bold text-[20px] mt-2">Trustworthy Repairs</p>
               <p className="mt-2 text-[14px]">
                Our customers trust us because we
                always provide honest assessments and
                top quality repairs.
               </p>
               </div>

               </div> 
               </div>
               
<div className="w-full md:w-1/2">
  <div className="flex justify-center">
    
    <div className="w-full flex justify-center mt-5 md:mt-0">
    <div className="w-full"  style={{width:"100%"}}>
      <img src="/explore/1.jpg" className="rounded-[10px]"/>
    </div>
    </div>
    
  </div>
  <div className="w-full mt-3">
            <p className="text-[20px]">Ready for Your Next Step?</p>
            <p className='text-[12px] text-[#4B5563]'>Book a diagnostic or get expert advice from our highly trained technicians. 
                Trust us forreliable auto services every time.</p>
                        <p>
            <button
            className="
            block
            mx-auto
            bg-[#088751]
            text-white
            px-12
            py-3
            rounded
            hover:bg-green-800
            "
            >
            Get Qoutation
            </button></p>
        </div>
</div>
          </div>
        
    )
}


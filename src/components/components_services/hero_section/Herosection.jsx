import CallIcon from '@mui/icons-material/Call';

import Link from "next/link";
export default function Herosection()
{
        return(
          
          <>
    <div className="flex  flex-wrap  min-h-[480px] items-center  justify-center" id="second_hero_section">
      <div className="w-full my-10 items-center justify-center">
        <center><div className='w-[80%] lg:w-[60%] '>
            <h1 className="text-white font-bold  leading-12 tracking-[0.01em] text-4xl md:text-5xl">
              Car Services & Engine Repair in Grays, Essex
            </h1>
            <p className="text-white  leading-7 tracking-[0.015em] mt-2   text-md md:text-lg  text-justify">
              Vogue Fix My Motor offers a full range of engine repair and car services in Grays, Essex. From diagnostics and clutch replacement to DPF cleaning and head gasket repair — all makes and models welcome.
            </p>
            </div></center>
      <div className="w-full ">
             <center> <div className="bg-black shadow-[0_0_15px_#4f4f4f] py-5 mt-5 w-[80%] lg:w-[60%] " style={{ borderRadius:"10px"}}>
              <p className="text-white  font-bold ">Enter your registration for a free instant quote</p>
            <div className="flex  items-center justify-center">
                      
                                             <Link
  href="tel:01375531355"
  className="m-1 ml-3 text-white bg-[#009051] hover:bg-[#05824b] mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%] md:w-[40%] rounded-sm h-[35px] shadow flex items-center justify-center gap-2"
>
  <CallIcon fontSize="small" />
  01375531355
</Link>
                 <Link href="/contact" className="m-1 mr-3 text-white bg-black hover:bg-[#434a47] border-[2px] border-white mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%] md:w-[40%] rounded-sm h-[35px] shadow flex items-center justify-center">
  Request A Quote
</Link>                              
            </div> 
                                                  
            <div className="flex items-center justify-center">
            <p className="text-[#bdbdbd] mb-3  text-[12px] md:text-[16px]">Don't have the Reg?</p>
            <p className="text-white font-bold mb-3 text-[12px] md:text-[16px]">Find vehicle manually</p>
            </div>
            </div>
            </center> 
      </div>
      </div>
      
    </div>

    <div>
    
    </div>
    </>
        )
}


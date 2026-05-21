"use client";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const [count, setCount] = useState(10);
  const router = useRouter();

  useEffect(() => {
    // countdown
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // redirect after 10 sec
    const timeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  

  return (
  <div className="w-full min-h-[400px] flex items-center justify-center">
  <div className="w-[70%] m-10 md:w-[50%] min-h-[300px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-lg">
    <div className="flex flex-wrap ">
      <div className="w-full">
<div className="flex justify-center">
      <div className='p-3 mt-5 rounded-[50%] border-2 border-[#009051]'>
        <CheckIcon style={{ color: "green", fontSize: 24 }} />
        </div>
        </div>
      </div>
      <div className="w-full ">
    <div className="flex mt-5 justify-center">
      
      <p className='text-2xl md:text-3xl font-bold'>&nbsp;INQUIRY </p>
      <p  className='text-2xl md:text-3xl font-bold text-[#009051]'>&nbsp;RECEIVED!</p>
      </div>

      </div>
      <div className="w-full mt-5 text-center text-md text-[#6b6b6b] ">
        Thank you for reaching out to Vogue Fix My Motor.
Our expert team will review your request and respond to you as soon as possible.
      </div>
    </div>
    <div className="w-full mt-5">
         <div className="flex  items-center justify-center">
                      
                                                                                             <Link href="tel:1374531355"
          className="m-1 ml-3 text-white bg-[#009051] hover:bg-[#05824b] mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%] md:w-[40%] rounded-sm h-[35px] shadow flex items-center justify-center gap-2"
        >
          <CallIcon fontSize="small" />
          1374531355
        </Link>
                         <Link  href="mailto:info@voguefixmymotor.com" className="m-1 mr-3 text-white bg-black hover:bg-[#434a47] border-[2px] border-white mb-3 font-semibold text-[10px] md:text-lg px-6 w-[60%] md:w-[40%] rounded-sm h-[35px] shadow flex items-center justify-center">
           <EmailIcon fontSize="small"/> Email Us
        </Link>          
                    </div> 
                    <div className="w-full mt-5">
                      <div className='flex justify-center'>
   <p>REDIRECTING IN <span className='text-[#009051]'>{count}</span> SECONDS...</p>
                    
                      </div>
                   </div>    
                   <div className="w-full mt-5 mb-5">
                      <div className='flex justify-center'>
                      <p>
                         <Link href="/" className='font-bold text-[#009051]'>
                        &lt; back to work shop
                        </Link>
                      </p>
                    
                      </div>
                   </div>       
    </div>
  </div>
</div>
    

    
  );
}
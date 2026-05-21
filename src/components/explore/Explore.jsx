"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Explore()
{
return(
  <motion.div
   initial={{
    opacity: 0,
    x: 80,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
  }}
 className="flex w-full flex-wrap bg-[#F3F4F6]">
        <div className="flex w-full flex-wrap mt-20 mx-7 md:mx-16 mb-5">
             <div className=" text-left w-full md:w-6/12">

                <p className="font-bold text-[28px]">
                    Explore Our Repair
                </p>
                <p className="text-left pt-5 pb-5">
                   Results speak louder than words. So take a closer look at the quality behind
                    every repair we complete. From engine diagnostics to full restorations,
                     our gallery showcases real vehicles worked on by our experienced technicians.
                </p>
                <div>
                    <Link href="gallery/">
                    <button className=" mb-10 md:mb-0 border px-4 py-2 rounded-lg bg-[#059669] hover:bg-[#0b5a41]"
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold", width:"250px" }}>
                        View All Gallery
                    </button>
                    </Link>
                    </div>
            </div>  
            <div className="flex w-full md:w-6/12 flex-wrap ">
                <div className="mb-10 flex justify-end items-end" style={{width:"100%"}}>
                    <img src="/explore/1.jpg" alt="" className="w-full object-cover rounded  h-[350px] lg:h-[450px] md:h-[400px]"  style={{borderRadius:"10px", width:"100%"}} />
                </div>
            </div>  


      
        </div>
    </motion.div>
    );
}
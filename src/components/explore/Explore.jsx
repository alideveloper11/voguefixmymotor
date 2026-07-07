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
 className="flex w-full flex-wrap bg-[#F3F4F6] text-black" style={{colorScheme:"light"}}>
        <div className="flex w-full flex-wrap mt-10 mx-3 lg:mx-13 mb-5">
             <div className=" text-left w-full my-5 lg:w-6/12">
<div className="mx-2">
                <h2 className="text-3xl font-bold">
                    Explore Our Repair Gallery
                </h2>
                <p className="text-left pt-5 pb-5 leading-7 tracking-[0.04em] text-[16px]">
Every vehicle tells a story, and our gallery reflects the care, skill, and attention we put into every repair. From advanced engine diagnostics and timing chain replacements to complete engine rebuilds and routine servicing, you can explore real work completed by our experienced technicians in Grays, Essex.
</p><p className="text-left pt-5 pb-5 leading-7 tracking-[0.04em] text-[16px]">
These are genuine vehicles repaired in our workshop, showing the quality of our workmanship and the high standards we deliver every day. Every repair is carried out with precision and attention to detail, helping to ensure your vehicle performs safely and reliably.
</p><p className="text-left pt-5 pb-5 leading-7 tracking-[0.04em] text-[16px]">
Whether it is a family car, a performance vehicle, or a commercial van, every job is completed using professional techniques and quality parts to deliver dependable, long-lasting results. We take pride in treating every vehicle with the same level of care, no matter the size or complexity of the repair.
</p><p className="text-left pt-5 pb-5 leading-7 tracking-[0.04em] text-[16px]">
Browse our gallery to see why drivers across Grays, Tilbury, Purfleet, Ockendon, Hornchurch, and the surrounding Essex areas trust Vogue Fix My Motor. We believe our work speaks for itself, giving you the confidence that your vehicle is in safe and experienced hands before you even visit our workshop.
</p>
                <div>
                    <Link href="gallery/">
                    <button className=" mb-10 md:mb-0 border text-lg px-4 py-2 rounded-lg bg-[#059669] hover:bg-[#0b5a41]"
                        style={{ color:"white", fontWeight:"bold", width:"250px" }}>
                        View All Gallery
                    </button>
                    </Link>
                    </div>
            </div>  
            </div>
            <div className="flex w-full my-5 lg:w-6/12 flex-wrap ">
                <div className="mb-10 mx-2 flex justify-end items-end" style={{width:"100%"}}>
                    <img src="/explore/1.webp" alt="Car engine repair work at Vogue Fix My Motor, Grays Essex" className="w-full object-cover rounded  min-h-[350px] lg:min-h-[450px] md:min-h-[400px]"  style={{borderRadius:"10px", width:"100%"}} />
                </div>
            </div>  


      
        </div>
    </motion.div>
    );
}
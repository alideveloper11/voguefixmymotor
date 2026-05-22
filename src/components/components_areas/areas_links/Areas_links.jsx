"use client";
import { motion } from "framer-motion";

import { locations } from "@/lib/Areas_data/areas_list";
import Link from "next/link";
export default function Areas_links() {
  return (
    <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
       id="areas" className="flex flex-wrap w-full py-10 px-10 text-black bg-white" style={{colorScheme:"light"}}>
      <div className="flex flex-wrap ">
      <div className="w-full">
        <div className="w-full">
            <center>
              <h2 className="font-bold text-2xl mt-5">Engine Repair Areas We Cover Near Grays, Essex</h2>
            <p className="text-[#4B5563] text-sm mt-1 mb-8">Vogue Fix My Motor provides expert engine repair and car services across Grays and all surrounding areas within a 10-mile radius. Select your area below.</p>
            </center>
          </div>
        <div className="flex flex-wrap">
          
          {locations.map((item, index) => (
            <div
              key={item.id}
              className="w-6/12 md:w-4/12 lg:w-3/12 mb-5 text-center flex items-center justify-center"
            >
               <Link href={`/areas/${item.slug}`}>  
            <button
  className="cursor-pointer border-[2px] bg-[#F8FFFB] border-[#16A34A] pt-2 pb-2 text-[10px] w-[100px] md:text-[14px] md:w-[200px] rounded-[10px] flex items-center gap-2 pl-3"
>
  <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span>
  {item.name}
</button>
</Link>
            </div>
          ))}

        </div>
        
      </div>
    </div>
    </motion.div>
  );
}
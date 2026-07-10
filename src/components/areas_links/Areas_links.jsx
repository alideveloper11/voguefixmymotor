"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export default function Areas_links({ locations }) {
     const pathname = usePathname();
  return (
      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className=" leading-7 tracking-[0.04em] w-full py-5 px-5 lg:px-15 text-black bg-white" style={{colorScheme:"light"}}>
    <div className="flex pb-3 flex-wrap ">
      <div className="w-full"><center>
        <div className="w-[90%] md:w-[80%] py-5 lg:w-[70%]">
              <h2 className="font-bold text-2xl md:text-3xl ">Engine Repair Areas We Cover Near Grays, Essex</h2>
            <p className="text-[#4B5563] leading-7 tracking-[0.04em] text-[16px]  py-5 ">Vogue Fix My Motor provides specialist engine repair and diagnostics across Grays and all surrounding areas within a 10-mile radius.</p>
          </div></center>
        <div className="flex flex-wrap">
          
          {locations.map((item) => (
            <div
              key={item.id}
              className="w-6/12 md:w-4/12 lg:w-3/12 mb-5 text-center flex items-center justify-center"
            >
               <Link href={`/areas/${item.slug}`} className="w-full h-full text-center flex justify-center ">  
            <button
  className="cursor-pointer group shadow-[0_0_10px_#8f8f8f] font-bold flex flex-wrap hover:text-white h-full gap-x-0 items-center  justify-between bg-[white]  px-2 py-4 text-[10px] w-[90%] md:text-[14px]  rounded-[10px] flex items-center hover:bg-[#16A34A] "
>
  <span className="bg-[#e9f2ed] w-6/24 md:w-5/24 lg:w-4/24 group-hover:bg-[#959c98] py-[3px] px-[5px]  rounded-full "><LocationOnIcon className="w-2 h-2 group-hover:text-white text-[#16A34A] rounded-full" /></span>
  <div className="w-15/24 md:w-16/24 lg:w-17/24 text-left px-2 leading-5">
    {item.name}
    <p className=" flex font-none font-thin group-hover:text-white text-[8px] sm:text-[9px] md:text-[11px] text-[#16A34A] text-left w-full">
            View Services 
  </p>
  </div>
  
<span className="w-3/24">
  <ChevronRightIcon className="text-black group-hover:text-white font-normal"/>
  </span>
</button>
</Link>
            </div>
          ))}

        </div>
           {pathname !== "/areas" && (
        <div>
  <Link href="/areas">         
<button
className="
cursor-pointer
block
mx-auto
my-3
bg-[#088751]
text-white
px-12
py-2
font-bold
rounded-lg
"
>
View All Service Areas
</button></Link> 
        </div>
         )}
      </div>
    </div>
    </motion.div>
  );
}
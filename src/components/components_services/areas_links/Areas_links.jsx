"use client";
import { motion } from "framer-motion";
import { locations } from "@/lib/services_data/areas_list";


import Link from "next/link";
export default function Areas_links() {
  return (
      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }} className="m-10">
    <div className="flex flex-wrap ">
      <div className="w-full">
        <div className="w-full">
            <center>
              <h2 className="font-bold text-2xl mt-5">Car Service Areas We Cover Near Grays, Essex</h2>
            <p className="text-[#4B5563] text-sm mt-1 mb-8">Vogue Fix My Motor provides specialist car repair and engine services across Grays and all surrounding areas within a 10-mile radius.</p>
            </center>
          </div>
        <div className="flex flex-wrap">
          
          {locations.map((item, index) => (
            <div
              key={item.id}
              className="w-6/12 md:w-4/12  lg:w-3/12 mb-5 text-center flex items-center justify-center"
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
        <div>
  <Link href="/areas">         
<button
className="
cursor-pointer
block
mx-auto
mt-5
bg-[#088751]
text-white
px-12
py-2
rounded-lg
"
>
View All Service Areas
</button></Link> 
        </div>
      </div>
    </div>
    </motion.div>
  );
}
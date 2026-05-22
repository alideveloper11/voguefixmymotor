"use client";
import { motion } from "framer-motion";

import { getcontent3 } from "@/lib/services_data/content_data";
const data = getcontent3();
export default function Content3(){

return (
  <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
   className="flex w-full flex-wrap pb-8 pt-5 bg-white text-black" style={{colorScheme:"light"}}>
        <div className="w-full text-left mx-5 md:mx-15">
          <p className="block md:inline font-bold" style={{fontSize:"20px"}}>{data.heading},</p>
          <p className="block md:inline  font-bold"  style={{fontSize:"20px", color:"#059669"}}>{data.greenHeading}</p>
        </div>  
        
        <div className="w-full text-left">
           {data.paragraph.map((item,index)=>(
//    
          <p  key={index} className="mt-5 mx-5 md:mx-15"> {item}  </p>
           ))}
        </div>
        
        <div className="w-full text-left">
        <ul className="list-disc mx-10 md:mx-20 mt-5">
  {data.bullets.map((item,index)=>(
    <li key={index}>{item}</li>
  ))}
</ul>
        </div>
        
      

  </motion.div>
//   <div>
//     <h1>{data.heading}</h1>
//     <h2>{data.greenHeading}</h2>
//      {data.paragraph.map((item,index)=>(
//     <p key={index}>{item}</p>
//  ))}
    

//     <ul>
//       {data.bullets.map((item,index)=>(
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
 );
}
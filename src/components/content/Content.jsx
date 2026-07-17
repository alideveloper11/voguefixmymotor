"use client";
import { motion } from "framer-motion";


export default function Content({data}){

return (
  <div 
   className="flex w-full flex-wrap py-5 bg-white leading-7 tracking-[0.04em] text-black" style={{colorScheme:"light"}}>
        <div className="w-full md:w-[70%] text-left mx-5 md:mx-15">
          <p className="block md:inline text-2xl md:text-3xl font-bold">{data.heading},</p>
          <p className="block md:inline text-2xl md:text-3xl font-bold"  style={{ color:"#059669"}}>{data.greenHeading}</p>
        </div>  
        
        <div className="w-full text-left leading-7 tracking-[0.04em] text-[16px] ">
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
        
      

  </div>
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
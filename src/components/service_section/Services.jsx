"use client";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function Services({servicesData})
{
    const [count, setCount] = useState(0);
   const pathname = usePathname();
                return (
               <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
                    className="flex flex-wrap py-10 w-full text-sm bg-[#F3F4F6] text-black" style={{colorScheme:"light"}}>
               
                    
           
                     <div className="w-full flex mx-3 lg:mx-13 flex-wrap">
                        
                        <div className="w-full">
                       
                   
                     <div className="w-full flex flex-wrap justify-center">
                        <div className="w-full text-center text-black">
                       <div className="">
                        <h2 className="font-bold text-2xl md:text-3xl">Engine Repair & Car Services in Grays, Essex</h2>
                         <center><p className=" w-full md:w-[80%]  lg:w-[60%] text-center leading-7 tracking-[0.04em] "
                         style={{ fontSize:"16px",marginBottom:"20px", marginTop:"10px", color:"#4B5563"}}>
                          From engine diagnostics and rebuilds to full car servicing, Vogue Fix My Motor provides reliable solutions for all makes and models across Grays and the surrounding Essex area.
                          </p>
                          </center>
                        </div>
                       
                    
                     </div>
                     <div className="flex flex-wrap py-5">
                       {servicesData.map((services, index) => (

                         <div key={services.id}
                 className="w-full my-2  md:w-4/12 lg:w-3/12 ">
                  
                <Link href={`/services/${services.slug}`}>   
                           <div className=" relative shadow-[0_0_10px_#919191] overflow-hidden pb-[30px] mx-2 h-full relative group bg-white text-black rounded-xl  hover:bg-[#046b3f] cursor-pointer hover:text-white"
                            >
                              
                              
                                <div className="img-wrapper " >
                                    <img
                                   
                                        src={services.img}
                                        alt={`${services.name} - Vogue Fix My Motor Grays Essex`}
                                        className=" h-[200px] w-full object-cover serviceimg"
                                      
                                         />

                                         <div className="shadow-layer"></div>

                              </div>
                              
                                         <p className="absolute h-[70px] rounded-full left-[-30] top-[-35] flex flex-wrap px-3 py-1 items-end justify-end text-lg text-white font-black text-center w-[70px] bg-[#046b3f]  ">
    <span className="pr-1">{index+1}</span>
  
                                </p>
                                
                             <p className="font-bold md:h-[60px] md:overflow-hidden text-center text-2xl mx-1">
                              {services.name}
                             
                              
                              </p>
               
                            
               
                             <p className="mt-3 mb-15 mx-1  overflow-hidden  ">
                               {services.text}
                           </p>
                    <center>
                            <button
                            className=" absolute bottom-[30px] left-1/2 -translate-x-1/2 group-hover:border-[white] group-hover:text-white block w-1/2 py-2  font-bold border border-[#046b3f] hover:bg-[#046b3f]  cursor-pointer text-[#046b3f] hover:text-white  rounded-lg">
                            read more
                            </button> </center>
                            
                           </div>
                           </Link>  
                         </div>
                       
                       ))}
                    </div>
               </div>
                <div className="w-full text-center text-black">
               {pathname !== "/services" && (
                        <div className="w-24/24 pt-5">
                        
<Link href="/services">
                         <button
                            className="block mx-auto shadow-[0_0_10px_#8f8f8f] font-bold bg-[#088751] hover:bg-[#046b3f]  cursor-pointer text-white px-10 text-lg lg:px-17 py-[8px]  rounded-xl">
                            View All Services
                            </button></Link>
                        </div> 
                        )}
                       </div>
               
               </div>
                
                     </div>
                    
                   </motion.div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
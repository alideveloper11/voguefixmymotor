"use client";
import { motion } from "framer-motion";
import servicesData from "@/lib/servicesData";
import Link from "next/link";

export default function Services()
{
                return (
               <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
                    className="flex flex-wrap w-full text-sm bg-[#F3F4F6]">
               
                    
           
                     <div className="w-full flex flex-wrap">
                        <div className="w-2/24">
                        </div>
                        <div className="w-20/24">
                       
                   
                     <div className="w-full flex flex-wrap justify-center mt-6 md:ml-6 m6-6">
                        <div className="w-full text-center text-black">
                       <div className="mt-5">
                        <h2 className="text-2xl font-bold">Engine Repair & Car Services in Grays, Essex</h2>
                         <center><p className=" w-full md:w-[60%]  lg:w-[40%] text-center "
                         style={{ fontSize:"14px",marginBottom:"20px", marginTop:"10px", color:"#9794B5"}}>
                          From engine diagnostics and rebuilds to full car servicing, Vogue Fix My Motor provides reliable solutions for all makes and models across Grays and the surrounding Essex area.
                          </p>
                          </center>
                        </div>
                       
                    
                     </div>
                       {servicesData.map((services) => (
               
                         <div key={services.id}
                 className="w-full h-full sm:w-full mb-5 md:w-6/12 lg:w-4/12 md:gap-0.5">
                  
                <Link href={`/services/${services.slug}`}>   
                           <div className=" w-full min-h-[450px]  group bg-white rounded-xl w-full md:w-[90%] hover:bg-[#046b3f] cursor-pointer hover:text-white"
                            >
                              
                                <div className="img-wrapper " >
                                    <img
                                   
                                        src={services.img}
                                        alt={`${services.name} - Vogue Fix My Motor Grays Essex`}
                                        className=" h-[230px] w-fullobject-cover serviceimg"
                                      
                                         />
                                         <div className="shadow-layer"></div>
                                </div>
                                
                             <p className="font-bold text-2xl">
                              {services.name}
                             
                              
                              </p>
               
                            
               
                             <p className="mt-3 h-20 overflow-hidden ">
                               {services.text}
                           </p>
                           <div>
               </div>
                            
                      
                            <button
                            className=" group-hover:border-[white] group-hover:text-white block mb-5 mx-auto mt-3 font-bold border border-[#046b3f] hover:bg-[#046b3f]  cursor-pointer text-[#046b3f] hover:text-white px-12 py-[7px] rounded-lg">
                            read more
                            </button> 
                           </div>
                           </Link>  
                         </div>
                       
                       ))}
                    
               </div>
                <div className="w-full text-center text-black">
               
                        <div className="w-24/24 py-7">
                        
<Link href="/services">
                         <button
                            className="block mx-auto mt-3 font-bold bg-[#088751] hover:bg-[#046b3f]  cursor-pointer text-white px-17 py-[7px] rounded-lg">
                            View All Services
                            </button></Link>
                        </div> 
                       </div>
               
               </div>
                
                     </div>
                    
                   </motion.div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
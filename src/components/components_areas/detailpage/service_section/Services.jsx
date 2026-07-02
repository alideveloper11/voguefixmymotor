"use client";
import Link from "next/link";

export default function Services({servicesData})
{
                return (
                   <div
           
                    className="flex flex-wrap w-full text-sm bg-[#F3F4F6]">
               
                     
                               
                                         <div className="w-full flex flex-wrap">
                                            <div className="w-2/24">
                                            </div>
                                            <div className="w-20/24">
                                           
                                       
                                         <div className="w-full flex flex-wrap justify-center mt-6 md:ml-6 m6-6">
                                            <div className="w-full text-center text-black">
                                           <div className="mt-5">
                                            <h2 className="text-2xl font-bold">Car Repair & Engine Services Available in Your Area</h2>
                                             <center><p className=" w-full md:w-[80%]  lg:w-[60%] text-center leading-7 tracking-[0.04em] "
                         style={{ fontSize:"14px",marginBottom:"20px", marginTop:"10px", color:"#4B5563"}}>
                                              Vogue Fix My Motor offers a full range of engine repair and car services to customers across Essex. Browse our services below and book online for a free quote.
                                              </p>
                                              </center>
                                            </div>
                                           
                                        
                                         </div>
                                           {servicesData.map((services) => (
                                   
                                             <div key={services.id}
                                     className="w-full h-full sm:w-full mb-5 md:w-6/12 lg:w-4/12 md:gap-0.5">
                                      
                                    <Link href={`/services/${services.slug}`}>   
                                               <div className=" w-full min-h-[450px]  group bg-white text-black rounded-xl w-full md:w-[90%] hover:bg-[#046b3f] cursor-pointer hover:text-white"
                                                >
                                                  
                                                    <div className="img-wrapper " >
                                                        <img
                                                       
                                                            src={services.img}
                                                            alt={`${services.name} - Vogue Fix My Motor`}
                                                            className=" h-[230px] w-fullobject-cover serviceimg"
                                                          
                                                             />
                                                             <div className="shadow-layer"></div>
                                                    </div>
                                                    
                                                 <p className="font-bold mx-3 text-2xl">
                                                  {services.name}
                                                 
                                                  
                                                  </p>
                                   
                                                
                                   
                                                 <p className="mt-3 h-20 mx-3 overflow-hidden leading-7 tracking-[0.04em]  ">
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
                                   
                                            <div className="w-24/24 pb-5">
                                            
                    <Link href="/services">
                                              <button
                            className="block mx-auto  font-bold bg-[#088751] hover:bg-[#046b3f]  cursor-pointer text-white px-10 lg:px-17 py-[8px] lg:py-[12px] rounded-xl">
                            View All Services
                            </button></Link>
                                            </div> 
                                           </div>
                                   
                                   </div>
                                    
                                         </div>
                    
                   </div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
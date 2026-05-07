"use client"
import servicesData from "@/lib/services_data/servicesData";
import Link from "next/link";

export default function Services()
{
                return (
                   <div id="services" className="flex flex-wrap w-full text-sm bg-[#F3F4F6]">
               
                    
           
                     <div className="w-full flex flex-wrap">
                        <div className="w-2/24">
                        </div>
                        <div className="w-20/24">
                       
                   
                     <div className="w-full flex flex-wrap justify-center ml-6 m6-6">
                        <div className="w-full text-center text-black">
                       <div className="my-5">
                        <p className="text-2xl font-bold">Current Solutions of Your Modern Problems</p>
                         <center><p className=" w-full md:w-[60%]   lg:w-[40%] text-center " 
                         style={{ fontSize:"14px", color:"#9794B5"}}>
          

                          salmanLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit incidunt, voluptas
                         fugit vero aperiam quas.</p>
                          </center>
                        </div>
                       
                    
                     </div>
                       {servicesData.map((services) => (
               
                         <div key={services.id}
                 className="w-full sm:w-full md:w-6/12 lg:w-4/12 flex gap-0.5">
                           <div className="bg-[#F3FFF9] border border-gray-300 rounded-xl p-4 w-full md:w-[90%]"
                            style={{margin:"10px 10px 10px 0px"}}>
                              <div className="m-5">
                                <center>              
                                              
                                                </center> 
                                </div>
                             <p className="font-bold text-2xl">
                              {services.name}
                             
                              
                              </p>
               
                            
               
                             <p className="mt-3">
                               {services.text}
                           </p>
               
                            
               <div>
    <Link href={`/services/${services.slug}`}>        
<button
className="block mx-auto mt-3 font-bold bg-[#088751] hover:bg-[#046b3f]  cursor-pointer text-white px-12 py-2 rounded">
read more
</button></Link>  
               </div>
                           </div>
                         </div>
                       
                       ))}
                    
               </div>
                
               
               </div>
                
                     </div>
                    
                   </div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
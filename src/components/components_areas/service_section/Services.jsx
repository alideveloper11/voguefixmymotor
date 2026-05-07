import servicesData from "@/lib/Areas_data/servicesData";
import Link from "next/link";

export default function Services()
{
                return (
                   <div className="flex flex-wrap w-full text-sm bg-[#F3F4F6]">
               
                    
           
                     <div className="w-full flex flex-wrap">
                        <div className="w-2/24">
                        </div>
                        <div className="w-20/24">
                       
                   
                     <div className="w-full flex flex-wrap justify-center mt-6 ml-6 m6-6">
                        <div className="w-full text-center text-black">
                       <div className="mt-5">
                        <p className="text-2xl font-bold">Current Solutions of Your Modern Problems</p>
                         <center><p className=" w-full md:w-[60%]  lg:w-[40%] text-center " 
                         style={{ fontSize:"14px", color:"#9794B5"}}>
          

                          salmanLorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit incidunt, voluptas
                         fugit vero aperiam quas.</p>
                          </center>
                        </div>
                       
                    
                     </div>
                       {servicesData.map((services) => (
               
                         <div key={services.id}
                 className="w-full sm:w-full md:w-6/12 lg:w-4/12 flex gap-0.5">
                           <div className="bg-white border border-[#059669]  rounded-xl p-4 w-full md:w-[90%]"
                            style={{margin:"10px 10px 10px 0px"}}>
                              <div className="m-5">
                               
                                </div>
                             <p className="font-bold text-2xl">
                              {services.name}
                             
                              
                              </p>
               
                            
               
                             <p className="mt-3">
                               {services.text}
                           </p>
               
                             <Link href={`/services/${services.slug}`}>        
                          <button className="border mt-3  px-4 py-1 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"  
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"150px"}}>
                           read more
                            </button></Link>  
               
                           </div>
                           
                         </div>
                       
                       ))}
                    
               </div>
                <div className="w-full text-center text-black py-5">
               
                        <div className="w-24/24">
                        
  <Link href="/services#services">
                        <button className="border  px-4 py-2 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"  
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"250px"}}>
                           View All Services
                           </button></Link>
                        </div> 
                       </div>
               
               </div>
                
                     </div>
                    
                   </div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
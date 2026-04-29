import servicesData from "@/lib/servicesData";
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
                           <div className="bg-[#F3FFF9] border border-gray-300 rounded-xl p-4 w-full md:w-[90%]"
                            style={{margin:"10px 10px 10px 0px"}}>
                              <div className="m-5">
                                <center>              
                                               <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.0968 28.194C11.4092 28.194 6.72153 28.194 2.0339 28.194C1.80491 28.194 1.57296 28.194 1.34299 28.1704C0.169434 28.0608 -0.302357 27.2702 0.198057 26.2013C0.632341 25.2784 1.10611 24.3793 1.56605 23.4663C3.73747 19.1675 5.9089 14.8694 8.08032 10.572C8.14743 10.4407 8.21751 10.3094 8.29549 10.1841C8.84229 9.30762 9.7306 9.18424 10.4304 9.94029C10.9239 10.4693 11.3414 11.0635 11.7816 11.637C14.0188 14.5605 16.256 17.4853 18.4933 20.4115C19.4704 21.6847 20.7012 21.7538 21.8491 20.6089C22.4186 20.0404 22.9753 19.457 23.5517 18.8935C24.591 17.8768 25.7705 17.938 26.6193 19.1234C28.3229 21.5021 29.984 23.9124 31.6531 26.3148C31.7835 26.5033 31.8834 26.7111 31.9492 26.9307C32.111 27.4824 31.8821 27.9266 31.3224 28.0736C30.9715 28.1576 30.6113 28.1965 30.2505 28.1891C25.5353 28.197 20.8173 28.1987 16.0968 28.194Z" fill="#D4D2E3"/>
                                                <path d="M26.6094 4.63907C26.6082 5.55661 26.3346 6.45313 25.8233 7.21498C25.3119 7.97683 24.5859 8.56969 23.7372 8.9184C22.8885 9.26712 21.9554 9.35598 21.0562 9.17373C20.1569 8.99148 19.332 8.54632 18.6861 7.89468C18.0401 7.24305 17.6022 6.41429 17.4278 5.51347C17.2535 4.61265 17.3505 3.68034 17.7066 2.83474C18.0628 1.98914 18.662 1.26832 19.4283 0.76368C20.1946 0.259035 21.0934 -0.00671187 22.011 0.000128819C23.2327 0.0156548 24.3995 0.510655 25.2597 1.37842C26.1199 2.24619 26.6046 3.41722 26.6094 4.63907Z" fill="#D4D2E3"/>
                                  
                                                </svg>
                                                </center> 
                                </div>
                             <p className="font-bold text-2xl">
                              {services.name}
                             
                              
                              </p>
               
                            
               
                             <p className="mt-3">
                               {services.text}
                           </p>
               
                            
               
                           </div>
                         </div>
                       
                       ))}
                    
               </div>
                <div className="w-full text-center text-black">
               
                        <div className="w-24/24">
                        <button className="border  px-4 py-2 rounded mb-2 bg-[#059669] hover:bg-[#0b5a41]"  
                        style={{ fontSize:"14px", color:"white", fontWeight:"bold" , width:"250px"}}>
                           View All Services
                           </button>
                        </div> 
                       </div>
               
               </div>
                
                     </div>
                    
                   </div>
                 );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
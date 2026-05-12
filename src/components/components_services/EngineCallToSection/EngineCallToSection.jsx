"use client";
import { motion } from "framer-motion";

export default function EngineCallToSection()
{
        return(
            
                            <motion.div initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
                             id="engin_call_to_section" className="flex flex-wrap w-full " style={{ height: "450px" }}>
                                 <div className="w-full sm:w-24/24 md:w-12/24 lg:w-12/24 flex items-center justify-center">
                                 <div style={{width:"90%"}} className=" md:ml-15 md:mr-5  items-center justify-center">
                                        <h1 className="text-left  text-white font-bold" style={{fontSize:"30px"}}>
                                        Engine Problems? <br />
                                        Fix Them Properly
                                        </h1>
                                        
                                        <p  className="text-left text-white  " style={{fontSize:"12px"}} >
                                                Is your car losing power, overheating,
                                                 or making unusual engine noises? 
                                                 Delaying engine diagnostics can cause
                                                  internal damage and increase repair costs.
                                                   So book your diagnostics right now.</p>
                                                   </div>
                                 </div>
                                 <div className="w-full sm:w-24/24 md:w-12/24 lg:w-12/24 flex items-center justify-center">
                                 <div style={{backgroundColor:"black", width:"90%", borderRadius:"10px"}} className="md:mr-15" >
                                 <div className="flex border rounded overflow-hidden max-w-xl" style={{borderColor:"#FFCB05", margin:"20px"}}>
                                       
                                        <button className="bg-blue-900 text-white px-4 items-center justify-center ">
                                        <div><img src="/Vector.svg" alt="flag"  className="mt-2"/></div>
                                        <div>UK</div>
                                        </button>


                                        <input
                                        type="text"
                                        placeholder="Enter Registration"
                                        className="flex-1 px-4 py-4 outline-none text-white"
                                        style={{ backgroundColor:" rgba(255,255,255,0.32)"}}
                                        />
                                         
  </div>                                       <center><button style={{display:"block", background: "radial-gradient(53.6% 50% at 46.4% 50%, #00BC71 0%, #036F3D 100%) ",width:"90%",  margin:"20px", borderRadius:"10px"}} className="mt-5 mb-5 pt-2 pb-2 text-white text-bold">Get Qoutation</button></center>
</div>
                                 </div>
                                 

                            </motion.div>
                           
        )
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { normalizeRegistration } from "@/lib/registration";

export default function EngineCallToSection({ data }) 
{
         const [regNumber, setRegNumber] = useState("");
         
  const router = useRouter();

  const handleSubmit = () => {
    const normalizedRegistration = normalizeRegistration(regNumber);
    if (!normalizedRegistration) return;

    // redirect with query param
    router.push(`/contact?reg=${encodeURIComponent(normalizedRegistration)}`);
  };
        return(
            
                            <motion.div initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
                             id="engin_call_to_section" className="flex flex-wrap  min-h-[450px]">
                              <div className="py-10 mx-3 lg:mx-13 flex flex-wrap">

                              
                                 <div className="w-full leading-7 tracking-[0.04em] sm:w-24/24 md:w-12/24 lg:w-12/24 flex items-center justify-center">
                                 <div  className="  m-2  items-center justify-center">
                                        <h2 className="text-left leading-10 tracking-[0.04em]  py-2 text-white text-2xl md:text-3xl font-bold">
                                        {data.heading ? data.heading : "Noticing Knocking, Smoke or Power Loss?"}
                                        </h2>

                                        <p  className="text-left py-2 text-white leading-7 tracking-[0.04em] text-[16px] " >
                                            {data.text || "If your Range Rover, BMW, Audi or Land Rover is showing early signs of engine trouble, don't leave it until it becomes a major repair. Our specialists offer same-day diagnostics with a clear, honest quote to follow. Early diagnosis almost always costs less than waiting, and it protects your engine's long-term reliability."}
                                              </p>
                                             </div>
                                 </div>
                                 <div className="w-full sm:w-24/24 md:w-12/24 lg:w-12/24 flex items-center justify-center">
                                 <div style={{backgroundColor:"black", borderRadius:"10px"}} className=" w-full m-2  shadow-[0_0_10px_#4a4a4a]" >
                                 <div className="flex border rounded overflow-hidden my-5 mx-5 max-w-xl" style={{borderColor:"#FFCB05"}}>
                                       
                                        <button className="bg-blue-900 text-white px-4 items-center justify-center ">
                                        <div><img src="/Vector.svg" alt="flag"  className=""/></div>
                                        <div>UK</div>
                                        </button>


                                    <input
  type="text"
  value={regNumber}
  onChange={(e) => {
    setRegNumber(normalizeRegistration(e.target.value));
  }}
  placeholder="Enter Registration"
  className="flex-1 px-4 py-4 outline-none text-white"
  style={{ backgroundColor: "rgba(255,255,255,0.32)" }}
/>
  </div>                                       <center><button  onClick={handleSubmit} style={{width:"90%"}}  className=" cursor-pointer bg-[#059669] hover:bg-[#03855c] mb-5 pt-2 pb-2 text-lg text-white  py-3 font-bold rounded-xl ">Get a Free Quote</button></center>
</div>
                                 </div>
                                 
</div>
                            </motion.div>
                           
        )
}
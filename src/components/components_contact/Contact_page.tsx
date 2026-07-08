"use client"

import Contact_form from "./Contact_form"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Contact(){
     const router = useRouter();
      

    return(

          <div className="flex flex-wrap py-10 leading-7 tracking-[0.04em]  w-full">
            <div className=" mx-2 lg:mx-12 flex flex-wrap">
            <div className="w-full">
                        <div className="mx-7 md:mx-17">
                            <center>
                                <h1 className="font-bold text-2xl md:text-3xl  leading-7 tracking-[0.04em]">
                                    Contact Vogue Fix My Motor — Engine Repair in Grays, Essex
                                </h1>

                                <p className="text-md leading-7 tracking-[0.04em]  text-[#4B5563] text-[16px]">Fill in your details below and our team will get back to you with expert advice and a free quote.</p>
                                </center>
                        </div>
                        </div>
                        <div className="w-full md:w-1/2 flex mt-10 justify-center">
                            <div className="shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)] rounded-2xl" >
  <Contact_form />
                            </div>
                                  

                                                    </div>
                                                      <div className="w-full md:w-1/2">
                                                      <div  className="mx-4  mt-10 " >
                                                            <div>
                                                               <h2 className="font-bold text-lg ">Get in Touch with Us</h2>
                                                               <p className=" text-base leading-7 tracking-[0.015em] text-black font-normal">
                                                                Have a question about your vehicle or want to book a repair? Contact our team at Vogue Fix My Motor in Grays, Essex. We service all makes and models across Essex and surrounding areas.
                                                                </p>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full md:w-1/2 ">
                                                                <div className="m-1">
                                                                <p className="text-[#028D53] underline  font-bold">ADDRESS</p>
                                                                <p className="font-bold">
                                                                <Link href="https://www.google.com/maps/search/?api=1&query=UNIT+1+Hedley+Avenue+Grays+RM20+4EL+UK"
                              target="_blank"
                              rel="noopener noreferrer">Unit 1D Hedley Ave
                                                                  Grays RM20 4EL
                                                                  United Kingdom</Link></p>
                                                                   </div>                                                      
                                                                </div>
                                                                <div className="w-full md:w-1/2">
                                                                <div className="m-2">
                                                                <p className="text-[#028D53] underline  font-bold">CONTACT</p>
                                                                <p className="text-[#90B99F]  text-[12px] font-bold">PHONE:</p>
                                                                
                                                                <p className=" font-bold"><Link href="tel:+01375531355">
                                                                01375 531355
                                                                </Link>
                                                                </p>
                                                                 <p className="text-[#90B99F]  text-[12px] font-bold">EMAIL:</p>
                                                                
                                                                <p className=" flex font-bold text-sm md:text-xs lg:text-sm ">  <Link href="mailto:sales@voguetechnics.co.uk">
                                                                sales@voguetechnics.co.uk
                                                                </Link>
                                                                </p>
                                                                </div>
                                                                </div>
                                                            </div>
                                                               <div className="w-full">
                                                               <div className="m-2">
                                                                <p className="text-[#028D53] underline pt-1 font-bold">OPENING HOURS</p>
                                                                        <div className=" font-bold">
                                                                            Monday - Friday:  
                                                                            <span className="text-[20px] inline">
                                                                                 9:00 AM - 6:00 PM
                                                                            </span>
                                                                            </div>
                                                                            <div className=" font-bold">
                                                                            Saturday: 
                                                                            <span className="text-[20px] inline">
                                                                                 7:00 AM - 1:00 PM
                                                                            </span>
                                                                            </div>

                                                                             <div className=" font-bold">
                                                                            Sunday: 
                                                                            <span className="text-[red] inline">
                                                                                 Closed
                                                                            </span>
                                                                            </div>
                                                                </div>
                                                                </div>
                                                               <div className=" w-full mt-4">
                                       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.840526322696!2d0.29315567556610106!3d51.47451701310638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7a2859bba33%3A0xd64a87b00877a1d!2sVogue%20Technics!5e1!3m2!1sen!2s!4v1778063921624!5m2!1sen!2s"
  width="100%"
  height="260"
  style={{ border: "0", borderRadius:"10px" }}
  loading="lazy"
></iframe>

</div>
                                                         
                                                     </div></div>
             
              </div>
                       
          </div>
    )
}
"use client"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import Contact_form from "./Contact_form"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Contact(){
     const router = useRouter();
      

    return(

          <div className="flex relative py-5  lg:py-15 bg-white flex-wrap  leading-7 tracking-[0.04em]  w-full">

            <div className=" relative mx-5 lg:mx-15  bg-[#f2f2f2] px-5  pb-5   rounded-xl shadow-[0_0_5px_#7c7d7d] lg:mx-12 flex flex-wrap">
            
                        <div className="w-full md:w-1/2 flex flex-wrap px-2  justify-center">
                        <div className="w-full">
                  <div className="w-full pb-5">
                            <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold mt-5 font-serif text-black pb-[20px]">Get In <span className="text-[#059669]">Touch</span></h1>
                       <h1 className=" w-full  leading-7 tracking-[0.04em] mt-3 ">
                        Contact Vogue Fix My Motor for Expert Engine Repairs in Grays, Essex. Fill in the form below for professional advice and a free, no-obligation quote from our experienced team.
                        </h1>
                        </div>
                        </div>
                            <div className=" shadow-[0_0_5px_#7c7d7d] px-5 bg-white  lg:mr-5 rounded-2xl" >
  <Contact_form />
                            </div>
                                  

                                                    </div>
                                                      <div className="w-full flex flex-wrap  md:w-1/2 px-2 ">
                                                      <div  className=" p-4 mt-5 px-7 w-full lg:px-3 lg:mx-4 bg-[url('/51445d42-1fc6-4c67-a0c5-efad007bb5c2.png')] bg-cover bg-center bg-no-repeat  rounded-xl shadow-[0_0_5px_#7c7d7d] " >

                                                        <div className='flex flex-wrape items-center '><VerifiedUserIcon style={{fontSize:"100px" }} className='text-[#059669]' />
                                                                <div>
                                                                    <h1 className='font-serif text-xl font-bold'>Trusted Experts</h1>
                                                                    <p>Professional service you can rely on</p>
                                                                </div> 
                                                                </div>
                                                            <div>
                                                               <h2 className="font-bold mt-5 text-lg ">Get in Touch with Us</h2>
                                                               <p className=" text-base leading-7 tracking-[0.015em] text-black font-normal">
                                                                Have a question about your vehicle or want to book a repair? Contact our team at Vogue Fix My Motor in Grays, Essex. We service all makes and models across Essex and surrounding areas.
                                                                </p>
                                                            </div>
                                                            </div>
                                                            <div  className="p-4 mt-5  px-7 lg:px-3 w-full lg:mx-4 bg-[white]  rounded-xl shadow-[0_0_5px_#7c7d7d] " >

                                                            <div className="flex flex-wrap ">
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
                                                                <p className="text-[#028D53]  text-[12px] font-bold">PHONE:</p>
                                                                
                                                                <p className=" font-bold"><Link href="tel:+01375531355">
                                                                01375 531355
                                                                </Link>
                                                                </p>
                                                                 <p className="text-[#028D53]  text-[12px] font-bold">EMAIL:</p>
                                                                
                                                                <p className=" flex break-all font-bold text-sm md:text-xs lg:text-sm ">  <Link href="mailto:sales@voguetechnics.co.uk">
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
                                                               <div className=" w-full h-full mt-4">
                                       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1918.840526322696!2d0.29315567556610106!3d51.47451701310638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7a2859bba33%3A0xd64a87b00877a1d!2sVogue%20Technics!5e1!3m2!1sen!2s!4v1778063921624!5m2!1sen!2s"
  width="100%"
  height="300"
  style={{ border: "0", borderRadius:"10px" }}
  loading="lazy"
></iframe>

</div>
                                                         
                                                     </div></div>
             
              </div>
                       
          </div>
    )
}
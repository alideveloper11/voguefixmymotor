
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Footer(){
    return(
        <div className="flex flex-wrap w-full bg-black " style={{fontSize:"14px"}}>
            
            <div className="w-2/24">
            </div>
            <div className="w-20/24">
                <div className="flex flex-wrap w-full mt-5">
                     <div className="w-full sm:w-24/24 md:w-12/24 lg:w-6/24  mt-5">
                        <img src="/logo.svg" alt="Logo" />
                        <p className="text-white mt-8" style={{fontFamily:"arial"}}>
                            Feel Free to call us in working hours Mon 
                            -Fri (8:00 -- 16:00). Our team will be
                            happy to help answer your queries
                        </p>
                        <p className="text-white mt-5">
                            <Link href="tel:+01375531355">
                             <PhoneIcon style={{color:"#059669", fontSize:"20px"}} /> 01375531355
                            </Link>
                        </p>
                        <p className="mt-10 text-black mb-5">
                                <span className="ml-3 text-center items-center" style={{padding:"11px 8px",backgroundColor:"#028D53", borderRadius:"50%"}}><FacebookIcon/></span>
                                <span className="ml-3 text-center items-center" style={{padding:"11px 8px",backgroundColor:"#028D53", borderRadius:"50%"}}><InstagramIcon /></span>
                                <span className="ml-3 text-center items-center" style={{padding:"11px 8px",backgroundColor:"#028D53", borderRadius:"50%"}}><LinkedInIcon /></span>
                                <span className="ml-3 text-center items-center" style={{padding:"11px 8px",backgroundColor:"#028D53", borderRadius:"50%"}}><TwitterIcon/></span> 

                                 
                                 
                                     
                                   
                                    

                        </p>
                       


                    </div>
                    <div className="w-full sm:w-23/24 md:w-11/24 lg:w-5/24 ml-5  mt-5">
                        <p className="text-white font-sans text-shadow-2xs " style={{ fontWeight:"bold" ,fontSize:"18px"}}>Company</p>
                        <div className="text-white">
                        <ul className="list-none mt-8">
                       <Link href="/"><li>Home</li></Link> 
                        <Link href="/about"><li  className="mt-4">About Us</li></Link>
                        <Link href="/services"><li  className="mt-4">Services</li></Link>
                        <Link href="/blog"><li  className="mt-4">Blogs</li></Link>
                        </ul>
                        </div>
                    </div>  
                    <div className="w-full sm:w-24/24 md:w-12/24 lg:w-6/24  mt-5">
                         <p className="text-white font-sans text-shadow-2xs " style={{ fontWeight:"bold" ,fontSize:"18px"}}>Help</p>
                        <div className="text-white">
                        <ul className="list-none mt-8">
                        <li>Customer Support</li>
                        <li  className="mt-4">How It Works</li>
                        <li  className="mt-4">Terms & Conditions</li>
                        <li  className="mt-4">Privacy Policy</li>
                        </ul>
                        </div>
                    </div>  
                    <div className="w-full sm:w-24/24 md:w-12/24 lg:w-6/24  mt-5">
                        <p className="text-white font-sans text-shadow-2xs " style={{ fontWeight:"bold" ,fontSize:"18px"}}>Work Hours</p>
                        <div className="text-white">
                        <ul className="list-none mt-8">
                        <li><AccessTimeIcon style={{color:"#028D53"}} /><span className="ml-2">9 AM - 6 PM, Monday - Friday 
                           
                            </span>
                        </li>
                        <li><span className="ml-8">
                            7AM - 2 PM , Saturday
                            </span>
                        </li>
                        <li  className="mt-4"><Link href="mailto:enquiry@voguefixmymotor.co.pk"><SendIcon style={{color:"#028D53"}} /><span>enquiry@voguefixmymotor.co.uk</span></Link></li>
                        <li  className="mt-4"><LocationOnIcon style={{color:"#028D53"}} /><p style={{display:"inline"}}>Unit 1D Hedley Ave, Grays RM20 4EL United Kingdom</p>
                        </li>
                        </ul>
                        </div>
                    </div>
                </div>
                 <div className="mt-30" style={{height:"3px", backgroundColor:"#1F2937"}}></div>
                 
            <div className="flex flex-wrap w-full bg-black " style={{fontSize:"14px"}}>
                  
            <div className="w-full  md:w-12/24 lg:w-12/24">
                        <div className="mt-10 mb-10">
                            <p className=" text-white">
                                Copyright © 2026 voguefixmymotor
                            </p>
                        </div>
                    </div>
           

                 <div className="w-full  md:w-12/24 lg:w-12/24">
                    
                <div className="mt-10 mb-10">
                            <div className=" text-white flex text-center gap-3 md:gap-7 lg:gap-7">
                                <div style={{display:"inline"}}>
                                    Term of use
                                </div>
                                <div style={{display:"inline"}}>
                                    Privacy Policy
                                </div>
                                <div style={{display:"inline"}}>
                                    Cookie Policy
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
             </div>
             </div>
             

    )
}
{/* //w-full sm:w-10/12 md:w-/24 lg:w-5/24 */}
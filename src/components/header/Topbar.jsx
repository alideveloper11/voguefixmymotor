"use client"
import Link from "next/link";


import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Topbar() {
  const largeScreen = useMediaQuery("(min-width:1000px)");

  return (
    <div className="flex flex-wrap w-full text-white items-center" style={{backgroundColor:"#064E3B"}}>
      {largeScreen && (
        <div className="flex flex-wrap w-full h-10 text-white items-center">
      
          <div className="w-4/24 ">
          <Link href="tel:+01375531355">

            <p className="text-center font-bold items-center ml-6"><PhoneIcon style={{color:"#059669", fontSize:"20px"}} /> 01375531355</p>
          </Link>
          </div>
            
          <div className="w-1/24">
          
          <p className="text-center font-bold " style={{color:"#059669"}}>|</p>
          </div>
          <div className="w-10/24 text-center font-bold">
           <Link href="mailto:enquiry@voguefixmymotor.co.pk">
            <p><EmailIcon style={{color:"#059669", fontSize:"20px"}} /> enquiry@voguefixmymotor.co.pk</p>
          </Link>
          </div>

          <div className="w-2/24"></div>
          <div className="w-6/24 text-right">
            {/* <button className=" text-white px-4  rounded-2xl" style={{backgroundColor:"#059669", fontWeight:"700", fontSize:"14px",height:"28px"}}>
                <WhatsAppIcon style={{ fontWeight:"700", color:"white", fontSize:"14px"}} />
            whatsapp
            </button> */}
          </div>
        </div>
      )}

      
      {!largeScreen && (
            <div className="flex flex-wrap w-full h-10 text-white items-center">
                <div className="w-6/24">
                
                 <Link href="tel:+01375531355">
                <p className="text-center font-bold items-center text-[10px]">
                    <PhoneIcon style={{color:"#059669",fontSize:"13px"}} /> 
                    01375531355
                    </p>
                    </Link>
            </div>
                
            
            <div className="w-16/24 text-center font-bold text-[10px]">
            <Link href="mailto:enquiry@voguefixmymotor.co.pk">
                <p><EmailIcon style={{color:"#059669", fontSize:"13px" }} />  
                enquiry@voguefixmymotor.co.pk</p>
                </Link>
            </div>

            <div className="w-1/24 text-right text-xs">
                {/* <button className=" text-white  rounded-2xl"  style={{height:"20px",backgroundColor:"#059669",fontSize:"10px", padding:"0 7px 0 7px"}}>
                    <WhatsAppIcon style={{color:"white", fontSize:"10px"}} /> whatsapp</button> */}
            </div>
            </div>
        )}

    </div>
  );
}

"use client";
import Link from "next/link";

import servicesData from "@/lib/services_data/servicesData";

import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
 
  Menu,
  MenuItem,

  Box,
  Button,

} from "@mui/material";



export default function Large_screen_menus(){
    
      const [anchorProducts, setAnchorProducts] = useState(null);
        const handleCloseMenus = () => {
          setAnchorProducts(null);
          
        };
        
 
    return(
     
    <div className="flex flex-wrap w-full items-center  ">
         
              <div className="w-1/24">
              </div>
              <div className="w-5/24">
              <Link href="/">
                    <img src="/logo.svg" className="w-22" alt="Logo" />
              </Link>    
              </div>
              <div className="w-14/24 text-white">


                          <Box className="menuBox flex gap-3" style={{fontSize:"10px"}}>
                                     <Link href="/"><Button color="inherit" className="menu" style={{fontSize:"13px"}}>Home</Button></Link>
       
       <div
  className="relative py-[6px] menu"
  onMouseEnter={() => setAnchorProducts(true)}
  onMouseLeave={() => setAnchorProducts(false)}
  onClick={handleCloseMenus}
>
   



 <Link href="/services"  color="inherit"
  
  
  onMouseEnter={(e) => setAnchorProducts(e.currentTarget)}
 className="menu text-[13px] flex items-center">
  SERVICES
  <ArrowDropDownIcon />
</Link>


  <div
      className={`
         absolute top-full left-0 
       w-[300px] 
        max-h-[350px] 
        overflow-y-auto 
        rounded-xl 
        bg-[white] 
         
        shadow-lg 
        z-50

        transition-all duration-300 ease-in-out
        ${anchorProducts
  ? "opacity-100 translate-y-0 scale-100"
  : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
}
        `}
       
      
      style={{
    scrollbarWidth: "thin",
    scrollbarColor: "#ccc #ffffff ",
  }}
    >

  {servicesData.map((services) => (
  <div
    key={services.id}
    onClick={handleCloseMenus}
    style={{borderBottom:"1px solid #ccc"}}
    className="px-4 
py-2 
text-[18px]
text-black
hover:bg-[#ccc] 
cursor-pointer 
border-b 
border-[#ccc]
text-left"
  >
    <Link href={`/services/${services.slug}`} className="w-full">
      {services.name}
    </Link>
  </div>
))}
</div>
</div>





                        
                                   <Link href="/areas"> <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Areas</Button></Link>
                                    <Link href="/gallery"> <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Gallery</Button></Link>
                                    <Link href="/about"> <Button color="inherit" className="menu"  style={{ fontSize: "13px", whiteSpace: "nowrap" }}>About Us</Button></Link>
                                  
                                    <Link href="/reviews">  <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Reviews</Button></Link>
                                   <Link href="/blog">  <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Blogs</Button></Link>
                                    </Box>
              </div>
              <div className="w-4/24 text-center">
             <Link href="/contact">  <button id="get_Qoute" className="cursor-pointer">Contact</button></Link>

              </div>
    </div>
    );
}
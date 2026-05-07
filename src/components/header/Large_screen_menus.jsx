
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
    <div className="flex flex-wrap w-full items-center">
          
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
       <Button
  color="inherit"
  className="menu"
  style={{ fontSize: "13px" }}
  onMouseEnter={(e) => setAnchorProducts(e.currentTarget)}

>
  <Link href="/services" className="flex items-center">
    Service
    <ArrowDropDownIcon className="hover:text-[#D3D3D3]" />
  </Link>
</Button>

<Menu
  anchorEl={anchorProducts}
  open={Boolean(anchorProducts)}
  onClose={handleCloseMenus}
  transitionDuration={200}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "left",
  }}
  slotProps={{
    paper: {
      sx: {
        width: 300,
        borderRadius: 3,
        maxHeight: 350,      // ~10 items visible
        overflowY: "auto",   // enables scroll

        // optional scrollbar styling
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#ccc",
          borderRadius: "10px",
        },
      },
      onMouseLeave: handleCloseMenus, // closes when leaving dropdown
    },
  }}
>
  {servicesData.map((services) => (
  <MenuItem
    key={services.id}
    onClick={handleCloseMenus}
    style={{borderBottom:"1px solid #757575"}}
    
  >
    <Link href={`/services/${services.slug}`} className="w-full">
      {services.name}
    </Link>
  </MenuItem>
))}
</Menu>
                        
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
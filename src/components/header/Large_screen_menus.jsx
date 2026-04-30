
"use client";
import Link from "next/link";


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
        
  const productsSub = ["model3", "model4", "model5", "model6"];
    return(
    <div className="flex flex-wrap w-full items-center">
          
              <div className="w-1/24">
              </div>
              <div className="w-5/24">
                    <img src="/logo.svg" className="w-22" alt="Logo" />
                     
              </div>
              <div className="w-14/24 text-white">


                          <Box className="menuBox flex gap-3" style={{fontSize:"10px"}}>
                                     <Link href="/"><Button color="inherit" className="menu" style={{fontSize:"13px"}}>Home</Button></Link>
                                  <Button
  color="inherit"
  endIcon={
    <ArrowDropDownIcon  className="hover:text-[#D3D3D3]" 
      onClick={(e) => setAnchorProducts(e.currentTarget)}
    />
  }
  className="menu"
  style={{ fontSize: "13px" }}
>
  <Link href="/services">Service</Link>
</Button>

<Menu
  anchorEl={anchorProducts}
  open={Boolean(anchorProducts)}
  onClose={handleCloseMenus}
  transitionDuration={300}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
>
  {productsSub.map((item) => (
    <MenuItem key={item} onClick={handleCloseMenus}>
      {item}
    </MenuItem>
  ))}
</Menu>
                        
                                    <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Areas</Button>
                                    <Link href="/gallery"> <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Gallery</Button></Link>
                                    <Button color="inherit" className="menu"  style={{ fontSize: "13px", whiteSpace: "nowrap" }}>About Us</Button>
                                  
                                        <Link href="/reviews">  <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Reviews</Button></Link>
                                    <Button color="inherit" className="menu"  style={{fontSize:"13px"}}>Blogs</Button>
                                    </Box>
              </div>
              <div className="w-4/24 text-center">
              <button id="get_Qoute">Get Quote</button>

              </div>
    </div>
    );
}

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
        
 const productsSub = [
  "Initial Diagnostics",
  "Vehicle Health Check",
  "Visual Inspection",
  "Interim Service",
  "Major Service",
  "Oil Change",
  "Annual Service",
  "Van Repairs and Services",
  "Auto Electrical Services",
  "Hybrid and EV Repairs and Services",
  "Timing Belts",
  "Cam Belts",
  "Wet Belt",
  "All Repairs and Services",
  "Fuel System Cleaning",
  "AdBlue Services",
  "Welding Services",
  "NOx Sensor Repair",
  "Locking Wheel Nut Removal / Replacement",
  "24/7 Vehicle Recovery",
  "Valeting Services",
  "Diagnostics",
  "Water Pump Replacement",
  "General Service",
  "Alternator Replacement",
  "Engine Rebuild",
  "Battery Replacement",
  "Clutch Replacement",
  "Engine Flush",
  "Brake Services",
  "Turbo Replacement",
  "Performance Upgrades",
  "DPF Cleaning Service",
  "MOT Testing",
  "Exhaust Repair",
  "Tyre Replacement",
  "Suspension Service",
  "Wheel Alignment",
  "AC Gas Refill Service",
  "Timing Chain Replacement",
  "Oil Change Service",
  "Head Gasket Repair",
  "Transmission Service"
];
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
  {productsSub.map((item) => (
    <MenuItem
      key={item}
      onClick={handleCloseMenus}
    >
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
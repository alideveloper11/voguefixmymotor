"use client";
import Link from "next/link";

import servicesData from "@/lib/services_data/servicesData";
import { useState } from "react";
import {
  
  IconButton,

  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
 
  Collapse,
  
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { relative } from "path";





export default function Small_screen_menus(){
      const [anchorProducts, setAnchorProducts] = useState(null);


  // Mobile drawer state
  const [openDrawer, setOpenDrawer] = useState(false);

  // Mobile accordion states (IMPORTANT FIX)
  const [openProducts, setOpenProducts] = useState(false);


 



  const handleCloseMenus = () => {
  setAnchorProducts(null);
  setOpenDrawer(false); // ✅ THIS is missing
};
     
    return(
    <div className="flex flex-wrap w-full items-center">
          
              <div className="w-1/24">
              </div>
              <div className="w-5/24">
                <Link href="/">
                    <img src="/logo.svg" className="w-13" alt="Logo" />
                     </Link>
              </div>
              <div className="w-14/24 text-white">


              </div>
              <div className="w-4/24 text-center">
              

        
          <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
             <MenuIcon className="cursor-pointer text-white"/>
          </IconButton>
      

        {/* ================= MOBILE DRAWER ================= */}
        <Drawer
  anchor="top"
  open={openDrawer}
  onClose={() => setOpenDrawer(false)}
  ModalProps={{
    keepMounted: true,
  }}
>
  <Box className="drawer" sx={{ backgroundColor: "black", color: "white"}}>
    <List>

      {/* Home */}
      <Link href="/">
        <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      {/* SERVICE (Accordion) */}
      <ListItem className="hover:bg-gray-800 flex justify-between items-center">

        <Link href="/services" onClick={handleCloseMenus}>
          <ListItemText primary="Service" />
        </Link>

        {/* Toggle icon */}
        <div onClick={() => setOpenProducts(!openProducts)}>
          {openProducts ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </ListItem>

      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List sx={{ pl: 3 }} style={{height:"300px", overflow:"scroll", overflowX: "hidden",}} >
          {servicesData.map((services) => (
            <ListItem
               key={services.id}
              onClick={handleCloseMenus}
              className="hover:bg-gray-800"
              style={{borderBottom:"1px solid #ebe8e8"}}
            ><Link href={`/services/${services.slug}`} className="w-full">
              <ListItemText primary={services.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Collapse>

      {/* Other Items */}
    <Link href="/areas">
      <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
         
        <ListItemText primary="Areas" />
       
      </ListItem>
 </Link>
      <Link href="/gallery">
        <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
          <ListItemText primary="Gallery" />
        </ListItem>
      </Link>
    <Link href="/about"> 
      <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
        <ListItemText primary="About Us" />
      </ListItem>
    </Link>
      <Link href="/reviews">
        <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
          <ListItemText primary="Reviews" />
        </ListItem>
      </Link>
    <Link href="/blog">
      <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
        <ListItemText primary="Blogs" />
      </ListItem>
      </Link>

      {/* Button */}
      <ListItem onClick={handleCloseMenus}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Link href="/contact"> 
          <button id="get_Qoute" className="cursor-pointer" style={{ width: "90%" }}>
            Contact
          </button>
          </Link>
        </div>
        
      </ListItem>

    </List>
  </Box>
</Drawer>
              </div>
    </div>
    );
}
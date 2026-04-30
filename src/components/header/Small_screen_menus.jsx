"use client";
import Link from "next/link";

import { useState } from "react";
import {
  
  IconButton,

  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
 
  Collapse,
  useMediaQuery,
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


  const productsSub = ["model3", "model4", "model5", "model6"];



  const handleCloseMenus = () => {
  setAnchorProducts(null);
  setOpenDrawer(false); // ✅ THIS is missing
};
     
    return(
    <div className="flex flex-wrap w-full items-center">
          
              <div className="w-1/24">
              </div>
              <div className="w-5/24">
                    <img src="/logo.svg" className="w-13" alt="Logo" />
                     
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
          <Box className="drawer" style={{backgroundColor:"black", color:"white"}}>

            <List>

              {/* Home */}
              <Link href="/">
              <ListItem onClick={handleCloseMenus} className="hover:bg-gray-800">
                <ListItemText primary="Home" />
              </ListItem>
              </Link>
              {/* PRODUCTS (Accordion) */}
              <ListItem  className="hover:bg-gray-800">
               <Link href="/services" onClick={handleCloseMenus}><ListItemText primary="Service" /></Link>
                {openProducts ? <ExpandLessIcon  onClick={() => setOpenProducts(!openProducts)} className="hover:text-[#D3D3D3]" /> : <ExpandMoreIcon  onClick={() => setOpenProducts(!openProducts)}  className="hover:text-[#D3D3D3]"  />}
              </ListItem>

              <Collapse in={openProducts} timeout="auto" unmountOnExit>
                <List sx={{ pl: 3 }}>
                  {productsSub.map((item) => (
                    <ListItem  onClick={handleCloseMenus} className="hover:bg-gray-800"  key={item}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>

              {/* About */}
              <ListItem  onClick={handleCloseMenus} className="hover:bg-gray-800" >
                <ListItemText primary="Areas" />
              </ListItem>

              {/* Gallery */}
              <Link href="/gallery"> 
              <ListItem   onClick={handleCloseMenus} className="hover:bg-gray-800">
                <ListItemText primary="Gallery" />
              </ListItem>
              </Link>

                <ListItem  onClick={handleCloseMenus} className="hover:bg-gray-800">
                <ListItemText primary="About Us" />
              </ListItem>
                     <Link href="/reviews"> 
                <ListItem  onClick={handleCloseMenus} className="hover:bg-gray-800">
                <ListItemText primary="Reviews" />
              </ListItem>
                    </Link>
                <ListItem  onClick={handleCloseMenus} className="hover:bg-gray-800">
                <ListItemText primary="Blogs" />
              </ListItem>

              <ListItem   onClick={handleCloseMenus} >
                <div className="text-center" style={{width:"100%"}}>
               <button id="get_Qoute" style={{width:"90%"}}>Get Quote</button>
               </div>
              </ListItem>
            </List>

          </Box>
        </Drawer>
              </div>
    </div>
    );
}
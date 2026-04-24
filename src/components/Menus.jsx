"use client";

import Large_screen_menus from "./Large_screen_menus";
import Small_screen_menus from "./Small_screen_menus";
import { useMediaQuery } from "@mui/material";

export default function Menus() {
  const largeScreen = useMediaQuery("(min-width:1000px)");

  return (
    <div className="flex flex-wrap w-full bg-black p-2">
      <div className="w-full text-center">
        {largeScreen ? <Large_screen_menus /> : <Small_screen_menus />}
      </div>
    </div>
  );
}
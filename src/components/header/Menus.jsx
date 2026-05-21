"use client";

import { useEffect, useRef, useState } from "react";
import Large_screen_menus from "./Large_screen_menus";
import Small_screen_menus from "./Small_screen_menus";

export default function Menus() {
  const [fixed, setFixed] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const menuOffsetTop = menuRef.current.offsetTop;

    const handleScroll = () => {
      setFixed(window.scrollY >= menuOffsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={menuRef}></div>

      <div
        className={`w-full bg-black z-50 ${
          fixed ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <div className="w-full text-center p-2">
          <div className="hidden lg:block">
            <Large_screen_menus />
          </div>

          <div className="block lg:hidden">
            <Small_screen_menus />
          </div>
        </div>
      </div>
    </>
  );
}
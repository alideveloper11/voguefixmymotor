"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import saleParts from "@/lib/SaleParts";
import { motion } from "framer-motion";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SaleParts() {
  const sliderRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    // LEFT BUTTON
    setShowLeft(scrollLeft > 5);

    // RIGHT BUTTON
    setShowRight(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    // INITIAL CHECK (IMPORTANT)
    checkScroll();

    // LISTEN SCROLL
    el.addEventListener("scroll", checkScroll);

    // ALSO HANDLE RESIZE (IMPORTANT for iPad)
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollLeftFn = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRightFn = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-10  overflow-hidden"
    >
      <h2 className="text-center text-3xl font-bold mb-10">
        TOP PARTS FOR SALE
      </h2>

      <div className="flex items-center gap-2 px-3">

        {/* LEFT BUTTON */}
        <div className="w-14 md:w-10 flex justify-center">
          {showLeft && (
            <button
              onClick={scrollLeftFn}
              className="
              w-10 h-10 md:w-12 md:h-12
              bg-[#088751]
              text-white
              rounded-full
              flex items-center justify-center
              shadow
              "
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
          )}
        </div>

        {/* SCROLL AREA */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="
          flex
          gap-4
          overflow-x-auto
          overflow-y-hidden
          scroll-smooth
          snap-x
          snap-mandatory
          w-full
          no-scrollbar
          "
        >
          {saleParts.map((part) => (
            <div
              key={part.id}
              className="
              snap-start
              min-w-[90%]
              sm:min-w-[40%]
              lg:min-w-[30%]
              xl:min-w-[23.7%]

              bg-white
              border border-[#059669]
              rounded-lg
              shadow-md
              p-5
              "
            >
              <div className="flex justify-center">
                <Image
                  src={part.image}
                  alt={part.name}
                  width={180}
                  height={140}
                />
              </div>

              <h3 className="font-bold mt-5">{part.name}</h3>

              <p className="text-sm text-gray-500 mt-2">
                {part.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <div className="w-10 flex justify-center">
          {showRight && (
            <button
              onClick={scrollRightFn}
              className="
              w-10 h-10 md:w-12 md:h-12
              bg-[#088751]
              text-white
              rounded-full
              flex items-center justify-center
              shadow
              "
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
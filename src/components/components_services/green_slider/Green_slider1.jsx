"use client";
import slides from "@/lib/services_data/green_slider1";

import { useEffect, useState } from "react";



export default function Green_slider1() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-12/24 text-left text-white" style={{background:"linear-gradient(127.87deg, #000000 -0.59%, #16A34A 86.16%)"}}>
                <div className=" m-10 md:m-20 min-h-[250px] md:min-h-[300px]">
                        <h1 className="text-2xl md:text-3xl font-bold">{slides[current].title}</h1>
                        <p className="mt-10">
                             {slides[current].text}
                        </p>
                        <div className="mt-5">
                            {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 mr-2 h-2 rounded-full transition-all duration-1000 ${
                current === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
                        </div>
                </div>
            </div>
            <div className="w-full md:w-12/24">
                <div  style={{width:"100%", height:"100%"}}>
                    <img src="/vogue fix my motor image 20.jpg" style={{width:"100%", height:"100%"}} alt="slider_section_image" />
                </div>
            </div>
        </div>
  );
}
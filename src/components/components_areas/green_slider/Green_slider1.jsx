"use client";
import slides from "@/lib/Areas_data/green_slider1";

import { useEffect, useState } from "react";



export default function Green_slider1() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

        <div className="flex w-full flex-wrap ">
           <div className="w-full md:w-12/24">
                <div  style={{width:"100%", height:"650px"}}>
                    <img src="/slider_section_image.jpg"  className="w-full object-cover" style={{width:"100%", height:"100%"}} alt="slider_section_image" />
                </div>
            </div>
            <div className="w-full md:w-12/24 text-left text-white h-[650px]" style={{background:"linear-gradient(127.87deg, #000000 -0.59%, #16A34A 86.16%)"}}>
                <div className=" m-10 mb-0 md:ml-20 md:mr-20 md:mr-20 ">
                        <h1 className="text-2xl md:text-3xl font-bold">{slides[current].title}</h1>
                        <p className="mt-10 overflow-hidden  h-[410px]">
                             {slides[current].text}
                             ....
                        </p>
                        
                </div>
                <div className="mt-5 m-10 mb-0 md:ml-20 md:mr-20 md:mr-20">
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
  );
}
"use client";

import { useEffect, useState } from "react";

export default function Green_slider1({ slides,  image }) {

  const [current, setCurrent] = useState(0);

  const safeSlides = slides || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [safeSlides.length]);

  if (safeSlides.length === 0) return null;

  return (

        <div className="flex w-full flex-wrap bg-white text-black" style={{colorScheme:"light"}}>
             <div className="w-full relative md:w-12/24 text-justify text-white h-[650px]" style={{background:"linear-gradient(127.87deg, #000000 -0.59%, #16A34A 86.16%)"}}>
                <div className=" m-5 lg:mx-15 relative h-[560px] mt-5 overflow-hidden leading-7 tracking-[0.04em] ">
                  {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${current === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      <h1 className="text-2xl md:text-3xl text-left font-bold">{slide.title}</h1>
             
                      <p className=" mt-5 ">
                        {slide.text}
                        
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mx-5 absolute bottom-[40px]  lg:mx-15">
                            {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 mx-1 h-2 rounded-full transition-all duration-1000 ${
                current === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
                        </div>
            </div>
            <div className="w-full md:w-12/24">
                <div  style={{width:"100%", height:"650px"}}>
                    <img src={image}   className="w-full object-cover" style={{width:"100%", height:"100%"}} alt="slider_section_image" />
                </div>
            </div>
        </div>
  );
}
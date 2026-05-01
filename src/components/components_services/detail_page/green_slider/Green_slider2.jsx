"use client";

import { useEffect, useState } from "react";

export default function Green_slider1({ slides,  image }) {

  const [current, setCurrent] = useState(0);

  const safeSlides = slides || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeSlides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [safeSlides.length]);

  if (safeSlides.length === 0) return null;

  return (
    <div className="flex flex-wrap">

      <div
        className="w-full md:w-12/24 text-left text-white"
        style={{
          background:
            "linear-gradient(127.87deg, #000000 -0.59%, #16A34A 86.16%)"
        }}
      >
        <div className="m-10 md:m-20 min-h-[250px] md:min-h-[300px]">

          <h1 className="text-2xl md:text-3xl font-bold">
            {safeSlides[current].title}
          </h1>

          <p className="mt-10">
            {safeSlides[current].text}
          </p>

          <div className="mt-5">
            {safeSlides.map((_, index) => (
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
        <img src={image} className="w-full h-full" alt="slider" />
      </div>

    </div>
  );
}
"use client";
import images from "@/lib/Top_makes_data";

import { useEffect, useRef } from "react";
import Image from "next/image";



export default function TopMakes() {
  const trackRef = useRef(null);

  useEffect(() => {
  const track = trackRef.current;

  if (!track) return;

  let animationFrame;
  let position = 0;
  const speed = 3;

  const firstSet = track.children.length / 2;
  let singleSetWidth = 0;

  // calculate exact width of first set
  for (let i = 0; i < firstSet; i++) {
    singleSetWidth += track.children[i].offsetWidth + 24; // gap-6 = 24px
  }

  const animate = () => {
    position -= speed;

    if (Math.abs(position) >= singleSetWidth) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    animationFrame = requestAnimationFrame(animate);
  };

  animate();

  return () => cancelAnimationFrame(animationFrame);
}, []);
  return (
    <section className="bg-gray-100 py-16 overflow-hidden">

      <h2 className="text-center text-3xl font-bold mb-12">
        Top Car Makes We Repair in Grays, Essex
      </h2>

      <div className="overflow-hidden w-full">

        <div
          ref={trackRef}
          className="flex w-max gap-6 will-change-transform"
        >

          {/* FIRST SET */}
          {images.map((img) => (
            <div
              key={img.src}
              className="min-w-[256px] bg-white rounded-lg p-5 shadow-md"
            >
              <div className="relative w-full h-[120px]">
                <Image
                  src={img.src}
                  alt={`${img.name} engine repair - Vogue Fix My Motor Grays Essex`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* DUPLICATE SET */}
          {images.map((img) => (
            <div
              key={"dup-" + img.src}
              className="min-w-[256px] bg-white rounded-lg p-5 shadow-md"
            >
              <div className="relative w-full h-[120px]">
                <Image
                  src={img.src}
                  alt={`${img.name} engine repair - Vogue Fix My Motor Grays Essex`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
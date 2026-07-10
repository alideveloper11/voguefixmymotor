"use client";

import { useState } from "react";




function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Latest_videos({LatestVideosData}) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="w-full pb-5 bg-[white] leading-7 tracking-[0.04em] text-black" style={{colorScheme:"light"}}>
 
      <div className="py-5 mx-6 lg:mx-15 max-w-[1728px] px-0">
<div className=""><center>
  <h2 className="font-bold font-bold text-2xl md:text-3xl py-2  ">
    Latest Videos from Vogue Fix My Motor
  </h2>
  <p className="text-[#4B5563] leading-7 tracking-[0.04em] text-[16px] mt-1">See our engine repairs, customer feedback, and workshop updates from our Grays, Essex garage.</p></center>
</div>
        <div className="grid pt-5 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {LatestVideosData.map((video) => {

            const isActive = activeVideo === video.id;

            // IMPORTANT: embed correct format
            const embedUrl = video.link.includes("?")
              ? `${video.link}&autoplay=1&mute=1`
              : `${video.link}?autoplay=1&mute=1`;

            return (
              <div
                key={video.id}
                className="overflow-hidden group shadow-[0_0_10px_#696969] transition-all duration-100 ease-in   
                                 w-full rounded-[10px]  "
              >
                <div className="relative aspect-video ">
                  {/* IF ACTIVE → PLAY VIDEO */}
                  {isActive ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={embedUrl}
                      title={video.name}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      
                    />
                  ) : (
                    <>
                      {/* PURE BLACK SCREEN */}
                      <img
  src={video.thumbnail}
  alt={video.name}
  className="absolute inset-0 h-full w-full object-cover"
/>

                      {/* PLAY BUTTON */}
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full  bg-black  group-hover:bg-[#FF0000] transition-all duration-100 ease-in">
                          <PlayIcon className="font-bold text-xl"/>
                        </span>
                      </button>
                    </>
                  )}

                </div>

                {/* TEXT */}
                <div className="px-5  transition-all duration-100 ease-in py-4 text-center">
                  <p className="font-bold  transition-all duration-500 ease-in  text-[#1a1a18]  ">{video.name}</p>
                  <p className="text-sm  transition-all duration-300 ease-in  text-blue-400   ">{video.date}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
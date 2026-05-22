"use client";

import LatestVideosData from "@/lib/Areas_data/LatestVideosData";


import { useState } from "react";

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Latest_videos() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="w-full bg-[#F3F4F6] ">
 
      <div className="py-5 mx-6 md:mx-15 max-w-[1728px] px-0">
<div className=""><center>
  <h2 className="font-bold text-[25px] md:text-[30px] ">
    Latest Videos from Vogue Fix My Motor
  </h2>
  <p className="text-[#4B5563] text-sm mt-1">Watch our latest engine repairs, customer feedback, and workshop updates from our Grays, Essex garage.</p></center>
</div>
        <div className="grid mt-5 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {LatestVideosData.map((video) => {

            const isActive = activeVideo === video.id;

            // IMPORTANT: embed correct format
            const embedUrl = video.link.includes("?")
              ? `${video.link}&autoplay=1&mute=1`
              : `${video.link}?autoplay=1&mute=1`;

            return (
              <div
                key={video.id}
                className="overflow-hidden w-full rounded-[10px] bg-white shadow-sm"
              >

                <div className="relative aspect-video bg-black">

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
                      <div className="absolute inset-0 bg-black"></div>

                      {/* PLAY BUTTON */}
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition shadow-lg">
                          <PlayIcon />
                        </span>
                      </button>
                    </>
                  )}

                </div>

                {/* TEXT */}
                <div className="px-5 py-4 text-center">
                  <p className="font-bold text-gray-900">{video.name}</p>
                  <p className="text-sm text-blue-400">{video.date}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
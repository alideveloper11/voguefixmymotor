
import LatestVideos from "@/components/latest_videos/Latest_videos";

import fs from "fs";
import path from "path";

import LatestVideosData from "@/lib/Gallery_data/LatestVideosData";
export const metadata = {
  title: "Workshop Gallery | Vogue Fix My Motor | Engine Repair Grays, Essex",
  description: "Browse the Vogue Fix My Motor workshop gallery — see our engine repair work, customer vehicles, and garage facilities in Grays, Essex. Trusted engine specialists serving Essex.",
};

export default function Gallery() {
    
  const imagesDir = path.join(process.cwd(), "public/gallery_images");

  // 2. folder read
  const files = fs.readdirSync(imagesDir);
  const images = files.map((file) => `/gallery_images/${file}`);
  return (
    <div className="flex flex-wrap w-full">
                        <div className="w-full flex flex-wrap h-[400px] items-center justify-center leading-7 tracking-[0.04em] " id="second_hero_section">
                          <div className=" text-center w-[80%] text-justify lg:text-center md:w-[70%] lg:w-[60%]">
                            <h1 className="text-white font-bold text-2xl md:text-3xl leading-7 tracking-[0.04em]">Workshop Gallery — Vogue Fix My Motor, Grays Essex</h1>
                            <p className="text-white text-md md:text-lg mt-2  leading-7 tracking-[0.04em]">Take a look inside our engine repair workshop in Grays, Essex. We service all makes and models across Essex and surrounding areas.</p>
                          </div>
                        </div>
                        <div className="w-full  md:mx-10">
                               <div className="grid  md:grid-cols-3 gap-4 p-5">

                                    {images.map((img, i) => (
                                        <img
                                        key={i}
                                        src={img}
                                        alt={`Engine repair work at Vogue Fix My Motor workshop, Grays Essex — photo ${i + 1}`}
                                        className="w-full h-100 md:h-80 object-cover rounded"
                                        />
                                    ))}
    </div>
                        </div>
                                                <div className="w-full text-center"><LatestVideos LatestVideosData={LatestVideosData} /></div>
                        </div>
  );
}




  // 1. images folder ka path



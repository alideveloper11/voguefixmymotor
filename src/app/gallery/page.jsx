
import LatestVideos from "@/components/components_gallery/latest_videos/Latest_videos";

import fs from "fs";
import path from "path";

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
                        <div className="w-full mx-5 md:mx-11">
                          <center>
                                  <h1 className="mt-5 text-2xl font-bold">Workshop Gallery — Vogue Fix My Motor, Grays Essex</h1>
                                  <p className="text-[#4B5563] mx-5 text-sm">Take a look inside our engine repair workshop in Grays, Essex. We service all makes and models across Essex and surrounding areas.</p>
                                </center>
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
                                                <div className="w-full text-center"><LatestVideos /></div>
                        </div>
  );
}




  // 1. images folder ka path



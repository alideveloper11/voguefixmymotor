
import LatestVideos from "@/components/components_gallery/latest_videos/Latest_videos";

import fs from "fs";
import path from "path";

export default function Gallery() {
    
  const imagesDir = path.join(process.cwd(), "public/gallery_images");

  // 2. folder read
  const files = fs.readdirSync(imagesDir);
  const images = files.map((file) => `/gallery_images/${file}`);
  return (
    <div className="flex flex-wrap w-full">
                        <div className="w-full">
                          <center>
                                  <h1 className="mt-5 text-2xl font-bold">Workshop & Gallery</h1>
                                  <p className="text-[#4B5563] text-sm">We provide specialist engine services and vehicle recovery in all surrounding areas.</p>
                                </center>
                               <div className="grid  md:grid-cols-3 gap-4 p-5">
                                
                                    {images.map((img, i) => (
                                        <img
                                        key={i}
                                        src={img}
                                        alt={`image-${i}`}
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



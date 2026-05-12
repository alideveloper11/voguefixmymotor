"use client";


import latestVideos from "@/lib/Reviews_data/LatestVideosData";

import { motion } from "framer-motion";
export default function Latest_videos() {
  return (
      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
   >
    <div className="mt-5"><center> 
  <h1 className="font-bold text-[25px] md:text-[30px] ">
    Latest Videos
  </h1>
  <p>check what is going on in the garage</p></center> 
</div>
      <div className="w-full flex flex-wrap mt-5 ">

        {latestVideos.map((videos) => (
          <div key={videos.id} className="w-full md:w-12/24 lg:w-8/24 mb-5 ">

            <div
              className="shadow-[0_4px_20px_rgba(255,255,255,0.3)] bg-white justify-center items-center"
            >
<center>
              <iframe 
                style={{ borderRadius: "10px" }}
                src={videos.link}
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <p className=" font-bold text-[17px] w-[300]">
                {videos.name}
              </p>

              <p className="text-[#90A1B9] text-[12px]">
                {videos.date}
              </p>
</center>
            </div>

          </div>
        ))}

      </div>

    </motion.div>
  );
}